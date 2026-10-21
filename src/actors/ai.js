// عقل الكمبيوتر: يجري ورا الكورة، يباصي، يشوط، يكعبل لو "ابن حلال" بزيادة
import * as THREE from 'three';
import { clamp, randRange, chance } from '../core/util.js';

const T = new THREE.Vector3();
const D = new THREE.Vector3();

function steerTo(p, x, z, arrive = 2.0, sprintDist = 6) {
  const dx = x - p.pos.x, dz = z - p.pos.z;
  const d = Math.hypot(dx, dz);
  if (d < 0.15) { p.want.set(0, 0); p.wantSprint = false; return d; }
  const k = Math.min(1, d / arrive);
  p.want.set((dx / d) * k, (dz / d) * k);
  p.wantSprint = d > sprintDist && p.stamina > 0.25;
  return d;
}

// --------------------------------------------------------------- اللعيب اللي معاه الكورة
function withBall(p, m, dt, lvl) {
  const ai = p.ai;
  const goal = m.goalFor(p.team);
  const gx = goal.x, def = m.def;
  const toGx = gx - p.pos.x, toGz = 0 - p.pos.z;
  const distGoal = Math.hypot(toGx, toGz);
  ai.t -= dt;
  if (ai.t <= 0) {
    ai.t = randRange(0.12, 0.28) + lvl.react * 0.5;
    const pr = m.pressureDist(p);
    const shootRange = Math.min(13, def.halfL * 0.72);
    // شوطة؟
    if (distGoal < shootRange && p.cool.kick <= 0) {
      const clear = !m.lineBlocked(p.pos.x, p.pos.z, gx, 0, p.team, 0.6);
      const close = distGoal < shootRange * 0.45;
      const prob = close ? 0.85 : clear ? 0.55 : 0.18;
      if (chance(prob * (0.6 + lvl.skill * 0.5))) {
        const gk = m.goalkeeper(1 - p.team);
        let aim = randRange(0.35, 0.9) * (chance(0.5) ? 1 : -1);
        if (gk && Math.abs(gk.pos.z) > 0.2) aim = -Math.sign(gk.pos.z) * randRange(0.45, 0.95);
        const power = clamp(distGoal / shootRange + randRange(-0.1, 0.15), 0.5, 0.93);
        if (p.shoot(power, aim, goal.type === 'frame' || goal.type === 'chalk' ? randRange(0, 0.8) : randRange(0, 0.25))) return;
      }
    }
    // باصة؟
    const best = m.bestPassTarget(p, null);
    if (best) {
      const urgent = pr < 1.7;
      if ((urgent && best.score > -0.4 && chance(0.55 + lvl.skill * 0.3)) || (best.score > 0.55 && chance(0.25))) {
        if (p.pass(best.player)) return;
      }
    }
    // كوبري؟
    if (pr < 2.0 && chance(0.1 + lvl.skill * 0.12)) {
      const v = m.nutmegVictim(p);
      if (v && p.nutmeg()) return;
    }
    // نجري بالكورة: ناحية الجون ونبعد عن الخصوم
    D.set(toGx, 0, toGz).normalize();
    T.set(0, 0, 0);
    for (const o of m.teams[1 - p.team]) {
      if (!o.active || o.down) continue;
      const dx = p.pos.x - o.pos.x, dz = p.pos.z - o.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 4.5 || d < 0.01) continue;
      const ahead = -(dx * D.x + dz * D.z) / d;
      if (ahead < -0.2) continue;
      const w = (4.5 - d) / 4.5;
      // نلف من جنبه
      const side = Math.sign(dx * D.z - dz * D.x) || (chance(0.5) ? 1 : -1);
      T.x += (-D.z * side) * w * 1.6 + (dx / d) * w * 0.6;
      T.z += (D.x * side) * w * 1.6 + (dz / d) * w * 0.6;
    }
    // نبعد عن الحيطان
    const b = m.ctx.bounds;
    if (p.pos.z < b.minZ + 1.5) T.z += 1;
    if (p.pos.z > b.maxZ - 1.5) T.z -= 1;
    D.add(T).normalize();
    ai.dribble = ai.dribble || new THREE.Vector2();
    ai.dribble.set(D.x, D.z);
    ai.sprint = m.pressureDist(p) > 2.5 && p.stamina > 0.4 && chance(0.6);
  }
  if (ai.dribble) {
    p.want.copy(ai.dribble);
    p.wantSprint = ai.sprint;
  }
}

// --------------------------------------------------------------- اللي بيجري ورا الكورة
function chase(p, m, dt, lvl) {
  const ball = m.ball;
  const owner = m.owner;
  if (owner && owner.team !== p.team) {
    // نقف قدامه ما بينه وبين جوننا
    const own = m.ownGoal(p.team);
    const ox = own.x - owner.pos.x, oz = -owner.pos.z;
    const ol = Math.hypot(ox, oz) || 1;
    const d = Math.hypot(owner.pos.x - p.pos.x, owner.pos.z - p.pos.z);
    const lead = d > 2 ? 1.2 : 0.35;
    steerTo(p, owner.pos.x + (ox / ol) * lead + owner.vel.x * 0.2, owner.pos.z + (oz / ol) * lead + owner.vel.z * 0.2, 1.0, 3);
    p.wantSprint = d > 1.5 && p.stamina > 0.2;
    // حركات "مش رياضية"
    p.ai.dirtyT = (p.ai.dirtyT || 0) - dt;
    if (p.ai.dirtyT <= 0 && p.canAct) {
      p.ai.dirtyT = randRange(0.35, 0.7);
      const behind = (owner.pos.x - p.pos.x) * Math.sin(owner.facing) + (owner.pos.z - p.pos.z) * Math.cos(owner.facing) > 0;
      if (d < 2.6 && d > 0.9 && chance(lvl.dirty * 0.45)) {
        const fx = Math.sin(p.facing), fz = Math.cos(p.facing);
        const dot = ((ball.pos.x - p.pos.x) * fx + (ball.pos.z - p.pos.z) * fz) / Math.max(0.1, Math.hypot(ball.pos.x - p.pos.x, ball.pos.z - p.pos.z));
        if (dot > 0.75) { p.faceTo(ball.pos); p.slide(); return; }
      }
      if (d < 1.15 && behind && chance(lvl.dirty * 0.5)) {
        if (p.pull(owner)) p.ai.pullFor = randRange(0.6, 1.3);
      }
    }
    return;
  }
  // الكورة سايبة: نروح للمكان اللي هتوصله
  const bx = ball.pos.x, bz = ball.pos.z;
  const d0 = Math.hypot(bx - p.pos.x, bz - p.pos.z);
  const tt = clamp(d0 / 6.5, 0, 1.4);
  let ix = bx + ball.vel.x * tt * 0.7, iz = bz + ball.vel.z * tt * 0.7;
  const b = m.ctx.bounds;
  ix = clamp(ix, b.minX + 0.3, b.maxX - 0.3);
  iz = clamp(iz, b.minZ + 0.3, b.maxZ - 0.3);
  steerTo(p, ix, iz, 0.6, 2.5);
}

// --------------------------------------------------------------- الباقيين
function support(p, m, dt, slot, nSlots, attacking) {
  const def = m.def;
  const ball = m.ball.pos;
  const b = m.ctx.bounds;
  const dir = p.dir;
  const lanes = nSlots <= 1 ? [0] : nSlots === 2 ? [-0.5, 0.5] : [-0.62, 0, 0.62];
  const lane = lanes[slot % lanes.length] * def.halfW;
  let tx, tz;
  if (attacking) {
    tx = ball.x + dir * (4 + (slot % 2) * 3.5);
    tz = lane + Math.sin(m.time * 0.6 + p.idx) * 1.2;
    tx = clamp(tx, -def.halfL + 2, def.halfL - 2.5);
  } else {
    const own = m.ownGoal(p.team);
    const k = 0.42 + (slot % 2) * 0.18;
    tx = own.x + (ball.x - own.x) * k;
    tz = ball.z * 0.45 + lane * 0.6;
    // نراقب أقرب خصم
    let best = null, bd = 4.5;
    for (const o of m.teams[1 - p.team]) {
      if (!o.active || o === m.owner) continue;
      const d = Math.hypot(o.pos.x - tx, o.pos.z - tz);
      if (d < bd) { bd = d; best = o; }
    }
    if (best) {
      const gx = own.x - best.pos.x, gz = -best.pos.z, gl = Math.hypot(gx, gz) || 1;
      tx = best.pos.x + (gx / gl) * 1.4;
      tz = best.pos.z + (gz / gl) * 1.4;
    }
  }
  tx = clamp(tx, b.minX + 0.6, b.maxX - 0.6);
  tz = clamp(tz, b.minZ + 0.6, b.maxZ - 0.6);
  steerTo(p, tx, tz, 2.2, 7);
}

// --------------------------------------------------------------- الحارس
function keeper(p, m, dt, lvl) {
  const own = m.ownGoal(p.team);
  const ball = m.ball;
  const dir = p.dir;
  const lineX = own.x + dir * (own.type === 'chalk' ? 1.1 : 0.9);
  p.lookAt = ball.pos;
  if (p.state === 'gkhold') {
    p.ai.holdT = (p.ai.holdT || 0) + dt;
    if (p.ai.holdT > 0.9) {
      p.ai.holdT = 0;
      const best = m.bestPassTarget(p, null, true);
      p.gkThrow(best ? best.player : null);
    }
    return;
  }
  if (!p.canAct) return;
  // جاية شوطة؟
  const vx = ball.vel.x;
  if (!m.owner && vx * dir < -3.5) {
    const t = (lineX - ball.pos.x) / vx;
    if (t > 0 && t < 1.1) {
      const zAt = ball.pos.z + ball.vel.z * t;
      const yAt = ball.pos.y + ball.vel.y * t - 4.9 * t * t;
      const dz = zAt - p.pos.z;
      p.ai.seen = (p.ai.seen || 0) + dt;
      if (p.ai.seen > lvl.react * 0.6 && Math.abs(zAt) < own.hw + 0.6 && yAt < own.h + 0.4) {
        if (Math.abs(dz) > 0.75 && t < 0.55) {
          // يمين الحارس = (-cos, sin)؛ بنقارن بمكان الكورة على العرض
          const side = dz * Math.sin(p.facing) > 0 ? 1 : -1;
          p.dive(side, clamp(Math.abs(dz) / Math.max(0.25, t) * 0.8, 3, 7.5));
          p.ai.seen = 0;
          return;
        }
        steerTo(p, lineX, clamp(zAt, -own.hw, own.hw), 0.4, 1);
        p.wantSprint = true;
        return;
      }
    }
  } else p.ai.seen = 0;

  const db = Math.hypot(ball.pos.x - own.x, ball.pos.z);
  const loose = !m.owner;
  // يطلع ياخدها لو قريبة
  if (loose && db < 5.5 && m.nearestTo(ball.pos, p.team) === p && ball.speed() < 9) {
    steerTo(p, ball.pos.x, ball.pos.z, 0.5, 2);
    return;
  }
  // يقفل الزاوية
  const out = m.owner && m.owner.team !== p.team && db < 6 ? 1.6 : 0;
  const z = clamp(ball.pos.z * 0.5, -own.hw * 0.85, own.hw * 0.85);
  steerTo(p, lineX + dir * out, z, 0.8, 3);
}

// --------------------------------------------------------------- نقطة الدخول
export function thinkAI(p, m, dt) {
  if (!p.active) return;
  const lvl = m.aiLevel(p.team);
  p.lookAt = m.ball.pos;
  if (p.pullTarget) {
    p.ai.pullFor = (p.ai.pullFor || 1) - dt;
    const t = p.pullTarget;
    steerTo(p, t.pos.x - Math.sin(t.facing) * 0.6, t.pos.z - Math.cos(t.facing) * 0.6, 0.5, 1);
    if (p.ai.pullFor <= 0) p.releasePull(chance(0.4));
    return;
  }
  if (p.state === 'celebrate') return;
  if (p.isGK) { keeper(p, m, dt, lvl); return; }
  if (!p.canAct && p.state !== 'kick') { p.want.set(0, 0); return; }
  if (p.hasBall) { withBall(p, m, dt, lvl); return; }
  const roles = m.roles[p.team];
  if (roles.chaser === p) { chase(p, m, dt, lvl); return; }
  // لو زميلي بيدوّر عليا
  if (m.pendingPass && m.pendingPass.target === p) {
    const b = m.ball;
    const t = clamp(Math.hypot(b.pos.x - p.pos.x, b.pos.z - p.pos.z) / Math.max(4, b.groundSpeed()), 0, 1.2);
    steerTo(p, b.pos.x + b.vel.x * t, b.pos.z + b.vel.z * t, 0.6, 3);
    return;
  }
  const attacking = m.owner ? m.owner.team === p.team : m.ball.lastKickTeam === p.team && m.ball.groundSpeed() > 3;
  support(p, m, dt, roles.slots.get(p) ?? 0, roles.nSlots, attacking);
}
