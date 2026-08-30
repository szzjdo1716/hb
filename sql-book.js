const LANG_KEY = "hb-lang";

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    title: "数据库入门",
    home: "首页",
    skip: "跳到卡片列表",
    lede: "用 notes.db 学 SQL。浏览器里可以试，本机用 sqlite3 或 DB Browser。",
    searchLabel: "搜索",
    searchPh: "copy, 复制  或  linear combination",
    catsLabel: "分类",
    all: "全部",
    status: (n, total) => `${n} / ${total} 张卡片`,
    empty: "没有匹配。试 join / 连接 / select",
    exact: "精确匹配",
    copy: "复制",
    copied: "已复制",
    detail: "详情",
    back: "返回列表",
    points: "要点",
    try: "试一试",
    run: "运行",
    reset: "重置",
    download: "下载 notes.db",
    playTitle: "试一试 notes.db",
    chaos: "乱局",
    install: "安装 · PATH",
    sql: "SQL",
    fallback: "用 Terminal sqlite3",
    missing: "没有这张卡片。",
    footer:
      "本页为原创教学例子，不是任何书籍的摘录。 sqlite.org/cli.html · sqlitebrowser.org",
  },
  en: {
    htmlLang: "en",
    title: "SQL with SQLite",
    home: "Home",
    skip: "Skip to cards",
    lede: "Learn SQL in notes.db. Try it in the browser, or use sqlite3 / DB Browser on disk.",
    searchLabel: "Search",
    searchPh: "copy, rename  or  linear combination",
    catsLabel: "Categories",
    all: "All",
    status: (n, total) => `${n} of ${total} cards`,
    empty: "No match. Try join / 连接 / select",
    exact: "Exact match",
    copy: "Copy",
    copied: "Copied",
    detail: "Details",
    back: "Back to list",
    points: "Points",
    try: "Try",
    run: "Run",
    reset: "Reset",
    download: "Download notes.db",
    playTitle: "Try notes.db",
    chaos: "Chaos",
    install: "Install · PATH",
    sql: "SQL",
    fallback: "Use Terminal sqlite3",
    missing: "No such card.",
    footer:
      "Original teaching examples. Not a reproduction of any book. sqlite.org/cli.html · sqlitebrowser.org",
  },
};

const DATA = window.SQL_DATA || { categories: [], cards: [] };
const SEED_SQL = `
DROP TABLE IF EXISTS note_tags;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS tags;

CREATE TABLE tags (
  id   INTEGER PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);
CREATE TABLE notes (
  id    INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body  TEXT
);
CREATE TABLE note_tags (
  note_id INTEGER NOT NULL REFERENCES notes(id),
  tag_id  INTEGER NOT NULL REFERENCES tags(id),
  PRIMARY KEY (note_id, tag_id)
);

INSERT INTO tags (id, name) VALUES
  (1,'sql'), (2,'ops'), (3,'cli'), (4,'backup'), (5,'join');

INSERT INTO notes (id, title, body) VALUES
  (1,'learn SELECT', 'Read rows from a table'),
  (2,'backup the file', 'Keep a copy of the db'),
  (3,'join later', 'Two tables in one query'),
  (4,'count by tag', 'GROUP BY comes later'),
  (5,'update one row', 'Always use WHERE'),
  (6,'sqlite3 in Terminal', 'File on disk, not this tab'),
  (7,'index on tag', 'Faster WHERE tag = ...'),
  (8,'view sql_notes', 'Saved SELECT'),
  (9,'trigger demo', 'After INSERT'),
  (10,'practice JOIN', 'notes ↔ tags');

INSERT INTO note_tags (note_id, tag_id) VALUES
  (1,1), (2,2), (2,4), (3,1), (3,5),
  (4,1), (5,1), (6,3), (7,1), (8,1),
  (9,1), (10,5), (10,1);
`;

const state = {
  lang: readLang(),
  query: "",
  category: "",
  open: new Set(),
  exactHit: false,
  db: null,
  SQL: null,
};

const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categories");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");
const statusEl = document.getElementById("status");
const detailEl = document.getElementById("detail");
const langToggle = document.getElementById("lang-toggle");
const sqlInput = document.getElementById("sql-input");
const sqlOut = document.getElementById("sql-out");
const sqlFallback = document.getElementById("sql-fallback");
const sqlRun = document.getElementById("sql-run");
const sqlReset = document.getElementById("sql-reset");
const sqlDownload = document.getElementById("sql-download");
const sqlDownloadErr = document.getElementById("sql-download-err");

function t() {
  return I18N[state.lang] || I18N.zh;
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

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pick(card, zhKey, enKey) {
  if (state.lang === "en") return card[enKey] || card[zhKey] || "";
  return card[zhKey] || card[enKey] || "";
}

function catName(cat) {
  const row = DATA.categories.find((c) => c.id === cat);
  if (!row) return cat;
  return state.lang === "en" ? row.en : row.zh;
}

function toolbarEl() {
  return document.getElementById("toolbar");
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

function currentId() {
  const hash = String(location.hash || "").replace(/^#/, "").trim();
  if (!hash) return "";
  try {
    return decodeURIComponent(hash);
  } catch {
    return hash;
  }
}

function findCard(id) {
  const needle = String(id || "").toLowerCase();
  if (!needle) return null;
  return DATA.cards.find((card) => String(card.id).toLowerCase() === needle) || null;
}

function lookupAliases(id, name) {
  const map = window.SEARCH_ALIASES || {};
  return [].concat(map[id] || [], map[name] || [], map[String(name || "").toLowerCase()] || []);
}

function cardRecords(cards) {
  return cards.map((card) => {
    const cat = DATA.categories.find((c) => c.id === card.cat) || {};
    return {
      names: [card.id, card.name, card.title_zh, card.title_en],
      aliases: lookupAliases(card.id, card.name),
      title: [card.title_zh, card.title_en, card.blurb_zh, card.blurb_en].join(" "),
      chip: [cat.zh, cat.en, card.cat].join(" "),
      body: [card.sql, card.try_sql].join(" "),
      item: card,
    };
  });
}

function filterCards() {
  state.exactHit = false;
  let cards = DATA.cards.slice();
  if (state.category) cards = cards.filter((card) => card.cat === state.category);
  const q = String(state.query || "").trim();
  if (!q) return cards;
  const rank = window.rankQuery;
  if (typeof rank !== "function") return cards;
  const hits = rank(q, cardRecords(cards));
  state.exactHit = hits.length === 1 && hits[0].why === "exact";
  return hits.map((hit) => hit.record.item);
}

function copyBlock(command) {
  const ui = t();
  return `<div class="code-block">
      <pre><code>${esc(command)}</code></pre>
      <button type="button" class="copy-btn" data-copy="${esc(command)}">${esc(ui.copy)}</button>
    </div>`;
}

function applyChrome() {
  const ui = t();
  const inDetail = document.body.classList.contains("view-detail");
  document.documentElement.lang = ui.htmlLang;
  const skip = document.querySelector(".skip-link");
  const home = document.getElementById("home-link");
  const h1 = document.getElementById("page-title");
  const lede = document.getElementById("lede");
  const searchLabel = document.getElementById("search-label");
  const footer = document.getElementById("footer");
  const playTitle = document.getElementById("play-title");
  if (skip) skip.textContent = ui.skip;
  if (home) home.textContent = ui.home;
  if (!inDetail) {
    if (h1) h1.textContent = ui.title;
    if (lede) lede.textContent = ui.lede;
    document.title = ui.title;
  }
  if (searchLabel) searchLabel.textContent = ui.searchLabel;
  if (searchInput) searchInput.placeholder = ui.searchPh;
  if (footer) {
    const links =
      '<a href="https://sqlite.org/cli.html" target="_blank" rel="noopener noreferrer">sqlite.org/cli.html</a> · ' +
      '<a href="https://sqlitebrowser.org/" target="_blank" rel="noopener noreferrer">sqlitebrowser.org</a>';
    footer.innerHTML = esc(ui.footer.split("sqlite.org")[0]).trim() + " " + links;
  }
  if (playTitle) playTitle.textContent = ui.playTitle;
  if (sqlRun) sqlRun.textContent = ui.run;
  if (sqlReset) sqlReset.textContent = ui.reset;
  if (sqlDownload) sqlDownload.textContent = ui.download;
  if (sqlFallback) sqlFallback.textContent = ui.fallback;
  if (categoryNav) categoryNav.setAttribute("aria-label", ui.catsLabel);
  if (emptyEl) emptyEl.textContent = ui.empty;
  const headerBack = document.getElementById("header-back");
  if (headerBack) headerBack.textContent = ui.back;
  if (langToggle) {
    langToggle.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
    });
  }
  syncChipToggle();
}

function renderCategories() {
  const ui = t();
  const buttons = [{ id: "", zh: ui.all, en: ui.all }, ...DATA.categories].map((cat) => {
    const label = cat.id ? (state.lang === "en" ? cat.en : cat.zh) : ui.all;
    const slug = cat.id || "";
    return `<button type="button" class="chip" data-slug="${esc(slug)}" aria-pressed="${
      state.category === slug ? "true" : "false"
    }">${esc(label)}</button>`;
  });
  categoryNav.innerHTML = buttons.join("");
}

function renderCard(card, exact) {
  const ui = t();
  const open = state.open.has(card.id);
  const blurb = pick(card, "blurb_zh", "blurb_en");
  const badge = exact ? `<span class="exact-badge">${esc(ui.exact)}</span>` : "";
  return `<article class="cmd" id="${esc(card.id)}" data-id="${esc(card.id)}" data-cat="${esc(card.cat)}">
    <button type="button" class="cmd-head" aria-expanded="${open ? "true" : "false"}">
      <code>${esc(card.name)}</code>
      <span class="badge">${esc(catName(card.cat))}${badge}</span>
      <span class="chev" aria-hidden="true">${open ? "–" : "+"}</span>
      <p class="sum">${esc(blurb)}</p>
    </button>
    <div class="cmd-body" ${open ? "" : "hidden"}>
      <h3>${esc(ui.points)}</h3>
      <div class="prose"><p>${esc(blurb)}</p></div>
      <h3>${esc(ui.sql)}</h3>
      ${copyBlock(card.sql)}
      <button type="button" class="try-btn" data-try="${esc(card.id)}">${esc(ui.try)}</button>
      <a class="detail-link" href="#${encodeURIComponent(card.id)}">${esc(ui.detail)}</a>
    </div>
  </article>`;
}

function renderList() {
  const ui = t();
  const rows = filterCards();
  statusEl.textContent = ui.status(rows.length, DATA.cards.length);
  emptyEl.hidden = rows.length > 0;
  resultsEl.innerHTML = rows
    .map((card) => renderCard(card, state.exactHit && rows.length === 1))
    .join("");
}

function renderDetail(card) {
  const ui = t();
  const title = pick(card, "title_zh", "title_en");
  const blurb = pick(card, "blurb_zh", "blurb_en");
  const chaos = pick(card, "chaos_zh", "chaos_en");
  const install = pick(card, "install_zh", "install_en");
  document.title = `${card.name} · ${ui.title}`;
  const h1 = document.getElementById("page-title");
  if (h1) h1.textContent = card.name;
  const lede = document.getElementById("lede");
  if (lede) lede.textContent = title;
  const official = card.official
    ? `<p><a href="${esc(card.official)}" target="_blank" rel="noopener noreferrer">${esc(card.official)}</a></p>`
    : "";
  detailEl.innerHTML = `
    <p class="detail-tool"><code>${esc(card.name)}</code></p>
    <p class="detail-title">${esc(title)}</p>
    <section class="detail-section">
      <h2>${esc(ui.points)}</h2>
      <div class="prose"><p>${esc(blurb)}</p></div>
      ${copyBlock(card.sql)}
      <button type="button" class="try-btn" data-try="${esc(card.id)}">${esc(ui.try)}</button>
    </section>
    <section class="detail-section">
      <h2>${esc(ui.install)}</h2>
      <div class="prose"><p>${esc(install)}</p></div>
      ${official}
    </section>
    <section class="detail-section env-box">
      <h2>${esc(ui.chaos)}</h2>
      <div class="prose"><p>${esc(chaos)}</p></div>
    </section>
  `;
}

function showListView() {
  document.body.classList.add("view-list");
  document.body.classList.remove("view-detail");
  detailEl.hidden = true;
  detailEl.innerHTML = "";
  applyChrome();
  renderCategories();
  renderList();
}

function showDetailView(card) {
  document.body.classList.add("view-detail");
  document.body.classList.remove("view-list");
  detailEl.hidden = false;
  applyChrome();
  renderDetail(card);
}

function render() {
  const id = currentId();
  const card = findCard(id);
  if (id && !card) {
    showListView();
    emptyEl.hidden = false;
    emptyEl.textContent = t().missing;
    resultsEl.innerHTML = "";
    return;
  }
  if (card) {
    showDetailView(card);
    return;
  }
  showListView();
}

function goList(event) {
  if (event) event.preventDefault();
  const url = new URL(location.href);
  url.hash = "";
  history.pushState({}, "", url.pathname + url.search);
  render();
}

async function copyText(text, button) {
  const ui = t();
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    try {
      document.execCommand("copy");
    } catch {
      /* ignore */
    }
    area.remove();
  }
  if (!button) return;
  const prev = button.textContent;
  button.textContent = ui.copied;
  button.classList.add("copied");
  window.setTimeout(() => {
    button.textContent = prev;
    button.classList.remove("copied");
  }, 1200);
}

function showPlayError(message) {
  if (!sqlOut) return;
  sqlOut.innerHTML = `<p class="sql-err">${esc(message)}</p>`;
}

function renderTable(columns, rows) {
  if (!columns.length) {
    sqlOut.innerHTML = `<p class="sql-msg">${rows.length ? esc(String(rows.length)) : "ok"}</p>`;
    return;
  }
  const head = columns.map((col) => `<th>${esc(col)}</th>`).join("");
  const body = rows
    .map((row) => `<tr>${row.map((cell) => `<td>${esc(cell == null ? "" : cell)}</td>`).join("")}</tr>`)
    .join("");
  sqlOut.innerHTML = `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

function execSql(sql) {
  if (!state.db) {
    showPlayError(t().fallback);
    return;
  }
  const text = String(sql || "").trim();
  if (!text) {
    showPlayError("empty query");
    return;
  }
  try {
    const result = state.db.exec(text);
    if (!result.length) {
      sqlOut.innerHTML = `<p class="sql-msg">ok</p>`;
      return;
    }
    const last = result[result.length - 1];
    renderTable(last.columns || [], last.values || []);
  } catch (err) {
    showPlayError(err.message || String(err));
  }
}

function showDownloadError(message) {
  if (!sqlDownloadErr) return;
  const text = message ? String(message) : "export failed";
  sqlDownloadErr.hidden = false;
  sqlDownloadErr.textContent = text;
}

function clearDownloadError() {
  if (!sqlDownloadErr) return;
  sqlDownloadErr.hidden = true;
  sqlDownloadErr.textContent = "";
}

function downloadNotesDb() {
  clearDownloadError();
  if (!state.db) {
    showDownloadError(t().fallback);
    return;
  }
  let objectUrl = "";
  try {
    const exported = state.db.export();
    if (exported == null) {
      showDownloadError("export returned empty");
      return;
    }
    const bytes = new Uint8Array(exported);
    if (!bytes.byteLength) {
      showDownloadError("export produced an empty file");
      return;
    }
    const blob = new Blob([bytes], { type: "application/vnd.sqlite3" });
    objectUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = objectUrl;
    a.download = "notes.db";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (err) {
    showDownloadError(err && err.message ? err.message : String(err));
  } finally {
    if (objectUrl) {
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
    }
  }
}

function resetSeed() {
  if (!state.SQL) {
    showPlayError(t().fallback);
    return;
  }
  try {
    if (state.db) state.db.close();
    state.db = new state.SQL.Database();
    state.db.run(SEED_SQL);
    if (sqlInput) sqlInput.value = "SELECT * FROM notes;";
    execSql("SELECT * FROM notes;");
  } catch (err) {
    showPlayError(err.message || String(err));
  }
}

function tryCard(id) {
  const card = findCard(id);
  if (!card || !sqlInput) return;
  sqlInput.value = card.try_sql || card.sql || "";
  sqlInput.scrollIntoView({ block: "nearest" });
  execSql(sqlInput.value);
}

function wasmFailed(err) {
  if (sqlFallback) sqlFallback.hidden = false;
  const msg = err && err.message ? err.message : err ? String(err) : t().fallback;
  showPlayError(msg);
}

async function initPlayground() {
  if (typeof initSqlJs !== "function" || !window.SQL_WASM_BASE64) {
    wasmFailed("sql-wasm missing: keep vendor/sql-wasm.js and vendor/sql-wasm-binary.js next to this page");
    return;
  }
  try {
    const wasmBinary = Uint8Array.from(atob(window.SQL_WASM_BASE64), (ch) => ch.charCodeAt(0));
    state.SQL = await initSqlJs({ wasmBinary });
    resetSeed();
  } catch (err) {
    wasmFailed(err);
  }
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value;
    if (!currentId()) renderList();
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
    const btn = event.target.closest("[data-slug]");
    if (!btn) return;
    state.category = btn.dataset.slug || "";
    renderCategories();
    renderList();
    closeChips();
  });
}

const headerBack = document.getElementById("header-back");
if (headerBack) headerBack.addEventListener("click", goList);

if (resultsEl) {
  resultsEl.addEventListener("click", (event) => {
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      event.preventDefault();
      event.stopPropagation();
      copyText(copyBtn.getAttribute("data-copy") || "", copyBtn);
      return;
    }
    const tryBtn = event.target.closest("[data-try]");
    if (tryBtn) {
      event.preventDefault();
      event.stopPropagation();
      tryCard(tryBtn.getAttribute("data-try"));
      return;
    }
    if (event.target.closest(".detail-link")) return;
    const head = event.target.closest(".cmd-head");
    if (!head) return;
    const card = head.closest(".cmd");
    if (!card) return;
    const id = card.dataset.id;
    if (state.open.has(id)) state.open.delete(id);
    else state.open.add(id);
    renderList();
  });
}

if (detailEl) {
  detailEl.addEventListener("click", (event) => {
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      event.preventDefault();
      copyText(copyBtn.getAttribute("data-copy") || "", copyBtn);
      return;
    }
    const tryBtn = event.target.closest("[data-try]");
    if (tryBtn) {
      event.preventDefault();
      tryCard(tryBtn.getAttribute("data-try"));
    }
  });
}

if (langToggle) {
  langToggle.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-lang]");
    if (!btn) return;
    state.lang = btn.dataset.lang === "en" ? "en" : "zh";
    saveLang(state.lang);
    render();
  });
}

if (sqlRun) {
  sqlRun.addEventListener("click", () => execSql(sqlInput ? sqlInput.value : ""));
}
if (sqlReset) {
  sqlReset.addEventListener("click", () => resetSeed());
}
if (sqlDownload) {
  sqlDownload.addEventListener("click", () => downloadNotesDb());
}

window.addEventListener("hashchange", render);
window.addEventListener("popstate", render);

try {
  const params = new URLSearchParams(location.search);
  const langParam = params.get("lang");
  if (langParam === "en" || langParam === "zh") {
    state.lang = langParam;
    saveLang(langParam);
  }
  if (params.has("q") && searchInput) {
    searchInput.value = params.get("q") || "";
    state.query = searchInput.value.trim();
  }
} catch {
  /* ignore */
}

render();
initPlayground();
