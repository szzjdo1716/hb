#!/usr/bin/env node
/**
 * QA gate for LADR box JSON and linear-data.js.
 * Exit 1 on failure. Run on ladr-boxes.json THEN on linear-data.js.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const LONG_OK = new Set([
  "characterizations",
  "characterization",
  "diagonalizability",
  "triangularizable",
  "multiplicativity",
  "simultaneously",
  "orthonormality",
  "finite-dimensional".replace("-", ""),
]);

const SMASH = /[a-z]{16,}/g;
const HYPHEN_GLUE = /[a-z]- [a-z]/;
const CJK = /[\u4e00-\u9fff]/;
const BLEED = /unfortunately has become standard/i;
const BAD_BODY = /\b(Proof|For example|Exercises|Linear Algebra Done Right)\b/;
const IMAG_SUB = /([abcdn0𝑎𝑏𝑐𝑑])_i\b|[i𝑖]_2\b/;
const V2_BAD = /dim\s*V\(2\)|\(dim\s*V\)2|dim\s*𝑉\(2\)|\(dim\s*𝑉\)2/;
const GARBAGE_FORMULA = /vm = 0 is a1|F\) = span\(1, z,/;

function fail(msg, bag) {
  bag.push(msg);
}

function stripTags(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function compact(s) {
  return normalizeMath(s)
    .toLowerCase()
    .replace(/\s*([=+\-×^_])\s*/g, "$1")
    .replace(/\s+/g, "");
}

function normalizeMath(s) {
  let t = stripTags(s);
  t = t.replace(/<sup>([^<]*)<\/sup>/gi, (_, x) =>
    x.length === 1 ? `^${x}` : `^{${x}}`
  );
  t = t.replace(/<sub>([^<]*)<\/sub>/gi, (_, x) =>
    x.length === 1 ? `_${x}` : `_{${x}}`
  );
  const pairs = [
    ["𝑉", "V"], ["𝐕", "V"], ["𝐅", "F"], ["𝐹", "F"], ["𝐑", "R"], ["𝐂", "C"],
    ["𝑆", "S"], ["𝑎", "a"], ["𝑏", "b"], ["𝑖", "i"], ["𝑥", "x"], ["𝑧", "z"],
    ["𝑚", "m"], ["𝑛", "n"], ["𝑒", "e"], ["𝑣", "v"], ["𝑢", "u"], ["𝑈", "U"],
    ["𝑊", "W"], ["𝑇", "T"], ["𝑘", "k"], ["𝛽", "β"], ["ℳ", "M"], ["𝒫", "𝒫"],
    ["⋯", "…"], ["⟺", "⇔"], ["𝜆", "λ"], ["𝛼", "α"],
  ];
  for (const [a, b] of pairs) t = t.split(a).join(b);
  t = t.replace(/\s+/g, " ").trim();
  return t;
}

function blobOf(rec) {
  const title = rec.title_en || rec.title_zh || rec.name_en || rec.title || "";
  const note =
    typeof rec.note === "string"
      ? rec.note
      : rec.note && typeof rec.note === "object"
        ? `${rec.note.en || ""} ${rec.note.zh || ""}`
        : "";
  const body = (rec.body || [])
    .map((p) => p.text || p.en || p.zh || "")
    .join(" ");
  return `${title} ${body} ${note}`;
}

function bodyParts(rec) {
  return rec.body || [];
}

function partText(p) {
  return p.text || p.en || "";
}

function loadJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function loadLinearData() {
  const src = fs.readFileSync(path.join(ROOT, "linear-data.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(src, ctx);
  return ctx.window.LINEAR_DATA;
}

function recordsFromTarget(target) {
  if (target.endsWith(".json")) {
    const data = loadJson(target);
    return { records: data, source: "json", raw: data };
  }
  const data = loadLinearData();
  const records = (data.entries || []).map((e) => ({
    id: e.id,
    kind: e.kind,
    chapter: Number(String(e.chapter).replace("ch", "")),
    title_en: e.name_en,
    title_zh: e.name_zh,
    body: e.body,
    note: e.note,
  }));
  return { records, source: "linear-data", raw: data };
}

function completeness(records, errors) {
  const by = new Map();
  for (const r of records) {
    const ch = Number(r.chapter);
    if (!by.has(ch)) by.set(ch, []);
    by.get(ch).push(r.id);
  }
  const lines = ["ch | boxes | first id | last id | skipped (example / eq-only)"];
  let skipFile = {};
  const skipPath = path.join(__dirname, "ladr-skipped.json");
  if (fs.existsSync(skipPath)) {
    skipFile = JSON.parse(fs.readFileSync(skipPath, "utf8"));
  }
  const skipped = skipFile.en || [];
  const skBy = new Map();
  for (const s of skipped) {
    const ch = Number(String(s.id).split(".")[0]);
    if (!skBy.has(ch)) skBy.set(ch, []);
    skBy.get(ch).push(`${s.id} (${s.reason})`);
  }
  for (let ch = 1; ch <= 9; ch++) {
    const ids = by.get(ch) || [];
    const first = ids[0] || "-";
    const last = ids[ids.length - 1] || "-";
    const sk = (skBy.get(ch) || []).join(", ");
    lines.push(`${ch} | ${ids.length} | ${first} | ${last} | ${sk}`);
    if (ids.length === 0) fail(`chapter ${ch} has 0 boxes`, errors);
  }
  const last9 = (by.get(9) || []).slice(-1)[0] || "0.0";
  const lastN = Number(last9);
  if (lastN < 9.8) fail(`chapter 9 last box id ${last9} < 9.80`, errors);
  for (const ch of [6, 7, 8]) {
    const n = (by.get(ch) || []).length;
    if (n < 20) fail(`chapter ${ch} is thin (${n} boxes)`, errors);
  }
  return lines.join("\n");
}

function checkInvariants(records, errors, englishOnly) {
  for (const r of records) {
    const title = r.title_en || r.title || r.name_en || "";
    const note =
      typeof r.note === "string"
        ? r.note
        : r.note && r.note.en
          ? r.note.en
          : "";
    const parts = bodyParts(r);
    const bodyText = parts.map(partText).join(" ");
    const enBlob = `${title} ${bodyText} ${note}`;
    const plain = normalizeMath(enBlob);

    if (englishOnly) {
      if (CJK.test(title) || CJK.test(bodyText) || CJK.test(note)) {
        fail(`${r.id} CJK in English fields`, errors);
      }
    }

    for (const m of plain.toLowerCase().match(SMASH) || []) {
      if (!LONG_OK.has(m) && !m.includes("-")) {
        fail(`${r.id} smash token ${m}`, errors);
      }
    }
    if (enBlob.length > 50) {
      const letters = (enBlob.match(/[A-Za-z\u4e00-\u9fff]/g) || []).length;
      const spaces = (enBlob.match(/\s/g) || []).length;
      if (letters && spaces / letters < 0.12 && /[A-Za-z]/.test(enBlob)) {
        fail(`${r.id} smash density spaces/letters < 0.12`, errors);
      }
    }
    if (HYPHEN_GLUE.test(enBlob) || /prod- uct|sec- ond|sec-unfortunately/.test(enBlob)) {
      fail(`${r.id} hyphen glue`, errors);
    }
    const bodyPlain = normalizeMath(bodyText);
    const titlePlain = normalizeMath(title);
    if (bodyPlain && titlePlain && bodyPlain.toLowerCase() === titlePlain.toLowerCase()) {
      fail(`${r.id} body === title`, errors);
    }
    if (bodyPlain.length < 8 && !bodyPlain.includes("=")) {
      fail(`${r.id} body too short`, errors);
    }
    if (BAD_BODY.test(bodyText)) {
      fail(`${r.id} Proof/For example/Exercises/book title in body`, errors);
    }
    if (BLEED.test(enBlob)) {
      fail(`${r.id} sidebar bleed`, errors);
    }
    if (IMAG_SUB.test(plain) && /a \+ b_i|b_i\b/.test(plain)) {
      fail(`${r.id} b_i as imaginary unit`, errors);
    }
    if (/[i𝑖]_2/.test(enBlob)) {
      fail(`${r.id} i_2 should be i^2`, errors);
    }
    if (V2_BAD.test(plain) || V2_BAD.test(enBlob)) {
      fail(`${r.id} dim V(2) / (dim V)2 — need V^{(2)} and (dim V)^2`, errors);
    }
    for (const p of parts) {
      if (p.t !== "formula") continue;
      const t = partText(p).trim();
      const np = normalizeMath(t);
      const opens = (t.match(/\(/g) || []).length;
      const closes = (t.match(/\)/g) || []).length;
      if (opens !== closes) fail(`${r.id} formula unbalanced ( ) : ${t}`, errors);
      if (/[，,]$/.test(t)) fail(`${r.id} formula ends with comma`, errors);
      if (/\b(is|if the)\b/i.test(t)) fail(`${r.id} formula has English is/if the: ${t}`, errors);
      if (GARBAGE_FORMULA.test(t) || GARBAGE_FORMULA.test(np)) {
        fail(`${r.id} garbage formula ${t}`, errors);
      }
    }
  }
}

function checkGoldens(records, goldens, errors) {
  const by = Object.fromEntries(records.map((r) => [r.id, r]));
  for (const [id, g] of Object.entries(goldens)) {
    if (g.noCard) {
      for (const nid of g.noCard) {
        if (by[nid]) fail(`should not have card ${nid}`, errors);
      }
    }
    const r = by[id];
    if (!r) {
      fail(`missing golden ${id}`, errors);
      continue;
    }
    if (g.kind && r.kind !== g.kind) fail(`${id} kind ${r.kind} != ${g.kind}`, errors);
    const title = normalizeMath(r.title_en || r.title || r.name_en || "");
    const body = bodyParts(r)
      .map((p) => normalizeMath(partText(p)))
      .join(" ");
    const noteRaw =
      r.note == null
        ? null
        : typeof r.note === "string"
          ? r.note
          : r.note.en || r.note.zh || null;
    const note = noteRaw ? normalizeMath(noteRaw) : null;
    const all = normalizeMath(`${title} ${body} ${note || ""}`);

    const allC = compact(all);
    if (g.title) {
      if (!compact(title).includes(compact(g.title)) && !allC.includes(compact(g.title))) {
        fail(`${id} title missing ${g.title} (got ${title})`, errors);
      }
    }
    if (g.titleIncludes && !allC.includes(compact(g.titleIncludes))) {
      fail(`${id} titleIncludes ${g.titleIncludes} (got ${title})`, errors);
    }
    if (Object.prototype.hasOwnProperty.call(g, "note") && g.note === null && note) {
      fail(`${id} note should be null, got: ${note.slice(0, 80)}`, errors);
    }
    if (g.noteIncludes && !(note || "").includes(normalizeMath(g.noteIncludes))) {
      fail(`${id} note missing ${g.noteIncludes}`, errors);
    }
    if (g.forbid) {
      for (const f of g.forbid) {
        if (all.toLowerCase().includes(f.toLowerCase())) {
          fail(`${id} forbid ${f}`, errors);
        }
      }
    }
    const includes = g.includes || [];
    for (const inc of includes) {
      if (!allC.includes(compact(inc))) {
        fail(`${id} missing ${inc}`, errors);
      }
    }
    if (g.bodyIncludes && !compact(body).includes(compact(g.bodyIncludes))) {
      fail(`${id} body missing ${g.bodyIncludes}`, errors);
    }
    if (g.bodyOnlyIncludes) {
      if (!compact(body).includes(compact(g.bodyOnlyIncludes))) {
        fail(`${id} bodyOnlyIncludes ${g.bodyOnlyIncludes} got ${body}`, errors);
      }
      if (bodyParts(r).length > 2) fail(`${id} body should be only the notation sentence`, errors);
    }
    if (g.minBullets) {
      const n = bodyParts(r).filter((p) => p.t === "bullet").length;
      if (n < g.minBullets) fail(`${id} expected >= ${g.minBullets} bullets, got ${n}`, errors);
    }
    if (g.hasFormula && !bodyParts(r).some((p) => p.t === "formula")) {
      fail(`${id} missing formula part`, errors);
    }
    if (g.hasFormulaEq) {
      const hit = bodyParts(r).some(
        (p) => p.t === "formula" && String(p.eq) === String(g.hasFormulaEq)
      );
      if (!hit) fail(`${id} missing formula eq ${g.hasFormulaEq}`, errors);
    }
    if (g.titleNotInBodyTwice) {
      const t = title.toLowerCase();
      const b = body.toLowerCase();
      if (t && b.includes(t) && b.trim() === t.trim()) {
        fail(`${id} body is title twice`, errors);
      }
    }
    if (g.body) {
      for (const spec of g.body) {
        const hit = bodyParts(r).some(
          (p) =>
            (!spec.t || p.t === spec.t) &&
            compact(partText(p)).includes(compact(spec.includes))
        );
        if (!hit) fail(`${id} body part ${spec.t} missing ${spec.includes}`, errors);
      }
    }
  }
}

function checkOldIds(records, errors) {
  const snapPath = path.join(__dirname, "old-linear-ids.json");
  const linearPath = path.join(ROOT, "linear-data.js");
  let old = [];
  if (fs.existsSync(snapPath)) {
    old = JSON.parse(fs.readFileSync(snapPath, "utf8"));
  } else if (fs.existsSync(linearPath)) {
    const src = fs.readFileSync(linearPath, "utf8");
    old = [...src.matchAll(/"id": "(\d+\.\d+)"/g)].map((m) => m[1]);
  }
  const have = new Set(records.map((r) => r.id));
  const skipPath = path.join(__dirname, "ladr-skipped.json");
  const skipped = new Set(
    fs.existsSync(skipPath)
      ? (JSON.parse(fs.readFileSync(skipPath, "utf8")).en || []).map((s) => s.id)
      : []
  );
  const deleted = [];
  for (const id of old) {
    if (have.has(id)) continue;
    if (skipped.has(id)) {
      deleted.push(id);
      continue;
    }
    fail(`old linear-data.js id ${id} is missing from extract and not marked skipped`, errors);
  }
  return deleted;
}

function main() {
  const target = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.join(__dirname, "ladr-boxes.json");
  if (!fs.existsSync(target)) {
    console.error(`missing ${target}`);
    process.exit(1);
  }
  const { records, source } = recordsFromTarget(target);
  const goldens = loadJson(path.join(__dirname, "golden-ladr.json"));
  const errors = [];
  const table = completeness(records, errors);
  console.log(table);
  checkInvariants(records, errors, source === "json" || true);
  checkGoldens(records, goldens, errors);
  const deleted = checkOldIds(records, errors);
  if (deleted.length) {
    console.log("\nDeleted fake ids (example / eq-only, were in old linear-data.js):");
    console.log("  " + deleted.join(", "));
  }
  if (errors.length) {
    console.error(`\nQA FAIL (${errors.length}) on ${path.basename(target)}`);
    for (const e of errors) console.error(" - " + e);
    process.exit(1);
  }
  console.log(`\nQA OK on ${path.basename(target)} (${records.length} boxes)`);
}

main();
