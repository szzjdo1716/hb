#!/usr/bin/env python3
"""Extract yellow definition/notation and blue result boxes from LADR 4e.

Uses PDF drawing geometry (fill colors + rects), not raw text order.
Main column is LEFT; grey callouts are RIGHT and never stored as body.
"""

from __future__ import annotations

import json
import re
import sys
from collections import defaultdict
from dataclasses import dataclass, field
from pathlib import Path

import fitz

ROOT = Path(__file__).resolve().parents[1]
EN_PDF = ROOT / "books" / "LADR4e.pdf"
ZH_PDF = ROOT / "books" / "LADR4eChinese.pdf"
OUT_EN = Path(__file__).with_name("ladr-boxes.json")
OUT_ZH = Path(__file__).with_name("ladr-boxes-zh.json")
OUT_SKIP = Path(__file__).with_name("ladr-skipped.json")

CHAPTERS_EN = {
    1: (15, 40),
    2: (41, 64),
    3: (65, 132),
    4: (133, 145),
    5: (146, 194),
    6: (195, 240),
    7: (241, 310),
    8: (311, 345),
    9: (346, 396),
}
CHAPTERS_ZH = {
    1: (15, 35),
    2: (36, 56),
    3: (57, 113),
    4: (114, 124),
    5: (125, 164),
    6: (165, 203),
    7: (204, 261),
    8: (262, 290),
    9: (291, 333),
}

ID_RE = re.compile(r"^(\d{1,2})\.(\d{1,3})$")
ID_IN_TEXT = re.compile(r"(\d{1,2}\.\d{1,3})")
FOOTER_RE = re.compile(
    r"(Linear Algebra Done Right|线性代数应该这样学|Sheldon Axler|吴俊达)",
    re.I,
)
NOTE_REJECT_RE = re.compile(
    r"^(proof|for example|example\s*:|exercises|linear algebra done right|"
    r"证明|例如|例\s*[:：]|习题|转下页|接上页)",
    re.I,
)
SIDEBAR_BLEED = "unfortunately has become standard"

MATH_FONTS = ("pagella", "latinmodern", "termesmath", "texgyrepagella", "lmroman", "lmmath")
TEXT_FONTS = ("termes-regula", "termes-italic", "heros", "sourcehan", "noto", "simsun", "song")


def round_rgb(fill):
    if not fill:
        return None
    return tuple(round(c, 3) for c in fill)


def is_math_font(font: str) -> bool:
    f = (font or "").lower()
    return any(k in f for k in MATH_FONTS)


def is_text_font(font: str) -> bool:
    f = (font or "").lower()
    return any(k in f for k in TEXT_FONTS)


def is_latin_letter(ch: str) -> bool:
    return bool(ch) and ("A" <= ch <= "Z" or "a" <= ch <= "z")


def is_cjk(ch: str) -> bool:
    return bool(ch) and "\u4e00" <= ch <= "\u9fff"


def is_math_letter(ch: str, font: str) -> bool:
    if not ch:
        return False
    o = ord(ch)
    if 0x1D400 <= o <= 0x1D7FF:
        return True
    if ch in "𝐹𝐹𝐅𝐑𝐂𝐕𝒫ℒℳℂℝℕℤℚ𝛼𝛽𝛾𝜆𝜇𝜈𝜋𝜎𝜏𝜙𝜓𝜔𝑒𝑣𝑤𝑢𝑥𝑦𝑧𝑎𝑏𝑐𝑑𝑖𝑗𝑘𝑚𝑛𝑝𝑇𝑆𝑈𝑊𝑁":
        return True
    if is_math_font(font) and (ch.isalpha() or 0x0370 <= o <= 0x03FF):
        return True
    return False


# ---------------------------------------------------------------------------
# Color classification
# ---------------------------------------------------------------------------

def classify_en(fill):
    rgb = round_rgb(fill)
    if not rgb:
        return None
    r, g, b = rgb
    if rgb == (1.0, 0.969, 0.6):
        return "YHEAD"
    if rgb == (1.0, 0.981, 0.76):
        return "YBODY"
    if rgb == (0.63, 0.758, 0.901):
        return "BHEAD"
    if rgb == (0.831, 0.885, 0.955):
        return "BBODY"
    if rgb == (0.924, 0.927, 0.93):
        return "GREY"
    if rgb == (0.25, 0.25, 0.25):
        return "OUTLINE"
    # tolerance fallback
    if r > 0.97 and 0.95 < g < 0.975 and 0.55 < b < 0.66:
        return "YHEAD"
    if r > 0.97 and 0.975 <= g <= 0.99 and 0.72 < b < 0.80:
        return "YBODY"
    if 0.58 < r < 0.70 and 0.72 < g < 0.80 and 0.86 < b < 0.94:
        return "BHEAD"
    if 0.78 < r < 0.88 and 0.85 < g < 0.92 and 0.93 < b < 0.98:
        return "BBODY"
    if 0.90 < r < 0.95 and 0.90 < g < 0.95 and 0.90 < b < 0.95 and abs(r - g) < 0.02:
        return "GREY"
    return None


def classify_zh(fill):
    rgb = round_rgb(fill)
    if not rgb:
        return None
    r, g, b = rgb
    # green definition/notation
    if rgb == (0.0, 0.651, 0.322):
        return "YHEAD"  # border / header accent
    if rgb == (0.95, 0.983, 0.966):
        return "YBODY"
    # orange result
    if rgb == (1.0, 0.525, 0.094):
        return "BHEAD"
    if rgb == (1.0, 0.976, 0.955):
        return "BBODY"
    if rgb == (0.925, 0.925, 0.925):
        return "GREY"
    if rgb == (1.0, 1.0, 1.0):
        return "WHITE"
    if r < 0.15 and 0.55 < g < 0.75 and 0.25 < b < 0.40:
        return "YHEAD"
    if r > 0.90 and g > 0.96 and 0.93 < b < 0.99:
        return "YBODY"
    if r > 0.95 and 0.45 < g < 0.60 and b < 0.20:
        return "BHEAD"
    if r > 0.95 and 0.95 < g < 0.99 and 0.92 < b < 0.98:
        return "BBODY"
    if 0.90 < r < 0.95 and abs(r - g) < 0.02 and abs(g - b) < 0.02:
        return "GREY"
    return None


# ---------------------------------------------------------------------------
# Geometry helpers
# ---------------------------------------------------------------------------

@dataclass
class BoxGeom:
    page: int
    kind_color: str  # definition | notation | result (filled later)
    header: fitz.Rect
    body: fitz.Rect
    clip: fitz.Rect
    color_family: str  # yellow | blue


def near(a, b, tol=3.0):
    return abs(a - b) < tol


def find_boxes_en(page: fitz.Page) -> list[BoxGeom]:
    drawings = page.get_drawings()
    headers, bodies, greys = [], [], []
    for d in drawings:
        kind = classify_en(d.get("fill"))
        r = fitz.Rect(d["rect"])
        if r.width < 200 or r.height < 10:
            continue
        if kind in ("YHEAD", "BHEAD") and 12 <= r.height <= 36:
            headers.append((kind, r))
        elif kind in ("YBODY", "BBODY") and r.height >= 12:
            bodies.append((kind, r))
        elif kind == "GREY":
            greys.append(r)

    boxes = []
    used_body = set()
    for hkind, hr in sorted(headers, key=lambda x: x[1].y0):
        family = "yellow" if hkind == "YHEAD" else "blue"
        want = "YBODY" if family == "yellow" else "BBODY"
        body = None
        for i, (bkind, br) in enumerate(bodies):
            if i in used_body:
                continue
            if bkind != want:
                continue
            if near(br.x0, hr.x0, 4) and hr.y0 - 2 <= br.y0 <= hr.y1 + 10:
                body = br
                used_body.add(i)
                break
        if body is None:
            clip = fitz.Rect(hr)
        else:
            clip = fitz.Rect(hr.x0, hr.y0, max(hr.x1, body.x1), body.y1)
        # skip tiny decorative / standing-assumption handled later
        boxes.append(
            BoxGeom(
                page=page.number + 1,
                kind_color="result" if family == "blue" else "definition",
                header=hr,
                body=body or hr,
                clip=clip,
                color_family=family,
            )
        )
    return boxes


def find_boxes_zh(page: fitz.Page) -> list[BoxGeom]:
    drawings = page.get_drawings()
    headers, bodies = [], []
    for d in drawings:
        kind = classify_zh(d.get("fill"))
        r = fitz.Rect(d["rect"])
        if r.width < 250:
            continue
        # white or colored header bars ~16-18pt
        if kind in ("YHEAD", "BHEAD", "WHITE") and 12 <= r.height <= 28 and r.width > 350:
            headers.append((kind, r))
        elif kind in ("YBODY", "BBODY") and r.height >= 16 and r.width > 350:
            bodies.append((kind, r))

    # Prefer WHITE/colored header overlay (narrower, sits on top of the title)
    headers.sort(key=lambda x: (x[1].y0, -x[1].width))
    unique_headers = []
    for kind, r in headers:
        if any(abs(r.y0 - u[1].y0) < 4 for u in unique_headers):
            # keep the shorter title bar
            for i, u in enumerate(unique_headers):
                if abs(r.y0 - u[1].y0) < 4 and r.height <= u[1].height + 0.5:
                    unique_headers[i] = (kind, r)
            continue
        unique_headers.append((kind, r))

    boxes = []
    used_body = set()
    for hkind, hr in sorted(unique_headers, key=lambda x: x[1].y0):
        # pair with the large body whose y0 is just below or overlapping header
        body = None
        family = None
        for i, (bkind, br) in enumerate(bodies):
            if i in used_body:
                continue
            if br.y0 <= hr.y1 + 12 and br.y1 > hr.y0 + 8 and near(br.x0, hr.x0, 20):
                body = br
                family = "yellow" if bkind == "YBODY" else "blue"
                used_body.add(i)
                break
        if body is None:
            # header-only (title bar); skip if no body
            continue
        if family is None:
            family = "yellow" if hkind in ("YHEAD", "WHITE") else "blue"
        clip = fitz.Rect(
            min(hr.x0, body.x0),
            min(hr.y0, body.y0),
            max(hr.x1, body.x1),
            body.y1,
        )
        boxes.append(
            BoxGeom(
                page=page.number + 1,
                kind_color="result" if family == "blue" else "definition",
                header=hr,
                body=body,
                clip=clip,
                color_family=family,
            )
        )

    # Continuation bodies at top of page with no header
    for i, (bkind, br) in enumerate(bodies):
        if i in used_body:
            continue
        if br.y0 < 55:
            family = "yellow" if bkind == "YBODY" else "blue"
            boxes.append(
                BoxGeom(
                    page=page.number + 1,
                    kind_color="result" if family == "blue" else "definition",
                    header=fitz.Rect(br.x0, br.y0, br.x1, br.y0 + 1),
                    body=br,
                    clip=br,
                    color_family=family,
                )
            )
    boxes.sort(key=lambda b: b.clip.y0)
    return boxes


def grey_rects(page: fitz.Page, lang: str) -> list[fitz.Rect]:
    out = []
    clf = classify_en if lang == "en" else classify_zh
    for d in page.get_drawings():
        if clf(d.get("fill")) == "GREY":
            r = fitz.Rect(d["rect"])
            if r.width > 40 and r.height > 10:
                out.append(r)
    return out


# ---------------------------------------------------------------------------
# Character extraction + script reconstruction
# ---------------------------------------------------------------------------

@dataclass
class Ch:
    c: str
    x0: float
    x1: float
    y0: float
    y1: float
    ox: float
    oy: float
    size: float
    font: str


def chars_in_clip(page: fitz.Page, clip: fitz.Rect, exclude: list[fitz.Rect] | None = None) -> list[Ch]:
    raw = page.get_text("rawdict", clip=clip, flags=fitz.TEXT_PRESERVE_WHITESPACE)
    out = []
    exclude = exclude or []
    for block in raw.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                font = span.get("font") or ""
                size = float(span.get("size") or 0)
                origin = span.get("origin") or (0, 0)
                for ch in span.get("chars", []):
                    c = ch.get("c") or ""
                    if c in ("\u0000", "\ufeff"):
                        continue
                    bb = ch.get("bbox") or span.get("bbox")
                    x0, y0, x1, y1 = bb
                    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
                    if any(r.x0 <= mx <= r.x1 and r.y0 <= my <= r.y1 for r in exclude):
                        continue
                    out.append(
                        Ch(
                            c=c,
                            x0=x0,
                            x1=x1,
                            y0=y0,
                            y1=y1,
                            ox=x0,
                            oy=float(origin[1]),
                            size=size,
                            font=font,
                        )
                    )
    out.sort(key=lambda x: (x.y0, x.x0))
    return out


def cluster_rows(chars: list[Ch]) -> list[list[Ch]]:
    if not chars:
        return []
    large = [c for c in chars if c.size >= 8.0 and c.c.strip()]
    if not large:
        large = chars
    large_sorted = sorted(large, key=lambda c: (c.oy, c.x0))
    row_baselines: list[float] = []
    for c in large_sorted:
        placed = False
        for i, b in enumerate(row_baselines):
            if abs(c.oy - b) <= 4.2:
                # running average
                row_baselines[i] = (b * 3 + c.oy) / 4
                placed = True
                break
        if not placed:
            row_baselines.append(c.oy)
    row_baselines.sort()
    rows: list[list[Ch]] = [[] for _ in row_baselines]
    for c in chars:
        # assign to nearest baseline
        best, bestd = 0, 1e9
        for i, b in enumerate(row_baselines):
            d = abs(c.oy - b)
            if d < bestd:
                best, bestd = i, d
        rows[best].append(c)
    for r in rows:
        r.sort(key=lambda c: c.x0)
    return [r for r in rows if any(ch.c.strip() for ch in r)]


def script_wrap(content: str, kind: str) -> str:
    if not content:
        return ""
    # never wrap whitespace-only
    content = content.replace(" ", "")
    if kind == "sup":
        if content == "(2)":
            return "^{(2)}"
        if len(content) == 1:
            return f"^{content}"
        return "^{" + content + "}"
    # sub
    if len(content) == 1:
        return f"_{content}"
    return "_{" + content + "}"


def gap_needs_space(prev: Ch, curr: Ch, gap: float, prev_was_script: bool) -> bool:
    if curr.c in ".,;:)]}?！？。，、；：" or prev.c in "([{/":
        return False
    if curr.c == "(":
        # English "pair (a, b)" needs a space; math f(x) / 𝒫_m(F) does not.
        prev_lat = is_latin_letter(prev.c) and not is_math_font(prev.font)
        if prev_lat:
            return True
        if prev_was_script:
            return False
        return False
    if curr.c == "{":
        return True
    if prev.c in "=≠≈≡∈→↦+⊕⊗" and curr.c in "({":
        return True
    if curr.c in "([{/" or prev.c in "([{/":
        return False
    if prev_was_script:
        # space after a script if the next char is a new word
        if is_latin_letter(curr.c) and not is_math_font(curr.font):
            return True
        if is_cjk(curr.c):
            return False
        if gap > 2.2 and curr.c not in ".,;:)]}?！？。，、；：([{":
            return True
        return False
    if prev.c == " " or curr.c == " ":
        return False
    if curr.c in "-−–—":
        return False
    if prev.c in "-−–—":
        return False

    prev_math = is_math_letter(prev.c, prev.font) or (is_math_font(prev.font) and prev.c not in " •·")
    curr_math = is_math_letter(curr.c, curr.font) or (is_math_font(curr.font) and curr.c not in " •·")
    prev_lat = is_latin_letter(prev.c) and not is_math_font(prev.font)
    curr_lat = is_latin_letter(curr.c) and not is_math_font(curr.font)
    prev_cjk = is_cjk(prev.c)
    curr_cjk = is_cjk(curr.c)

    if (prev_math and curr_lat) or (prev_lat and curr_math):
        return True
    if prev_cjk and curr_lat:
        return True
    if prev_lat and curr_cjk:
        return True
    if prev_math and curr_cjk:
        return False
    if gap > 1.7 and not (prev_cjk or curr_cjk):
        return True
    if gap > 2.8:
        return True
    return False


def reconstruct_row(chars: list[Ch]) -> str:
    large = [c for c in chars if c.size >= 8.0]
    baseline = median([c.oy for c in large]) if large else median([c.oy for c in chars])
    med_size = median([c.size for c in large]) if large else median([c.size for c in chars])

    def is_script(ch: Ch) -> str | None:
        if ch.c.strip() == "":
            return None
        small = ch.size < 0.82 * med_size or ch.size < 8.15
        dy = ch.oy - baseline
        if small and dy < -1.15:
            return "sup"
        if small and dy > 1.15:
            return "sub"
        return None

    parts: list[str] = []
    i = 0
    n = len(chars)
    last_regular: Ch | None = None
    while i < n:
        ch = chars[i]
        kind = is_script(ch)
        if kind:
            run = [ch]
            j = i + 1
            cluster_x1 = ch.x1
            while j < n:
                k2 = is_script(chars[j])
                if k2:
                    run.append(chars[j])
                    cluster_x1 = max(cluster_x1, chars[j].x1)
                    j += 1
                    continue
                if not chars[j].c.strip() and chars[j].x0 <= cluster_x1 + 1.5:
                    j += 1
                    continue
                break
            sups = "".join(c.c for c in run if is_script(c) == "sup").replace(" ", "")
            subs = "".join(c.c for c in run if is_script(c) == "sub").replace(" ", "")
            if subs in ("i", "𝑖") and last_regular and last_regular.c in "b𝑏B" and not sups:
                parts.append(subs)
            else:
                if sups:
                    parts.append(script_wrap(sups, "sup"))
                if subs:
                    parts.append(script_wrap(subs, "sub"))
            i = j
            continue
        if not ch.c.strip():
            i += 1
            continue
        if last_regular is not None:
            gap = ch.x0 - last_regular.x1
            after_script = bool(parts and parts[-1].endswith(("}", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "n", "m", ")")))
            after_script = bool(parts and ("^" in parts[-1] or parts[-1].startswith("_")))
            if ch.c in "([{":
                pass  # never space before opening punct
            elif gap_needs_space(last_regular, ch, gap, after_script):
                if not (parts and parts[-1].endswith(" ")):
                    parts.append(" ")
        parts.append(ch.c)
        last_regular = ch
        i += 1
    s = "".join(parts)
    s = s.replace("\u00a0", " ")
    s = re.sub(r"[ \t]+", " ", s)
    return s.strip()


def median(xs: list[float]) -> float:
    ys = sorted(xs)
    n = len(ys)
    if n == 0:
        return 0.0
    if n % 2:
        return ys[n // 2]
    return (ys[n // 2 - 1] + ys[n // 2]) / 2


HYPHEN_KEEP_RIGHT = {
    "dimensional", "independent", "adjoint", "triangular", "defined",
    "empty", "linear", "linearly", "product", "products", "space", "spaces",
    "form", "forms", "map", "maps", "one", "to", "by", "zero",
    "injective", "surjective", "invertible", "diagonalizable",
    "commutative", "associative", "negative", "positive", "definite",
    "adjoint", "preserving", "isomorphic", "dimensional",
}


def glue_hyphens(lines: list[str]) -> list[str]:
    if not lines:
        return []
    out = [lines[0]]
    for line in lines[1:]:
        prev = out[-1]
        if (
            prev
            and prev[-1] in "-‐-"
            and len(prev) >= 2
            and prev[-2].isalpha()
            and line
            and (line[0].islower() or line[0].isalpha())
        ):
            left = re.search(r"[A-Za-z]+$", prev[:-1])
            right = re.match(r"[A-Za-z]+", line.lstrip())
            lw = (left.group().lower() if left else "")
            rw = (right.group().lower() if right else "")
            if rw in HYPHEN_KEEP_RIGHT or (len(lw) >= 4 and len(rw) >= 8):
                out[-1] = prev + line.lstrip()
            else:
                out[-1] = prev[:-1] + line.lstrip()
        else:
            out.append(line)
    return out


def clean_text(s: str) -> str:
    s = s.replace("\u00ad", "")
    s = s.replace("∶", ":")
    s = s.replace("≠", "≠")
    s = s.replace("⩽", "≤").replace("⩾", "≥")
    s = s.replace("∼", "~")
    s = re.sub(r"[ \t]+", " ", s)
    s = s.replace(" .", ".").replace(" ,", ",")
    s = s.replace("( ", "(").replace(" )", ")")
    # collapse space before script markers
    s = re.sub(r" +\^", "^", s)
    s = re.sub(r" +_", "_", s)
    # F ^ {n,n} already handled
    s = s.strip(" \t")
    s = s.replace("♣", "").replace("♡", "").replace("■", "")
    s = s.replace("转下页", "").replace("接上页", "")
    s = re.sub(r"\s+", " ", s)
    return s.strip(" \t|")


HEADER_KIND_RE = re.compile(
    r"^\s*(?:definition|notation|定义|记号)\s*[:：]\s*",
    re.I,
)


def parse_header_rows(rows: list[str], color_family: str) -> tuple[str | None, str, str]:
    """Return (id, kind, title)."""
    blob = " ".join(rows)
    blob = clean_text(blob)
    # id is usually the first token
    ident = None
    kind = "result" if color_family == "blue" else "definition"
    title = blob
    m = re.search(r"\b(\d{1,2}\.\d{1,3})\b", blob)
    if m:
        ident = m.group(1)
        title = (blob[: m.start()] + blob[m.end() :]).strip(" |")
    low = title.lower()
    if re.search(r"^(definition|定义)\s*[:：]", title, re.I):
        kind = "definition"
        title = HEADER_KIND_RE.sub("", title)
    elif re.search(r"^(notation|记号)\s*[:：]", title, re.I):
        kind = "notation"
        title = HEADER_KIND_RE.sub("", title)
    elif "definition:" in low:
        kind = "definition"
        title = re.sub(r"definition\s*:\s*", "", title, flags=re.I).strip()
    elif "notation:" in low:
        kind = "notation"
        title = re.sub(r"notation\s*:\s*", "", title, flags=re.I).strip()
    title = clean_text(title)
    title = re.sub(r"^[:：]\s*", "", title)
    return ident, kind, title


ENGLISH_STOP_IN_FORMULA = re.compile(r"\b(is|if the|such that|for every|for all)\b", re.I)


def row_is_label(chars: list[Ch], text: str) -> bool:
    t = text.strip()
    if not t or len(t) > 42:
        return False
    if re.match(r"^\d{1,2}\.\d{1,3}\b", t):
        return False
    letters = [c for c in chars if c.c.strip() and (c.c.isalpha() or is_cjk(c.c))]
    if not letters:
        return False
    bold = sum(
        1
        for c in letters
        if "bold" in c.font.lower()
        or "termes-bo" in c.font.lower()
        or "hei" in c.font.lower() and "bold" in c.font.lower()
    )
    if bold < 0.7 * len(letters):
        return False
    if re.search(r"[=∈→↦⊕⊗]", t):
        return False
    return True


def row_is_formula(text: str, x0: float, clip_x0: float, has_eq: bool) -> bool:
    t = text.strip()
    if not t or t.startswith("•"):
        return False
    if ENGLISH_STOP_IN_FORMULA.search(t):
        return False
    words = re.findall(r"[A-Za-z]{3,}", t)
    # allow and / or / iff
    words = [w for w in words if w.lower() not in {"and", "or", "iff", "dim", "span", "null", "range"}]
    if len(words) >= 3:
        return False
    mathish = bool(re.search(r"[=∈→↦⊕⊗≤≥≠∞∑∏√⟨⟩∧∨⇔⟺]|[\^_]|\\", t))
    centered = x0 > clip_x0 + 36
    if has_eq and mathish:
        return True
    if centered and mathish and len(t) < 160:
        return True
    if centered and not words and len(t) >= 3:
        return True
    return False


def eq_id_from_row(text: str) -> tuple[str | None, str]:
    m = re.match(r"^(\d{1,2}\.\d{1,3})\s+(.*)$", text.strip())
    if m and (re.search(r"[=∈→↦+\-]", m.group(2)) or not re.search(r"[A-Za-z]{4,}", m.group(2))):
        rest = m.group(2).strip()
        if not rest.lower().startswith(("definition", "notation", "example")):
            return m.group(1), rest
    return None, text


def tidy_formula(text: str) -> str:
    t = clean_text(text).rstrip(" ,;，；").strip()
    return t


def parts_from_body_rows(rows_meta: list[tuple], clip_x0: float) -> list[dict]:
    """rows_meta: list of (x0, text, is_label) for body rows only."""
    parts: list[dict] = []
    para: list[str] = []

    def flush_para():
        nonlocal para
        if not para:
            return
        glued = glue_hyphens(para)
        text = clean_text(" ".join(glued))
        text = re.sub(r"•\s*", "• ", text)
        if text:
            parts.append({"t": "p", "text": text, "eq": None})
        para = []

    def flush_bullet(text: str):
        text = clean_text(text)
        if text:
            parts.append({"t": "bullet", "text": text, "eq": None})

    def take_tuple(item):
        if len(item) == 3:
            return item
        return item[0], item[1], False

    i = 0
    while i < len(rows_meta):
        x0, raw, is_label = take_tuple(rows_meta[i])
        text = raw.strip()
        if not text or FOOTER_RE.search(text):
            i += 1
            continue
        eq, rest = eq_id_from_row(text)
        if eq and row_is_formula(rest, x0, clip_x0, True):
            flush_para()
            parts.append({"t": "formula", "text": tidy_formula(rest), "eq": eq})
            i += 1
            continue
        if row_is_formula(text, x0, clip_x0, False):
            flush_para()
            chunk = [tidy_formula(text)]
            j = i + 1
            while j < len(rows_meta):
                x1, t1, lab1 = take_tuple(rows_meta[j])
                t1s = t1.strip()
                if lab1:
                    break
                if t1s.lower() in {"and", "or"} or row_is_formula(t1s, x1, clip_x0, False):
                    chunk.append(tidy_formula(t1s))
                    j += 1
                    continue
                break
            formula = "    ".join(c for c in chunk if c)
            parts.append({"t": "formula", "text": tidy_formula(formula), "eq": None})
            i = j
            continue
        if is_label:
            flush_para()
            label = text[0].upper() + text[1:] if text else text
            extra = []
            j = i + 1
            while j < len(rows_meta):
                x1, t1, lab1 = take_tuple(rows_meta[j])
                t1s = t1.strip()
                if lab1 or t1s.startswith("•") or FOOTER_RE.search(t1s):
                    break
                if row_is_formula(t1s, x1, clip_x0, False) or eq_id_from_row(t1s)[0]:
                    break
                extra.append(t1s)
                j += 1
            body = clean_text(" ".join(glue_hyphens(extra)))
            flush_bullet((label + ". " + body).strip() if body else label)
            i = j
            continue
        if text.startswith("•"):
            flush_para()
            bullet = text.lstrip("• ").strip()
            extra = []
            j = i + 1
            while j < len(rows_meta):
                x1, t1, lab1 = take_tuple(rows_meta[j])
                t1s = t1.strip()
                if lab1 or t1s.startswith("•") or FOOTER_RE.search(t1s):
                    break
                if row_is_formula(t1s, x1, clip_x0, False) or eq_id_from_row(t1s)[0]:
                    break
                extra.append(t1s)
                j += 1
            full = glue_hyphens([bullet] + extra)
            flush_bullet(" ".join(full))
            i = j
            continue
        para.append(text)
        i += 1
    flush_para()
    # drop empty / title-echo later
    cleaned = []
    for p in parts:
        t = p.get("text") or ""
        t = t.strip()
        if not t:
            continue
        p = dict(p)
        p["text"] = t
        if p["t"] != "formula":
            p["eq"] = None
        cleaned.append(p)
    return cleaned


# ---------------------------------------------------------------------------
# Notes
# ---------------------------------------------------------------------------

REJECT_NOTE_START = re.compile(
    r"^(proof|for example|example\s*:|exercises\b|linear algebra done right|"
    r"证明|例如[,，:]|例\s*[:：]|习题|section\s+\d|chapter\s+\d|"
    r"第\s*\d|standing assumption)",
    re.I,
)


def extract_note(
    page: fitz.Page,
    box: BoxGeom,
    next_y: float,
    lang: str,
    greys: list[fitz.Rect],
) -> str | None:
    y0 = box.clip.y1 + 1.5
    y1 = min(next_y - 2, page.rect.y1 - 32)
    if y1 - y0 < 10:
        return None
    clip = fitz.Rect(box.clip.x0, y0, box.clip.x1, y1)
    chars = chars_in_clip(page, clip, exclude=greys)
    if not chars:
        return None
    rows = cluster_rows(chars)
    texts = [reconstruct_row(r) for r in rows]
    texts = [t for t in texts if t and not FOOTER_RE.search(t)]
    if not texts:
        return None
    # stop at a new numbered label / example / proof
    kept = []
    for t in texts:
        ts = t.strip()
        if REJECT_NOTE_START.search(ts):
            break
        if re.match(r"^\d{1,2}\.\d{1,3}\b", ts):
            break
        if SIDEBAR_BLEED in ts.lower():
            break
        kept.append(ts)
    if not kept:
        return None
    # one paragraph only: stop at a clearly new paragraph (short gap already
    # consumed). If there are 2+ paragraphs separated by a label-like line, drop.
    glued = glue_hyphens(kept)
    # split on blank-ish: if we have a line that looks like a heading, cut
    para_lines = []
    for line in glued:
        if para_lines and re.match(r"^[A-Z][a-z]+(\s+[A-Z][a-z]+)?$", line) and len(line) < 40:
            break
        para_lines.append(line)
    text = clean_text(" ".join(para_lines))
    if not text or len(text) < 8:
        return None
    if REJECT_NOTE_START.search(text):
        return None
    if SIDEBAR_BLEED in text.lower():
        return None
    # two-paragraph continuation (9.3): if we swallowed a second capital start
    # after a full stop and the second sentence starts a new topic, keep only
    # when it is a single tight remark. If > 320 chars and contains two
    # obvious paragraphs, drop — those are section prose, not notes.
    sentences = re.split(r"(?<=[.\.。])\s+", text)
    if len(text) > 380 and len(sentences) >= 3:
        return None
    if text.lower().startswith("with the usual operations"):
        # 9.3 following prose, explicitly not a note
        return None
    if text.lower().startswith("for 𝑇") or text.lower().startswith("for t an operator"):
        return None
    if text.startswith("在通常的函数加法") or text.startswith("对于") and "矩阵" in text[:40]:
        return None
    cut = re.split(
        r"(?i)\b(the next example|the following example|we now |now we )\b",
        text,
        maxsplit=1,
    )[0].strip()
    if cut:
        text = cut
    if not text or len(text) < 8:
        return None
    return text


# ---------------------------------------------------------------------------
# Page labels (for skipped ids)
# ---------------------------------------------------------------------------

def collect_margin_ids(page: fitz.Page, chapter: int) -> list[tuple[str, float, float, str]]:
    """Heros 8.7pt N.N at left margin → (id, x, y, nearby_text)."""
    raw = page.get_text("rawdict")
    found = []
    for block in raw.get("blocks", []):
        if block.get("type") != 0:
            continue
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                font = (span.get("font") or "")
                size = float(span.get("size") or 0)
                if "Heros" not in font and "heros" not in font.lower() and "Hei" not in font:
                    # ZH uses different fonts for numbers; also accept any ~8.5-9.5 at x<50
                    if not (8.2 <= size <= 9.4):
                        continue
                if not (8.2 <= size <= 9.5):
                    continue
                origin = span.get("origin") or (0, 0)
                if origin[0] > 52:
                    continue
                text = "".join(ch.get("c", "") for ch in span.get("chars", []))
                text = text.strip()
                if not ID_RE.match(text):
                    continue
                ch = int(text.split(".")[0])
                if ch != chapter:
                    continue
                y = origin[1]
                nearby = page.get_text(
                    "text",
                    clip=fitz.Rect(origin[0], y - 10, origin[0] + 280, y + 18),
                ).replace("\n", " ")
                found.append((text, origin[0], y, nearby))
    return found


# ---------------------------------------------------------------------------
# Extract one language
# ---------------------------------------------------------------------------

def extract_lang(pdf_path: Path, lang: str) -> tuple[list[dict], list[dict]]:
    doc = fitz.open(pdf_path)
    chapters = CHAPTERS_EN if lang == "en" else CHAPTERS_ZH
    finder = find_boxes_en if lang == "en" else find_boxes_zh
    records: list[dict] = []
    skipped: list[dict] = []
    box_ids: set[str] = set()

    pending_continue: dict | None = None

    for ch, (p0, p1) in chapters.items():
        page_boxes: dict[int, list[BoxGeom]] = {}
        for pn in range(p0, p1 + 1):
            if pn - 1 >= doc.page_count:
                break
            page = doc[pn - 1]
            page_boxes[pn] = finder(page)

        # flatten with next-y
        flat: list[tuple[int, BoxGeom]] = []
        for pn in range(p0, p1 + 1):
            for b in page_boxes.get(pn, []):
                flat.append((pn, b))

        for idx, (pn, box) in enumerate(flat):
            page = doc[pn - 1]
            greys = grey_rects(page, lang)
            header_chars = chars_in_clip(page, box.header, exclude=greys)
            header_rows = [reconstruct_row(r) for r in cluster_rows(header_chars)]
            ident, kind, title = parse_header_rows(header_rows, box.color_family)

            is_continuation = ident is None and box.clip.y0 < 55 and pending_continue is not None
            if ident is None and not is_continuation:
                # standing assumptions or decorative
                blob = " ".join(header_rows).lower()
                if "standing assumption" in blob or "本章" in blob and "假设" in blob:
                    continue
                if pending_continue is not None and box.clip.y0 < 80:
                    is_continuation = True
                else:
                    continue

            body_clip = fitz.Rect(box.body)
            # Body fill starts just below the title bar; never keep the title.
            if box.header.height > 8:
                top = max(body_clip.y0, box.header.y1 - 0.4)
                if top < body_clip.y1 - 4:
                    body_clip = fitz.Rect(body_clip.x0, top, body_clip.x1, body_clip.y1)

            body_chars = chars_in_clip(page, body_clip, exclude=greys)
            body_rows_raw = cluster_rows(body_chars)
            body_meta = []
            for r in body_rows_raw:
                x0 = min(c.x0 for c in r)
                txt = reconstruct_row(r)
                if not txt:
                    continue
                if FOOTER_RE.search(txt):
                    continue
                # skip header echo if a header-sized row leaked in
                if ident and txt.replace(" ", "").startswith(ident.replace(" ", "")) and len(txt) < 80:
                    # might be id+title leaked; skip if it looks like the header
                    if "definition" in txt.lower() or "notation" in txt.lower() or "定义" in txt or "记号" in txt:
                        continue
                    if txt.strip() == ident:
                        continue
                body_meta.append((x0, txt, row_is_label(r, txt)))

            parts = parts_from_body_rows(body_meta, body_clip.x0)

            if is_continuation and pending_continue is not None:
                pending_continue["body"].extend(parts)
                pending_continue["_pages"].append(pn)
                # continue note from last page
                pending_continue = pending_continue
                continue

            if ident is None:
                continue
            major = int(ident.split(".")[0])
            if major != ch:
                continue

            # next box y on this page or page end
            next_y = page.rect.y1 - 28
            for pn2, b2 in flat[idx + 1 :]:
                if pn2 == pn:
                    next_y = b2.clip.y0
                break

            note = extract_note(page, box, next_y, lang, greys)
            rec = {
                "id": ident,
                "kind": kind if box.color_family == "yellow" else "result",
                "chapter": major,
                "title_en" if lang == "en" else "title_zh": title,
                "title": title,
                "body": parts,
                "note": note,
                "_page": pn,
                "_pages": [pn],
            }
            if box.color_family == "blue":
                rec["kind"] = "result"
            records.append(rec)
            box_ids.add(ident)
            pending_continue = rec

        pending_continue = None

        # skipped ids from margin labels
        for pn in range(p0, p1 + 1):
            if pn - 1 >= doc.page_count:
                break
            page = doc[pn - 1]
            for ident, x, y, nearby in collect_margin_ids(page, ch):
                if ident in box_ids:
                    continue
                low = nearby.lower()
                reason = "eq-only"
                if re.search(r"example\s*:", low) or "例：" in nearby or "例:" in nearby or "示例" in nearby:
                    reason = "example"
                skipped.append({"id": ident, "reason": reason, "page": pn, "nearby": nearby[:80]})

    # unique skipped
    seen = set()
    uniq = []
    for s in skipped:
        if s["id"] in box_ids or s["id"] in seen:
            continue
        seen.add(s["id"])
        uniq.append(s)

    # de-duplicate records by id (keep first)
    by_id = {}
    for r in records:
        by_id.setdefault(r["id"], r)
    ordered = sorted(by_id.values(), key=lambda r: (r["chapter"], int(r["id"].split(".")[1])))
    return ordered, uniq


def strip_private(rec: dict, lang: str) -> dict:
    title_key = "title_en" if lang == "en" else "title_zh"
    title = rec.get(title_key) or rec.get("title") or ""
    body = []
    for p in rec.get("body") or []:
        item = {"t": p["t"], "text": p["text"]}
        if p["t"] == "formula":
            item["eq"] = p.get("eq")
        else:
            item["eq"] = None
        # drop title-echo body
        if p["t"] == "p" and clean_text(p["text"]).lower() == clean_text(title).lower():
            continue
        body.append(item)
    out = {
        "id": rec["id"],
        "kind": rec["kind"],
        "chapter": rec["chapter"],
        "title_en": title if lang == "en" else rec.get("title_en", title),
        "body": body,
        "note": rec.get("note"),
    }
    if lang == "zh":
        out = {
            "id": rec["id"],
            "kind": rec["kind"],
            "chapter": rec["chapter"],
            "title_zh": title,
            "body": body,
            "note": rec.get("note"),
        }
    return out


def completeness_table(records: list[dict], skipped: list[dict]) -> str:
    by = defaultdict(list)
    for r in records:
        by[r["chapter"]].append(r["id"])
    sk_by = defaultdict(list)
    for s in skipped:
        ch = int(s["id"].split(".")[0])
        sk_by[ch].append(f"{s['id']} ({s['reason']})")
    lines = []
    lines.append(f"{'ch':<4} {'boxes':<7} {'first':<8} {'last':<8} skipped (example / eq-only)")
    lines.append("-" * 88)
    for ch in range(1, 10):
        ids = by[ch]
        first = ids[0] if ids else "-"
        last = ids[-1] if ids else "-"
        sk = ", ".join(sk_by[ch][:12])
        extra = f" … +{len(sk_by[ch])-12}" if len(sk_by[ch]) > 12 else ""
        lines.append(f"{ch:<4} {len(ids):<7} {first:<8} {last:<8} {sk}{extra}")
    lines.append("")
    lines.append("ALL SKIPPED:")
    for ch in range(1, 10):
        if sk_by[ch]:
            lines.append(f"  ch{ch}: " + ", ".join(sk_by[ch]))
    return "\n".join(lines)


def main():
    if not EN_PDF.exists():
        print(f"missing {EN_PDF}", file=sys.stderr)
        sys.exit(1)
    print("Extracting English…", flush=True)
    en, en_skip = extract_lang(EN_PDF, "en")
    en_out = [strip_private(r, "en") for r in en]
    OUT_EN.write_text(json.dumps(en_out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT_EN} ({len(en_out)} boxes)")

    zh_out = []
    zh_skip = []
    if ZH_PDF.exists():
        print("Extracting Chinese…", flush=True)
        zh, zh_skip = extract_lang(ZH_PDF, "zh")
        zh_out = [strip_private(r, "zh") for r in zh]
        OUT_ZH.write_text(json.dumps(zh_out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"Wrote {OUT_ZH} ({len(zh_out)} boxes)")
    else:
        print("Chinese PDF missing; writing empty zh json")
        OUT_ZH.write_text("[]\n", encoding="utf-8")

    OUT_SKIP.write_text(
        json.dumps({"en": en_skip, "zh": zh_skip}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print("\n=== COMPLETENESS (EN) ===")
    print(completeness_table(en_out, en_skip))
    if zh_out:
        print("\n=== COMPLETENESS (ZH) ===")
        print(completeness_table(zh_out, zh_skip))

    # fail-fast completeness
    by = defaultdict(list)
    for r in en_out:
        by[r["chapter"]].append(r["id"])
    errors = []
    for ch in range(1, 10):
        if len(by[ch]) == 0:
            errors.append(f"chapter {ch} has 0 boxes")
    last9 = by[9][-1] if by[9] else "0.0"
    last_n = float(last9)
    if last_n < 9.80:
        errors.append(f"chapter 9 last box id {last9} < 9.80")
    for ch in (6, 7, 8):
        if len(by[ch]) < 20:
            errors.append(f"chapter {ch} is thin ({len(by[ch])} boxes)")
    if errors:
        print("COMPLETENESS FAIL:", "; ".join(errors), file=sys.stderr)
        sys.exit(1)
    print("\nExtract completeness OK")


if __name__ == "__main__":
    main()
