<script lang="ts">
	import profile from '#lib/assets/profile.jpg?w=72;36&quality=80&enhanced';
	import { email } from '#lib/content.ts';
</script>

<header class="dock">
	<a href="#top" class="text-text flex items-center gap-3 hover:text-white">
		<enhanced:img
			src={profile}
			alt=""
			sizes="36px"
			loading="lazy"
			class="size-9 rounded-full object-cover"
		/>
		<span class="text-body font-semibold">Max Wilson</span>
	</a>
	<nav aria-label="Sections" class="ml-auto flex gap-5 sm:gap-7">
		<a class="nav" href="#work">Work</a>
		<a class="nav" href="#projects">Projects</a>
		<a class="nav" href="mailto:{email}">Email</a>
	</nav>
	<div class="progress" aria-hidden="true"></div>
</header>

<style>
	.dock {
		position: fixed;
		inset: 0 0 auto;
		z-index: 20;
		height: 64px;
		display: flex;
		align-items: center;
		padding-inline: var(--content-inline);
		background: color-mix(in oklab, var(--color-ink) 78%, transparent);
		backdrop-filter: blur(16px) saturate(140%);
		border-bottom: 1px solid var(--color-line);
		transform: translateY(-100%);
		opacity: 0;
		visibility: hidden;
	}

	@supports (animation-timeline: view()) {
		.dock {
			animation: dock linear both;
			animation-timeline: --hero-links;
			animation-range: exit-crossing 0% exit-crossing 100%;
		}
	}

	@keyframes dock {
		to {
			transform: none;
			opacity: 1;
			visibility: visible;
		}
	}

	.nav {
		position: relative;
		color: var(--color-soft);
		font-size: var(--text-meta);
		font-weight: 500;
		padding: 12px 0;
	}

	.nav::after {
		content: '';
		position: absolute;
		inset: auto 0 8px;
		height: 1px;
		background: currentColor;
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 0.35s var(--ease-glide);
	}

	.nav:hover {
		color: var(--color-white);
	}

	.nav:hover::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.progress {
		position: absolute;
		inset: auto 0 -1px;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent,
			var(--color-accent) 30%,
			var(--color-accent-soft)
		);
		transform: scaleX(0);
		transform-origin: left;
	}

	@supports (animation-timeline: scroll()) {
		.progress {
			animation: progress linear both;
			animation-timeline: scroll(root);
		}
	}

	@keyframes progress {
		to {
			transform: scaleX(1);
		}
	}
</style>
