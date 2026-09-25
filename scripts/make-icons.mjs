/**
 * Builds the site's icons from the portrait in public/images/sidney.png.
 *
 *   node scripts/make-icons.mjs
 *
 * Emitted into public/ and committed — they are part of the site, not build
 * output:
 *
 *   icon.png          48×48   the tab, and the icon beside a Google result.
 *                             48 is a floor, not a preference: Google ignores
 *                             a favicon that is not a multiple of 48px and
 *                             shows a grey globe instead. The old favicon.ico
 *                             was 32×32, which is why the globe appeared.
 *   apple-icon.png   180×180  iPhone and iPad home screen
 *   icon-192.png     192×192  Android home screen
 *   icon-512.png     512×512  the same, on a high-resolution screen
 *
 * The portrait is cropped square around the face and masked to a circle, so it
 * still reads as a person at 48 pixels.
 */

import sharp from 'sharp';
import path from 'node:path';
import fs from 'node:fs';

const PUBLIC = path.join(process.cwd(), 'public');
const SOURCE = path.join(PUBLIC, 'images', 'sidney.png');

if (!fs.existsSync(SOURCE)) {
	console.error('Missing public/images/sidney.png');
	process.exit(1);
}

const { width = 0, height = 0 } = await sharp(SOURCE).metadata();

/**
 * The head sits in the upper middle of the frame, so a centred square crop
 * would cut the top of it off and include a lot of jumper. This takes a square
 * from the top, insetting slightly from each side.
 */
const side = Math.round(Math.min(width, height) * 0.86);
const left = Math.round((width - side) / 2);
const top = Math.round(height * 0.02);

const face = await sharp(SOURCE)
	.extract({ left, top, width: side, height: Math.min(side, height - top) })
	.toBuffer();

/** White behind the circle: the portrait's own background, and it keeps the
    icon legible on both light and dark browser chrome. */
async function icon(size) {
	const circle = Buffer.from(
		`<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`
	);

	const portrait = await sharp(face)
		.resize(size, size, { fit: 'cover', position: 'top' })
		.toBuffer();

	return sharp(portrait)
		.composite([{ input: circle, blend: 'dest-in' }])
		.png()
		.toBuffer();
}

for (const [name, size] of [
	['icon.png', 48],
	['apple-icon.png', 180],
	['icon-192.png', 192],
	['icon-512.png', 512]
]) {
	fs.writeFileSync(path.join(PUBLIC, name), await icon(size));
	console.log(`  + public/${name} (${size}×${size})`);
}

console.log('\nIcons written.');
