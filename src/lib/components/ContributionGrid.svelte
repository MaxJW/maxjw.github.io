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
				animation-delay: calc(100ms + var(--entrance) * 16ms);
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

	@keyframes -global-week-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
	}
</style>
