/**
 * Generates hero-banner.webp from hero-banner.png for smaller LCP.
 * Run before build: node scripts/generate-hero-webp.mjs
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const src = join(root, "src", "assets", "sections", "hero", "hero-banner.png");
const out = join(root, "src", "assets", "sections", "hero", "hero-banner.webp");

if (!existsSync(src)) {
  console.warn("scripts/generate-hero-webp.mjs: hero-banner.png not found, skip.");
  process.exit(0);
}

let sharp;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.warn("scripts/generate-hero-webp.mjs: install sharp (npm i -D sharp) to generate WebP. Skipping.");
  process.exit(0);
}

const buf = readFileSync(src);
const pipeline = sharp(buf)
  .resize(1400, null, { withoutEnlargement: true })
  .webp({ quality: 82 });
const webp = await pipeline.toBuffer();
writeFileSync(out, webp);
console.log("scripts/generate-hero-webp.mjs: wrote hero-banner.webp");
