// الواجهة: القوايم، الإسكور، عدّاد الفضيحة، فقاعات الكلام، اللافتات
import * as THREE from 'three';
import { MAPS, MAP_ORDER, TEAMS, DIFFICULTY, SHOP, TOURNAMENT } from '../game/config.js';
import { arNum, fmtClock } from '../core/util.js';
import { audio } from '../core/audio.js';

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const P = new THREE.Vector3();
// في الواجهة العربي: رقم الفريق الأولاني على اليمين جنب اسمه
const pair = (a, b) => `<span>${arNum(a)}</span><i>-</i><span>${arNum(b)}</span>`;


const BALL_SVG = `<svg viewBox="0 0 100 100" class="ballsvg"><circle cx="50" cy="50" r="46" fill="#f4f1e8" stroke="#1b1b1b" stroke-width="4"/><polygon points="50,30 67,42 61,62 39,62 33,42" fill="#1b1b1b"/><path d="M50 30 L50 6 M67 42 L89 34 M61 62 L74 84 M39 62 L26 84 M33 42 L11 34" stroke="#1b1b1b" stroke-width="4"/></svg>`;

export class UI {
  constructor(game) {
    this.game = game;
    this.root = $('#ui');
    this.bubbles = [];
    this.tags = new Map();
    this.screens = {};
    this.build();
  }

  build() {
    const r = this.root;
    r.innerHTML = `
      <div id="hud" class="hidden">
        <div class="scoreboard">
          <div class="sb-team sb-home"><span class="sw"></span><b class="nm"></b></div>
          <div class="sb-score"><span class="s0">٠</span><i>-</i><span class="s1">٠</span></div>
          <div class="sb-team sb-away"><b class="nm"></b><span class="sw"></span></div>
          <div class="sb-clock">٠٠:٠٠</div>
        </div>
        <div class="meters">
          <div class="meter m0"><div class="mlabel">عدّاد الفضيحة <small></small></div><div class="bar"><i></i></div></div>
          <div class="meter m1"><div class="mlabel">عدّاد الفضيحة <small></small></div><div class="bar"><i></i></div></div>
        </div>
        <div class="mapname"><b></b><small></small></div>
        <div class="hm hidden">👀 الناظر برة!</div>
        <div class="power hidden"><i></i><span>شوطة</span></div>
        <div class="who w0 hidden"><b></b><div class="stam"><i></i></div></div>
        <div class="who w1 hidden"><b></b><div class="stam"><i></i></div></div>
        <div class="keys"></div>
        <button class="pausebtn" title="وقف">II</button>
      </div>
      <div id="bubbles"></div>
      <div id="banner" class="hidden"><div class="bt"></div><div class="bs"></div></div>
      <div id="toast" class="hidden"></div>
      <div id="screens"></div>
      <div id="touch"></div>
    `;
    $('.pausebtn', r).onclick = () => this.game.togglePause();
    this.hudEl = $('#hud', r);
    this.bubbleLayer = $('#bubbles', r);
    this.screenRoot = $('#screens', r);
    this.makeScreens();
  }

  // ===================================================================== الشاشات
  makeScreens() {
    const S = this.screenRoot;
    const add = (id, html) => { const d = el('div', 'screen hidden', html); d.id = id; S.appendChild(d); this.screens[id] = d; return d; };

    const menu = add('menu', `
      <div class="logo">${BALL_SVG}<h1>ماتش الحارة</h1><p>كورة شوارع.. بقوانين الحتة</p></div>
      <div class="menu-btns">
        <button data-a="quick" class="big">⚽ ماتش سريع</button>
        <button data-a="tourney">🏆 البطولة: كأس الحتة</button>
        <button data-a="versus">👥 اتنين على كيبورد واحد</button>
        <button data-a="controls">🎮 التحكم</button>
        <button data-a="settings">⚙️ الإعدادات</button>
      </div>
      <div class="foot">كل الرسومات والأصوات معمولة بالكود • العب بالكيبورد أو الدراع أو الموبايل</div>
    `);
    menu.querySelectorAll('button').forEach((b) => b.onclick = () => { audio.init(); audio.play('click'); this.menuAction(b.dataset.a); });

    // إعداد الماتش
    const setup = add('setup', `
      <div class="panel wide">
        <h2 class="ttl">ماتش جديد</h2>
        <div class="sec"><h3>المكان</h3><div class="maps"></div></div>
        <div class="row">
          <div class="sec"><h3>الوقت</h3><div class="seg" data-k="time"><button data-v="day">☀️ الضهر</button><button data-v="night">🌙 بالليل</button></div></div>
          <div class="sec"><h3>الصعوبة</h3><div class="seg" data-k="diff">${Object.entries(DIFFICULTY).map(([k, v]) => `<button data-v="${k}">${v.name}</button>`).join('')}</div></div>
          <div class="sec"><h3>نظام الماتش</h3><div class="seg" data-k="rule">
            <button data-v="t120">دقيقتين</button><button data-v="t180">٣ دقايق</button><button data-v="t300">٥ دقايق</button><button data-v="g3">اللي يجيب ٣</button><button data-v="g5">اللي يجيب ٥</button>
          </div></div>
        </div>
        <div class="row">
          <div class="sec"><h3>فريقك</h3><div class="teams" data-k="home"></div></div>
          <div class="sec"><h3>الخصم</h3><div class="teams" data-k="away"></div></div>
        </div>
        <div class="actions"><button class="back">رجوع</button><button class="go big">يلا نلعب!</button></div>
      </div>
    `);
    this.setupSel = { map: 'alley', time: 'day', diff: 'normal', rule: 't180', home: 'home', away: 'away', versus: false };
    const maps = $('.maps', setup);
    MAP_ORDER.forEach((id) => {
      const m = MAPS[id];
      const c = el('button', 'mapcard', `<div class="mc-art mc-${id}"></div><b>${m.name}</b><small>${m.desc}</small><em>${arNum(m.teamSize)} × ${arNum(m.teamSize)}</em>`);
      c.dataset.v = id;
      c.onclick = () => { audio.play('click'); this.setupSel.map = id; this.refreshSetup(); };
      maps.appendChild(c);
    });
    setup.querySelectorAll('.seg').forEach((seg) => seg.querySelectorAll('button').forEach((b) => b.onclick = () => { audio.play('click'); this.setupSel[seg.dataset.k] = b.dataset.v; this.refreshSetup(); }));
    setup.querySelectorAll('.teams').forEach((wrap) => {
      Object.entries(TEAMS).forEach(([k, t]) => {
        const b = el('button', 'teambtn', `<span style="background:${t.ui}"></span>${t.name}`);
        b.dataset.v = k;
        b.onclick = () => {
          audio.play('click');
          const other = wrap.dataset.k === 'home' ? 'away' : 'home';
          if (this.setupSel[other] === k) this.setupSel[other] = this.setupSel[wrap.dataset.k];
          this.setupSel[wrap.dataset.k] = k;
          this.refreshSetup();
        };
        wrap.appendChild(b);
      });
    });
    $('.back', setup).onclick = () => { audio.play('click'); this.show('menu'); };
    $('.go', setup).onclick = () => { audio.play('click'); this.game.startFromSetup(this.setupSel); };

    add('controls', `
      <div class="panel wide">
        <h2 class="ttl">التحكم</h2>
        <div class="ctrl-grid">
          <div class="ccard"><h3>لاعب واحد</h3>
            <table>
              <tr><td><kbd>↑</kbd><kbd>↓</kbd><kbd>←</kbd><kbd>→</kbd></td><td>جري</td></tr>
              <tr><td><kbd>A</kbd></td><td>باصة (ومن غير كورة: اطلب الكورة)</td></tr>
              <tr><td><kbd>S</kbd></td><td>شوطة (دوس كتير = أقوى)</td></tr>
              <tr><td><kbd>D</kbd></td><td class="hot">كعبلة</td></tr>
              <tr><td><kbd>F</kbd></td><td class="hot">شدّ من الهدوم (فضل داسس)</td></tr>
              <tr><td><kbd>W</kbd></td><td>كوبري (من بين رجليه)</td></tr>
              <tr><td><kbd>Shift</kbd></td><td>سبرنت</td></tr>
              <tr><td><kbd>Space</kbd></td><td>غيّر اللعّيب</td></tr>
              <tr><td><kbd>Esc</kbd> / <kbd>P</kbd></td><td>وقّف اللعب</td></tr>
            </table></div>
          <div class="ccard"><h3>اتنين على كيبورد واحد</h3>
            <table>
              <tr><th></th><th>الأول (الحمر)</th><th>التاني (الزرق)</th></tr>
              <tr><td>جري</td><td><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></td><td>الأسهم</td></tr>
              <tr><td>باصة</td><td><kbd>F</kbd></td><td><kbd>K</kbd> / <kbd>Num1</kbd></td></tr>
              <tr><td>شوطة</td><td><kbd>G</kbd></td><td><kbd>L</kbd> / <kbd>Num2</kbd></td></tr>
              <tr><td>كعبلة</td><td><kbd>H</kbd></td><td><kbd>;</kbd> / <kbd>Num3</kbd></td></tr>
              <tr><td>شدّ</td><td><kbd>R</kbd></td><td><kbd>O</kbd> / <kbd>Num4</kbd></td></tr>
              <tr><td>كوبري</td><td><kbd>T</kbd></td><td><kbd>P</kbd> / <kbd>Num5</kbd></td></tr>
              <tr><td>سبرنت</td><td><kbd>Shift</kbd> شمال</td><td><kbd>Shift</kbd> يمين / <kbd>Num0</kbd></td></tr>
              <tr><td>غيّر</td><td><kbd>Q</kbd></td><td><kbd>Enter</kbd></td></tr>
              <tr><td>وقّف</td><td colspan="2"><kbd>Esc</kbd></td></tr>
            </table></div>
          <div class="ccard"><h3>الدراع (Gamepad)</h3>
            <table>
              <tr><td>الاستيك الشمال</td><td>جري</td></tr>
              <tr><td><kbd>A</kbd></td><td>باصة</td></tr><tr><td><kbd>X</kbd></td><td>شوطة</td></tr>
              <tr><td><kbd>B</kbd></td><td>كعبلة</td></tr><tr><td><kbd>LB</kbd> / <kbd>LT</kbd></td><td>شدّ</td></tr>
              <tr><td><kbd>Y</kbd></td><td>كوبري</td></tr><tr><td><kbd>RT</kbd></td><td>سبرنت</td></tr><tr><td><kbd>RB</kbd></td><td>غيّر</td></tr>
            </table>
            <p class="note">على الموبايل هتلاقي استيك وزراير على الشاشة.</p></div>
          <div class="ccard"><h3>قوانين الحارة</h3>
            <ul class="rules">
              <li><b>عدّاد الفضيحة:</b> كل كعبلة أو شدّة بتملاه. لو اتملى: يا إما <b>خناقة</b> يا إما <b>أمه تنادي عليه</b> ويروّح!</li>
              <li><b>البلكونة:</b> لو الكورة دخلت البلكونة، الحاجة هتمسكها وترجعها بعد ما تزعّق.</li>
              <li><b>الإزاز:</b> شوطة جامدة في الشباك = إزاز مكسور والكل يجري!</li>
              <li><b>الناظر:</b> في حوش المدرسة، لو شافك بتفاول هيطردك.</li>
              <li><b>الكوبري:</b> عدّي الكورة من بين رجلين الخصم وهيقف مش فاهم حاجة.</li>
              <li><b>التوكتوك وبياع العيش:</b> بيعدّوا في النص.. وسّع!</li>
            </ul></div>
        </div>
        <div class="actions"><button class="back big">تمام</button></div>
      </div>`);
    $('#controls .back').onclick = () => { audio.play('click'); this.show(this.controlsReturn || 'menu'); };

    add('settings', `
      <div class="panel">
        <h2 class="ttl">الإعدادات</h2>
        <div class="sec"><h3>جودة الرسومات</h3><div class="seg" data-k="quality"><button data-v="high">عالية</button><button data-v="medium">متوسطة</button><button data-v="low">خفيفة (للأجهزة الضعيفة)</button></div></div>
        <div class="sec"><h3>الصوت</h3><input type="range" min="0" max="100" class="vol"><label class="chk"><input type="checkbox" class="mute"> كتم الصوت</label></div>
        <div class="sec"><h3>إرشادات الزراير تحت</h3><div class="seg" data-k="hints"><button data-v="on">تظهر</button><button data-v="off">تستخبى</button></div></div>
        <div class="actions"><button class="back big">تمام</button></div>
      </div>`);
    const st = this.screens.settings;
    st.querySelectorAll('.seg').forEach((seg) => seg.querySelectorAll('button').forEach((b) => b.onclick = () => { audio.play('click'); this.game.setSetting(seg.dataset.k, b.dataset.v); this.refreshSettings(); }));
    $('.vol', st).oninput = (e) => this.game.setSetting('volume', e.target.value / 100);
    $('.mute', st).onchange = (e) => this.game.setSetting('muted', e.target.checked);
    $('.back', st).onclick = () => { audio.play('click'); this.show(this.settingsReturn || 'menu'); };

    add('pause', `
      <div class="panel small">
        <h2 class="ttl">استراحة</h2>
        <div class="menu-btns">
          <button data-a="resume" class="big">كمّل</button>
          <button data-a="restart">ابدأ الماتش من الأول</button>
          <button data-a="controls">التحكم</button>
          <button data-a="settings">الإعدادات</button>
          <button data-a="quit">اخرج للقائمة</button>
        </div>
      </div>`);
    this.screens.pause.querySelectorAll('button').forEach((b) => b.onclick = () => { audio.play('click'); this.pauseAction(b.dataset.a); });

    add('result', `<div class="panel"><div class="res"></div><div class="actions"></div></div>`);
    add('tourney', `<div class="panel wide"><h2 class="ttl">🏆 كأس الحتة</h2><div class="tinfo"></div><div class="ladder"></div><div class="actions"></div></div>`);
    add('shop', `<div class="panel"><h2 class="ttl">🛒 محل عم سيد</h2><div class="money"></div><div class="items"></div><div class="actions"><button class="back big">خلصت</button></div></div>`);
    $('#shop .back').onclick = () => { audio.play('click'); this.showTourney(); };
    add('loading', `<div class="loading">${BALL_SVG}<p>بنجهّز الحارة...</p></div>`);
  }

  show(id) {
    for (const [k, s] of Object.entries(this.screens)) s.classList.toggle('hidden', k !== id);
    this.current = id;
    if (id === 'setup') this.refreshSetup();
    if (id === 'settings') this.refreshSettings();
  }
  hideScreens() { this.show(null); }

  menuAction(a) {
    if (a === 'quick') { this.setupSel.versus = false; $('#setup .ttl').textContent = 'ماتش جديد'; this.show('setup'); }
    if (a === 'versus') { this.setupSel.versus = true; $('#setup .ttl').textContent = 'اتنين قصاد بعض'; this.show('setup'); }
    if (a === 'tourney') this.showTourney();
    if (a === 'controls') { this.controlsReturn = 'menu'; this.show('controls'); }
    if (a === 'settings') { this.settingsReturn = 'menu'; this.show('settings'); }
  }

  pauseAction(a) {
    if (a === 'resume') this.game.togglePause(false);
    if (a === 'restart') this.game.restartMatch();
    if (a === 'quit') this.game.quitToMenu();
    if (a === 'controls') { this.controlsReturn = 'pause'; this.show('controls'); }
    if (a === 'settings') { this.settingsReturn = 'pause'; this.show('settings'); }
  }

  refreshSetup() {
    const s = this.setupSel, sc = this.screens.setup;
    sc.querySelectorAll('.mapcard').forEach((b) => b.classList.toggle('on', b.dataset.v === s.map));
    sc.querySelectorAll('.seg').forEach((seg) => seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === s[seg.dataset.k])));
    sc.querySelectorAll('.teams').forEach((w) => w.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === s[w.dataset.k])));
    $('.seg[data-k="diff"]', sc).parentElement.style.display = s.versus ? 'none' : '';
    sc.querySelectorAll('.teams')[0].previousElementSibling.textContent = s.versus ? 'اللاعب الأول' : 'فريقك';
    sc.querySelectorAll('.teams')[1].previousElementSibling.textContent = s.versus ? 'اللاعب التاني' : 'الخصم';
  }

  refreshSettings() {
    const g = this.game.settings, st = this.screens.settings;
    st.querySelectorAll('.seg').forEach((seg) => seg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.v === String(g[seg.dataset.k]))));
    $('.vol', st).value = Math.round(g.volume * 100);
    $('.mute', st).checked = !!g.muted;
  }

  // ===================================================================== البطولة
  showTourney() {
    const T = this.game.tourney;
    const sc = this.screens.tourney;
    $('.tinfo', sc).innerHTML = `<div class="money">💰 ${arNum(T.money)} جنيه</div>${T.s.done ? '<div class="champ">🏆 إنتوا أبطال الحتة! كسبتوا الكاس!</div>' : '<p>اكسب الخمس ماتشات عشان تاخد كأس الحتة. التعادل يعني تعيد الماتش.</p>'}`;
    const lad = $('.ladder', sc);
    lad.innerHTML = '';
    TOURNAMENT.forEach((m, i) => {
      const res = T.s.results[i];
      const state = i < T.stage ? 'done' : i === T.stage && !T.s.done ? 'next' : T.s.done ? 'done' : 'locked';
      const d = el('div', `rung ${state}`, `
        <div class="rn">${arNum(i + 1)}</div>
        <div class="ri"><b>${m.title}</b><small>${MAPS[m.map].name} • ${m.time === 'night' ? 'بالليل' : 'الضهر'} • قصاد ${TEAMS[m.opp].name}</small></div>
        <div class="rr">${res ? pair(res.score[0], res.score[1]) : state === 'next' ? 'الجاي' : '🔒'}</div>`);
      lad.appendChild(d);
    });
    const act = $('.actions', sc);
    act.innerHTML = '';
    const b1 = el('button', 'back', 'رجوع'); b1.onclick = () => { audio.play('click'); this.show('menu'); };
    const b2 = el('button', '', '🛒 المحل'); b2.onclick = () => { audio.play('click'); this.showShop(); };
    act.append(b1, b2);
    if (!T.s.done) { const b3 = el('button', 'big go', 'العب الماتش الجاي'); b3.onclick = () => { audio.play('click'); this.game.startTourneyMatch(); }; act.append(b3); }
    const b4 = el('button', 'danger', 'ابدأ البطولة من الأول');
    b4.onclick = () => {
      // دوسة أولى تسأل، والتانية تأكد
      if (!b4.dataset.sure) { b4.dataset.sure = '1'; b4.textContent = 'متأكد؟ هتخسر الفلوس والتقدم.. دوس تاني'; return; }
      T.reset(); this.showTourney();
    };
    act.append(b4);
    this.show('tourney');
  }

  showShop() {
    const T = this.game.tourney;
    const sc = this.screens.shop;
    $('.money', sc).innerHTML = `💰 معاك ${arNum(T.money)} جنيه`;
    const items = $('.items', sc);
    items.innerHTML = '';
    SHOP.forEach((it) => {
      const own = T.owned(it.id);
      const sold = !it.consumable && own >= it.max;
      const d = el('div', 'item' + (sold ? ' sold' : ''), `<div><b>${it.name}</b><small>${it.desc}</small></div><button ${sold || T.money < it.price ? 'disabled' : ''}>${sold ? 'اشتريته ✓' : arNum(it.price) + ' جنيه'}</button>`);
      if (it.consumable && T.s.foul) d.querySelector('small').textContent += ` (معاك ${arNum(T.s.foul)})`;
      d.querySelector('button').onclick = () => { if (T.buy(it.id)) { audio.play('coin'); this.showShop(); } };
      items.appendChild(d);
    });
    this.show('shop');
  }

  // ===================================================================== الماتش
  matchStart(m) {
    if (m.opts.demo) { this.hudEl.classList.add('hidden'); return; }
    this.hudEl.classList.remove('hidden');
    const h = this.hudEl;
    const t0 = m.teamDef(0), t1 = m.teamDef(1);
    $('.sb-home .nm', h).textContent = t0.short;
    $('.sb-away .nm', h).textContent = t1.short;
    $('.sb-home .sw', h).style.background = t0.ui;
    $('.sb-away .sw', h).style.background = t1.ui;
    $('.m0 small', h).textContent = t0.short;
    $('.m1 small', h).textContent = t1.short;
    $('.m0', h).style.setProperty('--tc', t0.ui);
    $('.m1', h).style.setProperty('--tc', t1.ui);
    $('.mapname b', h).textContent = m.def.name;
    $('.mapname small', h).textContent = m.night ? 'بالليل • الكشافات بترعش' : 'الضهر';
    $('.hm', h).classList.add('hidden');
    const versus = m.controllers[0] && m.controllers[1];
    $('.keys', h).innerHTML = versus ? '' : `
      <span><kbd>↑↓←→</kbd>جري</span><span><kbd>A</kbd>باصة</span><span><kbd>S</kbd>شوطة</span>
      <span class="hot"><kbd>D</kbd>كعبلة</span><span class="hot"><kbd>F</kbd>شدّ</span><span><kbd>W</kbd>كوبري</span>
      <span><kbd>Shift</kbd>سبرنت</span><span><kbd>Space</kbd>غيّر</span>`;
    $('.keys', h).style.display = this.game.settings.hints === 'off' || this.game.touch ? 'none' : '';
    for (let t = 0; t < 2; t++) $(`.w${t}`, h).classList.toggle('hidden', !m.controllers[t]);
    this.lastScore = [-1, -1];
  }

  matchEnd() {
    this.hudEl.classList.add('hidden');
    for (const b of this.bubbles) b.el.remove();
    this.bubbles = [];
    $('#banner').classList.add('hidden');
  }

  controlChanged(team, p) {
    const w = $(`.w${team} b`, this.hudEl);
    if (w) w.textContent = `${p.name} (${arNum(p.number)})`;
  }

  hud(m, dt) {
    this.updateBubbles(m, dt);
    if (m.opts.demo) return;
    const h = this.hudEl;
    if (m.score[0] !== this.lastScore[0] || m.score[1] !== this.lastScore[1]) {
      $('.s0', h).textContent = arNum(m.score[0]);
      $('.s1', h).textContent = arNum(m.score[1]);
      if (this.lastScore[0] >= 0) { const s = $('.sb-score', h); s.classList.remove('pop'); void s.offsetWidth; s.classList.add('pop'); }
      this.lastScore = [...m.score];
    }
    $('.sb-clock', h).textContent = m.opts.rule.type === 'time' ? fmtClock(m.clock) : `أول واحد يجيب ${arNum(m.opts.rule.n)}`;
    for (let t = 0; t < 2; t++) {
      const v = m.scandal[t];
      const bar = $(`.m${t} .bar i`, h);
      bar.style.width = v + '%';
      $(`.m${t}`, h).classList.toggle('hot', v > 75);
      const p = m.teams[t].find((q) => q.ctrl);
      if (p) $(`.w${t} .stam i`, h).style.width = Math.round(p.stamina * 100) + '%';
    }
    // اسم اللاعب اللي ماسكه
    for (let t = 0; t < 2; t++) {
      const p = m.teams[t].find((q) => q.ctrl);
      this.tag(`ctrl${t}`, p && p.active && p.root.visible ? p : null, p ? p.name : '', m.controllers[t]?.color, m);
    }
  }

  tag(id, who, text, color, m) {
    let e = this.tags.get(id);
    if (!who) { if (e) e.style.display = 'none'; return; }
    if (!e) { e = el('div', 'nametag'); this.bubbleLayer.appendChild(e); this.tags.set(id, e); }
    e.style.display = '';
    if (e.textContent !== text) e.textContent = text;
    e.style.color = color || '#ffd23f';
    who.headPos(P);
    P.y += 0.45;
    const s = this.project(P, m);
    if (!s) { e.style.display = 'none'; return; }
    e.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%)`;
  }

  project(v, m) {
    const cam = m.camera;
    P.copy(v).project(cam);
    if (P.z > 1) return null;
    const w = this.game.width, h = this.game.height;
    return { x: (P.x * 0.5 + 0.5) * w, y: (-P.y * 0.5 + 0.5) * h };
  }

  bubble(who, text, { color = '#fff', dur = 2.2, big = false, delay = 0 } = {}) {
    if (!who) return;
    // واحد بس لكل شخص
    for (const b of this.bubbles) if (b.who === who) { b.t = b.dur; }
    const e = el('div', 'bubble' + (big ? ' big' : ''), text);
    e.style.background = color;
    e.style.setProperty('--bc', color);
    e.style.opacity = '0';
    this.bubbleLayer.appendChild(e);
    this.bubbles.push({ el: e, who, t: -delay, dur });
  }

  updateBubbles(m, dt) {
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i];
      b.t += dt;
      if (b.t >= b.dur) { b.el.remove(); this.bubbles.splice(i, 1); continue; }
      if (b.t < 0) continue;
      const w = b.who;
      try {
        if (w.headPos) w.headPos(P);
        else if (w.pos) P.set(w.pos.x, 1.2, w.pos.z);
        else continue;
      } catch (e) { b.t = b.dur; continue; }
      P.y += 0.35;
      const s = this.project(P, m);
      if (!s) { b.el.style.opacity = '0'; continue; }
      const a = Math.min(1, b.t * 8, (b.dur - b.t) * 4);
      b.el.style.opacity = String(a);
      const sc = 0.85 + Math.min(1, b.t * 10) * 0.15;
      b.el.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%, -100%) scale(${sc})`;
    }
  }

  banner(title, sub = '', kind = '', team = -1) {
    const b = $('#banner');
    b.className = 'show ' + kind;
    $('.bt', b).textContent = title;
    $('.bs', b).textContent = sub;
    if (team >= 0 && this.game.match) b.style.setProperty('--tc', this.game.match.teamColor(team));
    else b.style.removeProperty('--tc');
    void b.offsetWidth;
    b.classList.add('anim');
    clearTimeout(this.bannerT);
    this.bannerT = setTimeout(() => b.classList.add('hidden'), kind === 'goal' ? 3200 : kind === 'end' ? 4000 : 2200);
  }

  toast(text) {
    const t = $('#toast');
    t.textContent = text;
    t.className = 'show';
    clearTimeout(this.toastT);
    this.toastT = setTimeout(() => t.classList.add('hidden'), 2600);
  }

  power(v) {
    const p = $('.power', this.hudEl);
    p.classList.toggle('hidden', v <= 0);
    $('i', p).style.width = Math.round(v * 100) + '%';
    p.classList.toggle('max', v >= 0.95);
  }

  scandalPulse(team) {
    const m = $(`.m${team}`, this.hudEl);
    m.classList.remove('pulse'); void m.offsetWidth; m.classList.add('pulse');
  }

  headmaster(v) { $('.hm', this.hudEl).classList.toggle('hidden', !v); }

  showResult(m) {
    const sc = this.screens.result;
    const t0 = m.teamDef(0), t1 = m.teamDef(1);
    const w = m.winner;
    const versus = m.controllers[0] && m.controllers[1];
    let title = w === -1 ? 'تعادل!' : versus ? `${m.teamDef(w).short} كسبوا!` : w === 0 ? 'كسبت! 🎉' : 'خسرت المرة دي';
    let earn = null;
    if (m.opts.tourney) earn = this.game.tourney.record(m);
    const goals = m.stats.goals.map((g) => `<li style="--tc:${m.teamColor(g.team)}">⚽ ${g.name}${g.own ? ' (في نفسه)' : ''}</li>`).join('') || '<li>مفيش جوانات</li>';
    $('.res', sc).innerHTML = `
      <h2 class="ttl">${title}</h2>
      <div class="final"><span style="--tc:${t0.ui}">${t0.name}</span><b>${pair(m.score[0], m.score[1])}</b><span style="--tc:${t1.ui}">${t1.name}</span></div>
      <ul class="scorers">${goals}</ul>
      <div class="stats">
        <div><b>${pair(m.stats.fouls[0], m.stats.fouls[1])}</b><small>فاولات</small></div>
        <div><b>${pair(m.stats.nutmegs[0], m.stats.nutmegs[1])}</b><small>كباري</small></div>
        <div><b>${pair(m.stats.shots[0], m.stats.shots[1])}</b><small>شوط</small></div>
        <div><b>${arNum(m.stats.fights)}</b><small>خناقات</small></div>
        <div><b>${arNum(m.stats.momCalls)}</b><small>أمه نادت</small></div>
        <div><b>${arNum(m.stats.windows)}</b><small>إزاز اتكسر</small></div>
      </div>
      ${earn ? `<div class="earn">💰 كسبت ${arNum(earn.earn)} جنيه ${earn.result === 'win' ? '' : earn.result === 'draw' ? '• تعادل يعني تعيد الماتش' : '• لازم تكسب عشان تكمل'}</div>` : ''}`;
    const act = $('.actions', sc);
    act.innerHTML = '';
    if (m.opts.tourney) {
      const b = el('button', 'big', 'كمّل البطولة'); b.onclick = () => { audio.play('click'); this.game.quitToMenu(true); };
      act.append(b);
    } else {
      const b1 = el('button', 'big', 'ماتش تاني'); b1.onclick = () => { audio.play('click'); this.game.restartMatch(); };
      const b2 = el('button', '', 'القائمة'); b2.onclick = () => { audio.play('click'); this.game.quitToMenu(); };
      act.append(b1, b2);
    }
    this.show('result');
  }
}
