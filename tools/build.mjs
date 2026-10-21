// بيجمع الكود كله في ملف واحد game.js عشان اللعبة تشتغل بدبل كليك من غير سيرفر
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';

const entry = process.argv[2] || 'src/main.js';
const out = process.argv[3] || 'game.js';
const dev = process.argv.includes('--dev');

await esbuild.build({
  entryPoints: [entry],
  bundle: true,
  format: 'iife',
  target: 'es2020',
  outfile: out,
  minify: !dev,
  sourcemap: false,
  legalComments: 'none',
  logLevel: 'warning',
});

// الخطوط جوه ملف CSS كـ base64 عشان تشتغل حتى من file://
if (!dev) {
  const faces = [];
  for (const sub of ['arabic', 'latin']) {
    for (const w of [400, 700, 900]) {
      const b64 = readFileSync(`assets/fonts/cairo-${sub}-${w}-normal.woff2`).toString('base64');
      const range = sub === 'arabic'
        ? 'U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0898-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC'
        : 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2190-21FF, U+2212, U+2215, U+FEFF, U+FFFD';
      faces.push(`@font-face{font-family:Cairo;font-style:normal;font-weight:${w};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');unicode-range:${range}}`);
    }
  }
  writeFileSync('fonts.css', faces.join('\n') + '\n');
}
console.log('built', out);
