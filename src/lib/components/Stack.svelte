<script lang="ts">
	import { stackLogo } from '#lib/brands.ts';
	import BrandIcon from './BrandIcon.svelte';

	let { items, label }: { items: string[]; label: string } = $props();
</script>

<ul class="stack" aria-label={label}>
	{#each items as item (item)}
		{@const logo = stackLogo(item)}
		<li>
			{#if logo}<BrandIcon name={logo} size={16} mono />{/if}
			{item}
		</li>
	{/each}
</ul>

<style>
	.stack {
		display: flex;
		flex-wrap: wrap;
		gap: 10px 22px;
	}

	li {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-size: var(--text-meta);
		color: var(--color-muted);
		transition: color 0.25s ease;
	}

	li :global(svg) {
		transition:
			color 0.25s ease,
			transform 0.25s var(--ease-glide);
	}

	li:hover {
		color: var(--color-text);
	}

	li:hover :global(svg) {
		color: var(--brand);
		transform: scale(1.12);
	}
</style>
