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
    options: "常用选项",
    flag: "参数",
    meaning: "说明",
    manuals: "手册页",
    copy: "复制",
    copied: "已复制",
    exact: "精确匹配",
    home: "首页",
    hubTitle: "学习手册",
    hubLede: "先选一个主题。现在只有 Linux 可用。",
    hubSkip: "跳到主题",
    linuxTile: "Linux 命令手册",
    linuxHint: "打开手册",
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
    options: "Common options",
    flag: "Flag",
    meaning: "What it does",
    manuals: "Manual pages",
    copy: "Copy",
    copied: "Copied",
    exact: "Exact match",
    home: "Home",
    hubTitle: "Learning handbook",
    hubLede: "Pick a topic. Only Linux is available now.",
    hubSkip: "Skip to topics",
    linuxTile: "Linux command reference",
    linuxHint: "Open the handbook",
    soon: "Later",
    footer:
      "Open this file in a browser. Queries run in SQLite (sql.js) on your machine. Manual pages on man7.org and linux.die.net need a network connection.",
    sqliteFail: "SQLite files did not load. Keep the vendor folder next to this page.",
    sqliteFailStatus: "SQLite failed to load",
  },
};

const state = {
  db: null,
  category: "",
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
  return I18N[state.lang] || I18N.zh;
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

function pickText(row, enKey, zhKey) {
  if (state.lang === "zh") return row[zhKey] || row[enKey] || "";
  return row[enKey] || row[zhKey] || "";
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
    CREATE TABLE commands (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category_slug TEXT NOT NULL,
      summary_en TEXT NOT NULL,
      summary_zh TEXT NOT NULL,
      example TEXT NOT NULL,
      options_json TEXT NOT NULL,
      links_json TEXT NOT NULL
    );
    CREATE INDEX idx_commands_name ON commands(name);
    CREATE INDEX idx_commands_cat ON commands(category_slug);
  `);

  const insertCat = db.prepare(
    "INSERT INTO categories (slug, name_en, name_zh, sort_order) VALUES (?, ?, ?, ?)"
  );
  LINUX_DATA.categories.forEach((cat, index) => {
    insertCat.run([
      cat.slug,
      cat.name_en || cat.name || "",
      cat.name_zh || cat.name || "",
      index + 1,
    ]);
  });
  insertCat.free();

  const insertCmd = db.prepare(
    `INSERT INTO commands
      (name, category_slug, summary_en, summary_zh, example, options_json, links_json)
     VALUES (?, ?, ?, ?, ?, ?, ?)`
  );
  LINUX_DATA.commands.forEach((cmd) => {
    insertCmd.run([
      cmd.name,
      cmd.category,
      cmd.summary_en || cmd.summary || "",
      cmd.summary_zh || cmd.summary || "",
      cmd.example,
      JSON.stringify(cmd.options),
      JSON.stringify(cmd.links),
    ]);
  });
  insertCmd.free();
}

function countAll() {
  const stmt = state.db.prepare("SELECT COUNT(*) AS n FROM commands");
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

function queryCommands() {
  state.exactHit = false;
  const q = parseQuery(state.query);
  const names = knownNames();
  const tokens = q ? q.split(/\s+/).filter(Boolean) : [];
  const first = tokens[0] || "";

  let sql = `
    SELECT c.name, c.summary_en, c.summary_zh, c.example, c.options_json, c.links_json,
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
    if (names.has(first.toLowerCase())) {
      sql += " AND c.name = ? COLLATE NOCASE";
      params.push(first);
      state.exactHit = true;
    } else if (tokens.length === 1 && CMD_TOKEN.test(q)) {
      sql += " AND c.name LIKE ? COLLATE NOCASE";
      params.push(prefixNeedle(q));
    }
  }

  sql += " ORDER BY c.name COLLATE NOCASE";
  const stmt = state.db.prepare(sql);
  stmt.bind(params);
  let rows = rowsFrom(stmt);

  if (q && !names.has(first.toLowerCase()) && !(tokens.length === 1 && CMD_TOKEN.test(q))) {
    const needle = q.toLowerCase();
    rows = rows.filter((row) => {
      const summary = pickText(row, "summary_en", "summary_zh").toLowerCase();
      let options = [];
      try {
        options = JSON.parse(row.options_json);
      } catch {
        options = [];
      }
      const optText = options.map(optionMeaning).join(" ").toLowerCase();
      return summary.includes(needle) || optText.includes(needle);
    });
  }

  state.exactHit =
    Boolean(q) &&
    rows.length === 1 &&
    names.has(first.toLowerCase()) &&
    rows[0].name.toLowerCase() === first.toLowerCase();
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
  const footer = document.querySelector(".site-footer p");
  if (footer) footer.textContent = ui.footer;
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
  const buttons = [{ slug: "", name: t().all }, ...cats]
    .map(
      (cat) =>
        `<button type="button" class="chip" data-slug="${esc(cat.slug)}" aria-pressed="${
          state.category === cat.slug ? "true" : "false"
        }">${esc(cat.name)}</button>`
    )
    .join("");
  categoryNav.innerHTML = buttons;
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

function render() {
  applyChrome();
  renderCategories();
  const ui = t();
  const rows = queryCommands();
  const total = countAll();
  statusEl.textContent = ui.status(rows.length, total);
  emptyEl.hidden = rows.length !== 0;
  emptyEl.textContent = ui.empty;

  if (rows.length === 1) state.open.add(rows[0].name);

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

async function init() {
  applyChrome();
  bind();
  if (!isHandbook) return;
  if (statusEl) statusEl.textContent = t().loading;
  try {
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
    render();
  } catch (err) {
    if (statusEl) statusEl.textContent = t().sqliteFailStatus;
    const box = document.createElement("p");
    box.className = "fatal";
    box.textContent = err.message || String(err);
    resultsEl.replaceWith(box);
  }
}

init();
