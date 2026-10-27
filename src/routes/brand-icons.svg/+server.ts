import { brands } from '#lib/brands.ts';

export const prerender = true;

const symbols = Object.entries(brands)
	.map(([key, { path }]) => `<symbol id="${key}" viewBox="0 0 24 24"><path d="${path}"/></symbol>`)
	.join('');

export const GET = () =>
	new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`, {
		headers: { 'Content-Type': 'image/svg+xml' }
	});
