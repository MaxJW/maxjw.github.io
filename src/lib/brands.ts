import {
	siCloudflare,
	siCloudflareworkers,
	siDotnet,
	siFirebase,
	siGo,
	siGraphql,
	siJavascript,
	siNextdotjs,
	siNodedotjs,
	siPostgresql,
	siPython,
	siReact,
	siReactrouter,
	siRust,
	siShopify,
	siStripe,
	siSvelte,
	siTerraform,
	siTypescript,
	siWebgpu,
	siWgpu
} from 'simple-icons';

const simpleIcons = {
	cloudflare: siCloudflare,
	cloudflareworkers: siCloudflareworkers,
	dotnet: siDotnet,
	firebase: siFirebase,
	go: siGo,
	graphql: siGraphql,
	javascript: siJavascript,
	nextdotjs: siNextdotjs,
	nodedotjs: siNodedotjs,
	postgresql: siPostgresql,
	python: siPython,
	react: siReact,
	reactrouter: siReactrouter,
	rust: siRust,
	shopify: siShopify,
	stripe: siStripe,
	svelte: siSvelte,
	terraform: siTerraform,
	typescript: siTypescript,
	webgpu: siWebgpu,
	wgpu: siWgpu
};

const lightOnDark = '#e6edf3';

const glyphs = {
	aws: {
		path: 'M6.5 19.5c-2.76 0-5-2.13-5-4.75 0-2.4 1.87-4.38 4.29-4.7C6.6 7.15 9.08 5 12 5c3.04 0 5.55 2.27 5.95 5.2 2.56.16 4.55 2.2 4.55 4.68 0 2.55-2.13 4.62-4.75 4.62H6.5z',
		color: '#ff9900'
	},
	d1: {
		path: 'M12 2c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 8.2c1.6 1.2 4.6 1.8 8 1.8s6.4-.6 8-1.8V12c0 1.7-3.6 3-8 3s-8-1.3-8-3V8.2zm0 7c1.6 1.2 4.6 1.8 8 1.8s6.4-.6 8-1.8V19c0 1.7-3.6 3-8 3s-8-1.3-8-3v-3.8z',
		color: '#f38020'
	},
	r2: {
		path: 'M3 5h18l-1.9 14.2a2 2 0 0 1-2 1.8H6.9a2 2 0 0 1-2-1.8zm2.3 2 1.6 12h10.2l1.6-12z',
		color: '#f38020'
	},
	egui: {
		path: 'M3 4h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 5v9h16V9z',
		color: lightOnDark
	}
};

export type BrandKey = keyof typeof simpleIcons | keyof typeof glyphs;

function relativeLuminance(hex: string) {
	const [red, green, blue] = [0, 2, 4].map((offset) => {
		const channel = parseInt(hex.slice(offset, offset + 2), 16) / 255;
		return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

const readableOnDark = (hex: string) => (relativeLuminance(hex) < 0.05 ? lightOnDark : `#${hex}`);

export const brands = {
	...Object.fromEntries(
		Object.entries(simpleIcons).map(([key, { path, hex }]) => [
			key,
			{ path, color: readableOnDark(hex) }
		])
	),
	...glyphs
} as Record<BrandKey, { path: string; color: string }>;

const stackLogos: Partial<Record<string, BrandKey>> = {
	'ASP.NET': 'dotnet',
	AWS: 'aws',
	Cloudflare: 'cloudflare',
	'Cloudflare Workers': 'cloudflareworkers',
	D1: 'd1',
	egui: 'egui',
	Firebase: 'firebase',
	Go: 'go',
	GraphQL: 'graphql',
	JavaScript: 'javascript',
	'Next.js': 'nextdotjs',
	Node: 'nodedotjs',
	Postgres: 'postgresql',
	PostgreSQL: 'postgresql',
	Python: 'python',
	R2: 'r2',
	React: 'react',
	'React Native': 'react',
	'React Router': 'reactrouter',
	Rust: 'rust',
	Shopify: 'shopify',
	Stripe: 'stripe',
	Svelte: 'svelte',
	SvelteKit: 'svelte',
	Terraform: 'terraform',
	TypeScript: 'typescript',
	WGSL: 'webgpu',
	wgpu: 'wgpu'
};

export const stackLogo = (name: string) => stackLogos[name];
