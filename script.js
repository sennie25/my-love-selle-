/* ===== CHANGE THESE TWO THINGS ===== */
const HER_NAME = 'Selle';

const VERSE = 'Two are better than one; because they have a good reward for their labour. For if they fall, the one will lift up his fellow.';
const VERSE_REF = 'Ecclesiastes 4:9–10 (KJV)';

const LETTER = `My love,

I don’t know where to start, but I just want you to know how thankful I am that despite everything that happened last night, we still found a way to understand each other. Honestly, I was so scared. The thought of losing you and not having us anymore made me cry so much. I couldn’t imagine that the person who once became such a beautiful part of my everyday life could suddenly become someone I would have to learn to live without.

I know yesterday’s misunderstanding started with something as simple as a call. You felt hurt because I wasn’t able to call you on Messenger, especially since we couldn’t use Instagram. But I hope you understand that it wasn’t because I didn’t want to talk to you. I thought you were mad at me again, and maybe I reacted that way because of the things that happened between us recently.

I still carry the hurt from the things you said before, especially when you mentioned that maybe what my ex said was true, that I only go for looks. I don’t think you realize how much those words affected me. It made me question myself and the way you see me. That’s why sometimes, even when nothing is wrong, I get scared that another misunderstanding might lead to words that will hurt me again. I know you weren’t mad at me yesterday, but the fear was already there.

And when we almost ended things last night, I felt like I was about to lose something I never wanted to lose in the first place. But when you reminded me of how we started, how thankful we were for each other, and how beautiful everything was in the beginning, I realized how much I still want to hold on to us.

I miss that version of us. The two people who were excited to know each other, who appreciated even the smallest things, who found happiness in simple conversations, and who were genuinely thankful to have found one another. I don’t want our relationship to become a place where we are always afraid of making mistakes or expressing what we feel.

I want us to be okay, love. I want us to learn how to understand each other without always turning our feelings into arguments. I want us to be patient with each other, to communicate better, and to remember that we’re supposed to be on the same team. I don’t expect us to be perfect, but I hope we can both make an effort to become better partners.

I’m sorry for the times my fear makes it difficult for me to express myself properly. I’m still learning how to communicate my feelings without becoming defensive. But I hope you also understand that I need reassurance sometimes, especially when something reminds me of the things that hurt me before.

I don’t want to keep bringing up the past just to make you feel guilty. I want us to heal from it. I want to reach a point where we no longer have to be afraid that one argument could take everything away from us.

I love you so much, and I hope you never doubt that. I’m thankful for you, for our story, for the memories we’ve made, and even for the moments that taught us things about each other. I’m thankful that I got to experience a love like this with you.

I don’t just want to stay because I’m afraid of being alone or losing you. I want to stay because I still see a future with you, a future where we understand each other better, where we feel safe, and where loving each other doesn’t have to hurt this much.

I hope we can start choosing each other more gently this time. Let’s not forget how we started, but let’s also remember that we still have a chance to make things better.

I still want you, love. I still want our little plans, our random conversations, our calls, our laughter, and all the ordinary days we haven’t experienced together yet.

Thank you for reminding me that we once had something so beautiful. I hope we can take care of that love instead of allowing our misunderstandings to slowly destroy it.

I love you, always. And I hope we both continue to choose us, not only when things are easy, but especially when things get difficult. ❤️

Yours, Sen`;
/* ===== END OF THINGS TO CHANGE ===== */

document.getElementById('introName').textContent = 'For you, ' + HER_NAME;
document.getElementById('verseText').textContent = '“' + VERSE + '”';
document.getElementById('verseRef').textContent = VERSE_REF;

/* ---------- helpers ---------- */
const NS = 'http://www.w3.org/2000/svg';
const svg = document.getElementById('bq');
let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const el = (t, a = {}, p) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); p && p.appendChild(e); return e; };

/* ---------- lily bouquet (all pink) ---------- */
const PINK = { deep: ['#a3104a', '#e8467f', '#fbd0de'], rose: ['#b8205a', '#f06a98', '#fde3ec'], blush: ['#c9487a', '#f59ab8', '#fff0f5'] };
const defs = el('defs', {}, svg);
for (const k in PINK) {
  const g = el('linearGradient', { id: 'l-' + k, x1: 0, y1: 1, x2: 0, y2: 0 }, defs);
  [[0, PINK[k][0]], [.4, PINK[k][1]], [1, PINK[k][2]]].forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, g));
}
const th = el('radialGradient', { id: 'thr' }, defs);
[[0, 'rgba(226,236,120,.95)'], [.45, 'rgba(210,120,150,.7)'], [1, 'rgba(160,20,80,0)']].forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, th));
const bg = el('linearGradient', { id: 'bud', x1: 0, y1: 1, x2: 0, y2: 0 }, defs);
[[0, '#6fae6a'], [.35, '#f06a98'], [1, '#fbd0de']].forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, bg));
const lf = el('linearGradient', { id: 'leaf', x1: 0, y1: 1, x2: 1, y2: 0 }, defs);
el('stop', { offset: 0, 'stop-color': '#1b4a2a' }, lf); el('stop', { offset: 1, 'stop-color': '#6fae6a' }, lf);
const pp = el('linearGradient', { id: 'paper', x1: 0, y1: 0, x2: 1, y2: 1 }, defs);
el('stop', { offset: 0, 'stop-color': '#f3e7d0' }, pp); el('stop', { offset: 1, 'stop-color': '#cbb48c' }, pp);

const sway = el('g', { id: 'sway' }, svg);
const gLeaf = el('g', {}, sway), gStem = el('g', {}, sway), gHead = el('g', {}, sway), gWrap = el('g', {}, svg);
const BASE = [300, 665];

/* long, narrow lily leaves */
function leaf(tx, ty, bend, d) {
  const p = `M${BASE[0]},${BASE[1] - 20} C${BASE[0] + bend},${BASE[1] - 170} ${tx - bend * .2},${ty + 130} ${tx},${ty}
    C${tx + (tx < 300 ? 14 : -14)},${ty + 140} ${BASE[0] + bend * .5 + 12},${BASE[1] - 150} ${BASE[0]},${BASE[1] - 20}Z`;
  el('path', { class: 'fade', style: `--d:${d}s`, d: p, fill: 'url(#leaf)', stroke: '#123a1e', 'stroke-width': 1 }, gLeaf);
  el('path', { class: 'fade', style: `--d:${d}s`, d: `M${BASE[0]},${BASE[1] - 20} C${BASE[0] + bend},${BASE[1] - 170} ${tx - bend * .2},${ty + 130} ${tx},${ty}`, fill: 'none', stroke: 'rgba(220,255,210,.35)', 'stroke-width': 1.4 }, gLeaf);
}
[[60, 400, -100], [540, 400, 100], [140, 340, -60], [460, 340, 60], [95, 480, -130], [505, 480, 130]].forEach((l, i) => leaf(l[0], l[1], l[2], .3 + i * .08));

/* stem from the bouquet base to (x,y); returns head rotation */
function stem(x, y, s, delay) {
  const cx = 300 + (x - 300) * .35, cy = y + (BASE[1] - y) * .55, d = `M${BASE[0]},${BASE[1]} Q${cx},${cy} ${x},${y}`;
  el('path', { class: 'fade', style: `--d:${delay}s`, d, fill: 'none', stroke: '#2f6b36', 'stroke-width': 7 * s, 'stroke-linecap': 'round' }, gStem);
  el('path', { class: 'fade', style: `--d:${delay}s`, d, fill: 'none', stroke: 'rgba(190,240,170,.4)', 'stroke-width': 1.8 * s, 'stroke-linecap': 'round', transform: 'translate(-1.5,0)' }, gStem);
  return Math.atan2(x - cx, -(y - cy)) * 180 / Math.PI;
}

function lily(x, y, s, c, delay) {
  const rot = stem(x, y, s, delay);
  const o = el('g', { transform: `translate(${x},${y}) rotate(${rot * .4 + (rnd() - .5) * 40}) scale(${s},${s * .8})` }, gHead);
  const g = el('g', { class: 'bloom', style: `--d:${delay + .5}s;transform-origin:50% 50%` }, o);
  const tepal = (a, len, wd) => {
    const t = el('g', { transform: `rotate(${a})` }, g);
    el('path', { d: `M0,0 C${-wd},${-len * .22} ${-wd * 1.1},${-len * .65} 0,${-len} C${wd * 1.1},${-len * .65} ${wd},${-len * .22} 0,0Z`, fill: `url(#l-${c})`, stroke: 'rgba(110,10,50,.4)', 'stroke-width': .8 }, t);
    el('path', { d: `M0,-8 C-3,${-len * .4} -1,${-len * .7} 0,${-len * .92}`, fill: 'none', stroke: 'rgba(255,255,255,.5)', 'stroke-width': 2.4, 'stroke-linecap': 'round' }, t);
    el('path', { d: `M0,0 C${-wd},${-len * .22} ${-wd * 1.1},${-len * .65} 0,${-len} C${-wd * .2},${-len * .6} ${-wd * .1},${-len * .2} 0,0Z`, fill: 'rgba(100,0,45,.22)' }, t);
    el('path', { d: `M2,-8 C0,${-len * .4} 1,${-len * .7} 2,${-len * .9}`, fill: 'none', stroke: 'rgba(120,10,55,.35)', 'stroke-width': 1 }, t);
    el('path', { d: `M${-wd * .55},${-len * .8} Q0,${-len * 1.05} ${wd * .55},${-len * .8}`, fill: 'none', stroke: 'rgba(255,255,255,.6)', 'stroke-width': 1.5 }, t);
    for (let i = 0; i < 18; i++) { const yy = -10 - rnd() * len * .5; el('circle', { cx: (rnd() - .5) * wd * (1.2 - Math.abs(yy) / len), cy: yy, r: .8 + rnd() * 1.6, fill: '#8a1040', opacity: .6 }, t); }
  };
  const j = rnd() * 30;
  [0, 120, 240].forEach(a => tepal(a + j + (rnd() - .5) * 10, 100, 17));   /* outer tepals */
  [60, 180, 300].forEach(a => tepal(a + j + (rnd() - .5) * 10, 94, 26));   /* wider inner tepals */
  el('circle', { r: 18, fill: 'url(#thr)' }, g);
  for (let i = 0; i < 6; i++) {
    const a = (i * 60 + 20 + j) * Math.PI / 180, L = 54 + rnd() * 8, ex = Math.sin(a) * L, ey = -Math.cos(a) * L;
    el('line', { x2: ex, y2: ey, stroke: '#e0789a', 'stroke-width': 1.6 }, g);
    el('ellipse', { cx: ex, cy: ey, rx: 7, ry: 3, fill: '#7c3410', transform: `rotate(${i * 60 + 20 + j + 90} ${ex} ${ey})` }, g);
  }
  el('line', { x2: 8, y2: -70, stroke: '#f3a9c0', 'stroke-width': 2.4 }, g);
  el('circle', { cx: 8, cy: -70, r: 3.4, fill: '#d93a74' }, g);
}

function bud(x, y, s, delay) {
  const rot = stem(x, y, s * .8, delay);
  const o = el('g', { transform: `translate(${x},${y}) rotate(${rot}) scale(${s})` }, gHead);
  const g = el('g', { class: 'bloom', style: `--d:${delay + .5}s` }, o);
  el('path', { d: 'M0,0 C-15,-14 -15,-58 0,-82 C15,-58 15,-14 0,0Z', fill: 'url(#bud)', stroke: 'rgba(110,10,50,.4)', 'stroke-width': .8 }, g);
  el('path', { d: 'M0,-4 C-2,-30 -1,-56 0,-76', fill: 'none', stroke: 'rgba(255,255,255,.45)', 'stroke-width': 2, 'stroke-linecap': 'round' }, g);
}
[[210, 175, .74, 'blush'], [392, 170, .74, 'rose'], [165, 305, .75, 'rose'], [435, 305, .75, 'blush'], [300, 205, 1, 'deep'], [205, 262, .92, 'rose'], [395, 262, .92, 'blush'], [135, 355, .8, 'blush'], [465, 355, .8, 'deep'],
[252, 345, .88, 'rose'], [350, 350, .88, 'deep']].forEach((t, i) => lily(t[0], t[1], t[2], t[3], .6 + i * .3));

/* ---------- wrapping: pink tissue behind, kraft cone in front, satin ribbon ---------- */
const grad = (id, stops, x2 = 1, y2 = 1) => { const g = el('linearGradient', { id, x1: 0, y1: 0, x2, y2 }, defs); stops.forEach(([o, c]) => el('stop', { offset: o, 'stop-color': c }, g)); };
grad('kL', [[0, '#e2cda9'], [1, '#b09068']]); grad('kR', [[0, '#f0e0c2'], [1, '#c4a67c']]);
grad('sat', [[0, '#ff8fb5'], [.5, '#e8467f'], [1, '#a3104a']], 0, 1);
const LEFT = 'M300,706 C238,650 150,560 90,452 C135,438 172,472 212,456 C252,440 292,476 332,462 L300,706Z';
const RIGHT = 'M300,706 C362,650 450,560 510,450 C465,436 428,470 392,455 C352,440 312,480 270,466 Z';
const clip = el('clipPath', { id: 'cone' }, defs); el('path', { d: LEFT }, clip); el('path', { d: RIGHT }, clip);

const back = el('g', { class: 'fade', style: '--d:.2s' }); svg.insertBefore(back, sway);
[['#f9d2de', .95, -6], ['#f4b3c8', .9, 10], ['#fbe0e8', .85, 0]].forEach(([c, o, k], i) =>
  el('path', { d: `M300,640 C230,590 ${120 + k},520 ${96 + i * 14},405 Q${150 + i * 10},385 ${190 + i * 8},412 Q250,382 300,408 Q350,382 ${410 - i * 8},412 Q${450 - i * 10},385 ${504 - i * 14},405 C${480 - k},520 370,590 300,640Z`, fill: c, opacity: o, stroke: 'rgba(160,60,100,.25)' }, back));

const F = (t, a) => el(t, { class: 'fade', style: '--d:2.4s', ...a }, gWrap);
F('path', { d: LEFT, fill: '#f7c6d6', transform: 'translate(0,-11)' }); F('path', { d: RIGHT, fill: '#f7c6d6', transform: 'translate(0,-11)' });
F('path', { d: LEFT, fill: 'url(#kL)', stroke: 'rgba(80,50,20,.35)' });
F('path', { d: RIGHT, fill: 'url(#kR)', stroke: 'rgba(80,50,20,.35)' });
[-200, -150, -100, -50, 20, 70, 120, 170, 215].forEach(dx => F('path', { d: `M300,706 L${300 + dx},460`, 'clip-path': 'url(#cone)', stroke: 'rgba(80,50,20,.2)', 'stroke-width': 1.2, fill: 'none' }));
F('path', { d: 'M270,466 L300,706', stroke: 'rgba(60,30,10,.3)', 'stroke-width': 4, fill: 'none' });
F('path', { d: 'M395,470 C372,540 340,620 306,690', stroke: 'rgba(255,255,255,.3)', 'stroke-width': 3, fill: 'none', 'clip-path': 'url(#cone)' });

const rb = F('g', {});
el('path', { d: 'M150,520 Q300,580 450,520 L446,550 Q300,612 154,550Z', fill: 'url(#sat)', 'clip-path': 'url(#cone)' }, rb);
el('path', { d: 'M154,526 Q300,586 446,526', fill: 'none', stroke: 'rgba(255,255,255,.5)', 'stroke-width': 2, 'clip-path': 'url(#cone)' }, rb);
const lp = (d) => el('path', { d, fill: 'url(#sat)', stroke: '#8a0f40', 'stroke-width': 1 }, rb);
lp('M300,572 C250,520 196,540 216,584 C232,606 284,594 300,572Z'); lp('M300,572 C350,520 404,540 384,584 C368,606 316,594 300,572Z');
lp('M298,578 C282,616 262,646 236,676 L262,670 L270,692 C288,656 304,620 306,584Z'); lp('M302,578 C318,616 338,646 364,676 L338,670 L330,692 C312,656 296,620 294,584Z');
['M222,570 C240,556 266,562 284,574', 'M378,570 C360,556 334,562 316,574'].forEach(d => el('path', { d, fill: 'none', stroke: 'rgba(255,255,255,.55)', 'stroke-width': 2.2, 'stroke-linecap': 'round' }, rb));
el('ellipse', { cx: 300, cy: 577, rx: 15, ry: 13, fill: 'url(#sat)', stroke: '#8a0f40' }, rb);

/* ---------- moving background: bokeh + falling petals ---------- */
const cv = document.getElementById('fx'), ctx = cv.getContext('2d');
let w, h, bokeh = [], petals = [];
function size() { w = cv.width = innerWidth; h = cv.height = innerHeight; }
addEventListener('resize', size); size();
const R = (a, b) => a + Math.random() * (b - a);
for (let i = 0; i < 28; i++) bokeh.push({ x: R(0, 1), y: R(0, 1), r: R(18, 70), v: R(.01, .04), p: R(0, 6), c: [[255, 190, 210], [255, 220, 170], [230, 170, 255]][i % 3] });
for (let i = 0; i < 26; i++) petals.push(newPetal(true));
function newPetal(init) { return { x: R(0, 1), y: init ? R(0, 1) : -0.05, s: R(8, 17), v: R(.05, .13), sw: R(.5, 1.6), p: R(0, 6), rot: R(0, 6), vr: R(-.02, .02), c: ['#ff9db5', '#ffc2d1', '#ffb08a', '#fff0f3'][Math.floor(R(0, 4))] }; }
const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
let t0 = 0;
function frame(t) {
  const dt = Math.min((t - t0) / 1000, .05); t0 = t;
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for (const b of bokeh) {
    b.y -= b.v * dt; b.x += Math.sin(t / 4000 + b.p) * .00012; if (b.y < -.1) { b.y = 1.1; b.x = Math.random(); }
    const a = .08 + .07 * Math.sin(t / 1800 + b.p), X = b.x * w, Y = b.y * h;
    const g = ctx.createRadialGradient(X, Y, 0, X, Y, b.r);
    g.addColorStop(0, `rgba(${b.c},${a * 1.6})`); g.addColorStop(.7, `rgba(${b.c},${a})`); g.addColorStop(1, `rgba(${b.c},0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(X, Y, b.r, 0, 7); ctx.fill();
  }
  ctx.globalCompositeOperation = 'source-over';
  for (let i = 0; i < petals.length; i++) {
    const p = petals[i];
    p.y += p.v * dt; p.p += dt * p.sw; p.rot += p.vr; p.x += Math.sin(p.p) * .0006;
    if (p.y > 1.06) petals[i] = newPetal(false);
    ctx.save(); ctx.translate(p.x * w, p.y * h); ctx.rotate(p.rot + Math.sin(p.p) * .6); ctx.scale(1, .6 + .4 * Math.cos(p.p));
    ctx.fillStyle = p.c; ctx.globalAlpha = .85;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.bezierCurveTo(-p.s, -p.s * .3, -p.s * .7, -p.s * 1.6, 0, -p.s * 1.7); ctx.bezierCurveTo(p.s * .7, -p.s * 1.6, p.s, -p.s * .3, 0, 0); ctx.fill();
    ctx.restore();
  }
  if (!still) requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

/* ---------- letter (from letter.js) ---------- */
const letter = document.getElementById('letter');
const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const parts = LETTER.trim().split(/\n\s*\n/);
const head = parts.shift(), sign = parts.pop();
letter.innerHTML = `<h2>${esc(head)}</h2>` + parts.map(p => `<p>${esc(p)}</p>`).join('') + `<p class="sign">${esc(sign)}</p><button id="close">Close</button>`;

/* ---------- interaction ---------- */
const song = document.getElementById('song'), mute = document.getElementById('mute'), stage = document.getElementById('stage'), lw = document.getElementById('letterWrap');
document.getElementById('open').onclick = () => {
  song.volume = .55; song.play().catch(() => { });
  const i = document.getElementById('intro'); i.style.opacity = 0; setTimeout(() => i.remove(), 1200);
  stage.classList.add('go');
};
mute.onclick = () => { if (song.paused) { song.play(); mute.textContent = '♪'; } else { song.pause(); mute.textContent = '✕'; } };
document.getElementById('readBtn').onclick = () => lw.classList.add('open');
lw.onclick = e => { if (e.target === lw || e.target.id === 'close') lw.classList.remove('open'); };
addEventListener('keydown', e => { if (e.key === 'Escape') lw.classList.remove('open'); });