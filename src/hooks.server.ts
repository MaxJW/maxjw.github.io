import type { Handle } from '@sveltejs/kit/hooks';
import reveal from '#lib/client/reveal.js?raw';
import heroEntrance from '#lib/client/hero-entrance.js?raw';

const hydrationMarkers = /<!--(?:\[!?-?\d*|\]|[a-z0-9]*)-->/g;
const inlineScript = `<script>${[reveal, heroEntrance].map((source) => source.trim()).join('\n')}</script>`;

export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace(hydrationMarkers, '').replace('</body>', `${inlineScript}</body>`)
	});
