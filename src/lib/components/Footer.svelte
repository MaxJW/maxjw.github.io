<script lang="ts">
	import { email, links } from '#lib/content.ts';
</script>

<footer class="page pt-36 pb-20">
	<p class="label mb-5">Say hello</p>
	<a class="mail" href="mailto:{email}">{email}</a>
	<nav aria-label="Elsewhere" class="mt-12 flex flex-wrap gap-x-7 gap-y-2">
		{#each links.filter((link) => link.icon !== 'mail') as link (link.href)}
			<a class="text-muted py-2 text-[15px] hover:text-white" href={link.href}>{link.label}</a>
		{/each}
	</nav>
</footer>

<style>
	.mail {
		font-size: clamp(32px, 5.5vw, 64px);
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--color-text);
		background: linear-gradient(var(--color-accent), var(--color-accent)) left 100% / 0% 3px
			no-repeat;
		transition:
			background-size 0.45s var(--ease-glide),
			color 0.2s ease;
		overflow-wrap: anywhere;
	}

	.mail:hover {
		color: #fff;
		background-size: 100% 3px;
	}
</style>
