// scripts/make-icons.mjs (run once with `node scripts/make-icons.mjs` when the icon changes)
import sharp from "sharp";
const src = "src/assets/icon.png";
for (const [size, out] of [[180, "public/apple-touch-icon.png"], [192, "public/icon-192.png"], [512, "public/icon-512.png"]]) {
  await sharp(src).resize(size, size).png({ compressionLevel: 9 }).toFile(out);
  console.log("wrote", out);
}
