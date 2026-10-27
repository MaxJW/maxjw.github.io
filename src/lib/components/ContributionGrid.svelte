<script lang="ts">
	import { cell, height, weeks, width } from '#lib/contributions.ts';
</script>

<svg {width} {height} viewBox="0 0 {width} {height}" aria-hidden="true">
	{#each weeks as { week, entrance, days } (week)}
		<g style:--entrance={entrance}>
			{#each days as { x, y, level } (y)}
				<rect {x} {y} width={cell} height={cell} rx="6.5" class={level ? `l${level}` : undefined} />
			{/each}
		</g>
	{/each}
</svg>

<style>
	svg {
		--offscreen-weeks: 0;
		display: block;
		overflow: visible;
		fill: var(--color-level-0);

		:global {
			.l1 {
				fill: var(--color-level-1);
			}

			.l2 {
				fill: var(--color-level-2);
			}

			.l3 {
				fill: var(--color-level-3);
			}

			.l4 {
				fill: var(--color-level-4);
			}

			g {
				animation: week-in 0.8s var(--ease-glide) both;
				animation-delay: calc(100ms + max(0, var(--entrance) - var(--offscreen-weeks)) * 16ms);
			}

			@media (hover: hover) {
				rect {
					transform-box: fill-box;
					transform-origin: center;
					transition: transform 0.6s var(--ease-spring);
				}

				rect:hover {
					transform: scale(1.3);
					transition-duration: 0.18s;
				}
			}
		}
	}

	@media (width < 768px) {
		svg {
			--offscreen-weeks: 40;
		}
	}

	@media (768px <= width < 1024px) {
		svg {
			--offscreen-weeks: 32;
		}
	}

	@media (1024px <= width < 1280px) {
		svg {
			--offscreen-weeks: 25;
		}
	}

	@media (1280px <= width < 1440px) {
		svg {
			--offscreen-weeks: 20;
		}
	}

	@media (1440px <= width < 1920px) {
		svg {
			--offscreen-weeks: 19;
		}
	}

	@media (1920px <= width < 2560px) {
		svg {
			--offscreen-weeks: 6;
		}
	}

	@keyframes -global-week-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
	}
</style>
