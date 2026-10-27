<script lang="ts">
	import { stackLogo } from '#lib/brands.ts';
	import { careerStart, mainStack } from '#lib/content.ts';
	import { total } from '#lib/contributions.ts';
	import BrandIcon from './BrandIcon.svelte';
	import Counter from './Counter.svelte';

	const year = 365.25 * 24 * 60 * 60 * 1000;
	const years = Math.floor((Date.now() - careerStart.getTime()) / year);
</script>

<section aria-label="In short" class="border-line border-y">
	<dl class="max-w-page mx-auto grid grid-cols-1 md:grid-cols-3">
		<div class="cell">
			<dt class="text-muted order-2 mt-2 text-base">in industry</dt>
			<dd class="figure"><Counter value={String(years)} /> yrs</dd>
		</div>
		<div class="cell">
			<dt class="text-muted order-2 mt-2 text-base">contributions in the last year</dt>
			<dd class="figure"><Counter value={total.toLocaleString('en-GB')} /></dd>
		</div>
		<div class="cell justify-center">
			<dt class="sr-only">Main stack</dt>
			<dd class="marquee">
				{#each [false, true] as repeat (repeat)}
					<ul class="track" aria-hidden={repeat}>
						{#each mainStack as name (name)}
							{@const logo = stackLogo(name)}
							<li>
								{#if logo}<BrandIcon name={logo} size={22} mono />{/if}
								{name}
							</li>
						{/each}
					</ul>
				{/each}
			</dd>
		</div>
	</dl>
</section>

<style>
	.cell {
		display: flex;
		flex-direction: column;
		padding: 36px var(--spacing-gutter);
		border-bottom: 1px solid var(--color-line);
	}

	@media (min-width: 768px) {
		.cell {
			border-bottom: 0;
		}

		.cell + .cell {
			border-left: 1px solid var(--color-line);
		}
	}

	.figure {
		display: flex;
		align-items: baseline;
		gap: 0.3em;
		font-family: var(--font-mono);
		font-size: var(--text-figure);
		font-weight: 500;
		line-height: 1.1;
		letter-spacing: -0.03em;
	}

	.marquee {
		display: flex;
		overflow: clip;
		mask-image: linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);
	}

	.track {
		display: flex;
		flex: none;
		gap: 28px;
		padding-right: 28px;
		animation: marquee 48s linear infinite;
	}

	.marquee:hover .track {
		animation-play-state: paused;
	}

	li {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: var(--text-body);
		font-weight: 500;
		color: var(--color-soft);
		white-space: nowrap;
	}

	@keyframes marquee {
		to {
			transform: translateX(-100%);
		}
	}
</style>
