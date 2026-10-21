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
    for (const [k, [size, r, b]] of Object.entries(LAYOUT)) {
      html += `<button data-b="${k}" class="tb tb-${k}" style="width:${size}px;height:${size}px;right:${r}px;bottom:${b}px">` +
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
    const R = 52;
    // الاستيك بيتحط مكان ما صباعك ينزل في النص الشمال
    zone.addEventListener('touchstart', (e) => {
      if (sid !== null) return;
      const t = e.changedTouches[0];
      sid = t.identifier;
      const zr = zone.getBoundingClientRect();
      const sr = stick.getBoundingClientRect();
      cx = t.clientX; cy = t.clientY;
      stick.style.left = (t.clientX - zr.left - sr.width / 2) + 'px';
      stick.style.top = (t.clientY - zr.top - sr.height / 2) + 'px';
      stick.style.bottom = 'auto';
      stick.classList.add('on');
      e.preventDefault();
    }, { passive: false });
    const move = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== sid) continue;
        let dx = t.clientX - cx, dy = t.clientY - cy;
        const l = Math.hypot(dx, dy);
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
      const on = (e) => { this.btn[n] = true; b.classList.add('on'); e.preventDefault(); };
      const off = (e) => { this.btn[n] = false; b.classList.remove('on'); e.preventDefault(); };
      b.addEventListener('touchstart', on, { passive: false });
      b.addEventListener('touchend', off, { passive: false });
      b.addEventListener('touchcancel', off, { passive: false });
    });
    this.ctx = '';
  }

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
