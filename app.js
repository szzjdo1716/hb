const LANG_KEY = "hello-web-lang";
const CMD_TOKEN = /^[A-Za-z0-9._+-]+$/;

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    title: "Linux 命令手册",
    skip: "跳到命令列表",
    lede: "常用 Linux 命令，保存在本地 SQLite 中。搜索或点分类即可查阅。打开本文件后无需联网（手册链接除外）。",
    searchLabel: "搜索命令",
    searchPh: "输入命令名，例如 ls 或 grep",
    searchHint: "只输入命令名时，只显示这一条，不会混入相关命令。",
    catsLabel: "分类",
    all: "全部",
    loading: "正在加载 SQLite…",
    status: (n, total) => `${n} / ${total} 条命令 · SQLite`,
    empty: "没有匹配的命令。",
    example: "示例",
    keys: "按键",
    options: "常用选项",
    flag: "参数",
    meaning: "说明",
    manuals: "手册页",
    copy: "复制",
    copied: "已复制",
    exact: "精确匹配",
    home: "首页",
    hubTitle: "学习手册",
    hubLede: "先选一个主题。现在 Linux 和线性代数可用。",
    hubSkip: "跳到主题",
    linuxTile: "Linux 命令手册",
    linuxHint: "打开手册",
    linearTile: "线性代数手册",
    linearHint: "打开手册",
    githubTile: "GitHub 入门手册",
    githubHint: "打开手册",
    catalog: "目录",
    kindDef: "定义",
    kindRes: "结论",
    kindNotation: "记号",
    soon: "稍后",
    footer:
      "用浏览器直接打开本文件即可。查询在你的电脑上用 SQLite（sql.js）完成。man7.org 和 linux.die.net 的手册链接需要联网。",
    sqliteFail: "SQLite 未能加载。请把 vendor 文件夹和本页放在一起。",
    sqliteFailStatus: "SQLite 加载失败",
  },
  en: {
    htmlLang: "en",
    title: "Linux Command Reference",
    skip: "Skip to commands",
    lede: "Common commands, stored in a local SQLite database. Search or pick a category. Works without the internet after you open this file.",
    searchLabel: "Search commands",
    searchPh: "Type a command name, e.g. ls or grep",
    searchHint: "A command name shows that command only — not related names.",
    catsLabel: "Categories",
    all: "All",
    loading: "Loading SQLite…",
    status: (n, total) => `${n} of ${total} commands · SQLite`,
    empty: "No commands match that search.",
    example: "Example",
    keys: "Keys",
    options: "Common options",
    flag: "Flag",
    meaning: "What it does",
    manuals: "Manual pages",
    copy: "Copy",
    copied: "Copied",
    exact: "Exact match",
    home: "Home",
    hubTitle: "Learning handbook",
    hubLede: "Pick a topic. Linux and linear algebra are available now.",
    hubSkip: "Skip to topics",
    linuxTile: "Linux command reference",
    linuxHint: "Open the handbook",
    linearTile: "Linear algebra handbook",
    linearHint: "Open the handbook",
    githubTile: "GitHub starter handbook",
    githubHint: "Open the handbook",
    catalog: "Contents",
    kindDef: "Definitions",
    kindRes: "Results",
    kindNotation: "Notation",
    soon: "Later",
    footer:
      "Open this file in a browser. Queries run in SQLite (sql.js) on your machine. Manual pages on man7.org and linux.die.net need a network connection.",
    sqliteFail: "SQLite files did not load. Keep the vendor folder next to this page.",
    sqliteFailStatus: "SQLite failed to load",
  },
};

const SUBJECT_I18N = {
  linear: {
    zh: {
      title: "线性代数手册",
      lede: "Axler《Linear Algebra Done Right》第 4 版的定义、记号与结论。搜索编号或名称即可。打开本页后无需联网（原书链接除外）。",
      searchPh: "输入 1.20 或 span 或 张成",
      searchHint: "输入编号或名称时，只显示这一条。",
      status: (n, total) => `${n} / ${total} 条 · SQLite`,
      empty: "没有匹配的条目。",
      skip: "跳到条目列表",
      enOriginal: "英文原句",
      noteLabel: "注",
    },
    en: {
      title: "Linear algebra handbook",
      lede: "Definitions, notation, and results from Axler’s Linear Algebra Done Right, 4th edition. Search a number or a name. Works offline after this page loads (book links need the network).",
      searchPh: "Type 1.20 or span or 张成",
      searchHint: "A number or name shows that card only.",
      status: (n, total) => `${n} of ${total} · SQLite`,
      empty: "No entries match that search.",
      skip: "Skip to entries",
      noteLabel: "Note",
    },
  },
  github: {
    zh: {
      title: "GitHub 入门手册",
      lede: "从本机 git 到 GitHub 网页、Pages、iPad 编辑。搜索命令名或主题词即可。打开本页后无需联网（文档链接除外）。",
      searchPh: "输入 git status、push、pages、pr …",
      searchHint: "只输入命令名或主题名时，只显示这一条。",
      footer:
        "查询在你的电脑上用 SQLite（sql.js）完成。docs.github.com 链接需要联网。Grok Build CLI 不能在 iPad 上运行。",
      status: (n, total) => `${n} / ${total} 条 · SQLite`,
    },
    en: {
      title: "GitHub starter handbook",
      lede: "From local git to GitHub website, Pages, and iPad editing. Search a command or topic. Works offline after this page loads (doc links need the network).",
      searchPh: "Type git status, push, pages, pr…",
      searchHint: "A command or topic name shows that card only.",
      footer:
        "Queries run in SQLite (sql.js) on your machine. docs.github.com links need a network. Grok Build CLI does not run on iPad.",
      status: (n, total) => `${n} of ${total} · SQLite`,
    },
  },
};

const HANDBOOK_DATA =
  window.LINEAR_DATA || window.GITHUB_DATA || window.LINUX_DATA;
const SUBJECT = window.LINEAR_DATA
  ? "linear"
  : window.GITHUB_DATA
    ? "github"
    : window.LINUX_DATA
      ? "linux"
      : "";
const IS_LINEAR = SUBJECT === "linear";

const state = {
  db: null,
  category: "",
  kind: "",
  query: "",
  lang: readLang(),
  open: new Set(),
  exactHit: false,
};

const isHandbook = Boolean(document.getElementById("results"));
const isHub = Boolean(document.getElementById("hub"));
const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categories");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");
const statusEl = document.getElementById("status");
const langToggle = document.getElementById("lang-toggle");

function t() {
  const base = I18N[state.lang] || I18N.zh;
  const extra = (SUBJECT_I18N[SUBJECT] && SUBJECT_I18N[SUBJECT][state.lang]) || {};
  return Object.assign({}, base, extra);
}

function readLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "zh") return saved;
  } catch {
    /* ignore */
  }
  return "zh";
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* ignore */
  }
}

function hasCJK(value) {
  return /[\u4e00-\u9fff]/.test(String(value || ""));
}

function pickText(row, enKey, zhKey) {
  if (IS_LINEAR) {
    if (state.lang === "en") return row[enKey] || "";
    const zh = row[zhKey] || "";
    if (hasCJK(zh)) return zh;
    return zh || row[enKey] || "";
  }
  if (state.lang === "zh") return row[zhKey] || row[enKey] || "";
  return row[enKey] || row[zhKey] || "";
}

function pickLinearContent(en, zh) {
  if (state.lang === "en") return { text: en || "", note: false };
  if (hasCJK(zh)) return { text: zh || "", note: false };
  if (zh) return { text: zh, note: false };
  if (en) return { text: en, note: true };
  return { text: "", note: false };
}

function withEnNote(text, note) {
  if (!note || state.lang !== "zh" || !text) return mathHtml(text);
  const label = (t().enOriginal || "英文原句");
  return `${mathHtml(text)} <span class="en-note">${esc(label)}</span>`;
}

function optionMeaning(opt) {
  if (opt.meaning_zh || opt.meaning_en) {
    return state.lang === "zh"
      ? opt.meaning_zh || opt.meaning_en || ""
      : opt.meaning_en || opt.meaning_zh || "";
  }
  if (opt.meaning && typeof opt.meaning === "object") {
    return opt.meaning[state.lang] || opt.meaning.en || opt.meaning.zh || "";
  }
  return opt.meaning || "";
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function prefixNeedle(raw) {
  return `${String(raw).replace(/[%_]/g, "")}%`;
}

function rowsFrom(stmt) {
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  return rows;
}

function seed(db) {
  db.run(`
    CREATE TABLE categories (
      id INTEGER PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      name_en TEXT NOT NULL,
      name_zh TEXT NOT NULL,
      sort_order INTEGER NOT NULL
    );
  `);

  const insertCat = db.prepare(
    "INSERT INTO categories (slug, name_en, name_zh, sort_order) VALUES (?, ?, ?, ?)"
  );
  HANDBOOK_DATA.categories.forEach((cat, index) => {
    insertCat.run([
      cat.slug,
      cat.name_en || cat.name || "",
      cat.name_zh || cat.name || "",
      cat.sort_order || index + 1,
    ]);
  });
  insertCat.free();

  if (IS_LINEAR) {
    db.run(`
      CREATE TABLE entries (
        id TEXT PRIMARY KEY,
        kind TEXT NOT NULL,
        chapter TEXT NOT NULL,
        number TEXT NOT NULL,
        name_en TEXT NOT NULL,
        name_zh TEXT NOT NULL,
        statement_en TEXT NOT NULL,
        statement_zh TEXT NOT NULL,
        layout_json TEXT NOT NULL,
        include INTEGER NOT NULL
      );
      CREATE INDEX idx_entries_ch ON entries(chapter);
      CREATE INDEX idx_entries_num ON entries(number);
    `);
    const insert = db.prepare(
      `INSERT INTO entries
        (id, kind, chapter, number, name_en, name_zh, statement_en, statement_zh, layout_json, include)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    (HANDBOOK_DATA.entries || []).forEach((entry) => {
      const body = Array.isArray(entry.body) ? entry.body : [];
      const note = entry.note && typeof entry.note === "object" ? entry.note : null;
      const joinedEn =
        entry.statement_en ||
        body.map((part) => part.en || "").join(" ") + (note && note.en ? ` ${note.en}` : "");
      const joinedZh =
        entry.statement_zh ||
        body.map((part) => part.zh || "").join(" ") + (note && note.zh ? ` ${note.zh}` : "");
      insert.run([
        entry.id,
        entry.kind,
        entry.chapter,
        entry.number,
        entry.name_en || "",
        entry.name_zh || "",
        joinedEn,
        joinedZh,
        JSON.stringify({ body, note }),
        entry.include === false ? 0 : 1,
      ]);
    });
    insert.free();
    return;
  }

  db.run(`
    CREATE TABLE commands (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category_slug TEXT NOT NULL,
      summary_en TEXT NOT NULL,
      summary_zh TEXT NOT NULL,
      example TEXT NOT NULL,
      options_json TEXT NOT NULL,
      links_json TEXT NOT NULL,
      shortcuts_json TEXT NOT NULL
    );
    CREATE INDEX idx_commands_name ON commands(name);
    CREATE INDEX idx_commands_cat ON commands(category_slug);
  `);
  const insertCmd = db.prepare(
    `INSERT INTO commands
      (name, category_slug, summary_en, summary_zh, example, options_json, links_json, shortcuts_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
  );
  HANDBOOK_DATA.commands.forEach((cmd) => {
    insertCmd.run([
      cmd.name,
      cmd.category,
      cmd.summary_en || cmd.summary || "",
      cmd.summary_zh || cmd.summary || "",
      cmd.example,
      JSON.stringify(cmd.options),
      JSON.stringify(cmd.links),
      JSON.stringify(cmd.shortcuts || []),
    ]);
  });
  insertCmd.free();
}

function countAll() {
  const sql = IS_LINEAR
    ? "SELECT COUNT(*) AS n FROM entries WHERE include = 1"
    : "SELECT COUNT(*) AS n FROM commands";
  const stmt = state.db.prepare(sql);
  stmt.step();
  const n = stmt.getAsObject().n;
  stmt.free();
  return n;
}

function knownNames() {
  const stmt = state.db.prepare("SELECT name FROM commands");
  const names = new Set();
  while (stmt.step()) names.add(stmt.getAsObject().name.toLowerCase());
  stmt.free();
  return names;
}

function parseQuery(raw) {
  let q = String(raw || "").trim();
  if (q.startsWith("$")) q = q.slice(1).trim();
  return q;
}

function stripTags(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function eqIds() {
  const fromData = (HANDBOOK_DATA && HANDBOOK_DATA.eq_ids) || [];
  return new Set(fromData.map(String));
}

function cardIds() {
  const entries = (HANDBOOK_DATA && HANDBOOK_DATA.entries) || [];
  return new Set(entries.map((e) => String(e.id)));
}

function refHref(id) {
  const cards = cardIds();
  const eqs = eqIds();
  if (cards.has(id)) return `#card-${id}`;
  if (eqs.has(id)) return `#eq-${id}`;
  return `#card-${id}`;
}

function linkifyRefs(html) {
  return String(html || "").replace(
    /(\d{1,2}\.\d{1,3})/g,
    (full, id, offset, src) => {
      const before = src.slice(Math.max(0, offset - 10), offset);
      if (/id="(?:card|eq)-$/.test(before) || /#[a-z]*-$/.test(before)) return full;
      return `<a class="ref" href="${refHref(id)}">${id}</a>`;
    }
  );
}

function mathHtml(value) {
  let s = String(value || "");
  s = s.replace(/<\s*\/?\s*script/gi, "");

  s = s.replace(/\^{([^}]+)}/g, "<sup>$1</sup>");
  s = s.replace(/_\{([^}]+)}/g, "<sub>$1</sub>");

  s = s.replace(/(\S)\^(?:\*|∗)/g, "$1<sup>∗</sup>");
  s = s.replace(/([^>\s])∗/g, "$1<sup>∗</sup>");
  s = s.replace(/<sup>\*<\/sup>/g, "<sup>∗</sup>");

  s = s.replace(/(\S)\^['′]/g, "$1′");
  s = s.replace(/<sup>['′]<\/sup>/g, "′");

  s = s.replace(/(\S)\^(?:⊥|⟂|\\perp)/g, "$1<sup>⊥</sup>");
  s = s.replace(/<sup>(?:⟂|\\perp)<\/sup>/g, "<sup>⊥</sup>");

  s = s.replace(/(\S)_(\d+)/g, "$1<sub>$2</sub>");
  s = s.replace(
    /(\S)_(n|m|k|i|j|U|V|W|𝑛|𝑚|𝑘|𝑖|𝑗|𝑈|𝑉|𝑊)/g,
    "$1<sub>$2</sub>"
  );
  s = s.replace(/(\S)\^(\d+)/g, "$1<sup>$2</sup>");
  s = s.replace(/(\S)\^(n|𝑛)/g, "$1<sup>$2</sup>");

  s = s.replace(/([i𝑖])<sub>\s*2\s*<\/sub>/g, "$1<sup>2</sup>");
  s = s.replace(/([abcdn0𝑎𝑏𝑐𝑑])\s*<sub>\s*[i𝑖]\s*<\/sub>/gi, "$1𝑖");

  return linkifyRefs(s);
}

function queryEntries() {
  state.exactHit = false;
  const q = parseQuery(state.query);
  let sql = `
    SELECT e.id, e.kind, e.chapter, e.number, e.name_en, e.name_zh,
           e.statement_en, e.statement_zh, e.layout_json,
           cat.name_en AS category_name_en, cat.name_zh AS category_name_zh,
           cat.slug AS category_slug
    FROM entries e
    JOIN categories cat ON cat.slug = e.chapter
    WHERE e.include = 1
  `;
  const params = [];
  if (state.category) {
    sql += " AND e.chapter = ?";
    params.push(state.category);
  }
  if (state.kind === "definition") {
    sql += " AND e.kind IN ('definition', 'notation')";
  } else if (state.kind === "result") {
    sql += " AND e.kind = 'result'";
  }
  sql += " ORDER BY cat.sort_order, e.number";
  const stmt = state.db.prepare(sql);
  stmt.bind(params);
  let rows = rowsFrom(stmt);
  rows.sort((a, b) => {
    const [a1, a2] = String(a.number).split(".").map(Number);
    const [b1, b2] = String(b.number).split(".").map(Number);
    return a1 - b1 || a2 - b2;
  });
  if (!q) return rows;

  const needle = q.toLowerCase();
  const exactRows = rows.filter((row) => {
    const names = [
      String(row.id || ""),
      String(row.number || ""),
      stripTags(row.name_en),
      stripTags(row.name_zh),
    ].map((s) => s.toLowerCase());
    return names.includes(needle);
  });
  if (exactRows.length) {
    state.exactHit = exactRows.length === 1;
    return exactRows;
  }
  rows = rows.filter((row) => {
    const blob = [
      row.id,
      row.number,
      row.kind,
      stripTags(row.name_en),
      stripTags(row.name_zh),
      stripTags(row.statement_en),
      stripTags(row.statement_zh),
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(needle);
  });
  return rows;
}

function queryCommands() {
  state.exactHit = false;
  const q = parseQuery(state.query);
  const names = knownNames();
  const tokens = q ? q.split(/\s+/).filter(Boolean) : [];
  const first = tokens[0] || "";

  let sql = `
    SELECT c.name, c.summary_en, c.summary_zh, c.example, c.options_json, c.links_json, c.shortcuts_json,
           cat.name_en AS category_name_en, cat.name_zh AS category_name_zh,
           cat.slug AS category_slug
    FROM commands c
    JOIN categories cat ON cat.slug = c.category_slug
    WHERE 1=1
  `;
  const params = [];
  if (state.category) {
    sql += " AND cat.slug = ?";
    params.push(state.category);
  }

  if (q) {
    if (names.has(q.toLowerCase())) {
      sql += " AND c.name = ? COLLATE NOCASE";
      params.push(q);
    } else if (SUBJECT !== "github" && names.has(first.toLowerCase())) {
      sql += " AND c.name = ? COLLATE NOCASE";
      params.push(first);
    } else if (SUBJECT !== "github" && tokens.length === 1 && CMD_TOKEN.test(q)) {
      sql += " AND c.name LIKE ? COLLATE NOCASE";
      params.push(prefixNeedle(q));
    }
  }

  sql += " ORDER BY c.name COLLATE NOCASE";
  const stmt = state.db.prepare(sql);
  stmt.bind(params);
  let rows = rowsFrom(stmt);

  const usedNameExact = q && names.has(q.toLowerCase());
  const usedLinuxFirst =
    q && SUBJECT !== "github" && names.has(first.toLowerCase());
  const usedLinuxPrefix =
    q && SUBJECT !== "github" && tokens.length === 1 && CMD_TOKEN.test(q);
  if (q && !usedNameExact && !usedLinuxFirst && !usedLinuxPrefix) {
    const needle = q.toLowerCase();
    rows = rows.filter((row) => {
      const inName = String(row.name || "").toLowerCase().includes(needle);
      const summary = pickText(row, "summary_en", "summary_zh").toLowerCase();
      let options = [];
      try {
        options = JSON.parse(row.options_json);
      } catch {
        options = [];
      }
      const optText = options.map(optionMeaning).join(" ").toLowerCase();
      return inName || summary.includes(needle) || optText.includes(needle);
    });
  }

  state.exactHit =
    Boolean(q) &&
    rows.length === 1 &&
    names.has(q.toLowerCase()) &&
    rows[0].name.toLowerCase() === q.toLowerCase();
  return rows;
}

function applyChrome() {
  const ui = t();
  document.documentElement.lang = ui.htmlLang;
  const skip = document.querySelector(".skip-link");
  const h1 = document.querySelector("h1");
  const lede = document.querySelector(".lede");
  const home = document.getElementById("home-link");
  if (home) home.textContent = ui.home;
  if (isHub) {
    document.title = ui.hubTitle;
    if (skip) skip.textContent = ui.hubSkip;
    if (h1) h1.textContent = ui.hubTitle;
    if (lede) lede.textContent = ui.hubLede;
    const linuxTitle = document.getElementById("tile-linux-title");
    const linuxHint = document.getElementById("tile-linux-hint");
    if (linuxTitle) linuxTitle.textContent = ui.linuxTile;
    if (linuxHint) linuxHint.textContent = ui.linuxHint;
    const linearTitle = document.getElementById("tile-linear-title");
    const linearHint = document.getElementById("tile-linear-hint");
    if (linearTitle) linearTitle.textContent = ui.linearTile;
    if (linearHint) linearHint.textContent = ui.linearHint;
    const githubTitle = document.getElementById("tile-github-title");
    const githubHint = document.getElementById("tile-github-hint");
    if (githubTitle) githubTitle.textContent = ui.githubTile;
    if (githubHint) githubHint.textContent = ui.githubHint;
    document.querySelectorAll(".tile-soon .soon").forEach((el) => {
      el.textContent = ui.soon;
    });
  } else {
    document.title = ui.title;
    if (skip) skip.textContent = ui.skip;
    if (h1) h1.textContent = ui.title;
    if (lede) lede.textContent = ui.lede;
  }
  const searchLabel = document.querySelector(".search-wrap .visually-hidden");
  if (searchLabel) searchLabel.textContent = ui.searchLabel;
  if (searchInput) searchInput.placeholder = ui.searchPh;
  const hint = document.getElementById("search-hint");
  if (hint) hint.textContent = ui.searchHint;
  if (categoryNav) categoryNav.setAttribute("aria-label", ui.catsLabel);
  if (emptyEl) emptyEl.textContent = ui.empty;
  const attrZh = document.getElementById("attr-zh");
  const attrEn = document.getElementById("attr-en");
  if (attrZh && attrEn) {
    attrZh.hidden = state.lang !== "zh";
    attrEn.hidden = state.lang !== "en";
  } else {
    const footer = document.querySelector(".site-footer p");
    if (footer) footer.textContent = ui.footer;
  }
  if (langToggle) {
    langToggle.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
    });
  }
}

function renderCategories() {
  const nameCol = state.lang === "zh" ? "name_zh" : "name_en";
  const stmt = state.db.prepare(
    `SELECT slug, ${nameCol} AS name FROM categories ORDER BY sort_order`
  );
  const cats = rowsFrom(stmt);
  const ui = t();
  const allLabel = IS_LINEAR ? ui.catalog : ui.all;
  const buttons = [{ slug: "", name: allLabel }, ...cats]
    .map(
      (cat) =>
        `<button type="button" class="chip" data-slug="${esc(cat.slug)}" aria-pressed="${
          state.category === cat.slug ? "true" : "false"
        }">${esc(cat.name)}</button>`
    );
  if (IS_LINEAR) {
    buttons.push(
      `<button type="button" class="chip" data-kind="definition" aria-pressed="${
        state.kind === "definition" ? "true" : "false"
      }">${esc(ui.kindDef)}</button>`,
      `<button type="button" class="chip" data-kind="result" aria-pressed="${
        state.kind === "result" ? "true" : "false"
      }">${esc(ui.kindRes)}</button>`
    );
  }
  categoryNav.innerHTML = buttons.join("");
}

function optionRows(json) {
  let options = [];
  try {
    options = JSON.parse(json);
  } catch {
    options = [];
  }
  return options
    .map(
      (opt) =>
        `<tr><td><code>${esc(opt.flag)}</code></td><td>${esc(optionMeaning(opt))}</td></tr>`
    )
    .join("");
}

function shortcutRows(json) {
  let shortcuts = [];
  try {
    shortcuts = JSON.parse(json || "[]");
  } catch {
    shortcuts = [];
  }
  if (!shortcuts.length) return "";
  const ui = t();
  const rows = shortcuts
    .map((item) => {
      const meaning =
        state.lang === "zh"
          ? item.meaning_zh || item.meaning_en || ""
          : item.meaning_en || item.meaning_zh || "";
      return `<tr><td><code>${esc(item.key)}</code></td><td>${esc(meaning)}</td></tr>`;
    })
    .join("");
  return `
            <h3>${esc(ui.keys)}</h3>
            <table class="options">
              <thead><tr><th>${esc(ui.keys)}</th><th>${esc(ui.meaning)}</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>`;
}

function linkList(json) {
  let links = [];
  try {
    links = JSON.parse(json);
  } catch {
    links = [];
  }
  return links
    .map(
      (link) =>
        `<li><a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(
          link.label
        )}</a></li>`
    )
    .join("");
}

function kindLabel(kind) {
  const ui = t();
  if (kind === "notation") return ui.kindNotation;
  if (kind === "result") return ui.kindRes;
  return ui.kindDef;
}

function parseLayout(json) {
  try {
    return JSON.parse(json || "{}");
  } catch {
    return {};
  }
}

function flushBullets(items) {
  if (!items.length) return "";
  return `<ul class="math-bullets">${items
    .map((item) => `<li>${withEnNote(item.text, item.note)}</li>`)
    .join("")}</ul>`;
}

function renderMatrix(text) {
  const raw = String(text || "");
  if (!/[⎛⎜⎝⎞⎟⎠│]/.test(raw)) return null;
  const t = raw.replace(/[⎛⎜⎝⎞⎟⎠│]/g, " ").replace(/\s+/g, " ").trim();
  const m = t.match(
    /((?:𝐴|A)_\{1,1\})\s*(⋯|…)\s*((?:𝐴|A)_\{1,[^}]+\})\s*(?:𝐴|A)\s*=\s*⋮\s*⋮\.?\s*((?:𝐴|A)_\{[^,]+,1\})\s*(⋯|…)\s*((?:𝐴|A)_\{[^}]+\})/
  );
  if (m) {
    return `<div class="matrix-wrap"><span class="matrix-eq">${mathHtml(
      "𝐴 ="
    )}</span><table class="matrix"><tbody><tr><td>${mathHtml(
      m[1]
    )}</td><td>${esc(m[2])}</td><td>${mathHtml(m[3])}</td></tr><tr><td>⋮</td><td></td><td>⋮</td></tr><tr><td>${mathHtml(
      m[4]
    )}</td><td>${esc(m[5])}</td><td>${mathHtml(m[6])}</td></tr></tbody></table></div>`;
  }
  return mathHtml(t);
}

function formulaInner(text, note) {
  const matrix = renderMatrix(text);
  if (matrix) {
    if (!note || state.lang !== "zh") return matrix;
    const label = t().enOriginal || "英文原句";
    return `${matrix} <span class="en-note">${esc(label)}</span>`;
  }
  const lines = String(text || "").split(/\r?\n/).filter((line) => line.length);
  if (lines.length > 1) {
    const html = lines
      .map((line) => `<div class="eq-line">${mathHtml(line)}</div>`)
      .join("");
    if (!note || state.lang !== "zh") return html;
    const label = t().enOriginal || "英文原句";
    return `${html} <span class="en-note">${esc(label)}</span>`;
  }
  return withEnNote(text, note);
}

function formulaBlock(part, picked) {
  const eq = part && part.eq;
  const inner = formulaInner(picked.text, picked.note);
  if (eq) {
    return `<div class="math-block has-eq" id="eq-${esc(eq)}"><span class="eq-num">(${esc(
      eq
    )})</span><div class="eq-math">${inner}</div></div>`;
  }
  return `<div class="math-block">${inner}</div>`;
}

function entryBody(row) {
  const layout = parseLayout(row.layout_json);
  const body = Array.isArray(layout.body) ? layout.body : [];
  const chunks = [];
  let bullets = [];
  body.forEach((part) => {
    const kind = part && part.t;
    const picked = pickLinearContent(part.en, part.zh);
    if (kind === "bullet") {
      bullets.push(picked);
      return;
    }
    if (bullets.length) {
      chunks.push(flushBullets(bullets));
      bullets = [];
    }
    if (kind === "formula") {
      if (picked.text) chunks.push(formulaBlock(part, picked));
      return;
    }
    if (picked.text) {
      chunks.push(`<p class="math-prose">${withEnNote(picked.text, picked.note)}</p>`);
    }
  });
  if (bullets.length) chunks.push(flushBullets(bullets));
  if (!chunks.length) {
    const statement = pickLinearContent(row.statement_en, row.statement_zh);
    if (statement.text) {
      chunks.push(`<p class="math-prose">${withEnNote(statement.text, statement.note)}</p>`);
    }
  }
  const note = layout.note;
  if (note && (note.en || note.zh)) {
    const picked = pickLinearContent(note.en, note.zh);
    if (picked.text) {
      const label = t().noteLabel || (state.lang === "zh" ? "注" : "Note");
      chunks.push(
        `<aside class="entry-note"><span class="note-label">${esc(label)}</span> ${withEnNote(
          picked.text,
          picked.note
        )}</aside>`
      );
    }
  }
  return chunks.join("");
}

function renderLinear(rows) {
  const ui = t();
  resultsEl.innerHTML = rows
    .map((row) => {
      const open = state.open.has(row.id);
      const name =
        state.lang === "en"
          ? row.name_en || ""
          : hasCJK(row.name_zh)
            ? row.name_zh
            : row.name_zh || row.name_en || "";
      const catName = pickText(row, "category_name_en", "category_name_zh");
      const badge = state.exactHit
        ? `<span class="exact-badge">${esc(ui.exact)}</span>`
        : "";
      return `
        <article class="cmd entry" id="card-${esc(row.id)}" data-name="${esc(row.id)}" data-slug="${esc(
        row.chapter
      )}" data-kind="${esc(row.kind)}">
          <button class="cmd-head" type="button" aria-expanded="${open}">
            <code class="entry-id">${esc(row.number)}</code>
            <span class="badge">${esc(kindLabel(row.kind))} · ${esc(catName)}${badge}</span>
            <span class="chev">${open ? "▾" : "▸"}</span>
            <p class="sum entry-title">${mathHtml(name)}</p>
          </button>
          <div class="cmd-body entry-body" ${open ? "" : "hidden"}>
            ${entryBody(row)}
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  applyChrome();
  renderCategories();
  const ui = t();
  const rows = IS_LINEAR ? queryEntries() : queryCommands();
  const total = countAll();
  statusEl.textContent = ui.status(rows.length, total);
  emptyEl.hidden = rows.length !== 0;
  emptyEl.textContent = ui.empty;

  if (rows.length === 1) state.open.add(IS_LINEAR ? rows[0].id : rows[0].name);
  if (IS_LINEAR) {
    renderLinear(rows);
    return;
  }

  resultsEl.innerHTML = rows
    .map((row) => {
      const open = state.open.has(row.name);
      const summary = pickText(row, "summary_en", "summary_zh");
      const catName = pickText(row, "category_name_en", "category_name_zh");
      const badge = state.exactHit
        ? `<span class="exact-badge">${esc(ui.exact)}</span>`
        : "";
      return `
        <article class="cmd" data-name="${esc(row.name)}" data-slug="${esc(row.category_slug)}">
          <button class="cmd-head" type="button" aria-expanded="${open}">
            <code>${esc(row.name)}</code>
            <span class="badge">${esc(catName)}${badge}</span>
            <span class="chev">${open ? "▾" : "▸"}</span>
            <p class="sum">${esc(summary)}</p>
          </button>
          <div class="cmd-body" ${open ? "" : "hidden"}>
            <h3>${esc(ui.example)}</h3>
            <div class="code-block">
              <pre><code>${esc(row.example)}</code></pre>
              <button type="button" class="copy-btn" data-copy="${esc(row.example)}">${esc(ui.copy)}</button>
            </div>
            ${shortcutRows(row.shortcuts_json)}
            <h3>${esc(ui.options)}</h3>
            <table class="options">
              <thead><tr><th>${esc(ui.flag)}</th><th>${esc(ui.meaning)}</th></tr></thead>
              <tbody>${optionRows(row.options_json)}</tbody>
            </table>
            <h3>${esc(ui.manuals)}</h3>
            <ul class="links">${linkList(row.links_json)}</ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function refresh() {
  if (isHandbook && state.db) render();
  else applyChrome();
}

function bind() {
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim();
      render();
    });
  }

  if (categoryNav) {
    categoryNav.addEventListener("click", (event) => {
      const kindBtn = event.target.closest("[data-kind]");
      if (kindBtn) {
        const next = kindBtn.dataset.kind || "";
        state.kind = state.kind === next ? "" : next;
        render();
        return;
      }
      const button = event.target.closest("[data-slug]");
      if (!button) return;
      state.category = button.dataset.slug || "";
      render();
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang]");
      if (!button) return;
      const next = button.dataset.lang === "en" ? "en" : "zh";
      state.lang = next;
      saveLang(next);
      refresh();
    });
  }

  if (!resultsEl) return;

  resultsEl.addEventListener("click", async (event) => {
    const copy = event.target.closest(".copy-btn");
    if (copy) {
      const text = copy.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const area = document.createElement("textarea");
        area.value = text;
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
      }
      copy.textContent = t().copied;
      copy.classList.add("copied");
      setTimeout(() => {
        copy.textContent = t().copy;
        copy.classList.remove("copied");
      }, 1200);
      return;
    }

    const head = event.target.closest(".cmd-head");
    if (!head) return;
    const card = head.closest(".cmd");
    const name = card.dataset.name;
    if (state.open.has(name)) state.open.delete(name);
    else state.open.add(name);
    const body = card.querySelector(".cmd-body");
    const open = state.open.has(name);
    body.hidden = !open;
    head.setAttribute("aria-expanded", String(open));
    head.querySelector(".chev").textContent = open ? "▾" : "▸";
  });

  resultsEl.addEventListener("click", (event) => {
    const ref = event.target.closest("a.ref");
    if (!ref) return;
    const href = ref.getAttribute("href") || "";
    if (!href.startsWith("#")) return;
    event.preventDefault();
    openHash(href);
  });

  window.addEventListener("hashchange", () => openHash(location.hash));

  document.addEventListener("keydown", (event) => {
    if (!searchInput) return;
    if (event.key === "/" && document.activeElement !== searchInput) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      state.query = "";
      render();
      searchInput.blur();
    }
  });
}

function openHash(hash) {
  const raw = String(hash || "").replace(/^#/, "");
  const m = /^(card|eq)-(\d{1,2}\.\d{1,3})$/.exec(raw);
  if (!m || !searchInput) return;
  let id = m[2];
  if (m[1] === "eq") {
    const map = (HANDBOOK_DATA && HANDBOOK_DATA.eq_map) || {};
    id = map[id] || id;
  }
  searchInput.value = id;
  state.query = id;
  state.open.add(id);
  render();
  const el = document.getElementById(raw) || document.getElementById(`card-${id}`);
  if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
}

async function init() {
  applyChrome();
  bind();
  if (!isHandbook) return;
  if (statusEl) statusEl.textContent = t().loading;
  try {
    if (!HANDBOOK_DATA) {
      throw new Error(t().sqliteFail);
    }
    if (typeof initSqlJs !== "function" || !window.SQL_WASM_BASE64) {
      throw new Error(t().sqliteFail);
    }
    const wasmBinary = Uint8Array.from(atob(window.SQL_WASM_BASE64), (ch) =>
      ch.charCodeAt(0)
    );
    const SQL = await initSqlJs({ wasmBinary });
    state.db = new SQL.Database();
    seed(state.db);
    const params = new URLSearchParams(location.search);
    if (params.has("q")) {
      searchInput.value = params.get("q") || "";
      state.query = searchInput.value.trim();
    }
    if (params.has("cat")) state.category = params.get("cat") || "";
    const langParam = params.get("lang");
    if (langParam === "en" || langParam === "zh") {
      state.lang = langParam;
      saveLang(langParam);
    }
    render();
    if (location.hash) openHash(location.hash);
  } catch (err) {
    if (statusEl) statusEl.textContent = t().sqliteFailStatus;
    const box = document.createElement("p");
    box.className = "fatal";
    box.textContent = err.message || String(err);
    resultsEl.replaceWith(box);
  }
}

init();
