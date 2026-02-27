/**
 * Removes (keys out) near-white background from certification icon PNGs.
 * Writes result back to the same file (preserving filename).
 *
 * Usage:
 *   node scripts/remove-white-bg-cert-icons.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { globSync } from "glob";
import os from "os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const certDir = path.join(root, "src", "assets", "sections", "certification");
const targets = globSync(path.join(certDir, "icon*222.PNG"));

if (!targets.length) {
  console.log("No icon*222.PNG files found. Nothing to do.");
  process.exit(0);
}

function clamp255(n) {
  return Math.max(0, Math.min(255, n));
}

for (const file of targets) {
  const input = sharp(file, { failOn: "none" }).ensureAlpha();
  const { data, info } = await input.raw().toBuffer({ resolveWithObject: true });
  if (info.channels !== 4) {
    console.warn(`Skip ${path.basename(file)}: expected RGBA, got ${info.channels}ch`);
    continue;
  }

  // Key out near-white pixels (typical baked-in white backgrounds).
  // Keep colored logo pixels intact; soften the edge by making "almost white" partially transparent.
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (a === 0) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    const avg = (r + g + b) / 3;

    // Strongly white and neutral → fully transparent.
    if (avg >= 250 && diff <= 12) {
      data[i + 3] = 0;
      continue;
    }

    // Near-white neutral pixels → fade alpha to avoid harsh halo.
    if (avg >= 232 && diff <= 18) {
      // avg 232..250 → alpha 255..0
      const t = (250 - avg) / (250 - 232);
      const newAlpha = clamp255(Math.round(255 * t));
      data[i + 3] = Math.min(a, newAlpha);
    }
  }

  const tmp = path.join(os.tmpdir(), `cert-icon-${path.basename(file)}-${Date.now()}.png`);
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(tmp);

  fs.copyFileSync(tmp, file);
  fs.unlinkSync(tmp);
  console.log(`Processed: ${path.relative(root, file)}`);
}

