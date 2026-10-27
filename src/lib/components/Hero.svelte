<script lang="ts">
	import profile from '#lib/assets/profile.jpg?w=480;360;288;240&quality=80&enhanced';
	import placeholder from '#lib/assets/profile.jpg?w=24&format=webp&quality=50&inline';
	import { gap, step } from '#lib/contributions.ts';
	import { links } from '#lib/content.ts';
	import ContributionGrid from './ContributionGrid.svelte';
	import Icon from './Icon.svelte';
</script>

<section class="hero" aria-labelledby="name">
	<div class="band" style:--step="{step}px" style:--gap="{gap}px">
		<div class="fade-to-history">
			<div class="scale"><ContributionGrid /></div>
		</div>
		<div class="tile" style:--placeholder="url({placeholder})">
			<enhanced:img
				src={profile}
				alt="Max Wilson"
				sizes="(min-width: 641px) 240px, 144px"
				fetchpriority="high"
				class="photo"
			/>
		</div>
	</div>

	<div class="page">
		<h1 id="name" class="name settle">Max Wilson</h1>

		<div class="meta">
			<p class="settle late text-muted text-lg text-balance sm:text-xl">
				Full stack developer at <a href="https://hertilityhealth.com/">Hertility Health</a> · Fife, Scotland
			</p>
			<nav id="hero-links" aria-label="Elsewhere" class="flex flex-wrap gap-2.5">
				{#each links.filter((link) => link.hero) as link, i (link.href)}
					<a class="icon" style:--i={i} href={link.href} aria-label={link.label}
						><Icon name={link.icon} /></a
					>
				{/each}
			</nav>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: clamp(96px, 13svh, 150px) 0 clamp(64px, 10svh, 120px);
		overflow: clip;
	}

	.band {
		--zoom: 1;
		--scaled-step: calc(var(--step) * var(--zoom));
		--scaled-gap: calc(var(--gap) * var(--zoom));
		--tile-size: calc(7 * var(--scaled-step) + var(--scaled-gap));
		--content-left: max(
			var(--spacing-gutter),
			(100cqw - var(--container-page)) / 2 + var(--spacing-gutter)
		);
		--tile-right: round(
			nearest,
			100cqw - var(--content-left) - 7 * var(--scaled-step),
			var(--scaled-step)
		);
		container-type: inline-size;
		position: relative;
		display: flow-root;
	}

	.fade-to-history {
		display: flex;
		justify-content: flex-end;
		padding: 8px var(--scaled-gap) 8px 0;
		margin-block: -8px;
		mask-image: linear-gradient(90deg, transparent, #000 16%), linear-gradient(#000, #000);
		mask-size:
			100% 100%,
			var(--tile-size) var(--tile-size);
		mask-position:
			0 0,
			right var(--tile-right) top calc(8px - var(--scaled-gap));
		mask-repeat: no-repeat;
		mask-composite: subtract;
	}

	.scale {
		flex: none;
		zoom: var(--zoom);
	}

	.tile {
		position: absolute;
		top: calc(-1 * var(--scaled-gap));
		right: var(--tile-right);
		width: var(--tile-size);
		aspect-ratio: 1;
		border: var(--scaled-gap) solid var(--color-ink);
		border-radius: calc(16px * var(--zoom));
		background: var(--color-ink);
		overflow: clip;
		animation: rise-with-grid 0.8s var(--ease-glide) 0.45s backwards;
	}

	.tile::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: calc(11px * var(--zoom));
		background: var(--placeholder) center / cover;
		filter: blur(10px);
		transform: scale(1.1);
	}

	.photo {
		position: relative;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: calc(11px * var(--zoom));
		animation: focus 1.1s var(--ease-glide) backwards;
	}

	.name {
		margin-top: 40px;
		font-size: clamp(56px, 9vw, 128px);
		font-weight: 600;
		line-height: 0.95;
		letter-spacing: -0.045em;
	}

	.meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 24px 40px;
		margin-top: 32px;
		padding-top: 28px;
		border-top: 1px solid var(--color-line);
	}

	#hero-links {
		view-timeline-name: --hero-links;
	}

	.icon {
		display: flex;
		width: 48px;
		height: 48px;
		align-items: center;
		justify-content: center;
		border-radius: 12px;
		border: 1px solid var(--color-edge);
		background: var(--color-panel);
		color: var(--color-soft);
		transition:
			color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;
		animation: rise 0.7s var(--ease-glide) backwards;
		animation-delay: calc(0.45s + var(--i) * 60ms);
	}

	.icon:hover {
		color: var(--color-white);
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}

	.settle {
		animation: settle 0.9s var(--ease-glide) 0.18s backwards;
	}

	.settle.late {
		animation-delay: 0.3s;
	}

	@media (max-width: 640px) {
		.hero {
			padding-top: 88px;
			padding-bottom: 56px;
		}

		.band {
			--zoom: 0.6;
		}

		.name {
			margin-top: 28px;
		}
	}

	@keyframes rise-with-grid {
		from {
			opacity: 0.01;
			transform: translateY(calc(10px * var(--zoom)));
		}
	}

	@keyframes focus {
		from {
			opacity: 0.01;
			filter: blur(12px);
		}
	}

	@keyframes settle {
		from {
			opacity: 0.01;
			transform: translateY(-18px);
			filter: blur(6px);
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
	}
</style>
