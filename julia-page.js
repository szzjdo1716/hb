const LANG_KEY = "hb-lang";
const PAGE = document.body.dataset.page === "practice" ? "practice" : "lab";

const I18N = {
  zh: {
    htmlLang: "zh-CN",
    home: "首页",
    skip: "跳到卡片列表",
    searchLabel: "搜索",
    catsLabel: "分类",
    all: "全部",
    status: (n, total) => `${n} / ${total} 张卡片`,
    exact: "精确匹配",
    copy: "复制",
    copied: "已复制",
    detail: "详情",
    back: "返回列表",
    points: "要点",
    official: "官网",
    answer: "应看到",
    missing: "没有这张卡片。",
    pasteHint: "贴到 julia> 再按 Enter。",
    footer: "原创教学例子。不是任何书籍的复制。",
    lab: {
      title: "Julia 入门",
      lede: "安装到 REPL，再贴数组与字符串的短例子。练习在另一页。",
      searchPh: "julia, 安装, missing, Dict",
      empty: "没有匹配。试 julia / 安装 / missing / Dict",
      jump: "去练习",
      jumpHref: "julia-practice.html",
    },
    practice: {
      title: "Julia 练习",
      lede: "每条先复制，贴到 julia>，再按 Enter。答案在详情里。",
      searchPh: "mean, Dict, oak, 13",
      empty: "没有匹配。试 mean / Dict / oak",
      jump: "回入门",
      jumpHref: "julia.html",
    },
  },
  en: {
    htmlLang: "en",
    home: "Home",
    skip: "Skip to cards",
    searchLabel: "Search",
    catsLabel: "Categories",
    all: "All",
    status: (n, total) => `${n} of ${total} cards`,
    exact: "Exact match",
    copy: "Copy",
    copied: "Copied",
    detail: "Details",
    back: "Back to list",
    points: "Points",
    official: "Official",
    answer: "You should see",
    missing: "No such card.",
    pasteHint: "Paste at julia>, then press Enter.",
    footer: "Original teaching examples. Not a reproduction of any book.",
    lab: {
      title: "Julia essentials",
      lede: "Install, open the REPL, then paste short array and string examples. Practice is a second page.",
      searchPh: "julia, install, missing, Dict",
      empty: "No match. Try julia / install / missing / Dict",
      jump: "Practice",
      jumpHref: "julia-practice.html",
    },
    practice: {
      title: "Julia practice",
      lede: "Copy each drill, paste at julia>, press Enter. Answers are in Details.",
      searchPh: "mean, Dict, oak, 13",
      empty: "No match. Try mean / Dict / oak",
      jump: "Essentials",
      jumpHref: "julia.html",
    },
  },
};

const BUNDLE = window.JULIA_DATA || {};
const DATA = BUNDLE[PAGE] || { categories: [], cards: [] };

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
  const base = I18N[state.lang] || I18N.zh;
  return Object.assign({}, base, base[PAGE] || {});
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
  if (state.lang === "en") return card[enKey] || "";
  return card[zhKey] || "";
}

function cardName(card) {
  if (!card) return "";
  if (state.lang === "en") return card.name_en || card.name || "";
  return card.name_zh || card.name || "";
}

function catName(cat) {
  const row = DATA.categories.find((c) => c.id === cat);
  if (!row) return cat;
  return state.lang === "en" ? row.en || "" : row.zh || "";
}

function codeHtml(text) {
  return esc(String(text || ""))
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/`/g, "");
}

function proseHtml(text) {
  const html = codeHtml(text);
  if (!html) return "";
  return html
    .split(/\n+/)
    .map((p) => `<p>${p}</p>`)
    .join("");
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

function cardCmds(card) {
  if (Array.isArray(card.cmds)) return card.cmds.filter(Boolean);
  if (card.cmd) return [card.cmd];
  return [];
}

function cardRecords(cards) {
  return cards.map((card) => {
    const cat = DATA.categories.find((c) => c.id === card.cat) || {};
    return {
      names: [card.id, card.name, card.name_en, card.name_zh, card.title_zh, card.title_en],
      aliases: lookupAliases(card.id, card.name),
      title: [card.title_zh, card.title_en, card.blurb_zh, card.blurb_en].join(" "),
      chip: [cat.zh, cat.en, card.cat].join(" "),
      body: [
        cardCmds(card).join(" "),
        card.detail_zh,
        card.detail_en,
        card.answer_zh,
        card.answer_en,
        (card.extra_links || []).map((row) => [row.href, row.zh, row.en].join(" ")).join(" "),
        (card.steps || []).map((row) => [row.zh, row.en].join(" ")).join(" "),
      ].join(" "),
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

function moreLink(card) {
  return `<a class="detail-link" href="#${encodeURIComponent(card.id)}">${esc(t().detail)}</a>`;
}

function stepsHtml(card) {
  const rows = card.steps;
  if (!rows || !rows.length) return "";
  const items = rows
    .map((row) => {
      const text = state.lang === "en" ? row.en || row.zh : row.zh || row.en;
      return `<li>${codeHtml(text)}</li>`;
    })
    .join("");
  return `<ol class="dummy-steps">${items}</ol>`;
}

function pasteHintHtml() {
  if (PAGE !== "practice") return "";
  return `<p class="paste-hint">${esc(t().pasteHint)}</p>`;
}

function answerHtml(card) {
  const ans = pick(card, "answer_zh", "answer_en");
  if (!ans) return "";
  return `<h3>${esc(t().answer)}</h3><div class="prose">${proseHtml(ans)}</div>`;
}

function officialLinks(card) {
  const ui = t();
  const links = [];
  if (card.official) {
    links.push(
      `<p><a href="${esc(card.official)}" target="_blank" rel="noopener noreferrer">${esc(card.official)}</a></p>`
    );
  }
  (card.extra_links || []).forEach((row) => {
    const label = state.lang === "en" ? row.en || row.zh : row.zh || row.en;
    links.push(
      `<p><a href="${esc(row.href)}" target="_blank" rel="noopener noreferrer">${esc(label)} — ${esc(row.href)}</a></p>`
    );
  });
  if (!links.length) return "";
  return `<h3>${esc(ui.official)}</h3>${links.join("")}`;
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
  const jump = document.getElementById("jump-link");
  if (skip) skip.textContent = ui.skip;
  if (home) home.textContent = ui.home;
  if (!inDetail) {
    if (h1) h1.textContent = ui.title;
    if (lede) lede.textContent = ui.lede;
    document.title = ui.title;
  }
  if (searchLabel) searchLabel.textContent = ui.searchLabel;
  if (searchInput) searchInput.placeholder = ui.searchPh;
  if (jump) {
    jump.textContent = ui.jump;
    jump.setAttribute("href", ui.jumpHref);
  }
  if (footer) {
    footer.innerHTML =
      esc(ui.footer) +
      ' <a href="https://julialang.org" target="_blank" rel="noopener noreferrer">julialang.org</a> · ' +
      '<a href="https://docs.julialang.org" target="_blank" rel="noopener noreferrer">docs.julialang.org</a>';
  }
  if (categoryNav) categoryNav.setAttribute("aria-label", ui.catsLabel);
  if (emptyEl) emptyEl.textContent = ui.empty;
  const headerBack = document.getElementById("header-back");
  if (headerBack) headerBack.textContent = ui.back;
  const stickyBack = document.getElementById("sql-back-list");
  if (stickyBack) stickyBack.textContent = ui.back;
  if (langToggle) {
    langToggle.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang ? "true" : "false");
    });
  }
  syncChipToggle();
  syncSticky();
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
  const name = cardName(card);
  const badge = exact ? `<span class="exact-badge">${esc(ui.exact)}</span>` : "";
  const cmds = cardCmds(card).map(copyBlock).join("");
  return `<article class="cmd" id="${esc(card.id)}" data-id="${esc(card.id)}" data-cat="${esc(card.cat)}">
    <button type="button" class="cmd-head" aria-expanded="${open ? "true" : "false"}">
      <code>${esc(name)}</code>
      <span class="badge">${esc(catName(card.cat))}${badge}</span>
      <span class="chev" aria-hidden="true">${open ? "–" : "+"}</span>
      <p class="sum">${codeHtml(blurb)}</p>
    </button>
    <div class="cmd-body" ${open ? "" : "hidden"}>
      <h3>${esc(ui.points)}</h3>
      <div class="prose">${proseHtml(blurb)}</div>
      ${pasteHintHtml()}
      ${cmds}
      ${moreLink(card)}
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
  const name = cardName(card);
  const title = pick(card, "title_zh", "title_en");
  const blurb = pick(card, "blurb_zh", "blurb_en");
  const detail = pick(card, "detail_zh", "detail_en");
  document.title = `${name} · ${ui.title}`;
  const h1 = document.getElementById("page-title");
  if (h1) h1.textContent = name;
  const lede = document.getElementById("lede");
  if (lede) lede.textContent = title;
  const cmds = cardCmds(card).map(copyBlock).join("");
  detailEl.innerHTML = `
    <p class="detail-tool"><code>${esc(name)}</code></p>
    <p class="detail-title">${codeHtml(title)}</p>
    <section class="detail-section">
      <h2>${esc(ui.detail)}</h2>
      <div class="prose">${proseHtml(blurb)}</div>
      <div class="prose">${proseHtml(detail)}</div>
      ${answerHtml(card)}
      ${stepsHtml(card)}
      ${pasteHintHtml()}
      ${cmds}
      ${officialLinks(card)}
    </section>
  `;
}

function syncSticky() {
  const bar = document.getElementById("sql-sticky");
  if (!bar) return;
  const show = document.body.classList.contains("view-detail");
  bar.hidden = !show;
  document.body.classList.toggle("sql-has-sticky", show);
}

function showListView() {
  document.body.classList.add("view-list");
  document.body.classList.remove("view-detail");
  detailEl.hidden = true;
  detailEl.innerHTML = "";
  applyChrome();
  renderCategories();
  renderList();
  syncSticky();
}

function showDetailView(card) {
  document.body.classList.add("view-detail");
  document.body.classList.remove("view-list");
  detailEl.hidden = false;
  applyChrome();
  renderDetail(card);
  syncSticky();
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
const stickyBack = document.getElementById("sql-back-list");
if (stickyBack) stickyBack.addEventListener("click", goList);

if (resultsEl) {
  resultsEl.addEventListener("click", (event) => {
    const copyBtn = event.target.closest(".copy-btn");
    if (copyBtn) {
      event.preventDefault();
      event.stopPropagation();
      copyText(copyBtn.getAttribute("data-copy") || "", copyBtn);
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
