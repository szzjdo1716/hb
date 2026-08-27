const state = {
  db: null,
  category: "",
  query: "",
  open: new Set(),
};

const searchInput = document.getElementById("search");
const categoryNav = document.getElementById("categories");
const resultsEl = document.getElementById("results");
const emptyEl = document.getElementById("empty");
const statusEl = document.getElementById("status");

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function likeNeedle(raw) {
  return `%${String(raw).replace(/[%_]/g, "")}%`;
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
      name TEXT NOT NULL,
      sort_order INTEGER NOT NULL
    );
    CREATE TABLE commands (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      category_slug TEXT NOT NULL,
      summary TEXT NOT NULL,
      example TEXT NOT NULL,
      options_json TEXT NOT NULL,
      links_json TEXT NOT NULL
    );
    CREATE INDEX idx_commands_name ON commands(name);
    CREATE INDEX idx_commands_cat ON commands(category_slug);
  `);

  const insertCat = db.prepare(
    "INSERT INTO categories (slug, name, sort_order) VALUES (?, ?, ?)"
  );
  LINUX_DATA.categories.forEach((cat, index) => {
    insertCat.run([cat.slug, cat.name, index + 1]);
  });
  insertCat.free();

  const insertCmd = db.prepare(
    `INSERT INTO commands
      (name, category_slug, summary, example, options_json, links_json)
     VALUES (?, ?, ?, ?, ?, ?)`
  );
  LINUX_DATA.commands.forEach((cmd) => {
    insertCmd.run([
      cmd.name,
      cmd.category,
      cmd.summary,
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

function queryCommands() {
  let sql = `
    SELECT c.name, c.summary, c.example, c.options_json, c.links_json,
           cat.name AS category_name, cat.slug AS category_slug
    FROM commands c
    JOIN categories cat ON cat.slug = c.category_slug
    WHERE 1=1
  `;
  const params = [];
  if (state.category) {
    sql += " AND cat.slug = ?";
    params.push(state.category);
  }
  if (state.query) {
    sql += ` AND (
      c.name LIKE ? COLLATE NOCASE
      OR c.summary LIKE ? COLLATE NOCASE
      OR c.options_json LIKE ? COLLATE NOCASE
    )`;
    const like = likeNeedle(state.query);
    params.push(like, like, like);
  }
  sql += " ORDER BY c.name COLLATE NOCASE";
  const stmt = state.db.prepare(sql);
  stmt.bind(params);
  return rowsFrom(stmt);
}

function renderCategories() {
  const stmt = state.db.prepare(
    "SELECT slug, name FROM categories ORDER BY sort_order"
  );
  const cats = rowsFrom(stmt);
  const buttons = [
    { slug: "", name: "All" },
    ...cats,
  ]
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
        `<tr><td><code>${esc(opt.flag)}</code></td><td>${esc(opt.meaning)}</td></tr>`
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
  const rows = queryCommands();
  const total = countAll();
  statusEl.textContent = `${rows.length} of ${total} commands · SQLite`;
  emptyEl.hidden = rows.length !== 0;

  if (rows.length === 1) state.open.add(rows[0].name);

  resultsEl.innerHTML = rows
    .map((row) => {
      const open = state.open.has(row.name);
      return `
        <article class="cmd" data-name="${esc(row.name)}" data-slug="${esc(row.category_slug)}">
          <button class="cmd-head" type="button" aria-expanded="${open}">
            <code>${esc(row.name)}</code>
            <span class="badge">${esc(row.category_name)}</span>
            <span class="chev">${open ? "▾" : "▸"}</span>
            <p class="sum">${esc(row.summary)}</p>
          </button>
          <div class="cmd-body" ${open ? "" : "hidden"}>
            <h3>Example</h3>
            <div class="code-block">
              <pre><code>${esc(row.example)}</code></pre>
              <button type="button" class="copy-btn" data-copy="${esc(row.example)}">Copy</button>
            </div>
            <h3>Common options</h3>
            <table class="options">
              <thead><tr><th>Flag</th><th>What it does</th></tr></thead>
              <tbody>${optionRows(row.options_json)}</tbody>
            </table>
            <h3>Manual pages</h3>
            <ul class="links">${linkList(row.links_json)}</ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function bind() {
  searchInput.addEventListener("input", () => {
    state.query = searchInput.value.trim();
    render();
  });

  categoryNav.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slug]");
    if (!button) return;
    state.category = button.dataset.slug || "";
    renderCategories();
    render();
  });

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
      copy.textContent = "Copied";
      copy.classList.add("copied");
      setTimeout(() => {
        copy.textContent = "Copy";
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
  try {
    if (typeof initSqlJs !== "function" || !window.SQL_WASM_BASE64) {
      throw new Error("SQLite files did not load. Keep the vendor folder next to index.html.");
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
    renderCategories();
    bind();
    render();
  } catch (err) {
    statusEl.textContent = "SQLite failed to load";
    const box = document.createElement("p");
    box.className = "fatal";
    box.textContent = err.message || String(err);
    resultsEl.replaceWith(box);
  }
}

init();
