const LANG_KEY = "hello-web-lang";

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    title: "进出手册",
    home: "首页",
    skip: "跳到工具列表",
    lede: "工具已经装好，却忘了怎么进去、出来、和卡住时怎么办。顺带记下会搞乱 Terminal 的 PATH 与配置。",
    searchLabel: "搜索",
    searchPh: "输入 vim、python3、:q!、brew …",
    searchPhShort: "vim 或 :q!",
    searchHint: "只输入名字或那一条命令时，只显示这一条。",
    catsLabel: "分类",
    all: "全部",
    status: (n, total) => `${n} / ${total} 个工具`,
    empty: "没有匹配的工具。",
    enter: "进入",
    quit: "退出",
    stuck: "卡住",
    inner: "里面常用",
    official: "官网",
    detail: "详情",
    back: "返回列表",
    copy: "复制",
    copied: "已复制",
    intro: "简介",
    io: "进入 / 退出 / 卡住",
    install: "安装 / 卸载 / 升级",
    installH: "安装",
    uninstallH: "卸载",
    upgradeH: "升级",
    version: "查版本",
    env: "配置 · PATH · 终端乱局",
    envFiles: "配置文件路径",
    envPath: "PATH 怎么加、怎么查",
    envChaos: "乱局",
    envPractices: "建议",
    footer: "Ctrl-C 停 · Ctrl-D 离开 · Ctrl-Z 是挂起(fg 拉回) · 乱码 reset && stty sane",
    exact: "精确匹配",
    missing: "没有这个工具。",
  },
  en: {
    htmlLang: "en",
    title: "Enter–Quit",
    home: "Home",
    skip: "Skip to tools",
    lede: "The tool is installed; this page is how you open it, leave it, unstick it, and stop PATH/config from breaking Terminal.",
    searchLabel: "Search",
    searchPh: "Type vim, python3, :q!, brew…",
    searchPhShort: "vim or :q!",
    searchHint: "A name or that exact command shows that tool only.",
    catsLabel: "Categories",
    all: "All",
    status: (n, total) => `${n} of ${total} tools`,
    empty: "No tools match that search.",
    enter: "Enter",
    quit: "Quit",
    stuck: "Stuck",
    inner: "Inside",
    official: "Official site",
    detail: "Details",
    back: "Back to list",
    copy: "Copy",
    copied: "Copied",
    intro: "About",
    io: "Enter / quit / stuck",
    install: "Install / uninstall / upgrade",
    installH: "Install",
    uninstallH: "Uninstall",
    upgradeH: "Upgrade",
    version: "Version",
    env: "Config · PATH · Terminal chaos",
    envFiles: "Config file paths",
    envPath: "PATH: add and inspect",
    envChaos: "Chaos",
    envPractices: "Practices",
    footer: "Ctrl-C stop · Ctrl-D leave · Ctrl-Z suspends (fg to resume) · garbage tty: reset && stty sane",
    exact: "Exact match",
    missing: "No such tool.",
  },
};

const DATA = window.ENTER_DATA || { categories: [], tools: [] };

const CAT_EN = {
  shell: "Shell",
  editor: "Editor",
  repl: "REPL",
  compile: "Compile",
  db: "Database",
  nb: "Notebook",
  pkg: "Package",
};

const state = {
  lang: readLang(),
  query: "",
  category: "",
  open: new Set(),
  exactHit: false,
};

const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categories");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");
const statusEl = document.getElementById("status");
const detailEl = document.getElementById("detail");
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

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pick(tool, zhKey, enKey) {
  if (state.lang === "en") return tool[enKey] || tool[zhKey] || "";
  return tool[zhKey] || tool[enKey] || "";
}

function catName(cat) {
  if (state.lang === "en" && CAT_EN[cat]) return CAT_EN[cat];
  const row = DATA.categories.find((c) => c.id === cat);
  if (!row) return cat;
  return state.lang === "en" ? CAT_EN[row.id] || row.en : row.zh;
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

function closeChipsIfPhone() {
  if (!isPhone()) return;
  const bar = toolbarEl();
  if (bar) bar.classList.remove("chips-open");
  syncChipToggle();
}

function searchPlaceholder() {
  const ui = t();
  if (isPhone() && ui.searchPhShort) return ui.searchPhShort;
  return ui.searchPh;
}

function currentId() {
  const hash = String(location.hash || "").replace(/^#/, "").trim();
  if (hash) {
    try {
      return decodeURIComponent(hash);
    } catch {
      return hash;
    }
  }
  try {
    return new URLSearchParams(location.search).get("id") || "";
  } catch {
    return "";
  }
}

function findTool(id) {
  const needle = String(id || "").toLowerCase();
  if (!needle) return null;
  return DATA.tools.find((tool) => String(tool.id).toLowerCase() === needle) || null;
}

function norm(value) {
  return String(value || "").trim().toLowerCase();
}

function commandSet(tool) {
  const set = new Set();
  const add = (raw) => {
    const s = String(raw || "").trim();
    if (!s) return;
    set.add(norm(s));
    s.split(/\s+then\s+|；|\/|,/i).forEach((part) => {
      const p = part.trim();
      if (p) set.add(norm(p));
    });
  };
  add(tool.name);
  add(tool.id);
  add(tool.enter);
  add(tool.quit);
  add(tool.stuck);
  add(tool.version_cmd);
  (tool.inner || []).forEach((row) => add(row.c));
  return set;
}

function filterTools() {
  const q = String(state.query || "").trim();
  const nq = norm(q);
  state.exactHit = false;
  const tools = DATA.tools.slice();

  if (nq) {
    const nameHits = tools.filter(
      (tool) => norm(tool.id) === nq || norm(tool.name) === nq
    );
    if (nameHits.length) {
      state.exactHit = nameHits.length === 1;
      return nameHits;
    }
    const cmdHits = tools.filter((tool) => commandSet(tool).has(nq));
    if (cmdHits.length) {
      state.exactHit = cmdHits.length === 1;
      return cmdHits;
    }
    const prefixHits = tools.filter(
      (tool) => norm(tool.id).startsWith(nq) || norm(tool.name).startsWith(nq)
    );
    if (prefixHits.length === 1) {
      state.exactHit = true;
      return prefixHits;
    }
    if (prefixHits.length) {
      return state.category
        ? prefixHits.filter((tool) => tool.cat === state.category)
        : prefixHits;
    }
    return [];
  }

  if (state.category) return tools.filter((tool) => tool.cat === state.category);
  return tools;
}

function rich(text) {
  const safe = esc(text);
  const withCode = safe.replace(/`([^`]+)`/g, "<code>$1</code>");
  return withCode
    .split(/\n+/)
    .map((p) => `<p>${p}</p>`)
    .join("");
}

function copyBlock(command) {
  const ui = t();
  return `<div class="code-block">
      <pre><code>${esc(command)}</code></pre>
      <button type="button" class="copy-btn" data-copy="${esc(command)}">${esc(ui.copy)}</button>
    </div>`;
}

function eqRow(label, command) {
  return `<div class="eq-row">
      <div class="eq-label">${esc(label)}</div>
      ${copyBlock(command)}
    </div>`;
}

function innerList(tool) {
  const rows = (tool.inner || [])
    .map((row) => {
      const meaning = state.lang === "en" ? row.en || row.zh : row.zh || row.en;
      return `<li><code>${esc(row.c)}</code><span>${esc(meaning)}</span></li>`;
    })
    .join("");
  return rows ? `<ul class="inner-list">${rows}</ul>` : "";
}

function officialLink(tool) {
  const ui = t();
  if (!tool.official) return "";
  return `<ul class="links"><li><a href="${esc(tool.official)}" target="_blank" rel="noopener noreferrer">${esc(ui.official)}</a></li></ul>`;
}

function applyChrome() {
  const ui = t();
  const inDetail = document.body.classList.contains("view-detail");
  document.documentElement.lang = ui.htmlLang;
  const skip = document.querySelector(".skip-link");
  const home = document.getElementById("home-link");
  const h1 = document.getElementById("page-title");
  const lede = document.getElementById("lede");
  const hint = document.getElementById("search-hint");
  const searchLabel = document.getElementById("search-label");
  const footer = document.getElementById("footer");
  if (skip) skip.textContent = ui.skip;
  if (home) home.textContent = ui.home;
  if (!inDetail) {
    if (h1) h1.textContent = ui.title;
    if (lede) lede.textContent = ui.lede;
    document.title = ui.title;
  }
  if (hint) hint.textContent = ui.searchHint;
  if (searchLabel) searchLabel.textContent = ui.searchLabel;
  if (searchInput) searchInput.placeholder = searchPlaceholder();
  if (footer) footer.textContent = ui.footer;
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
  const buttons = [{ id: "", zh: ui.all, en: ui.all }, ...DATA.categories]
    .map((cat) => {
      const label = cat.id
        ? state.lang === "en"
          ? CAT_EN[cat.id] || cat.en
          : cat.zh
        : ui.all;
      const slug = cat.id || "";
      return `<button type="button" class="chip" data-slug="${esc(slug)}" aria-pressed="${
        state.category === slug ? "true" : "false"
      }">${esc(label)}</button>`;
    });
  categoryNav.innerHTML = buttons.join("");
}

function renderCard(tool, exact) {
  const ui = t();
  const open = state.open.has(tool.id);
  const blurb = pick(tool, "blurb_zh", "blurb_en");
  const exactBadge = exact
    ? `<span class="exact-badge">${esc(ui.exact)}</span>`
    : "";
  return `<article class="cmd" data-id="${esc(tool.id)}" data-cat="${esc(tool.cat)}">
    <button type="button" class="cmd-head" aria-expanded="${open ? "true" : "false"}">
      <code>${esc(tool.name)}</code>
      <span class="badge">${esc(catName(tool.cat))}${exactBadge}</span>
      <span class="chev" aria-hidden="true">${open ? "–" : "+"}</span>
      <p class="sum">${esc(blurb)}</p>
      <p class="io-preview">
        <span><span class="io-k">${esc(ui.enter)}</span><code>${esc(tool.enter)}</code></span>
        <span><span class="io-k">${esc(ui.quit)}</span><code>${esc(tool.quit)}</code></span>
      </p>
    </button>
    <div class="cmd-body" ${open ? "" : "hidden"}>
      ${eqRow(ui.enter, tool.enter)}
      ${eqRow(ui.quit, tool.quit)}
      ${eqRow(ui.stuck, tool.stuck)}
      <h3>${esc(ui.inner)}</h3>
      ${innerList(tool)}
      <h3>${esc(ui.official)}</h3>
      ${officialLink(tool)}
      <a class="detail-link" href="#${encodeURIComponent(tool.id)}">${esc(ui.detail)}</a>
    </div>
  </article>`;
}

function renderList() {
  const ui = t();
  const rows = filterTools();
  const total = DATA.tools.length;
  statusEl.textContent = ui.status(rows.length, total);
  emptyEl.hidden = rows.length > 0;
  resultsEl.innerHTML = rows
    .map((tool) => renderCard(tool, state.exactHit && rows.length === 1))
    .join("");
}

function fileList(files) {
  if (!files || !files.length) return "";
  const items = files.map((f) => `<li><code>${esc(f)}</code></li>`).join("");
  return `<ul class="file-list">${items}</ul>`;
}

function renderDetail(tool) {
  const ui = t();
  const title = pick(tool, "title_zh", "title_en");
  const blurb = pick(tool, "blurb_zh", "blurb_en");
  const env = tool.env || {};
  document.title = `${tool.name} · ${ui.title}`;
  const h1 = document.getElementById("page-title");
  if (h1) h1.textContent = tool.name;
  const lede = document.getElementById("lede");
  if (lede) lede.textContent = title;
  detailEl.innerHTML = `
    <a class="back-link" id="back-link" href="enter.html">${esc(ui.back)}</a>
    <p class="detail-tool"><code>${esc(tool.name)}</code></p>
    <p class="detail-title">${esc(title)}</p>

    <section class="detail-section" id="intro">
      <h2>${esc(ui.intro)}</h2>
      <div class="prose">${rich(blurb)}</div>
    </section>

    <section class="detail-section" id="io">
      <h2>${esc(ui.io)}</h2>
      ${eqRow(ui.enter, tool.enter)}
      ${eqRow(ui.quit, tool.quit)}
      ${eqRow(ui.stuck, tool.stuck)}
      <h3>${esc(ui.inner)}</h3>
      ${innerList(tool)}
    </section>

    <section class="detail-section" id="install">
      <h2>${esc(ui.install)}</h2>
      <div class="install-grid">
        <div>
          <h3>${esc(ui.installH)}</h3>
          <div class="prose">${rich(pick(tool, "install_zh", "install_en"))}</div>
        </div>
        <div>
          <h3>${esc(ui.uninstallH)}</h3>
          <div class="prose">${rich(pick(tool, "uninstall_zh", "uninstall_en"))}</div>
        </div>
        <div>
          <h3>${esc(ui.upgradeH)}</h3>
          <div class="prose">${rich(pick(tool, "upgrade_zh", "upgrade_en"))}</div>
        </div>
      </div>
    </section>

    <section class="detail-section" id="version">
      <h2>${esc(ui.version)}</h2>
      ${copyBlock(tool.version_cmd)}
      ${officialLink(tool)}
    </section>

    <section class="detail-section env-box" id="env">
      <h2>${esc(ui.env)}</h2>
      <h3>${esc(ui.envFiles)}</h3>
      ${fileList(env.files)}
      <h3>${esc(ui.envPath)}</h3>
      <div class="prose">${rich(state.lang === "en" ? env.path_en : env.path_zh)}</div>
      <h3>${esc(ui.envChaos)}</h3>
      <div class="prose">${rich(state.lang === "en" ? env.chaos_en : env.chaos_zh)}</div>
      <h3>${esc(ui.envPractices)}</h3>
      <div class="prose">${rich(state.lang === "en" ? env.practices_en : env.practices_zh)}</div>
    </section>

    <section class="detail-section" id="official">
      <h2>${esc(ui.official)}</h2>
      ${officialLink(tool)}
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

function showDetailView(tool) {
  document.body.classList.add("view-detail");
  document.body.classList.remove("view-list");
  detailEl.hidden = false;
  applyChrome();
  renderDetail(tool);
}

function render() {
  const id = currentId();
  const tool = findTool(id);
  if (id && !tool) {
    showListView();
    emptyEl.hidden = false;
    emptyEl.textContent = t().missing;
    resultsEl.innerHTML = "";
    statusEl.textContent = t().status(0, DATA.tools.length);
    return;
  }
  if (tool) {
    showDetailView(tool);
    return;
  }
  showListView();
}

function goList(event) {
  if (event) event.preventDefault();
  const url = new URL(location.href);
  url.hash = "";
  url.searchParams.delete("id");
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
    closeChipsIfPhone();
  });
}

const headerBack = document.getElementById("header-back");
if (headerBack) {
  headerBack.addEventListener("click", goList);
}

if (window.matchMedia) {
  const mq = window.matchMedia("(max-width: 719px)");
  const onWidth = () => render();
  if (mq.addEventListener) mq.addEventListener("change", onWidth);
  else if (mq.addListener) mq.addListener(onWidth);
}

if (resultsEl) {
  resultsEl.addEventListener("click", (event) => {
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      event.preventDefault();
      event.stopPropagation();
      copyText(copyBtn.getAttribute("data-copy") || "", copyBtn);
      return;
    }
    const detail = event.target.closest(".detail-link");
    if (detail) return;
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
    const back = event.target.closest("#back-link");
    if (back) {
      goList(event);
      return;
    }
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      event.preventDefault();
      copyText(copyBtn.getAttribute("data-copy") || "", copyBtn);
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

window.addEventListener("hashchange", render);
window.addEventListener("popstate", render);

try {
  const langParam = new URLSearchParams(location.search).get("lang");
  if (langParam === "en" || langParam === "zh") {
    state.lang = langParam;
    saveLang(langParam);
  }
} catch {
  /* ignore */
}

render();
