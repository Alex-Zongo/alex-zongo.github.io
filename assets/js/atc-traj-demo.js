// Interactive demo for the ATC trajectory prediction project page.
// Draws precomputed scenes: the heard transmission, the model's interpretations and the
// predicted trajectories (track frame: x along the current track, y to the right, z up, m).
(function () {
  const root = document.querySelector(".atd");
  if (!root) return;
  const NS = "http://www.w3.org/2000/svg";
  const FT = 3.28084;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s) => root.querySelector(s);
  const fmt = (v) => Math.round(v).toLocaleString("en-US");
  let scenes = [], cur = null, show = "composed", tau = 60, anim = null;

  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };

  // "own_motion · L335 · climb 4,000 · increase 260" -> readable interpretation
  function describe(z) {
    const [status, lat, ver, spd] = z.split(" · ");
    if (status === "other") return "For another aircraft";
    if (status === "own_other") return "For this aircraft, no maneuver";
    const parts = [];
    if (lat && lat !== "-") {
      const m = lat.match(/^([LR])(\d{3})$/);
      parts.push(m ? `turn ${m[1] === "L" ? "left" : "right"} heading ${m[2]}` : lat === "present hdg" ? "keep heading" : lat);
    }
    if (ver && ver !== "-") {
      const m = ver.match(/^(climb|descend) (.+)$/);
      parts.push(m ? `${m[1]} to ${m[2]}${m[2].startsWith("FL") ? "" : " ft"}` : ver === "maintain" ? "maintain altitude" : ver);
    }
    if (spd && spd !== "-") {
      const m = spd.match(/^(increase|reduce) (\d+)$/);
      parts.push(m ? `${m[1] === "increase" ? "speed up" : "slow"} to ${m[2]} kt` : spd === "present spd" ? "keep speed" : spd);
    }
    const s = parts.join(", ") || "no maneuver";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function nice(range) {
    for (const s of [500, 1000, 2000, 5000, 10000]) if (range / s <= 6) return s;
    return 20000;
  }

  function sets(sc) {
    const comp = sc.composed, ho = sc.hist_only;
    return { comp: show !== "hist" ? comp : [], ho: show !== "composed" ? ho : [] };
  }

  // future polyline with the present (origin) prepended, cut at time tau
  function cut(traj, dt) {
    const n = Math.floor(tau / dt + 1e-6);
    return [[0, 0, 0]].concat(traj.slice(0, n));
  }

  function drawPlan() {
    const sc = cur, svg = $(".atd-plan");
    svg.textContent = "";
    const W = 440, H = 340, P = { l: 40, r: 10, t: 10, b: 30 };
    const all = sc.history.concat(sc.truth, ...sc.composed, ...sc.hist_only);
    let x0 = Math.min(...all.map((p) => p[1])), x1 = Math.max(...all.map((p) => p[1]));
    let y0 = Math.min(...all.map((p) => p[0])), y1 = Math.max(...all.map((p) => p[0]));
    const pad = 0.06 * Math.max(x1 - x0, y1 - y0);
    x0 -= pad; x1 += pad; y0 -= pad; y1 += pad;
    const s = Math.min((W - P.l - P.r) / (x1 - x0), (H - P.t - P.b) / (y1 - y0));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    const mx = (P.l + W - P.r) / 2, my = (P.t + H - P.b) / 2;
    const X = (right) => mx + (right - cx) * s, Y = (along) => my - (along - cy) * s;
    const step = nice(Math.max(x1 - x0, y1 - y0));
    const g = el("g", { class: "grid" }, svg);
    const vx0 = cx - (mx - P.l) / s, vx1 = cx + (W - P.r - mx) / s;
    const vy0 = cy - (H - P.b - my) / s, vy1 = cy + (my - P.t) / s;
    for (let v = Math.ceil(vx0 / step) * step; v <= vx1; v += step) {
      el("line", { x1: X(v), x2: X(v), y1: P.t, y2: H - P.b }, g);
      el("text", { x: X(v), y: H - P.b + 14, "text-anchor": "middle" }, svg).textContent = v / 1000;
    }
    for (let v = Math.ceil(vy0 / step) * step; v <= vy1; v += step) {
      el("line", { x1: P.l, x2: W - P.r, y1: Y(v), y2: Y(v) }, g);
      el("text", { x: P.l - 6, y: Y(v) + 4, "text-anchor": "end" }, svg).textContent = v / 1000;
    }
    el("text", { x: (P.l + W - P.r) / 2, y: H - 2, "text-anchor": "middle" }, svg).textContent = "km to the right of the current track";
    el("text", { x: 10, y: (P.t + H - P.b) / 2, transform: `rotate(-90 10 ${(P.t + H - P.b) / 2})`, "text-anchor": "middle" }, svg).textContent = "km along the current track";
    const path = (pts, cls) => el("path", { class: cls, d: "M" + pts.map((p) => `${X(p[1]).toFixed(1)},${Y(p[0]).toFixed(1)}`).join("L") }, svg);
    const { comp, ho } = sets(sc);
    ho.forEach((t) => path(cut(t, sc.dt), "p-ho"));
    comp.forEach((t, i) => { const p = path(cut(t, sc.dt), "p-comp"); p.dataset.k = Math.floor(i / sc.S); });
    path(sc.history.concat([[0, 0, 0]]), "p-hist");
    path(cut(sc.truth, sc.dt), "p-truth");
    el("path", { class: "ac", d: `M${X(0)},${Y(0) - 7}l5,12l-5,-3l-5,3z` }, svg);
  }

  function drawAlt() {
    const sc = cur, svg = $(".atd-alt");
    svg.textContent = "";
    const W = 440, H = 150, P = { l: 52, r: 10, t: 8, b: 28 };
    const a0 = sc.state.alt_ft;
    const alt = (p) => a0 + p[2] * FT;
    const nh = sc.history.length;
    const ht = sc.history.map((_, i) => -2 * (nh - 1 - i));    // history every 2 s ending at now
    const all = sc.history.concat(sc.truth, ...sc.composed, ...sc.hist_only).map(alt).concat([a0]);
    let lo = Math.min(...all), hi = Math.max(...all);
    if (hi - lo < 400) { const m = (hi + lo) / 2; lo = m - 200; hi = m + 200; }
    const X = (t) => P.l + ((t + 30) / 90) * (W - P.l - P.r);
    const Y = (a) => H - P.b - ((a - lo) / (hi - lo)) * (H - P.t - P.b);
    const g = el("g", { class: "grid" }, svg);
    const step = [100, 200, 500, 1000, 2000, 5000].find((s) => (hi - lo) / s <= 4) || 10000;
    for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) {
      el("line", { x1: P.l, x2: W - P.r, y1: Y(v), y2: Y(v) }, g);
      el("text", { x: P.l - 6, y: Y(v) + 4, "text-anchor": "end" }, svg).textContent = fmt(v);
    }
    for (const t of [-30, 0, 30, 60]) {
      el("line", { x1: X(t), x2: X(t), y1: P.t, y2: H - P.b }, g);
      el("text", { x: X(t), y: H - P.b + 14, "text-anchor": "middle" }, svg).textContent = t === 0 ? "now" : `${t > 0 ? "+" : ""}${t} s`;
    }
    el("text", { x: P.l, y: H - 1 }, svg).textContent = "altitude (ft)";
    const fut = (traj) => cut(traj, sc.dt).map((p, i) => [i * sc.dt, alt(p)]);
    const path = (pts, cls) => el("path", { class: cls, d: "M" + pts.map(([t, a]) => `${X(t).toFixed(1)},${Y(a).toFixed(1)}`).join("L") }, svg);
    const { comp, ho } = sets(sc);
    ho.forEach((t) => path(fut(t), "p-ho"));
    comp.forEach((t, i) => { const p = path(fut(t), "p-comp"); p.dataset.k = Math.floor(i / sc.S); });
    path(sc.history.map((p, i) => [ht[i], alt(p)]).concat([[0, a0]]), "p-hist");
    path(fut(sc.truth), "p-truth");

    // crosshair: flown altitude and the median of each prediction at the hovered time
    const cross = el("g", { class: "cross", visibility: "hidden" }, svg);
    const vl = el("line", { y1: P.t, y2: H - P.b }, cross);
    const txt = el("text", { class: "readout", y: P.t + 10 }, cross);
    const med = (arr) => { const s = arr.slice().sort((a, b) => a - b); return s[Math.floor(s.length / 2)]; };
    const hit = el("rect", { x: X(0), y: P.t, width: X(60) - X(0), height: H - P.t - P.b, fill: "transparent" }, svg);
    hit.addEventListener("mousemove", (ev) => {
      const r = svg.getBoundingClientRect();
      const px = ((ev.clientX - r.left) / r.width) * W;
      const i = Math.max(1, Math.min(sc.truth.length, Math.round(((px - P.l) / (W - P.l - P.r)) * 90 - 30) / sc.dt));
      const t = i * sc.dt;
      vl.setAttribute("x1", X(t)); vl.setAttribute("x2", X(t));
      const parts = [`+${t} s  flown ${fmt(alt(sc.truth[i - 1]))}`];
      if (show !== "hist") parts.push(`with transmission ${fmt(med(sc.composed.map((c) => alt(c[i - 1]))))}`);
      if (show !== "composed") parts.push(`history only ${fmt(med(sc.hist_only.map((c) => alt(c[i - 1]))))}`);
      txt.textContent = parts.join(" · ") + " ft";
      const right = X(t) > W / 2;
      txt.setAttribute("x", right ? X(t) - 6 : X(t) + 6);
      txt.setAttribute("text-anchor", right ? "end" : "start");
      cross.setAttribute("visibility", "visible");
    });
    hit.addEventListener("mouseleave", () => cross.setAttribute("visibility", "hidden"));
  }

  function draw() { drawPlan(); drawAlt(); }

  function play() {
    cancelAnimationFrame(anim);
    if (reduced) { tau = 60; draw(); return; }
    const t0 = performance.now();
    const step = (now) => {
      tau = Math.min(60, ((now - t0) / 2400) * 60);
      draw();
      if (tau < 60) anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
  }

  function highlight(k) {
    root.classList.toggle("hl", k !== null);
    root.querySelectorAll(".p-comp").forEach((p) => p.classList.toggle("on", k !== null && k.includes(+p.dataset.k)));
  }

  function select(i) {
    cur = scenes[i];
    root.querySelectorAll(".atd-scenes button").forEach((b, j) => b.setAttribute("aria-selected", j === i));
    const sc = cur;
    $(".atd-aircraft").textContent = `${sc.callsign} (${sc.typecode === "UNKNOWN" ? "type unknown" : sc.typecode}), ${fmt(sc.state.alt_ft)} ft, ${sc.state.gs_kt} kt, track ${String(sc.state.trk_deg).padStart(3, "0")}°, ${sc.state.vr_fpm > 300 ? "climbing" : sc.state.vr_fpm < -300 ? "descending" : "level"}`;
    $(".atd-said").textContent = `“${sc.said}”`;
    const heard = $(".atd-heard");
    heard.textContent = "";
    sc.tokens.forEach((w, j) => {
      const k = sc.kappa[j], s = document.createElement("span");
      s.textContent = w;
      s.title = `confidence ${k.toFixed(2)}`;
      s.style.opacity = 0.35 + 0.65 * k;
      if (k < 0.6) s.className = "low";
      heard.append(s, " ");
    });
    if (!sc.tokens.length) heard.textContent = "(nothing)";
    const beam = $(".atd-beam");
    beam.textContent = "";
    sc.beam.forEach((b) => {
      const li = document.createElement("li");
      li.tabIndex = 0;
      const drawn = sc.samples.find((s) => s.z === b.z);
      const n = drawn ? drawn.n : 0;
      li.innerHTML = `<span><span class="lab"></span><span class="tag"></span></span><span class="bar">${b.p.toFixed(2)}<i style="width:${(b.p * 100).toFixed(0)}%"></i></span>`;
      li.querySelector(".lab").textContent = describe(b.z);
      li.querySelector(".tag").textContent = (b.z === sc.reference ? "ground truth · " : "") + `drawn ${n} of ${sc.K}`;
      const k = drawn ? drawn.idx : [];
      const on = () => highlight(show === "hist" ? [] : k), off = () => highlight(null);
      li.addEventListener("mouseenter", on); li.addEventListener("focus", on);
      li.addEventListener("mouseleave", off); li.addEventListener("blur", off);
      beam.appendChild(li);
    });
    const es = $(".atd-es");
    es.innerHTML = "";
    for (const [lab, v] of [["with the transmission", sc.es.composed], ["history only", sc.es.hist_only]]) {
      const dt = document.createElement("dt"), dd = document.createElement("dd");
      dt.textContent = lab; dd.textContent = `${fmt(v)} m`;
      es.append(dt, dd);
    }
    $(".atd-blurb").textContent = sc.blurb;
    play();
  }

  root.querySelectorAll(".atd-toggle button").forEach((b) => b.addEventListener("click", () => {
    show = b.dataset.show;
    root.querySelectorAll(".atd-toggle button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    draw();
  }));
  $(".atd-replay").addEventListener("click", play);

  fetch(root.dataset.src).then((r) => r.json()).then((d) => {
    scenes = d.scenes;
    $(".atd-note").textContent = d.note;
    const bar = $(".atd-scenes");
    scenes.forEach((sc, i) => {
      const b = document.createElement("button");
      b.type = "button"; b.setAttribute("role", "tab"); b.textContent = sc.title;
      b.addEventListener("click", () => select(i));
      bar.appendChild(b);
    });
    select(0);
  }).catch(() => { $(".atd-blurb").textContent = "The demo data could not be loaded."; });
})();
