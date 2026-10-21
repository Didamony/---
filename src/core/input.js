// التحكم: كيبورد (لاعب أو اتنين)، دراع (Gamepad)، وزراير على الشاشة للموبايل
const BUTTONS = ['pass', 'shoot', 'tackle', 'pull', 'skill', 'sprint', 'switch', 'press'];

export const KEYMAPS = {
  solo: {
    up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'],
    pass: ['KeyA'], shoot: ['KeyS'], tackle: ['KeyD'], pull: ['KeyF'], skill: ['KeyW'],
    sprint: ['ShiftLeft', 'ShiftRight'], switch: ['Space'], press: ['KeyE'],
  },
  p1: {
    up: ['KeyW'], down: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
    pass: ['KeyF'], shoot: ['KeyG'], tackle: ['KeyH'], pull: ['KeyR'], skill: ['KeyT'],
    sprint: ['ShiftLeft'], switch: ['KeyQ'], press: ['KeyC'],
  },
  p2: {
    up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'],
    pass: ['KeyK', 'Numpad1'], shoot: ['KeyL', 'Numpad2'], tackle: ['Semicolon', 'Numpad3'], pull: ['KeyO', 'Numpad4'], skill: ['KeyP', 'Numpad5'],
    sprint: ['ShiftRight', 'Numpad0'], switch: ['Enter', 'NumpadEnter'], press: ['KeyI', 'Numpad6'],
  },
};

// لما الموبايل بالطول بنلف اللعبة ٩٠ درجة؛ دي بتحوّل إحداثيات الشاشة لإحداثيات اللعبة
export const view = { rot: false };
export function toLocal(x, y) { return view.rot ? [y, window.innerWidth - x] : [x, y]; }
export function localRect(el) {
  const r = el.getBoundingClientRect();
  if (!view.rot) return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height };
  const W = window.innerWidth;
  return { left: r.top, right: r.bottom, top: W - r.right, bottom: W - r.left, width: r.height, height: r.width };
}
export const viewW = () => (view.rot ? window.innerHeight : window.innerWidth);
export const viewH = () => (view.rot ? window.innerWidth : window.innerHeight);

const keys = new Set();
// زراير اتداس عليها واتشالت في نفس الفريم: نحسبها برضه
const tapped = new Set();
let listening = false;
function listen() {
  if (listening) return;
  listening = true;
  window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
    keys.add(e.code);
    if (!e.repeat) tapped.add(e.code);
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.code)) e.preventDefault();
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
  window.addEventListener('blur', () => keys.clear());
}

export class Controller {
  constructor({ keymap = null, gamepad = null, touch = null, color = '#ffd23f', label = '' } = {}) {
    listen();
    this.keymap = keymap ? KEYMAPS[keymap] : null;
    this.gamepad = gamepad;
    this.touch = touch;
    this.color = color;
    this.label = label;
    this.axis = { x: 0, z: 0 };
    this.b = {};
    for (const n of BUTTONS) this.b[n] = { down: false, pressed: false, released: false, t: 0 };
  }

  update(dt) {
    let x = 0, z = 0;
    const raw = {};
    for (const n of BUTTONS) raw[n] = false;
    const km = this.keymap;
    if (km) {
      const any = (arr) => arr.some((k) => keys.has(k) || tapped.has(k));
      if (any(km.left)) x -= 1;
      if (any(km.right)) x += 1;
      if (any(km.up)) z -= 1;
      if (any(km.down)) z += 1;
      for (const n of BUTTONS) if (any(km[n])) raw[n] = true;
    }
    if (this.gamepad !== null) {
      const pads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gp = pads && pads[this.gamepad];
      if (gp) {
        const ax = gp.axes[0] || 0, az = gp.axes[1] || 0;
        if (Math.hypot(ax, az) > 0.2) { x += ax; z += az; }
        const bt = (i) => gp.buttons[i] && gp.buttons[i].pressed;
        if (bt(14)) x -= 1; if (bt(15)) x += 1; if (bt(12)) z -= 1; if (bt(13)) z += 1;
        raw.pass ||= bt(0); raw.tackle ||= bt(1); raw.shoot ||= bt(2); raw.skill ||= bt(3);
        raw.pull ||= bt(4) || bt(6); raw.switch ||= bt(5); raw.sprint ||= bt(7);
      }
    }
    if (this.touch) {
      x += this.touch.axis.x; z += this.touch.axis.z;
      for (const n of BUTTONS) raw[n] ||= !!this.touch.btn[n];
    }
    const l = Math.hypot(x, z);
    if (l > 1) { x /= l; z /= l; }
    this.axis.x = x; this.axis.z = z;
    for (const n of BUTTONS) {
      const s = this.b[n];
      s.pressed = raw[n] && !s.down;
      s.released = !raw[n] && s.down;
      s.t = raw[n] ? s.t + dt : 0;
      s.down = raw[n];
    }
  }

  clear() {
    for (const n of BUTTONS) { const s = this.b[n]; s.pressed = s.released = false; }
  }
}

export function anyKeyDown(codes) { return codes.some((c) => keys.has(c)); }
export function endInputFrame() { tapped.clear(); }

// زراير الموبايل (زي PES): استيك على الشمال، وعلى اليمين الزراير الكبيرة تحت الصباع والدفاع فوقها
const ICONS = {
  shoot: '<circle cx="15" cy="12" r="5.2"/><path d="M2.5 9h5M1.5 12h6M2.5 15h5"/>',
  pass: '<path d="M3 12h15M13 6.5l5.5 5.5-5.5 5.5"/>',
  sprint: '<path d="M4 6l6 6-6 6M11 6l6 6-6 6"/>',
  press: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.4"/><path d="M12 1.5v4M12 18.5v4M1.5 12h4M18.5 12h4"/>',
  tackle: '<path d="M2.5 17.5h8l7-6.5"/><path d="M6 13.5l4.5 4"/><circle cx="20" cy="9" r="2.5"/>',
  pull: '<path d="M8 12V6.2a1.4 1.4 0 012.8 0V11M10.8 10.5V4.6a1.4 1.4 0 012.8 0v5.9M13.6 10.5V5.8a1.4 1.4 0 012.8 0V13c0 4.5-2.5 7.5-6.5 7.5-3 0-4.6-1.8-5.6-4L3.6 13a1.4 1.4 0 012.4-1.4L8 14"/>',
  skill: '<path d="M3 19C6 6 18 6 21 19"/><circle cx="12" cy="18.5" r="2.4"/>',
  switch: '<path d="M4.5 9.5A8 8 0 0118 6.5M19.5 14.5A8 8 0 016 17.5"/><path d="M18.5 2.5v4.5H14M5.5 21.5V17H10"/>',
};
const LABELS = { shoot: 'شوطة', pass: 'باصة', sprint: 'جري', press: 'قطع', tackle: 'كعبلة', pull: 'شدّ', skill: 'كوبري', switch: 'بدّل' };
// حجم الزرار ومكانه من ركن الشاشة اليمين تحت
const LAYOUT = {
  shoot: [86, 8, 62], pass: [76, 104, 8], sprint: [62, 202, 10],
  press: [66, 106, 98], tackle: [60, 18, 164], pull: [54, 92, 186], skill: [54, 160, 160], switch: [46, 212, 96],
};
const ATTACK = ['shoot', 'skill'];
const DEFEND = ['press', 'tackle', 'pull'];

export class TouchPad {
  constructor(root) {
    this.axis = { x: 0, z: 0 };
    this.btn = {};
    this.el = document.createElement('div');
    this.el.className = 'touchpad';
    let html = '<div class="tzone"><div class="stick"><i class="tick t1"></i><i class="tick t2"></i><i class="tick t3"></i><i class="tick t4"></i><div class="knob"></div></div></div><div class="tcluster">';
    for (const k of Object.keys(LAYOUT)) {
      html += `<button data-b="${k}" class="tb tb-${k}">` +
        `<svg viewBox="0 0 24 24">${ICONS[k]}</svg><span>${LABELS[k]}</span></button>`;
    }
    html += '</div>';
    this.el.innerHTML = html;
    root.appendChild(this.el);
    this.cluster = this.el.querySelector('.tcluster');
    const zone = this.el.querySelector('.tzone');
    const stick = this.el.querySelector('.stick');
    const knob = this.el.querySelector('.knob');
    let sid = null, cx = 0, cy = 0;
    // الاستيك بيتحط مكان ما صباعك ينزل في النص الشمال
    zone.addEventListener('touchstart', (e) => {
      if (sid !== null || this.editing) return;
      const t = e.changedTouches[0];
      sid = t.identifier;
      const zr = localRect(zone);
      const sr = localRect(stick);
      [cx, cy] = toLocal(t.clientX, t.clientY);
      stick.style.left = (cx - zr.left - sr.width / 2) + 'px';
      stick.style.top = (cy - zr.top - sr.height / 2) + 'px';
      stick.style.bottom = 'auto';
      stick.classList.add('on');
      e.preventDefault();
    }, { passive: false });
    const move = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== sid) continue;
        const [lx, ly] = toLocal(t.clientX, t.clientY);
        let dx = lx - cx, dy = ly - cy;
        const l = Math.hypot(dx, dy);
        const R = this.R;
        if (l > R) { dx *= R / l; dy *= R / l; }
        knob.style.transform = `translate(${dx}px,${dy}px)`;
        const k = Math.min(1, l / R);
        this.axis.x = l > 6 ? (dx / Math.max(l, 1e-3)) * Math.max(k, 0.35) : 0;
        this.axis.z = l > 6 ? (dy / Math.max(l, 1e-3)) * Math.max(k, 0.35) : 0;
      }
    };
    const end = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== sid) continue;
        sid = null; this.axis.x = this.axis.z = 0; knob.style.transform = '';
        stick.classList.remove('on');
        stick.style.left = ''; stick.style.top = ''; stick.style.bottom = '';
      }
    };
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
    this.el.querySelectorAll('.tb').forEach((b) => {
      const n = b.dataset.b;
      const on = (e) => { if (this.editing) return; this.btn[n] = true; b.classList.add('on'); e.preventDefault(); };
      const off = (e) => { this.btn[n] = false; b.classList.remove('on'); e.preventDefault(); };
      b.addEventListener('touchstart', on, { passive: false });
      b.addEventListener('touchend', off, { passive: false });
      b.addEventListener('touchcancel', off, { passive: false });
    });
    this.ctx = '';
    this.stick = stick;
    this.zone = zone;
    this.editing = false;
    this.layout = TouchPad.defaults();
    this.applyLayout();
    this.setupEditing();
  }

  // ---------------------------------------------------------- مكان وحجم الزراير
  static defaults() {
    const o = { buttons: {}, stick: { left: 26, bottom: 22, scale: 1 }, opacity: 1 };
    for (const [k, [size, r, b]] of Object.entries(LAYOUT)) o.buttons[k] = { size, r, b, scale: 1 };
    return o;
  }

  setLayout(saved) {
    const d = TouchPad.defaults();
    if (saved && typeof saved === 'object') {
      for (const k of Object.keys(d.buttons)) Object.assign(d.buttons[k], saved.buttons?.[k] || {});
      Object.assign(d.stick, saved.stick || {});
      if (typeof saved.opacity === 'number') d.opacity = saved.opacity;
    }
    this.layout = d;
    this.applyLayout();
  }

  applyLayout() {
    const L = this.layout;
    this.el.querySelectorAll('.tb').forEach((b) => {
      const c = L.buttons[b.dataset.b];
      const sz = Math.round(c.size * c.scale);
      // المكان محسوب من نص الزرار عشان التكبير ما يزقّهوش
      b.style.width = b.style.height = sz + 'px';
      b.style.right = Math.round(c.r + (c.size - sz) / 2) + 'px';
      b.style.bottom = Math.round(c.b + (c.size - sz) / 2) + 'px';
    });
    const st = this.stick, sz = Math.round(132 * L.stick.scale);
    st.style.width = st.style.height = sz + 'px';
    st.style.setProperty('--rest-left', L.stick.left + 'px');
    st.style.setProperty('--rest-bottom', L.stick.bottom + 'px');
    this.el.style.setProperty('--tp-opacity', L.opacity);
    this.R = 52 * L.stick.scale;
  }

  // في وضع التظبيط: اسحب أي زرار أو الاستيك، ودوس عليه عشان تختاره
  setupEditing() {
    let drag = null;
    const down = (e) => {
      if (!this.editing) return;
      const t = e.target.closest('.tb, .stick');
      if (!t) return;
      e.preventDefault();
      const key = t.classList.contains('stick') ? 'stick' : t.dataset.b;
      const r = localRect(t);
      const [px, py] = toLocal(e.clientX, e.clientY);
      drag = { key, el: t, dx: px - (r.left + r.width / 2), dy: py - (r.top + r.height / 2), id: e.pointerId };
      this.select(key);
    };
    const move = (e) => {
      if (!drag || e.pointerId !== drag.id) return;
      const [px, py] = toLocal(e.clientX, e.clientY);
      const cx = px - drag.dx, cy = py - drag.dy;
      const W = viewW(), H = viewH();
      if (drag.key === 'stick') {
        const s = this.layout.stick, sz = 132 * s.scale;
        const zr = localRect(this.zone);
        s.left = Math.round(Math.min(Math.max(0, cx - zr.left - sz / 2), W - sz));
        s.bottom = Math.round(Math.min(Math.max(0, zr.bottom - cy - sz / 2), H - sz));
      } else {
        const c = this.layout.buttons[drag.key];
        const cr = localRect(this.cluster);
        const k = cr.width / 300 || 1; // لو الزراير متصغرة على الشاشات القصيرة
        c.r = Math.round(Math.min(Math.max(0, (cr.right - cx) / k - c.size / 2), W / k - c.size));
        c.b = Math.round(Math.min(Math.max(0, (cr.bottom - cy) / k - c.size / 2), H / k - c.size));
      }
      this.applyLayout();
    };
    const up = (e) => { if (drag && e.pointerId === drag.id) { drag = null; if (this.onChange) this.onChange(); } };
    this.el.addEventListener('pointerdown', down);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }

  select(key) {
    this.selected = key;
    this.el.querySelectorAll('.tb, .stick').forEach((b) => b.classList.toggle('sel', (b.dataset.b || 'stick') === key));
    if (this.onSelect) this.onSelect(key);
  }

  setEditing(on) {
    this.editing = on;
    this.el.classList.toggle('editing', on);
    for (const k in this.btn) this.btn[k] = false;
    this.axis.x = this.axis.z = 0;
    if (on) { this.setContext(''); this.select(this.selected || 'shoot'); }
    else this.el.querySelectorAll('.sel').forEach((b) => b.classList.remove('sel'));
  }

  label(key) { return key === 'stick' ? 'الاستيك' : LABELS[key]; }

  // معاك الكورة = زراير الهجوم واضحة، مش معاك = زراير الدفاع
  setContext(mode) {
    if (mode === this.ctx) return;
    this.ctx = mode;
    this.cluster.querySelectorAll('.tb').forEach((b) => {
      const k = b.dataset.b;
      b.classList.toggle('dim', (mode === 'attack' && DEFEND.includes(k)) || (mode === 'defend' && ATTACK.includes(k)));
      b.classList.toggle('hint', mode === 'defend' && k === 'press');
    });
  }

  show(v) { this.el.style.display = v ? '' : 'none'; }
}

export const isTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
