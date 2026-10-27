<script lang="ts">
	import fantasysteam from '#lib/assets/projects/fantasysteam.jpg?w=1280;960;720;480&quality=80&enhanced';
	import invites from '#lib/assets/projects/invites.jpg?w=1280;960;720;480&quality=80&enhanced';
	import monch from '#lib/assets/projects/monch.jpg?w=1280;960;720;480&quality=80&enhanced';
	import paintnotnet from '#lib/assets/projects/paintnotnet.jpg?w=1280;960;720;480&quality=80&enhanced';
	import fantasysteamPlaceholder from '#lib/assets/projects/fantasysteam.jpg?w=24&format=webp&quality=50&inline';
	import invitesPlaceholder from '#lib/assets/projects/invites.jpg?w=24&format=webp&quality=50&inline';
	import monchPlaceholder from '#lib/assets/projects/monch.jpg?w=24&format=webp&quality=50&inline';
	import paintnotnetPlaceholder from '#lib/assets/projects/paintnotnet.jpg?w=24&format=webp&quality=50&inline';
	import { projects, type Project } from '#lib/content.ts';
	import Icon from './Icon.svelte';
	import Stack from './Stack.svelte';

	const images = { monch, fantasysteam, paintnotnet, invites };
	const placeholders = {
		monch: monchPlaceholder,
		fantasysteam: fantasysteamPlaceholder,
		paintnotnet: paintnotnetPlaceholder,
		invites: invitesPlaceholder
	};

	const [lead, ...rest] = projects;
</script>

{#snippet details(project: Project)}
	{#if project.detail}
		<p class="text-muted mt-3 text-base leading-relaxed">{project.detail}</p>
	{/if}
	<div class="mt-6">
		<Stack items={project.stack} label="Built with" />
	</div>
	<a class="visit mt-auto inline-flex items-center gap-1.5 pt-5 pb-1 text-base" href={project.url}>
		{project.linkText}<Icon name="arrow" size={16} />
	</a>
{/snippet}

{#snippet shot(project: Project, sizes: string)}
	<a
		class="shot"
		href={project.url}
		tabindex="-1"
		aria-hidden="true"
		style:--placeholder="url({placeholders[project.id]})"
	>
		<enhanced:img src={images[project.id]} alt={project.alt} {sizes} loading="lazy" />
	</a>
{/snippet}

<section id="projects" class="page pt-36">
	<h2 class="label mb-8">Personal projects</h2>

	<article class="lead" style:--accent={lead.color}>
		<div class="text">
			<span class="bar" aria-hidden="true"></span>
			<h3 class="text-headline leading-none font-semibold tracking-tight">{lead.name}</h3>
			<p class="text-soft mt-5 text-xl leading-relaxed">{lead.summary}</p>
			{@render details(lead)}
		</div>
		{@render shot(lead, '(min-width: 1200px) 640px, (min-width: 860px) 54vw, calc(100vw - 98px)')}
	</article>

	<div class="rest">
		{#each rest as project (project.id)}
			<article class="card" style:--accent={project.color}>
				{@render shot(
					project,
					'(min-width: 1200px) 368px, (min-width: 900px) 31vw, calc(100vw - 48px)'
				)}
				<span class="bar mt-8" aria-hidden="true"></span>
				<h3 class="text-title leading-tight font-semibold tracking-tight">{project.name}</h3>
				<p class="text-soft text-body mt-3 leading-relaxed">{project.summary}</p>
				{@render details(project)}
			</article>
		{/each}
	</div>
</section>

<style>
	.lead {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 36px;
		align-items: center;
		padding: 36px 24px 24px;
		border-radius: 20px;
		border: 1px solid var(--color-line);
		background: var(--color-panel);
	}

	.lead .text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	@media (min-width: 860px) {
		.lead {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
			gap: 56px;
			padding: 40px 40px 40px 48px;
		}
	}

	.rest {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 72px 40px;
		margin-top: 72px;
	}

	@media (min-width: 900px) {
		.rest {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.bar {
		display: block;
		width: 40px;
		height: 4px;
		margin-bottom: 20px;
		border-radius: 2px;
		background: var(--accent);
	}

	.visit {
		color: color-mix(in oklab, var(--accent) 70%, white);
	}

	.visit:hover {
		color: color-mix(in oklab, var(--accent) 40%, white);
	}

	.shot {
		position: relative;
		display: block;
		width: 100%;
		overflow: clip;
		border-radius: 12px;
		border: 1px solid color-mix(in oklab, var(--accent) 22%, var(--color-edge));
		box-shadow: 0 24px 60px rgb(0 0 0 / 0.4);
	}

	.shot::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--placeholder) center top / cover;
		filter: blur(12px);
		transform: scale(1.1);
	}

	.shot :global(img) {
		position: relative;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top;
	}
</style>
