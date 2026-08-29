#!/usr/bin/env python3
"""Python stand-in for qa-ladr.mjs (same invariants). Prefer the .mjs when node is available."""
import json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LONG_OK = {
    "characterizations", "characterization", "diagonalizability",
    "triangularizable", "multiplicativity", "simultaneously", "orthonormality",
}
SMASH = re.compile(r"[a-z]{16,}")
HYPHEN = re.compile(r"[a-z]- [a-z]")
CJK = re.compile(r"[\u4e00-\u9fff]")
BLEED = re.compile(r"unfortunately has become standard", re.I)
BAD_BODY = re.compile(r"\b(Proof|For example|Exercises|Linear Algebra Done Right)\b")
V2_BAD = re.compile(r"dim\s*V\(2\)|\(dim\s*V\)2|dim\s*𝑉\(2\)|\(dim\s*𝑉\)2")
GARBAGE = re.compile(r"vm = 0 is a1|F\) = span\(1, z,")

MATH_MAP = str.maketrans({
    "𝑉": "V", "𝐕": "V", "𝐅": "F", "𝐹": "F", "𝐑": "R",
    "𝐂": "C", "𝑎": "a", "𝑏": "b", "𝑖": "i", "𝑥": "x", "𝑧": "z",
    "𝑚": "m", "𝑛": "n", "𝑒": "e", "𝑣": "v", "𝑢": "u", "𝑘": "k",
    "𝛽": "β", "ℳ": "M", "𝑆": "S", "𝑈": "U", "𝑊": "W", "𝑇": "T",
    "∩": "∩",
})


def norm(s: str) -> str:
    t = re.sub(r"<[^>]+>", "", s or "")
    t = t.translate(MATH_MAP)
    t = re.sub(r"\s+", " ", t).strip()
    return t


def compact(s: str) -> str:
    t = norm(s).lower()
    t = re.sub(r"\s*([=+\-×^_])\s*", r"\1", t)
    t = t.replace(" ", "")
    return t


def load_records(target: Path):
    if target.suffix == ".json":
        return json.loads(target.read_text()), "json"
    text = target.read_text()
    # linear-data.js
    start = text.find("{")
    data = json.loads(text[start:].rstrip().rstrip(";"))
    recs = []
    for e in data.get("entries", []):
        recs.append({
            "id": e["id"], "kind": e["kind"],
            "chapter": int(str(e["chapter"]).replace("ch", "")),
            "title_en": e.get("name_en", ""),
            "body": e.get("body") or [],
            "note": e.get("note"),
        })
    return recs, "js"


def blob(r):
    title = r.get("title_en") or r.get("title") or r.get("name_en") or ""
    note = r.get("note")
    if isinstance(note, dict):
        note = note.get("en") or ""
    note = note or ""
    body = " ".join((p.get("text") or p.get("en") or "") for p in r.get("body") or [])
    return title, body, note


def main():
    target = Path(sys.argv[1] if len(sys.argv) > 1 else Path(__file__).with_name("ladr-boxes.json"))
    goldens = json.loads(Path(__file__).with_name("golden-ladr.json").read_text())
    skipped = json.loads(Path(__file__).with_name("ladr-skipped.json").read_text()) if Path(__file__).with_name("ladr-skipped.json").exists() else {"en": []}
    old_ids = json.loads(Path(__file__).with_name("old-linear-ids.json").read_text()) if Path(__file__).with_name("old-linear-ids.json").exists() else []
    recs, source = load_records(target)
    errors = []
    by_ch = {}
    for r in recs:
        by_ch.setdefault(int(r["chapter"]), []).append(r["id"])
    sk_by = {}
    for s in skipped.get("en") or []:
        sk_by.setdefault(int(s["id"].split(".")[0]), []).append(f"{s['id']} ({s['reason']})")
    print("ch | boxes | first id | last id | skipped (example / eq-only)")
    for ch in range(1, 10):
        ids = by_ch.get(ch, [])
        first, last = (ids[0], ids[-1]) if ids else ("-", "-")
        print(f"{ch} | {len(ids)} | {first} | {last} | {', '.join(sk_by.get(ch, []))}")
        if not ids:
            errors.append(f"chapter {ch} has 0 boxes")
    last9 = by_ch.get(9, ["0.0"])[-1]
    if float(last9) < 9.80:
        errors.append(f"chapter 9 last box id {last9} < 9.80")
    for ch in (6, 7, 8):
        if len(by_ch.get(ch, [])) < 20:
            errors.append(f"chapter {ch} is thin")

    have = {r["id"] for r in recs}
    skipset = {s["id"] for s in skipped.get("en") or []}
    deleted = []
    for oid in old_ids:
        if oid in have:
            continue
        if oid in skipset:
            deleted.append(oid)
        else:
            errors.append(f"old linear-data.js id {oid} missing and not skipped")

    for r in recs:
        title, body, note = blob(r)
        en = f"{title} {body} {note}"
        if CJK.search(title) or CJK.search(body) or (note and CJK.search(str(note))):
            errors.append(f"{r['id']} CJK in English fields")
        for m in SMASH.findall(en.lower()):
            if m not in LONG_OK:
                errors.append(f"{r['id']} smash token {m}")
        if len(en) > 50:
            letters = len(re.findall(r"[A-Za-z]", en))
            spaces = len(re.findall(r"\s", en))
            if letters and spaces / letters < 0.12:
                errors.append(f"{r['id']} smash density")
        if HYPHEN.search(en) or "prod- uct" in en or "sec- ond" in en:
            errors.append(f"{r['id']} hyphen glue")
        if body.strip() and title.strip() and norm(body).lower() == norm(title).lower():
            errors.append(f"{r['id']} body === title")
        if len(norm(body)) < 8 and "=" not in body:
            errors.append(f"{r['id']} body too short")
        if BAD_BODY.search(body):
            errors.append(f"{r['id']} Proof/For example/Exercises in body")
        if BLEED.search(en):
            errors.append(f"{r['id']} sidebar bleed")
        if re.search(r"([abcdn0𝑎𝑏𝑐𝑑])_i\b|[i𝑖]_2\b", en):
            errors.append(f"{r['id']} b_i / i_2")
        if V2_BAD.search(en) or V2_BAD.search(norm(en)):
            errors.append(f"{r['id']} dim V(2)/(dim V)2")
        for p in r.get("body") or []:
            if p.get("t") != "formula":
                continue
            t = p.get("text") or p.get("en") or ""
            if t.count("(") != t.count(")"):
                errors.append(f"{r['id']} formula unbalanced")
            if t.endswith(",") or t.endswith("，"):
                errors.append(f"{r['id']} formula ends with comma")
            if re.search(r"\b(is|if the)\b", t, re.I):
                errors.append(f"{r['id']} formula English is/if the")
            if GARBAGE.search(t):
                errors.append(f"{r['id']} garbage formula")

    by = {r["id"]: r for r in recs}
    for gid, g in goldens.items():
        for nid in g.get("noCard") or []:
            if nid in by:
                errors.append(f"should not have card {nid}")
        r = by.get(gid)
        if not r:
            errors.append(f"missing golden {gid}")
            continue
        if g.get("kind") and r["kind"] != g["kind"]:
            errors.append(f"{gid} kind")
        title, body, note = blob(r)
        note_s = None if r.get("note") in (None, "", {}) else (note if isinstance(note, str) else (note or ""))
        if isinstance(r.get("note"), dict) and not (r["note"].get("en") or r["note"].get("zh")):
            note_s = None
        all_ = norm(f"{title} {body} {note_s or ''}")
        all_c = compact(all_)
        if "note" in g and g["note"] is None and note_s:
            errors.append(f"{gid} note should be null")
        if g.get("noteIncludes") and g["noteIncludes"].lower() not in (note_s or "").lower():
            errors.append(f"{gid} note missing")
        for f in g.get("forbid") or []:
            if f.lower() in all_.lower():
                errors.append(f"{gid} forbid {f}")
        for inc in g.get("includes") or []:
            if compact(inc) not in all_c:
                errors.append(f"{gid} missing {inc}")
        if g.get("bodyIncludes") and compact(g["bodyIncludes"]) not in compact(body):
            errors.append(f"{gid} body missing")
        if g.get("bodyOnlyIncludes") and compact(g["bodyOnlyIncludes"]) not in compact(body):
            errors.append(f"{gid} bodyOnlyIncludes")
        if g.get("minBullets"):
            n = sum(1 for p in r.get("body") or [] if p.get("t") == "bullet")
            if n < g["minBullets"]:
                errors.append(f"{gid} bullets {n}")
        if g.get("hasFormula") and not any(p.get("t") == "formula" for p in r.get("body") or []):
            errors.append(f"{gid} missing formula")
        if g.get("hasFormulaEq"):
            if not any(str(p.get("eq")) == str(g["hasFormulaEq"]) for p in r.get("body") or []):
                errors.append(f"{gid} missing eq {g['hasFormulaEq']}")
        if g.get("titleIncludes") and compact(g["titleIncludes"]) not in compact(title) and compact(g["titleIncludes"]) not in all_c:
            errors.append(f"{gid} titleIncludes")
        for spec in g.get("body") or []:
            hit = any(
                (not spec.get("t") or p.get("t") == spec["t"])
                and compact(spec["includes"]) in compact(p.get("text") or p.get("en") or "")
                for p in r.get("body") or []
            )
            if not hit:
                errors.append(f"{gid} body part {spec}")

    if deleted:
        print("\nDeleted fake ids (example / eq-only, were in old linear-data.js):")
        print("  " + ", ".join(deleted))
    if errors:
        print(f"\nQA FAIL ({len(errors)}) on {target.name}")
        for e in errors:
            print(" -", e)
        sys.exit(1)
    print(f"\nQA OK on {target.name} ({len(recs)} boxes)")


if __name__ == "__main__":
    main()
