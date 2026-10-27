import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const staticDir = new URL('../static/', import.meta.url).pathname;
const scratchDir = mkdtempSync(join(tmpdir(), 'icons-'));

const ink = '#0e1012';
const tileHighlight = '#171a1f';
const lettering = '#f2f5f8';

const canvas = 512;
const capHeight = { top: 100, bottom: 412 };
const regularStroke = 38;
const tabStroke = 46;
const tinyTabStroke = 54;

const mStroke = [
	[100, 412],
	[100, 100],
	[206, 236],
	[325, 160],
	[325, 300]
];
const wStroke = mStroke.map(([x, y]) => [canvas - x, canvas - y]);

const polyline = (points, stroke) =>
	`<polyline points="${points.map((point) => point.join(',')).join(' ')}" fill="none" stroke="${lettering}" stroke-width="${stroke}" stroke-linejoin="miter" stroke-miterlimit="8"/>`;

function monogram({ rounded = false, stroke = regularStroke, scale = 0.86 } = {}) {
	const centre = canvas / 2;
	const defs = `<defs><clipPath id="cap-height"><rect y="${capHeight.top}" width="${canvas}" height="${capHeight.bottom - capHeight.top}"/></clipPath><linearGradient id="tile" x2="0" y2="1"><stop offset="0" stop-color="${tileHighlight}"/><stop offset="1" stop-color="${ink}"/></linearGradient></defs>`;
	const tile = `<rect width="${canvas}" height="${canvas}"${rounded ? ' rx="112"' : ''} fill="url(#tile)"/>`;
	const letters = `<g transform="translate(${centre} ${centre}) scale(${scale}) translate(-${centre} -${centre})"><g clip-path="url(#cap-height)">${polyline(mStroke, stroke)}${polyline(wStroke, stroke)}</g></g>`;
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${canvas} ${canvas}">${defs}${tile}${letters}</svg>\n`;
}

function renderPng(svg, size, output) {
	const source = join(scratchDir, 'icon.svg');
	writeFileSync(source, svg);
	execFileSync('rsvg-convert', ['-w', String(size), '-h', String(size), '-o', output, source]);
}

mkdirSync(join(staticDir, 'icons'), { recursive: true });

writeFileSync(
	join(staticDir, 'favicon.svg'),
	monogram({ rounded: true, stroke: tabStroke, scale: 1 })
);

const tabSizes = [16, 32, 48].map((size) => {
	const output = join(scratchDir, `tab-${size}.png`);
	const stroke = size === 16 ? tinyTabStroke : tabStroke;
	renderPng(monogram({ rounded: true, stroke, scale: 1 }), size, output);
	return output;
});
execFileSync('magick', [...tabSizes, join(staticDir, 'favicon.ico')]);

renderPng(monogram(), 180, join(staticDir, 'apple-touch-icon.png'));

for (const size of [192, 512]) {
	renderPng(monogram({ rounded: true }), size, join(staticDir, `icons/icon-${size}.png`));
	renderPng(monogram({ scale: 0.7 }), size, join(staticDir, `icons/maskable-${size}.png`));
}

console.log('Wrote favicon.svg, favicon.ico, apple-touch-icon.png and icons/ in static/');
