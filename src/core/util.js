// أدوات رياضية صغيرة بنستخدمها في كل حتة

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (t) => t * t * (3 - 2 * t);
export const smoothstep = (a, b, v) => smooth(clamp((v - a) / (b - a), 0, 1));
export const damp = (cur, target, rate, dt) => lerp(cur, target, 1 - Math.exp(-rate * dt));
export const TAU = Math.PI * 2;

export function wrapAngle(a) {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}

export function dampAngle(cur, target, rate, dt) {
  return cur + wrapAngle(target - cur) * (1 - Math.exp(-rate * dt));
}

export function dist2(ax, az, bx, bz) {
  const dx = ax - bx, dz = az - bz;
  return Math.sqrt(dx * dx + dz * dz);
}

// مولد أرقام عشوائية ثابت عشان نفس الخريطة تطلع بنفس الشكل كل مرة
export function makeRng(seed = 1) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  r.range = (a, b) => a + (b - a) * r();
  r.int = (a, b) => Math.floor(a + (b - a + 1) * r());
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.chance = (p) => r() < p;
  return r;
}

export const rand = Math.random;
export const randRange = (a, b) => a + (b - a) * Math.random();
export const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const chance = (p) => Math.random() < p;

// تحويل الأرقام للعربي
const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩';
export const arNum = (n) => String(n).replace(/[0-9]/g, (d) => AR_DIGITS[d]);

export function fmtClock(sec) {
  sec = Math.max(0, Math.ceil(sec));
  const m = Math.floor(sec / 60), s = sec % 60;
  return arNum(String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0'));
}
