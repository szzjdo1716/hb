(function (root) {
  var CAP = 30;
  var BODY_CAP = 8;

  function norm(value) {
    return String(value || "").trim().toLowerCase();
  }

  function splitQuery(q) {
    const raw = norm(q);
    if (!raw) return [];
    return raw
      .split(/[,，]+/)
      .map((group) => group.trim().split(/\s+/).filter(Boolean))
      .filter((group) => group.length);
  }

  function wordsFrom(text) {
    return norm(text)
      .split(/[^a-z0-9:+.\u4e00-\u9fff-]+/)
      .filter(Boolean);
  }

  function levenshtein(a, b) {
    if (a === b) return 0;
    const m = a.length;
    const n = b.length;
    if (!m) return n;
    if (!n) return m;
    if (Math.abs(m - n) > 2) return 99;
    let prev = new Array(n + 1);
    let cur = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      cur[0] = i;
      const ca = a.charCodeAt(i - 1);
      for (let j = 1; j <= n; j++) {
        const cost = ca === b.charCodeAt(j - 1) ? 0 : 1;
        const del = prev[j] + 1;
        const ins = cur[j - 1] + 1;
        const sub = prev[j - 1] + cost;
        let best = del < ins ? del : ins;
        if (sub < best) best = sub;
        cur[j] = best;
      }
      const tmp = prev;
      prev = cur;
      cur = tmp;
    }
    return prev[n];
  }

  function maxDist(token) {
    const n = token.length;
    if (n >= 8) return 2;
    if (n >= 4) return 1;
    return 0;
  }

  function aliasExact(aliases, needle) {
    return (aliases || []).some((raw) => {
      const a = norm(raw);
      if (!a) return false;
      if (a === needle) return true;
      if (needle.length >= 2 && a.split(/[\s,，/]+/).includes(needle)) return true;
      return false;
    });
  }

  function hasNeedle(text, needle) {
    const t = norm(text);
    return Boolean(t && needle && t.includes(needle));
  }

  function fuzzyDict(record) {
    const set = Object.create(null);
    const add = (s) => {
      const n = norm(s);
      if (n.length >= 4) set[n] = true;
      wordsFrom(s).forEach((w) => {
        if (w.length >= 4) set[w] = true;
      });
    };
    (record.names || []).forEach(add);
    (record.aliases || []).forEach(add);
    add(record.chip || "");
    add(record.title || "");
    return Object.keys(set);
  }

  function matchToken(record, token) {
    const n = norm(token);
    if (!n) return 0;
    const names = record.names || [];
    if (names.some((name) => norm(name) === n)) return 1;
    if (names.some((name) => wordsFrom(name).includes(n))) return 1;
    if (aliasExact(record.aliases, n)) return 2;
    const dist = maxDist(n);
    if (dist) {
      const dict = fuzzyDict(record);
      for (let i = 0; i < dict.length; i++) {
        if (levenshtein(n, dict[i]) <= dist) return 3;
      }
    }
    if (hasNeedle(record.title, n) || hasNeedle(record.chip, n)) return 4;
    if (hasNeedle(record.body, n)) return 5;
    return 0;
  }

  function scoreGroup(record, tokens) {
    const ranks = tokens.map((tok) => matchToken(record, tok));
    if (ranks.some((r) => r === 0)) return null;
    let worst = ranks[0];
    let best = ranks[0];
    let sum = 0;
    ranks.forEach((r) => {
      if (r > worst) worst = r;
      if (r < best) best = r;
      sum += r;
    });
    return { worst, best, n: tokens.length, sum };
  }

  function betterScore(a, b) {
    if (a.n !== b.n) return a.n > b.n;
    if (a.worst !== b.worst) return a.worst < b.worst;
    if (a.sum !== b.sum) return a.sum < b.sum;
    return false;
  }

  function whyName(rank) {
    if (rank === 1) return "exact";
    if (rank === 2) return "alias";
    if (rank === 3) return "typo";
    return "keyword";
  }

  function sortHits(hits) {
    return hits.sort((a, b) => {
      if (b.n !== a.n) return b.n - a.n;
      if (a.rank !== b.rank) return a.rank - b.rank;
      if (a.sum !== b.sum) return a.sum - b.sum;
      return 0;
    });
  }

  function cap(hits, limit) {
    return hits.slice(0, limit || CAP);
  }

  function rankQuery(q, records) {
    const rows = Array.isArray(records) ? records : [];
    const groups = splitQuery(q);
    if (!groups.length) {
      return rows.map((record) => ({ record, rank: 0, why: "all", n: 0, sum: 0 }));
    }

    const scored = [];
    rows.forEach((record) => {
      let best = null;
      groups.forEach((tokens) => {
        const s = scoreGroup(record, tokens);
        if (s && (!best || betterScore(s, best))) best = s;
      });
      if (best) {
        scored.push({
          record,
          rank: best.worst,
          why: whyName(best.worst),
          n: best.n,
          sum: best.sum,
        });
      }
    });

    const bucket = (rank) => scored.filter((h) => h.rank === rank);
    const exact = bucket(1);
    if (exact.length) return cap(sortHits(exact));
    const alias = bucket(2);
    if (alias.length) return cap(sortHits(alias));
    const typo = bucket(3);
    if (typo.length) return cap(sortHits(typo));

    const titled = bucket(4);
    if (titled.length >= BODY_CAP) return cap(sortHits(titled));
    const body = bucket(5);
    if (titled.length) return cap(sortHits(titled.concat(body)));
    return cap(sortHits(body), BODY_CAP);
  }

  root.splitQuery = splitQuery;
  root.rankQuery = rankQuery;
})(typeof window !== "undefined" ? window : this);
