import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const outputDir = process.env.BUILD_DIR ?? 'build';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			adapter: adapter({
				pages: outputDir,
				assets: outputDir,
				fallback: undefined,
				precompress: false,
				strict: true
			}),
			inlineStyleThreshold: Infinity,
			paths: { relative: false }
		})
	]
});
