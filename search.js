(function (root) {
  function norm(value) {
    return String(value || "").trim().toLowerCase();
  }

  function aliasMatch(aliases, needle) {
    const n = norm(needle);
    if (!n) return false;
    return (aliases || []).some((raw) => {
      const a = norm(raw);
      if (!a) return false;
      if (a === n) return true;
      if (n.length >= 2 && a.length >= n.length && a.split(/[\s,，/]+/).includes(n)) {
        return true;
      }
      return false;
    });
  }

  function hasNeedle(text, needle) {
    const t = norm(text);
    const n = norm(needle);
    return Boolean(t && n && t.includes(n));
  }

  function rankQuery(q, records) {
    const needle = norm(q);
    const rows = Array.isArray(records) ? records : [];
    if (!needle) {
      return rows.map((record) => ({ record, rank: 0, why: "all" }));
    }

    const exact = [];
    const alias = [];
    const rest = [];

    rows.forEach((record) => {
      const names = record.names || [];
      if (names.some((name) => norm(name) === needle)) {
        exact.push({ record, rank: 1, why: "exact" });
        return;
      }
      if (aliasMatch(record.aliases, needle)) {
        alias.push({ record, rank: 2, why: "alias" });
        return;
      }
      rest.push(record);
    });

    if (exact.length) return exact;
    if (alias.length) return alias;

    const titled = [];
    const leftover = [];
    rest.forEach((record) => {
      if (hasNeedle(record.title, needle) || hasNeedle(record.chip, needle)) {
        titled.push({ record, rank: 3, why: "keyword" });
      } else {
        leftover.push(record);
      }
    });

    if (titled.length >= 8) return titled;

    const before = titled.length;
    leftover.forEach((record) => {
      if (hasNeedle(record.body, needle)) {
        titled.push({ record, rank: 3, why: "keyword" });
      }
    });
    if (before === 0) return titled.slice(0, 8);
    return titled;
  }

  root.rankQuery = rankQuery;
})(typeof window !== "undefined" ? window : this);
