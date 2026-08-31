const LANG_KEY = "hb-lang";
const CMD_TOKEN = /^[A-Za-z0-9._+-]+$/;

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    title: "Linux 命令手册",
    skip: "跳到命令列表",
    lede: "常用 Linux 命令，保存在本地 SQLite 中。搜索或点分类即可查阅。打开本文件后无需联网（手册链接除外）。",
    searchLabel: "搜索命令",
    searchPh: "copy, 复制  或  linear combination",
    searchPhShort: "copy, 复制  或  linear combination",
    searchHint: "只输入命令名时，只显示这一条，不会混入相关命令。",
    catsLabel: "分类",
    all: "全部",
    loading: "正在加载 SQLite…",
    status: (n, total) => `${n} / ${total} 条命令 · SQLite`,
    empty: "没有匹配。试 copy / 多项式 / :q!",
    hubSearchPh: "copy, 复制  或  linear combination",
    hubSearchPhShort: "copy, 复制  或  linear combination",
    hubSearchLabel: "搜索手册",
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
    hubLede: "选一个主题。Linux、线性代数、GitHub、进出手册、SQL、Grok 已开放；其余制作中。",
    grokTile: "Grok",
    grokHint: "Build CLI 与 Bot 入门",
    hubSkip: "跳到主题",
    linuxTile: "Linux 命令手册",
    linuxHint: "打开手册",
    linearTile: "线性代数手册",
    linearHint: "打开手册",
    githubTile: "GitHub 入门手册",
    githubHint: "打开手册",
    enterTile: "进出手册",
    enterHint: "进入 / 退出 / 卡住 · PATH 与配置",
    sqlTile: "数据库入门",
    sqlHint: "用 chinook.db 学 SQL · 浏览器可试",
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
    title: "Linux commands",
    skip: "Skip to commands",
    lede: "Common commands, stored in a local SQLite database. Search or pick a category. Works without the internet after you open this file.",
    searchLabel: "Search commands",
    searchPh: "copy, rename  or  linear combination",
    searchPhShort: "copy, rename  or  linear combination",
    searchHint: "A command name shows that command only — not related names.",
    catsLabel: "Categories",
    all: "All",
    loading: "Loading SQLite…",
    status: (n, total) => `${n} of ${total} commands · SQLite`,
    empty: "No match. Try copy / 多项式 / :q!",
    hubSearchPh: "copy, rename  or  linear combination",
    hubSearchPhShort: "copy, rename  or  linear combination",
    hubSearchLabel: "Search handbooks",
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
    hubLede: "Pick a topic. Linux, linear algebra, GitHub, Enter–Quit, SQL, and Grok are ready. Others are in progress.",
    grokTile: "Grok",
    grokHint: "Build CLI and Bot tutorial",
    hubSkip: "Skip to topics",
    linuxTile: "Linux commands",
    linuxHint: "Open the handbook",
    linearTile: "Linear algebra",
    linearHint: "Open the handbook",
    githubTile: "GitHub starter handbook",
    githubHint: "Open the handbook",
    enterTile: "Enter–Quit",
    enterHint: "Open, leave, unstick. PATH and config.",
    sqlTile: "SQL with SQLite",
    sqlHint: "Learn SQL in chinook.db · try in the browser",
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
      searchPh: "copy, 复制  或  linear combination",
      searchPhShort: "copy, 复制  或  linear combination",
      searchHint: "输入编号或名称时，只显示这一条。",
      status: (n, total) => `${n} / ${total} 条 · SQLite`,
      empty: "没有匹配。试 copy / 多项式 / :q!",
      skip: "跳到条目列表",
      enOriginal: "英文原句",
      noteLabel: "注",
    },
    en: {
      title: "Linear algebra",
      lede: "Definitions, notation, and results from Axler’s Linear Algebra Done Right, 4th edition. Search a number or a name. Works offline after this page loads (book links need the network).",
      searchPh: "copy, rename  or  linear combination",
      searchPhShort: "copy, rename  or  linear combination",
      searchHint: "A number or name shows that card only.",
      status: (n, total) => `${n} of ${total} · SQLite`,
      empty: "No match. Try copy / 多项式 / :q!",
      skip: "Skip to entries",
      noteLabel: "Note",
    },
  },
  github: {
    zh: {
      title: "GitHub 入门手册",
      lede: "从本机 git 到 GitHub 网页、Pages、iPad 编辑。搜索命令名或主题词即可。打开本页后无需联网（文档链接除外）。",
      searchPh: "copy, 复制  或  linear combination",
      searchPhShort: "copy, 复制  或  linear combination",
      searchHint: "只输入命令名或主题名时，只显示这一条。",
      footer:
        "查询在你的电脑上用 SQLite（sql.js）完成。docs.github.com 链接需要联网。Grok Build CLI 不能在 iPad 上运行。",
      status: (n, total) => `${n} / ${total} 条 · SQLite`,
    },
    en: {
      title: "GitHub starter handbook",
      lede: "From local git to GitHub website, Pages, and iPad editing. Search a command or topic. Works offline after this page loads (doc links need the network).",
      searchPh: "copy, rename  or  linear combination",
      searchPhShort: "copy, rename  or  linear combination",
      searchHint: "A command or topic name shows that card only.",
      footer:
        "Queries run in SQLite (sql.js) on your machine. docs.github.com links need a network. Grok Build CLI does not run on iPad.",
      status: (n, total) => `${n} of ${total} · SQLite`,
    },
  },
};

const isHub = Boolean(document.getElementById("hub"));
const HANDBOOK_DATA = isHub
  ? null
  : window.LINEAR_DATA || window.GITHUB_DATA || window.LINUX_DATA;
const SUBJECT = isHub
  ? "hub"
  : window.LINEAR_DATA
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

const isHandbook = Boolean(document.getElementById("results")) && !isHub;
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

function isPhone() {
  return window.matchMedia("(max-width: 719px)").matches;
}

function toolbarEl() {
  return document.getElementById("toolbar") || document.querySelector(".toolbar");
}

function syncChipToggle() {
  const btn = document.getElementById("chip-toggle");
  const bar = toolbarEl();
  if (!btn) return;
  const open = Boolean(bar && bar.classList.contains("chips-open"));
  const label = t().catsLabel;
  btn.textContent = `${label} ${open ? "▴" : "▾"}`;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeChips() {
  const bar = toolbarEl();
  if (bar) bar.classList.remove("chips-open");
  syncChipToggle();
}

function searchPlaceholder() {
  const ui = t();
  if (isHub) {
    if (isPhone() && ui.hubSearchPhShort) return ui.hubSearchPhShort;
    return ui.hubSearchPh || ui.searchPh;
  }
  if (isPhone() && ui.searchPhShort) return ui.searchPhShort;
  return ui.searchPh;
}

function hubBookLabel(book) {
  const ui = t();
  if (book === "linux") return ui.linuxTile;
  if (book === "linear") return ui.linearTile;
  if (book === "enter") return ui.enterTile;
  if (book === "github") return ui.githubTile;
  if (book === "sql") return ui.sqlTile;
  if (book === "grok") return ui.grokTile;
  return book;
}

function hubCatalog() {
  const records = [];
  const linux = window.LINUX_DATA;
  if (linux && linux.commands) {
    const cats = {};
    (linux.categories || []).forEach((cat) => {
      cats[cat.slug] = cat;
    });
    linux.commands.forEach((cmd) => {
      const cat = cats[cmd.category] || {};
      records.push({
        names: [cmd.name],
        aliases: lookupAliases(cmd.name),
        title: [cmd.summary_en, cmd.summary_zh].join(" "),
        chip: [cat.name_en, cat.name_zh, cmd.category].join(" "),
        body: [cmd.example, JSON.stringify(cmd.options || [])].join(" "),
        book: "linux",
        href: "linux.html",
        hash: cmd.name,
        label: cmd.name,
        blurb: state.lang === "en" ? cmd.summary_en || cmd.summary_zh : cmd.summary_zh || cmd.summary_en,
      });
    });
  }
  const linear = window.LINEAR_DATA;
  if (linear && linear.entries) {
    const cats = {};
    (linear.categories || []).forEach((cat) => {
      cats[cat.slug] = cat;
    });
    linear.entries.forEach((entry) => {
      if (entry.include === false) return;
      const cat = cats[entry.chapter] || {};
      const name =
        state.lang === "en"
          ? entry.name_en || entry.name_zh
          : entry.name_zh || entry.name_en;
      records.push({
        names: [entry.id, entry.number, stripTags(entry.name_en), stripTags(entry.name_zh)],
        aliases: lookupAliases(entry.id, entry.number, entry.chapter),
        title: [stripTags(entry.name_en), stripTags(entry.name_zh)].join(" "),
        chip: [cat.name_en, cat.name_zh, entry.chapter].join(" "),
        body: [stripTags(entry.statement_en), stripTags(entry.statement_zh)].join(" "),
        book: "linear",
        href: "linear.html",
        hash: "card-" + entry.id,
        label: entry.number + "  " + stripTags(name || ""),
        blurb: stripTags(name || ""),
      });
    });
  }
  const enter = window.ENTER_DATA;
  if (enter && enter.tools) {
    const cats = {};
    (enter.categories || []).forEach((cat) => {
      cats[cat.id] = cat;
    });
    enter.tools.forEach((tool) => {
      const cat = cats[tool.cat] || {};
      const inner = (tool.inner || []).map((row) => row.c).join(" ");
      records.push({
        names: [tool.id, tool.name],
        aliases: lookupAliases(tool.id, tool.name),
        title: [tool.title_zh, tool.title_en, tool.blurb_zh, tool.blurb_en].join(" "),
        chip: [cat.zh, cat.en, tool.cat].join(" "),
        body: [tool.enter, tool.quit, tool.stuck, inner].join(" "),
        book: "enter",
        href: "enter.html",
        hash: tool.id,
        label: tool.name,
        blurb: state.lang === "en" ? tool.blurb_en || tool.blurb_zh : tool.blurb_zh || tool.blurb_en,
      });
    });
  }
  const github = window.GITHUB_DATA;
  if (github && github.commands) {
    const cats = {};
    (github.categories || []).forEach((cat) => {
      cats[cat.slug] = cat;
    });
    github.commands.forEach((cmd) => {
      const cat = cats[cmd.category] || {};
      records.push({
        names: [cmd.name],
        aliases: lookupAliases(cmd.name),
        title: [cmd.summary_en, cmd.summary_zh].join(" "),
        chip: [cat.name_en, cat.name_zh, cmd.category].join(" "),
        body: [cmd.example, JSON.stringify(cmd.options || [])].join(" "),
        book: "github",
        href: "github.html",
        hash: cmd.name,
        label: cmd.name,
        blurb: state.lang === "en" ? cmd.summary_en || cmd.summary_zh : cmd.summary_zh || cmd.summary_en,
      });
    });
  }
  const sqlBook = window.SQL_DATA;
  if (sqlBook && sqlBook.cards) {
    const cats = {};
    (sqlBook.categories || []).forEach((cat) => {
      cats[cat.id] = cat;
    });
    sqlBook.cards.forEach((card) => {
      const cat = cats[card.cat] || {};
      records.push({
        names: [card.id, card.name, card.title_zh, card.title_en],
        aliases: lookupAliases(card.id, card.name),
        title: [card.title_zh, card.title_en, card.blurb_zh, card.blurb_en].join(" "),
        chip: [cat.zh, cat.en, card.cat].join(" "),
        body: [card.sql, card.try_sql].join(" "),
        book: "sql",
        href: "sql.html",
        hash: card.id,
        label: card.name,
        blurb: state.lang === "en" ? card.blurb_en || card.blurb_zh : card.blurb_zh || card.blurb_en,
      });
    });
  }
  const grokBook = window.GROK_DATA;
  if (grokBook && grokBook.cards) {
    const cats = {};
    (grokBook.categories || []).forEach((cat) => {
      cats[cat.id] = cat;
    });
    grokBook.cards.forEach((card) => {
      const cat = cats[card.cat] || {};
      records.push({
        names: [card.id, card.name, card.name_en, card.title_zh, card.title_en],
        aliases: lookupAliases(card.id, card.name),
        title: [card.title_zh, card.title_en, card.blurb_zh, card.blurb_en].join(" "),
        chip: [cat.zh, cat.en, card.cat].join(" "),
        body: [(card.cmds || []).join(" "), card.detail_zh, card.detail_en].join(" "),
        book: "grok",
        href: "grok.html",
        hash: card.id,
        label: card.name,
        blurb: state.lang === "en" ? card.blurb_en || card.blurb_zh : card.blurb_zh || card.blurb_en,
      });
    });
  }
  return records;
}

function renderHubSearch() {
  const tiles = document.getElementById("hub");
  const hitsEl = document.getElementById("hub-results");
  const empty = document.getElementById("empty");
  if (!hitsEl || !tiles) return;
  const q = parseQuery(state.query);
  const ui = t();
  if (!q) {
    hitsEl.hidden = true;
    hitsEl.innerHTML = "";
    tiles.hidden = false;
    if (empty) empty.hidden = true;
    return;
  }
  tiles.hidden = true;
  const rank = window.rankQuery;
  const catalog = hubCatalog();
  const hits = typeof rank === "function" ? rank(q, catalog) : [];
  if (!hits.length) {
    hitsEl.hidden = true;
    hitsEl.innerHTML = "";
    if (empty) {
      empty.hidden = false;
      empty.textContent = ui.empty;
    }
    return;
  }
  if (empty) empty.hidden = true;
  hitsEl.hidden = false;
  hitsEl.innerHTML = hits
    .map((hit) => {
      const rec = hit.record;
      const qParam = encodeURIComponent(q);
      const hash = encodeURIComponent(rec.hash || rec.names[0] || "");
      const href = rec.href + "?q=" + qParam + "#" + hash;
      const badge =
        hit.why === "exact" ? `<span class="exact-badge">${esc(ui.exact)}</span>` : "";
      return `<a class="hub-hit" href="${esc(href)}">
        <span class="hub-hit-book">${esc(hubBookLabel(rec.book))}${badge}</span>
        <span class="hub-hit-title"><code>${esc(rec.label)}</code> ${esc(rec.blurb || "")}</span>
      </a>`;
    })
    .join("");
}

function readLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en") return "en";
    if (saved === "zh") return "zh";
  } catch {
    /* ignore */
  }
  return "zh";
}

function saveLang(lang) {
  const value = lang === "en" ? "en" : "zh";
  try {
    localStorage.setItem(LANG_KEY, value);
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

function relocateUnboundStar(s) {
  let moved = false;
  s = s.replace(/(\S)\s+([*∗])\s+(\S)/g, (m, left, _star, right) => {
    if (/\d$/.test(left) && /^\d/.test(right)) return m;
    if (/\S$/.test(left) && /^\p{L}/u.test(right)) {
      moved = true;
      return `${left} ${right}`;
    }
    return m;
  });
  if (!moved) return s;
  const eq = s.lastIndexOf("=");
  if (eq < 0) return s;
  const head = s.slice(0, eq + 1);
  let rhs = s.slice(eq + 1);
  if (/\)\s*\^?\s*[∗*]/.test(rhs) || /∗\s*[,.]/.test(rhs)) return s;
  rhs = rhs.replace(/\)(?![\s\S]*\))/, ")^*");
  return head + rhs;
}

function mathHtml(value) {
  let s = String(value || "");
  s = s.replace(/<\s*\/?\s*script/gi, "");
  s = relocateUnboundStar(s);

  s = s.replace(/\^{([^}]+)}/g, "<sup>$1</sup>");
  s = s.replace(/_\{([^}]+)}/g, "<sub>$1</sub>");

  s = s.replace(/(\S)\^['′]/g, "$1′");
  s = s.replace(/<sup>['′]<\/sup>/g, "′");

  s = s.replace(/(\S)\^\\perp/g, "$1<sup>⊥</sup>");
  s = s.replace(/(\S)\^?\\dagger/g, "$1<sup>†</sup>");

  const token = "(?:\\d+|\\p{L}|[⊥⟂∗*†])";
  s = s.replace(new RegExp("(\\S)_(" + token + ")", "gu"), "$1<sub>$2</sub>");
  s = s.replace(new RegExp("(\\S)\\^(" + token + ")", "gu"), "$1<sup>$2</sup>");

  s = s.replace(/([^>\s])∗/g, "$1<sup>∗</sup>");
  s = s.replace(/<sup>\*<\/sup>/g, "<sup>∗</sup>");
  s = s.replace(/<sup>⟂<\/sup>/g, "<sup>⊥</sup>");

  s = s.replace(/([i𝑖])<sub>\s*2\s*<\/sub>/g, "$1<sup>2</sup>");
  s = s.replace(/([abcdn0𝑎𝑏𝑐𝑑])\s*<sub>\s*[i𝑖]\s*<\/sub>/gi, "$1𝑖");

  return linkifyRefs(s);
}

function aliasList() {
  return window.SEARCH_ALIASES || {};
}

function lookupAliases() {
  const map = aliasList();
  const keys = Array.prototype.slice.call(arguments);
  const out = [];
  keys.forEach((key) => {
    const list = map[key] || map[String(key || "").toLowerCase()] || [];
    list.forEach((item) => {
      if (item && out.indexOf(item) < 0) out.push(item);
    });
  });
  return out;
}

function commandSearchRecords(rows) {
  return rows.map((row) => {
    const name = String(row.name || "");
    return {
      names: [name],
      aliases: lookupAliases(name),
      title: [row.summary_en, row.summary_zh].join(" "),
      chip: [row.category_name_en, row.category_name_zh, row.category_slug].join(" "),
      body: [row.example, row.options_json].join(" "),
      item: row,
    };
  });
}

function entrySearchRecords(rows) {
  return rows.map((row) => ({
    names: [row.id, row.number, stripTags(row.name_en), stripTags(row.name_zh)],
    aliases: lookupAliases(row.id, row.number, row.chapter, row.category_slug),
    title: [stripTags(row.name_en), stripTags(row.name_zh)].join(" "),
    chip: [row.category_name_en, row.category_name_zh, row.chapter].join(" "),
    body: [stripTags(row.statement_en), stripTags(row.statement_zh)].join(" "),
    item: row,
  }));
}

function rankedItems(q, records) {
  const rank = window.rankQuery;
  if (typeof rank !== "function") {
    return records.map((rec) => rec.item);
  }
  const hits = rank(q, records);
  state.exactHit = hits.length === 1 && hits[0].why === "exact";
  return hits.map((hit) => hit.record.item);
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
  return rankedItems(q, entrySearchRecords(rows));
}

function queryCommands() {
  state.exactHit = false;
  const q = parseQuery(state.query);

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

  sql += " ORDER BY c.name COLLATE NOCASE";
  const stmt = state.db.prepare(sql);
  stmt.bind(params);
  const rows = rowsFrom(stmt);
  if (!q) return rows;
  return rankedItems(q, commandSearchRecords(rows));
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
    const enterTitle = document.getElementById("tile-enter-title");
    const enterHint = document.getElementById("tile-enter-hint");
    if (enterTitle) enterTitle.textContent = ui.enterTile;
    if (enterHint) enterHint.textContent = ui.enterHint;
    const sqlTitle = document.getElementById("tile-sql-title");
    const sqlHint = document.getElementById("tile-sql-hint");
    if (sqlTitle) sqlTitle.textContent = ui.sqlTile;
    if (sqlHint) sqlHint.textContent = ui.sqlHint;
    const grokTitle = document.getElementById("tile-grok-title");
    const grokHint = document.getElementById("tile-grok-hint");
    if (grokTitle) grokTitle.textContent = ui.grokTile;
    if (grokHint) grokHint.textContent = ui.grokHint;
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
  if (searchLabel) searchLabel.textContent = isHub ? ui.hubSearchLabel || ui.searchLabel : ui.searchLabel;
  if (searchInput) searchInput.placeholder = searchPlaceholder();
  const hint = document.getElementById("search-hint");
  if (hint) hint.textContent = ui.searchHint;
  if (categoryNav) categoryNav.setAttribute("aria-label", ui.catsLabel);
  syncChipToggle();
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
    .map((item) => {
      const cases = renderCases(item.text);
      return `<li>${cases || withEnNote(item.text, item.note)}</li>`;
    })
    .join("")}</ul>`;
}

function renderCases(text) {
  const raw = String(text || "");
  const looks =
    (/1\s*(?:if|若)/.test(raw) && /0\s*(?:if|若)/.test(raw)) ||
    (/\{1\s*if/.test(raw) && /0\s*if/.test(raw)) ||
    (/[⎧⎨⎩]/.test(raw) && /1/.test(raw) && /0/.test(raw));
  if (!looks) return null;
  const t = raw
    .replace(/[⎧⎨⎩⎪│]/g, " ")
    .replace(/[{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const cond = "(\\S+\\s*[=≠]\\s*\\S+)";
  let m = t.match(
    new RegExp(
      "^1\\s*[,，]?\\s*(?:if|若)\\s+" +
        cond +
        "\\s+(.+?)\\s*=\\s*0\\s*[,，]?\\s*(?:if|若)\\s+" +
        cond +
        "\\.?$"
    )
  );
  const ifWord = /若/.test(raw) ? "若 " : "if ";
  if (m) return casesHtml(m[2], m[1], m[3], ifWord);
  m = t.match(
    new RegExp(
      "^(.+?)\\s*=\\s*1\\s*[,，]?\\s*(?:if|若)\\s+" +
        cond +
        "\\s+0\\s*[,，]?\\s*(?:if|若)\\s+" +
        cond +
        "\\.?$"
    )
  );
  if (m) return casesHtml(m[1], m[2], m[3], ifWord);
  return null;
}

function casesHtml(lhs, whenOne, whenZero, ifWord) {
  const word = ifWord || "if ";
  const tidy = (s) => String(s || "").trim().replace(/[.,。．]+$/g, "");
  return `<div class="cases-wrap"><span class="cases-lhs">${mathHtml(
    tidy(lhs)
  )} =</span><span class="cases-brace" aria-hidden="true">{</span><table class="cases"><tbody><tr><td>1</td><td>${mathHtml(
    word + tidy(whenOne)
  )}</td></tr><tr><td>0</td><td>${mathHtml(
    word + tidy(whenZero)
  )}</td></tr></tbody></table></div>`;
}

function looksPmatrix(s) {
  const t = String(s || "");
  return /[│⎛⎜⎝⎞⎟⎠]/.test(t) || /\)\|\|\(/.test(t);
}

function stripPmatrixJunk(s) {
  return String(s || "")
    .replace(/[│⎛⎜⎝⎞⎟⎠]/g, " ")
    .replace(/\)\|\|\(/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pmatrixHtml(tl, tr, bl, br) {
  return `<span class="pmatrix"><table><tbody><tr><td>${mathHtml(
    tl
  )}</td><td>⋯</td><td>${mathHtml(tr)}</td></tr><tr><td>⋮</td><td></td><td>⋮</td></tr><tr><td>${mathHtml(
    bl
  )}</td><td>⋯</td><td>${mathHtml(br)}</td></tr></tbody></table></span>`;
}

function pmatrixColHtml(entries) {
  const cells = Array.isArray(entries) ? entries.filter((cell) => cell != null && String(cell).length) : [];
  if (!cells.length) return "";
  const rows = cells
    .map((cell) => {
      const t = String(cell);
      if (t === "⋮" || t === "⋯" || t === "…") return `<tr><td>${t}</td></tr>`;
      return `<tr><td>${mathHtml(t)}</td></tr>`;
    })
    .join("");
  return `<span class="pmatrix pmatrix-col"><table><tbody>${rows}</tbody></table></span>`;
}

function pmatrixSpec(tl, tr, bl, br) {
  return { tl, tr, bl, br };
}

const COL_ENTRIES_BN = ["𝑏_1", "⋮", "𝑏_𝑛"];

const HARDCODED_PMATRIX = {
  "3.29": {
    kind: "single",
    label: "𝐴 =",
    items: [pmatrixSpec("𝐴_{1,1}", "𝐴_{1,𝑛}", "𝐴_{𝑚,1}", "𝐴_{𝑚,𝑛}")],
  },
  "3.34": {
    kind: "add",
    ops: ["+", "="],
    items: [
      pmatrixSpec("𝐴_{1,1}", "𝐴_{1,𝑛}", "𝐴_{𝑚,1}", "𝐴_{𝑚,𝑛}"),
      pmatrixSpec("𝐶_{1,1}", "𝐶_{1,𝑛}", "𝐶_{𝑚,1}", "𝐶_{𝑚,𝑛}"),
      pmatrixSpec(
        "𝐴_{1,1}+𝐶_{1,1}",
        "𝐴_{1,𝑛}+𝐶_{1,𝑛}",
        "𝐴_{𝑚,1}+𝐶_{𝑚,1}",
        "𝐴_{𝑚,𝑛}+𝐶_{𝑚,𝑛}"
      ),
    ],
  },
  "3.36": {
    kind: "scale",
    left: "𝜆",
    ops: ["="],
    items: [
      pmatrixSpec("𝐴_{1,1}", "𝐴_{1,𝑛}", "𝐴_{𝑚,1}", "𝐴_{𝑚,𝑛}"),
      pmatrixSpec("𝜆𝐴_{1,1}", "𝜆𝐴_{1,𝑛}", "𝜆𝐴_{𝑚,1}", "𝜆𝐴_{𝑚,𝑛}"),
    ],
  },
  "3.50": {
    kind: "col",
    entries: COL_ENTRIES_BN.slice(),
  },
  "3.73": {
    kind: "col",
    label: "ℳ(𝑣) =",
    entries: COL_ENTRIES_BN.slice(),
  },
};

function pmatrixReady(part) {
  if (!part) return false;
  if (part.kind === "col") {
    return Array.isArray(part.entries) && part.entries.length > 0;
  }
  return Array.isArray(part.items) && part.items.length > 0;
}

function unwrapPmatrixExpr(html) {
  const s = String(html || "").trim();
  const m = s.match(/^<div class="pmatrix-expr">([\s\S]*)<\/div>$/);
  return m ? m[1] : s;
}

function renderPmatrixEq(part, fallbackId) {
  const spec = pmatrixReady(part)
    ? part
    : HARDCODED_PMATRIX[fallbackId] || HARDCODED_PMATRIX[String(fallbackId || "")];
  if (!spec) return "";
  if (spec.kind === "col") {
    const entries =
      Array.isArray(spec.entries) && spec.entries.length ? spec.entries : COL_ENTRIES_BN;
    const col = pmatrixColHtml(entries);
    if (!col) {
      const hard = HARDCODED_PMATRIX[fallbackId];
      if (hard && hard !== spec) return renderPmatrixEq(hard, fallbackId);
      return "";
    }
    const bits = [];
    if (spec.label) bits.push(`<span class="pmatrix-op">${mathHtml(spec.label)}</span>`);
    bits.push(col);
    return `<div class="pmatrix-expr">${bits.join("")}</div>`;
  }
  const items = spec.items;
  if (!items || !items.length) {
    const hard = HARDCODED_PMATRIX[fallbackId];
    if (!hard) return "";
    return renderPmatrixEq(hard, fallbackId);
  }
  const bits = [];
  if (spec.kind === "single" && spec.label) {
    bits.push(`<span class="pmatrix-op">${mathHtml(spec.label)}</span>`);
  }
  if (spec.kind === "scale" && spec.left) {
    bits.push(`<span class="pmatrix-op">${mathHtml(spec.left)}</span>`);
  }
  const ops = spec.ops || [];
  items.forEach((m, i) => {
    if (i && ops[i - 1]) {
      bits.push(`<span class="pmatrix-op">${mathHtml(ops[i - 1])}</span>`);
    }
    bits.push(pmatrixHtml(m.tl, m.tr, m.bl, m.br));
  });
  const html = bits.join("");
  if (!html || !/class="pmatrix"/.test(html)) {
    const hard = HARDCODED_PMATRIX[fallbackId];
    if (hard && hard !== spec) return renderPmatrixEq(hard, fallbackId);
    return "";
  }
  return `<div class="pmatrix-expr">${html}</div>`;
}

function extractPairs(chunk) {
  const cell =
    "(?:𝜆|λ)?(?:𝐴|A|𝐶|C|𝐵|B|𝑏)(?:_\\{[^}]+\\})?(?:\\s*\\+\\s*(?:𝐴|A|𝐶|C)(?:_\\{[^}]+\\})?)?";
  const re = new RegExp(
    `(${cell})\\s*(?:⋯|…|·\\s*·\\s*·)\\s*(${cell})`,
    "g"
  );
  const pairs = [];
  let m;
  while ((m = re.exec(chunk))) pairs.push({ a: m[1], b: m[2], raw: m[0] });
  return pairs;
}

function parsePmatrixExpr(raw) {
  const cleaned = stripPmatrixJunk(raw);
  if (!cleaned) return null;
  const chunks = cleaned.split(/⋮\s*⋮\.?/);
  const tops = [];
  const bots = [];
  const ops = [];
  chunks.forEach((chunk) => {
    const pairs = extractPairs(chunk);
    let rest = chunk;
    pairs.forEach((p) => {
      rest = rest.replace(p.raw, " ");
    });
    rest = rest.replace(/[⋯….]+/g, " ").replace(/\s+/g, " ").trim();
    if (!pairs.length) {
      if (rest) ops.push(rest);
      return;
    }
    if (tops.length === 0 || bots.length >= tops.length) {
      pairs.forEach((p) => tops.push(p));
      if (rest) ops.push(rest);
      return;
    }
    const need = tops.length - bots.length;
    pairs.slice(0, need).forEach((p) => bots.push(p));
    pairs.slice(need).forEach((p) => tops.push(p));
    if (rest) ops.push(rest);
  });
  if (!tops.length || tops.length !== bots.length) return null;
  const pieces = [];
  const opStr = ops.join(" ");
  const scalar = /(?:^|\s)(𝜆|λ)(?:\s|$)/.test(opStr);
  if (scalar) pieces.push(`<span class="pmatrix-op">${mathHtml("𝜆")}</span>`);
  tops.forEach((top, i) => {
    if (i) {
      const op = opStr.includes("=") && i === tops.length - 1 ? "=" : opStr.includes("+") ? "+" : "";
      if (op) pieces.push(`<span class="pmatrix-op">${esc(op)}</span>`);
    }
    pieces.push(pmatrixHtml(top.a, top.b, bots[i].a, bots[i].b));
  });
  const labelM = cleaned.match(/^\s*(𝐴|A|𝐶|C|ℳ(?:\([^)]*\))?|𝜆|λ)\s*=/);
  const firstChunk = chunks[0] || "";
  const label = firstChunk.match(/(𝐴|A|𝐶|C)\s*=\s*$/);
  let html = pieces.join("");
  if (label && tops.length === 1) {
    html = `<span class="pmatrix-op">${mathHtml(label[1] + " =")}</span>${pieces.join("")}`;
  } else if (labelM && tops.length === 1 && !scalar) {
    html = `<span class="pmatrix-op">${mathHtml(labelM[1] + " =")}</span>${pmatrixHtml(
      tops[0].a,
      tops[0].b,
      bots[0].a,
      bots[0].b
    )}`;
  }
  return html;
}

function renderPmatrix(text) {
  const raw = String(text || "");
  if (!looksPmatrix(raw) && !(/⋮/.test(raw) && /⋯/.test(raw) && /_\{1,1\}/.test(raw))) {
    return null;
  }
  const html = parsePmatrixExpr(raw);
  if (html) return `<div class="pmatrix-expr">${html}</div>`;
  if (looksPmatrix(raw)) return "";
  return null;
}

function englishBeforeMatrix(text) {
  const src = String(text || "");
  const idx = src.search(/[⎛⎜⎝│]|[𝐴A𝐶C]_\{\s*1\s*,/);
  if (idx <= 0) return looksPmatrix(src) ? "" : src;
  return src.slice(0, idx).replace(/[⎛⎜⎝⎞⎟⎠│]/g, "").trim();
}

function splitClauses(text) {
  const src = String(text || "");
  if (!/\(a\)/.test(src) || !/\(b\)/.test(src)) return null;
  const bits = src.split(/(?=\([a-z]\))/);
  const items = [];
  let lead = "";
  bits.forEach((bit, index) => {
    const m = bit.match(/^\(([a-z])\)\s*([\s\S]*)/);
    if (m) items.push({ mark: m[1], text: String(m[2] || "").trim() });
    else if (index === 0) lead = bit.trim();
  });
  if (items.length < 2) return null;
  return { lead, items };
}

function renderClauses(text, note) {
  const split = splitClauses(text);
  if (!split) return `<p class="math-prose">${withEnNote(text, note)}</p>`;
  let html = "";
  if (split.lead) html += `<p class="math-prose">${mathHtml(split.lead)}</p>`;
  html += `<div class="clause-list">${split.items
    .map(
      (item) =>
        `<div class="clause-row"><span class="clause-mark">(${esc(
          item.mark
        )})</span><span class="clause-text">${mathHtml(item.text)}</span></div>`
    )
    .join("")}</div>`;
  if (note && state.lang === "zh") {
    const label = t().enOriginal || "英文原句";
    html += ` <span class="en-note">${esc(label)}</span>`;
  }
  return html;
}

function formulaInner(text, note) {
  const cases = renderCases(text);
  if (cases) {
    if (!note || state.lang !== "zh") return cases;
    const label = t().enOriginal || "英文原句";
    return `${cases} <span class="en-note">${esc(label)}</span>`;
  }
  const matrix = renderPmatrix(text);
  if (matrix === "") return "";
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
  if (!inner) return "";
  if (eq) {
    return `<div class="math-block has-eq" id="eq-${esc(eq)}"><span class="eq-num">(${esc(
      eq
    )})</span><div class="eq-math">${inner}</div></div>`;
  }
  return `<div class="math-block">${inner}</div>`;
}

function isMatrixFragment(text) {
  const t = String(text || "");
  if (looksPmatrix(t)) return true;
  if (/⋮/.test(t) && /(?:⋯|…|\+)/.test(t)) return true;
  if (/_\{[𝑚m],\s*1\}/.test(t) && /(?:⋯|…)/.test(t)) return true;
  return false;
}

function entryBody(row) {
  if (String(row.id) === "3.50" || String(row.number) === "3.50") { /* FORCE_350 */
    return `<div class="math-prose">Suppose <i>A</i> is an <i>m</i>-by-<i>n</i> matrix and <span class="pmatrix-inline"><i>b</i> = <span class="pmatrix pmatrix-col"><span class="pmatrix-rows"><span><i>b</i><sub>1</sub></span><span>⋮</span><span><i>b</i><sub>n</sub></span></span></span></span> is an <i>n</i>-by-1 matrix. Then</div><div class="math-block"><span class="eq-math"><i>Ab</i> = <i>b</i><sub>1</sub><i>A</i><sub>⋅,1</sub> + ⋯ + <i>b</i><sub>n</sub><i>A</i><sub>⋅,n</sub></span></div><div class="math-prose">In other words, <i>Ab</i> is a linear combination of the columns of <i>A</i>, with the scalars that multiply the columns coming from <i>b</i>.</div>`;
  }

  const layout = parseLayout(row.layout_json);
  const body = Array.isArray(layout.body) ? layout.body : [];
  const chunks = [];
  let bullets = [];
  for (let i = 0; i < body.length; i++) {
    const part = body[i];
    const kind = part && part.t;
    const picked = pickLinearContent(part.en, part.zh);
    if (kind === "bullet") {
      bullets.push(picked);
      continue;
    }
    if (bullets.length) {
      chunks.push(flushBullets(bullets));
      bullets = [];
    }
    if (kind === "pmatrix-eq") {
      const html =
        renderPmatrixEq(part, row.id) ||
        renderPmatrixEq(HARDCODED_PMATRIX[row.id], row.id);
      if (!html) continue;
      const thenPicked = pickLinearContent(part.en || "", part.zh || "");
      const thenHtml = thenPicked.text
        ? ` <span class="pmatrix-then">${withEnNote(thenPicked.text, thenPicked.note)}</span>`
        : "";
      const isCol =
        part.kind === "col" || (HARDCODED_PMATRIX[row.id] || {}).kind === "col";
      const prev = chunks[chunks.length - 1] || "";
      const colInner = unwrapPmatrixExpr(html);
      if (isCol && thenHtml && /^<p class="math-prose">/.test(prev) && /=\s*<\/p>\s*$/.test(prev)) {
        chunks[chunks.length - 1] = prev.replace(
          /(\S+(?:\([^)]*\))?)\s*=\s*<\/p>\s*$/u,
          `<span class="pmatrix-inline">$1 = ${colInner}</span>${thenHtml}</p>`
        );
        continue;
      }
      if (isCol && thenHtml) {
        chunks.push(
          `<p class="math-prose">${colInner}${thenHtml}</p>`
        );
        continue;
      }
      chunks.push(`<div class="math-block">${html}</div>`);
      continue;
    }
    const text = picked.text || "";
    const run = isMatrixFragment(text) || (/_\{1,\s*1\}/.test(text) && /(?:⋯|…)/.test(text));
    if (!run) {
      if (kind === "formula") {
        if (text) chunks.push(formulaBlock(part, picked));
      } else if (text) {
        chunks.push(renderClauses(text, picked.note));
      }
      continue;
    }
    const prefix = englishBeforeMatrix(text);
    if (prefix) chunks.push(renderClauses(prefix, false));
    let blob = "";
    let j = i;
    while (j < body.length) {
      const nxt = body[j];
      if (nxt.t === "bullet") break;
      const pk = pickLinearContent(nxt.en, nxt.zh);
      const t2 = pk.text || "";
      if (j > i && !isMatrixFragment(t2) && !looksPmatrix(t2) && !(/_\{[1𝑚m],/.test(t2) && /(?:⋯|…)/.test(t2))) {
        break;
      }
      const idx = t2.search(/[⎛⎜⎝│]|[𝐴A𝐶C]_\{\s*1\s*,/);
      blob += " " + (idx >= 0 ? t2.slice(idx) : t2);
      j += 1;
    }
    i = j - 1;
    const html = renderPmatrix(blob);
    if (html) chunks.push(`<div class="math-block">${html}</div>`);
  }
  if (bullets.length) chunks.push(flushBullets(bullets));
  if (!chunks.length) {
    const statement = pickLinearContent(row.statement_en, row.statement_zh);
    if (statement.text) {
      chunks.push(renderClauses(statement.text, statement.note));
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
        <article class="cmd" id="${esc(row.name)}" data-name="${esc(row.name)}" data-slug="${esc(row.category_slug)}">
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
  if (isHub) {
    applyChrome();
    renderHubSearch();
    return;
  }
  if (isHandbook && state.db) render();
  else applyChrome();
}

function bind() {
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim();
      if (isHub) renderHubSearch();
      else render();
    });
  }

  const chipToggle = document.getElementById("chip-toggle");
  if (chipToggle) {
    chipToggle.addEventListener("click", () => {
      const bar = toolbarEl();
      if (!bar) return;
      bar.classList.toggle("chips-open");
      syncChipToggle();
    });
  }

  if (categoryNav) {
    categoryNav.addEventListener("click", (event) => {
      const kindBtn = event.target.closest("[data-kind]");
      if (kindBtn) {
        const next = kindBtn.dataset.kind || "";
        state.kind = state.kind === next ? "" : next;
        render();
        closeChips();
        return;
      }
      const button = event.target.closest("[data-slug]");
      if (!button) return;
      state.category = button.dataset.slug || "";
      render();
      closeChips();
    });
  }

  if (window.matchMedia) {
    const mq = window.matchMedia("(max-width: 719px)");
    const onWidth = () => applyChrome();
    if (mq.addEventListener) mq.addEventListener("change", onWidth);
    else if (mq.addListener) mq.addListener(onWidth);
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
  let raw = String(hash || "").replace(/^#/, "");
  if (!raw) return;
  try {
    raw = decodeURIComponent(raw);
  } catch {
    /* keep */
  }
  const m = /^(card|eq)-(\d{1,2}\.\d{1,3})$/.exec(raw);
  if (m) {
    let id = m[2];
    if (m[1] === "eq") {
      const map = (HANDBOOK_DATA && HANDBOOK_DATA.eq_map) || {};
      id = map[id] || id;
    }
    if (!state.query && searchInput) {
      searchInput.value = id;
      state.query = id;
    }
    state.open.add(id);
    render();
    const el = document.getElementById(raw) || document.getElementById(`card-${id}`);
    if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
    return;
  }
  if (!searchInput) return;
  const id = raw.replace(/^card-/, "");
  state.open.add(id);
  if (!state.query) {
    searchInput.value = id;
    state.query = id;
  }
  render();
  const el =
    document.getElementById(raw) ||
    document.getElementById(id) ||
    document.querySelector(`[data-name="${CSS.escape ? CSS.escape(id) : id}"]`);
  if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
}

async function init() {
  const params = new URLSearchParams(location.search);
  const langParam = params.get("lang");
  if (langParam === "en" || langParam === "zh") {
    state.lang = langParam;
    saveLang(langParam);
  }
  applyChrome();
  bind();
  if (isHub) {
    renderHubSearch();
    return;
  }
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
    if (params.has("q")) {
      searchInput.value = params.get("q") || "";
      state.query = searchInput.value.trim();
    }
    if (params.has("cat")) state.category = params.get("cat") || "";
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
