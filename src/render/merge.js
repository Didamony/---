// دمج الحاجات الثابتة في المكان: كل خامة = draw call واحد بدل مئات
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const ATTRS = ['position', 'normal', 'uv'];

function prep(geo, matrix) {
  let g = geo.index ? geo.toNonIndexed() : geo.clone();
  for (const k of Object.keys(g.attributes)) if (!ATTRS.includes(k)) g.deleteAttribute(k);
  if (!g.attributes.uv) {
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((g.attributes.position.count) * 2), 2));
  }
  if (!g.attributes.normal) g.computeVertexNormals();
  g.morphAttributes = {};
  g.applyMatrix4(matrix);
  g.clearGroups();
  return g;
}

// بنفصل الجيومتري حسب الجروبس (لو الميش ليه أكتر من خامة)
function splitGroups(geo) {
  const g = geo.index ? geo.toNonIndexed() : geo;
  if (!geo.groups.length) return [{ geo: g, mi: 0 }];
  const out = [];
  for (const grp of geo.groups) {
    const part = new THREE.BufferGeometry();
    for (const k of ATTRS) {
      const a = g.attributes[k];
      if (!a) continue;
      const arr = a.array.slice(grp.start * a.itemSize, (grp.start + grp.count) * a.itemSize);
      part.setAttribute(k, new THREE.BufferAttribute(arr, a.itemSize));
    }
    out.push({ geo: part, mi: grp.materialIndex });
  }
  return out;
}

export function mergeStatic(group) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  const remove = [];
  group.traverse((o) => {
    if (!o.isMesh || o.isSkinnedMesh || o.userData.dyn || o.userData.keep) return;
    // لو أي حد من الأهالي متحرك (علم مثلًا) نسيبه
    let p = o.parent;
    while (p && p !== group) { if (p.userData.dyn) return; p = p.parent; }
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const { geo, mi } of splitGroups(o.geometry)) {
      const m = mats[mi] || mats[0];
      const key = m.uuid + (o.castShadow ? 's' : 'n');
      let b = buckets.get(key);
      if (!b) { b = { m, cast: o.castShadow, geos: [] }; buckets.set(key, b); }
      b.geos.push(prep(geo, o.matrixWorld));
    }
    remove.push(o);
  });
  for (const o of remove) o.parent.remove(o);
  // نشيل المجموعات اللي فضيت
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert();
  let n = 0;
  for (const b of buckets.values()) {
    const merged = mergeGeometries(b.geos, false);
    if (!merged) continue;
    merged.applyMatrix4(inv);
    merged.computeBoundingSphere();
    const mesh = new THREE.Mesh(merged, b.m);
    mesh.castShadow = b.cast;
    mesh.receiveShadow = true;
    mesh.matrixAutoUpdate = false;
    group.add(mesh);
    n++;
    for (const g of b.geos) g.dispose();
  }
  return n;
}
