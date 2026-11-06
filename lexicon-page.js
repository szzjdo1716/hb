const LANG_KEY = "hb-lang";
const BOOK = document.body.dataset.book === "emoji" ? "emoji" : "slangs";
const RAW = BOOK === "emoji" ? window.EMOJI_DATA : window.SLANGS_DATA;
const DATA = {
  categories: ((RAW && RAW.categories) || []).filter((cat) => cat && cat.id && cat.id !== "kinky"),
  cards: ((RAW && RAW.cards) || []).filter((card) => card && card.cat && card.cat !== "kinky"),
};

const I18N = {
  slangs: {
    zh: {
      htmlLang: "zh-CN",
      title: "Slangs on X",
      lede: "每条一个说法、一行中英、一句例子。没有外链。",
      searchLabel: "搜索俚语",
      searchPh: "based, 有种, cooked",
      searchHint: "中文或英文都可以。",
      catsLabel: "分类",
      all: "全部",
      status: (n, total) => `${n} / ${total} 条`,
      empty: "没有匹配。试 based / 有种 / cooked",
      skip: "跳到词条",
      home: "首页",
      sample: "例句",
      exact: "精确匹配",
      footer: "每条只有说法、一行中英、一句例子。本页没有外链。",
    },
    en: {
      htmlLang: "en",
      title: "Slangs on X",
      lede: "Each card is a term, one Chinese–English line, and one sample. No links out.",
      searchLabel: "Search slangs",
      searchPh: "based, cooked, 有种",
      searchHint: "Search in English or Chinese.",
      catsLabel: "Categories",
      all: "All",
      status: (n, total) => `${n} of ${total}`,
      empty: "No match. Try based / 有种 / cooked",
      skip: "Skip to entries",
      home: "Home",
      sample: "Sample",
      exact: "Exact match",
      footer: "Each card is a term, one Chinese–English line, and one sample. No outbound links.",
    },
  },
  emoji: {
    zh: {
      htmlLang: "zh-CN",
      title: "日常表情",
      lede: "300 个日常表情。字形、英文名、中文、意思、两句例子、分类。",
      searchLabel: "搜索表情",
      searchPh: "😂, 笑哭, heart",
      searchHint: "中文或英文都可以。",
      catsLabel: "分类",
      all: "全部",
      status: (n, total) => `${n} / ${total} 条`,
      empty: "没有匹配。试 😂 / 笑哭 / heart",
      skip: "跳到表情",
      home: "首页",
      meaning: "意思",
      sample: "例句",
      exact: "精确匹配",
      footer: "只收这 300 个日常表情。",
    },
    en: {
      htmlLang: "en",
      title: "Everyday emoji",
      lede: "300 everyday emoji. Glyph, English name, Chinese, meaning, two examples, and a category.",
      searchLabel: "Search emoji",
      searchPh: "😂, joy, 笑哭",
      searchHint: "Search in English or Chinese.",
      catsLabel: "Categories",
      all: "All",
      status: (n, total) => `${n} of ${total}`,
      empty: "No match. Try 😂 / joy / 笑哭",
      skip: "Skip to emoji",
      home: "Home",
      meaning: "Meaning",
      sample: "Examples",
      exact: "Exact match",
      footer: "These 300 everyday emoji only.",
    },
  },
};

const state = {
  lang: readLang(),
  query: "",
  category: "",
  open: new Set(),
  exactHit: false,
};

let pinId = "";

const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categories");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");
const statusEl = document.getElementById("status");
const langToggle = document.getElementById("lang-toggle");

function t() {
  const pack = I18N[BOOK] || I18N.slangs;
  return pack[state.lang] || pack.zh;
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
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function catName(id) {
  const row = DATA.categories.find((cat) => cat.id === id);
  if (!row) return id || "";
  return state.lang === "en" ? row.en || row.zh || "" : row.zh || row.en || "";
}

function lookupAliases() {
  const map = window.SEARCH_ALIASES || {};
  const out = [];
  Array.prototype.forEach.call(arguments, (key) => {
    const list = map[key] || map[String(key || "").toLowerCase()] || [];
    list.forEach((item) => {
      if (item && out.indexOf(item) < 0) out.push(item);
    });
  });
  return out;
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

function cardRecords(cards) {
  return cards.map((card) => {
    const cat = DATA.categories.find((row) => row.id === card.cat) || {};
    if (BOOK === "emoji") {
      return {
        names: [card.id, card.glyph, card.name_en, card.name_zh, card.meaning_zh],
        aliases: lookupAliases(card.id, card.name_en),
        title: [card.name_en, card.name_zh, card.meaning_en, card.meaning_zh].join(" "),
        chip: [cat.zh, cat.en, card.cat].join(" "),
        body: []
          .concat(card.ex_en || [], card.ex_zh || [], [card.care || ""])
          .join(" "),
        item: card,
      };
    }
    return {
      names: [card.id, card.term, card.gloss_zh, card.gloss_en],
      aliases: lookupAliases(card.id, card.term),
      title: [card.line, card.gloss_zh, card.gloss_en].join(" "),
      chip: [cat.zh, cat.en, card.cat].join(" "),
      body: card.sample || "",
      item: card,
    };
  });
}

function filterCards() {
  state.exactHit = false;
  let cards = DATA.cards.slice();
  if (state.category) cards = cards.filter((card) => card.cat === state.category);
  const q = String(state.query || "").trim();
  let out = cards;
  if (q && typeof window.rankQuery === "function") {
    const hits = window.rankQuery(q, cardRecords(cards));
    state.exactHit = hits.length === 1 && hits[0].why === "exact";
    out = hits.map((hit) => hit.record.item);
  }
  if (pinId && !out.some((card) => card.id === pinId)) {
    const extra = DATA.cards.find((card) => card.id === pinId);
    if (extra && (!state.category || extra.cat === state.category)) out = [extra].concat(out);
  }
  return out;
}

function toolbarEl() {
  return document.getElementById("toolbar");
}

function syncChipToggle() {
  const btn = document.getElementById("chip-toggle");
  const bar = toolbarEl();
  if (!btn) return;
  const open = Boolean(bar && bar.classList.contains("chips-open"));
  btn.textContent = `${t().catsLabel} ${open ? "▴" : "▾"}`;
  btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function closeChips() {
  const bar = toolbarEl();
  if (bar) bar.classList.remove("chips-open");
  syncChipToggle();
}

function applyChrome() {
  const ui = t();
  document.documentElement.lang = ui.htmlLang;
  document.title = ui.title;
  const skip = document.querySelector(".skip-link");
  const h1 = document.getElementById("page-title");
  const lede = document.getElementById("lede");
  const home = document.getElementById("home-link");
  const searchLabel = document.getElementById("search-label");
  const hint = document.getElementById("search-hint");
  const footer = document.getElementById("footer");
  if (skip) skip.textContent = ui.skip;
  if (h1) h1.textContent = ui.title;
  if (lede) lede.textContent = ui.lede;
  if (home) home.textContent = ui.home;
  if (searchLabel) searchLabel.textContent = ui.searchLabel;
  if (searchInput) searchInput.placeholder = ui.searchPh;
  if (hint) hint.textContent = ui.searchHint;
  if (footer) footer.textContent = ui.footer;
  if (emptyEl) emptyEl.textContent = ui.empty;
  if (categoryNav) categoryNav.setAttribute("aria-label", ui.catsLabel);
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

function badgeHtml(card, exact) {
  const ui = t();
  const mark = exact ? ` <span class="exact-badge">${esc(ui.exact)}</span>` : "";
  return `${esc(catName(card.cat))}${mark}`;
}

function renderSlang(card, exact) {
  const ui = t();
  const expandable = Boolean(card.sample);
  const open = expandable && state.open.has(card.id);
  const chev = expandable
    ? `<span class="chev" aria-hidden="true">${open ? "▾" : "▸"}</span>`
    : `<span class="chev" aria-hidden="true"></span>`;
  const head = expandable
    ? `<button type="button" class="cmd-head" aria-expanded="${open ? "true" : "false"}">`
    : `<div class="cmd-head static">`;
  const headEnd = expandable ? "</button>" : "</div>";
  const body = expandable
    ? `<div class="cmd-body" ${open ? "" : "hidden"}><h3>${esc(ui.sample)}</h3><p class="sample-line">${esc(
        card.sample
      )}</p></div>`
    : "";
  return `<article class="cmd" id="${esc(card.id)}" data-name="${esc(card.id)}" data-slug="${esc(card.cat)}">
    ${head}<code>${esc(card.term)}</code><span class="badge">${badgeHtml(card, exact)}</span>${chev}<p class="sum">${esc(
      card.line
    )}</p>${headEnd}${body}</article>`;
}

function meaningText(card) {
  if (state.lang === "en") return card.meaning_en || "";
  return card.meaning_zh || card.meaning_en || "";
}

function exampleLines(card) {
  const list = state.lang === "en" ? card.ex_en : card.ex_zh;
  return (Array.isArray(list) ? list : []).filter(Boolean).slice(0, 2);
}

function emojiSum(card) {
  const name = card.name_zh || "";
  const meaning = meaningText(card);
  if (name && meaning) return `${name} · ${meaning}`;
  return name || meaning;
}

function renderEmoji(card, exact) {
  const ui = t();
  const open = state.open.has(card.id);
  const lines = exampleLines(card)
    .map((line) => `<p class="sample-line">${esc(line)}</p>`)
    .join("");
  const care = card.care ? `<p class="care">${esc(card.care)}</p>` : "";
  return `<article class="cmd" id="${esc(card.id)}" data-name="${esc(card.id)}" data-slug="${esc(card.cat)}">
    <button type="button" class="cmd-head" aria-expanded="${open ? "true" : "false"}">
      <code><span class="lex-glyph">${esc(card.glyph)}</span> ${esc(card.name_en)}</code>
      <span class="badge">${badgeHtml(card, exact)}</span>
      <span class="chev" aria-hidden="true">${open ? "▾" : "▸"}</span>
      <p class="sum">${esc(emojiSum(card))}</p>
    </button>
    <div class="cmd-body" ${open ? "" : "hidden"}>
      <h3>${esc(ui.meaning)}</h3>
      <p>${esc(meaningText(card))}</p>
      ${care}
      <h3>${esc(ui.sample)}</h3>
      ${lines}
    </div>
  </article>`;
}

function renderList() {
  const ui = t();
  const rows = filterCards();
  if (statusEl) statusEl.textContent = ui.status(rows.length, DATA.cards.length);
  if (emptyEl) emptyEl.hidden = rows.length > 0;
  if (!resultsEl) return;
  const exact = state.exactHit && rows.length === 1;
  resultsEl.innerHTML = rows
    .map((card) => (BOOK === "emoji" ? renderEmoji(card, exact) : renderSlang(card, exact)))
    .join("");
  if (!pinId) return;
  const el = document.getElementById(pinId);
  if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
}

function render() {
  applyChrome();
  renderCategories();
  renderList();
}

function readUrl() {
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
  pinId = currentId();
  if (pinId) state.open.add(pinId);
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    pinId = "";
    state.query = searchInput.value.trim();
    renderList();
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
    pinId = "";
    state.category = btn.dataset.slug || "";
    renderCategories();
    renderList();
    closeChips();
  });
}

if (resultsEl) {
  resultsEl.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      event.preventDefault();
      return;
    }
    const head = event.target.closest(".cmd-head");
    if (!head || head.tagName !== "BUTTON") return;
    const card = head.closest(".cmd");
    if (!card) return;
    const id = card.dataset.name;
    if (state.open.has(id)) state.open.delete(id);
    else state.open.add(id);
    const body = card.querySelector(".cmd-body");
    const open = state.open.has(id);
    if (body) body.hidden = !open;
    head.setAttribute("aria-expanded", open ? "true" : "false");
    const chev = head.querySelector(".chev");
    if (chev) chev.textContent = open ? "▾" : "▸";
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

document.addEventListener("keydown", (event) => {
  if (!searchInput) return;
  if (event.key === "/" && document.activeElement !== searchInput) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    state.query = "";
    pinId = "";
    renderList();
    searchInput.blur();
  }
});

window.addEventListener("hashchange", () => {
  pinId = currentId();
  if (pinId) state.open.add(pinId);
  renderList();
});

readUrl();
render();
