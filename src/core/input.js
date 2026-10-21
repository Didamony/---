// التحكم: كيبورد (لاعب أو اتنين)، دراع (Gamepad)، وزراير على الشاشة للموبايل
const BUTTONS = ['pass', 'shoot', 'tackle', 'pull', 'skill', 'sprint', 'switch'];

export const KEYMAPS = {
  solo: {
    up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'],
    pass: ['KeyA'], shoot: ['KeyS'], tackle: ['KeyD'], pull: ['KeyF'], skill: ['KeyW'],
    sprint: ['ShiftLeft', 'ShiftRight'], switch: ['Space'],
  },
  p1: {
    up: ['KeyW'], down: ['KeyS'], left: ['KeyA'], right: ['KeyD'],
    pass: ['KeyF'], shoot: ['KeyG'], tackle: ['KeyH'], pull: ['KeyR'], skill: ['KeyT'],
    sprint: ['ShiftLeft'], switch: ['KeyQ'],
  },
  p2: {
    up: ['ArrowUp'], down: ['ArrowDown'], left: ['ArrowLeft'], right: ['ArrowRight'],
    pass: ['KeyK', 'Numpad1'], shoot: ['KeyL', 'Numpad2'], tackle: ['Semicolon', 'Numpad3'], pull: ['KeyO', 'Numpad4'], skill: ['KeyP', 'Numpad5'],
    sprint: ['ShiftRight', 'Numpad0'], switch: ['Enter', 'NumpadEnter'],
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

// زراير الموبايل
export class TouchPad {
  constructor(root) {
    this.axis = { x: 0, z: 0 };
    this.btn = {};
    this.el = document.createElement('div');
    this.el.className = 'touchpad';
    this.el.innerHTML = `
      <div class="stick"><div class="knob"></div></div>
      <div class="tbtns">
        <button data-b="shoot" class="tb big">شوطة</button>
        <button data-b="pass" class="tb big">باصة</button>
        <button data-b="tackle" class="tb hot">كعبلة</button>
        <button data-b="pull" class="tb hot">شدّ</button>
        <button data-b="skill" class="tb">كوبري</button>
        <button data-b="sprint" class="tb">جري</button>
        <button data-b="switch" class="tb sm">بدّل</button>
      </div>`;
    root.appendChild(this.el);
    const stick = this.el.querySelector('.stick');
    const knob = this.el.querySelector('.knob');
    let sid = null, cx = 0, cy = 0;
    const R = 50;
    stick.addEventListener('touchstart', (e) => {
      const t = e.changedTouches[0];
      sid = t.identifier;
      const r = stick.getBoundingClientRect();
      cx = r.left + r.width / 2; cy = r.top + r.height / 2;
      e.preventDefault();
    }, { passive: false });
    const move = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier !== sid) continue;
        let dx = t.clientX - cx, dy = t.clientY - cy;
        const l = Math.hypot(dx, dy);
        if (l > R) { dx *= R / l; dy *= R / l; }
        knob.style.transform = `translate(${dx}px,${dy}px)`;
        this.axis.x = dx / R; this.axis.z = dy / R;
      }
    };
    const end = (e) => {
      for (const t of e.changedTouches) if (t.identifier === sid) { sid = null; this.axis.x = this.axis.z = 0; knob.style.transform = ''; }
    };
    window.addEventListener('touchmove', move, { passive: true });
    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);
    this.el.querySelectorAll('.tb').forEach((b) => {
      const n = b.dataset.b;
      b.addEventListener('touchstart', (e) => { this.btn[n] = true; b.classList.add('on'); e.preventDefault(); }, { passive: false });
      b.addEventListener('touchend', (e) => { this.btn[n] = false; b.classList.remove('on'); e.preventDefault(); }, { passive: false });
    });
  }
  show(v) { this.el.style.display = v ? '' : 'none'; }
}

export const isTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
