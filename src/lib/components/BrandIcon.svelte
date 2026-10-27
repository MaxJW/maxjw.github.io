<script lang="ts">
	import { brands, type BrandKey } from '#lib/brands.ts';

	let {
		name,
		size = 22,
		mono = false
	}: { name: BrandKey; size?: number; mono?: boolean } = $props();

	const color = $derived(brands[name].color);
</script>

<svg
	aria-hidden="true"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	style:--brand={color}
	fill={mono ? 'currentColor' : color}
>
	<use href="/brand-icons.svg#{name}" />
</svg>
