<script lang="ts">
	import { alsoBuilt } from '#lib/content.ts';
	import Icon from './Icon.svelte';
</script>

<section aria-labelledby="also-built" class="page pt-28">
	<h2 id="also-built" class="label mb-4">Also built</h2>
	<ul class="border-line border-b">
		{#each alsoBuilt as item (item.name)}
			<li class="reveal">
				<a class="row" href={item.url}>
					<span class="text-muted font-mono text-sm">{item.year}</span>
					<span class="text-[19px] font-semibold">{item.name}</span>
					<span class="text-soft hidden text-[17px] md:block">{item.summary}</span>
					<span class="text-muted hidden text-[15px] md:block">{item.stack}</span>
					<span class="arrow"><Icon name="arrow" size={18} /></span>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.row {
		display: grid;
		grid-template-columns: 56px minmax(0, 1fr) 24px;
		gap: 24px;
		align-items: baseline;
		position: relative;
		isolation: isolate;
		padding: 22px 0;
		border-top: 1px solid var(--color-line);
		color: var(--color-text);
	}

	.row::before {
		content: '';
		position: absolute;
		inset: 1px -12px 0;
		z-index: -1;
		border-radius: 10px;
		transition: background 0.2s ease;
	}

	.row:hover {
		color: #fff;
	}

	.row:hover::before {
		background: var(--color-panel);
	}

	.arrow {
		display: inline-flex;
		color: var(--color-accent);
		transition: transform 0.2s ease;
	}

	.row:hover .arrow {
		transform: translate(2px, -2px);
	}

	@media (min-width: 768px) {
		.row {
			grid-template-columns: 72px minmax(0, 180px) minmax(0, 1fr) minmax(0, 200px) 24px;
		}
	}
</style>
