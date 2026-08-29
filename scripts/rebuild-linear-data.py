#!/usr/bin/env python3
"""Rebuild linear-data.js from ladr-boxes.json + ladr-boxes-zh.json."""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EN = Path(__file__).with_name("ladr-boxes.json")
ZH = Path(__file__).with_name("ladr-boxes-zh.json")
OUT = ROOT / "linear-data.js"

CATEGORIES = [
    {"slug": "ch1", "name_en": "Vector Spaces", "name_zh": "向量空间", "sort_order": 1},
    {
        "slug": "ch2",
        "name_en": "Finite-Dimensional Vector Spaces",
        "name_zh": "有限维向量空间",
        "sort_order": 2,
    },
    {"slug": "ch3", "name_en": "Linear Maps", "name_zh": "线性映射", "sort_order": 3},
    {"slug": "ch4", "name_en": "Polynomials", "name_zh": "多项式", "sort_order": 4},
    {
        "slug": "ch5",
        "name_en": "Eigenvalues and Eigenvectors",
        "name_zh": "特征值和特征向量",
        "sort_order": 5,
    },
    {"slug": "ch6", "name_en": "Inner Product Spaces", "name_zh": "内积空间", "sort_order": 6},
    {
        "slug": "ch7",
        "name_en": "Operators on Inner Product Spaces",
        "name_zh": "内积空间上的算子",
        "sort_order": 7,
    },
    {
        "slug": "ch8",
        "name_en": "Operators on Complex Vector Spaces",
        "name_zh": "复向量空间上的算子",
        "sort_order": 8,
    },
    {
        "slug": "ch9",
        "name_en": "Multilinear Algebra and Determinants",
        "name_zh": "多重线性代数和行列式",
        "sort_order": 9,
    },
]


def flatten(parts):
    texts = []
    for p in parts or []:
        t = p.get("text") or ""
        if t:
            texts.append(t)
    return " ".join(texts)


def merge_parts(en_parts, zh_parts):
    en_parts = list(en_parts or [])
    zh_parts = list(zh_parts or [])
    n = max(len(en_parts), len(zh_parts))
    out = []
    for i in range(n):
        e = en_parts[i] if i < len(en_parts) else None
        z = zh_parts[i] if i < len(zh_parts) else None
        kind = (e or z or {}).get("t") or "p"
        eq = (e or {}).get("eq") or (z or {}).get("eq")
        item = {
            "t": kind,
            "en": (e or {}).get("text") or "",
            "zh": (z or {}).get("text") or "",
        }
        if kind == "formula":
            item["eq"] = eq
        out.append(item)
    return out


def main():
    en = {r["id"]: r for r in json.loads(EN.read_text(encoding="utf-8"))}
    zh = {r["id"]: r for r in json.loads(ZH.read_text(encoding="utf-8"))}
    ids = sorted(en.keys(), key=lambda x: (int(x.split(".")[0]), int(x.split(".")[1])))
    eq_ids = []
    eq_map = {}
    entries = []
    for ident in ids:
        e = en[ident]
        z = zh.get(ident) or {}
        body = merge_parts(e.get("body"), z.get("body"))
        note_en = e.get("note")
        note_zh = z.get("note")
        note = None
        if note_en or note_zh:
            note = {"en": note_en or "", "zh": note_zh or ""}
        for p in body:
            if p.get("t") == "formula" and p.get("eq"):
                eq_ids.append(p["eq"])
                eq_map[p["eq"]] = ident
        ch = int(e["chapter"])
        entries.append(
            {
                "id": ident,
                "kind": e["kind"],
                "chapter": f"ch{ch}",
                "number": ident,
                "name_en": e.get("title_en") or "",
                "name_zh": z.get("title_zh") or e.get("title_en") or "",
                "include": True,
                "body": body,
                "note": note,
                "statement_en": flatten(e.get("body"))
                + ((" " + note_en) if note_en else ""),
                "statement_zh": flatten(z.get("body"))
                + ((" " + note_zh) if note_zh else ""),
            }
        )
    data = {
        "source": {
            "title": "Linear Algebra Done Right",
            "edition": "4",
            "author": "Sheldon Axler",
            "license": "CC BY-NC 4.0",
            "url": "https://linear.axler.net/",
        },
        "categories": CATEGORIES,
        "eq_ids": eq_ids,
        "eq_map": eq_map,
        "entries": entries,
    }
    text = "window.LINEAR_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    OUT.write_text(text, encoding="utf-8")
    print(f"Wrote {OUT} ({len(entries)} entries, {len(eq_ids)} eq numbers)")


if __name__ == "__main__":
    main()
