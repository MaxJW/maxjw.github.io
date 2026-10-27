<script lang="ts">
	import figtree from '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2?url';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" href={figtree} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

{@render children()}
