<script lang="ts">
	import { education, roles } from '#lib/content.ts';
	import Stack from './Stack.svelte';
</script>

{#snippet linked(text: string, link?: { text: string; url: string })}
	{#if link && text.includes(link.text)}
		{@const [before, ...after] = text.split(link.text)}
		{before}<a href={link.url}>{link.text}</a>{after.join(link.text)}
	{:else}
		{text}
	{/if}
{/snippet}

<section id="work" class="page pt-28">
	<h2 class="label mb-4">Work</h2>

	{#each roles as role (role.company)}
		<article class="role">
			<div class="side">
				<h3 class="text-title font-semibold">
					<a href={role.url} class="text-text hover:text-white">{role.company}</a>
				</h3>
				<p class="text-soft text-body mt-1.5">{role.title}</p>
				<p class="text-muted mt-3.5 font-mono text-sm leading-relaxed">
					{role.period}<br />{role.location}
				</p>
				{#if role.note}<p class="text-muted text-meta mt-3">{role.note}</p>{/if}
				<span class="read" aria-hidden="true"><span></span></span>
			</div>
			<div>
				<p class="text-xl leading-relaxed">{@render linked(role.summary, role.summaryLink)}</p>
				<ul>
					{#each role.highlights as highlight (highlight)}<li>{highlight}</li>{/each}
				</ul>
				<div class="mt-7"><Stack items={role.stack} label="Technologies at {role.company}" /></div>
			</div>
		</article>
	{/each}

	<article class="role border-line border-b">
		<div class="side">
			<h3 class="text-title font-semibold">{education.school}</h3>
		</div>
		<div>
			<p class="text-xl">{education.degree}</p>
			<p class="text-muted mt-1.5 font-mono text-sm">{education.period}</p>
		</div>
	</article>
</section>

<style>
	.role {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 20px 64px;
		padding: 56px 0;
		border-top: 1px solid var(--color-line);
	}

	@media (min-width: 860px) {
		.role {
			grid-template-columns: minmax(0, 300px) minmax(0, 1fr);
		}

		.side {
			position: sticky;
			top: 96px;
			align-self: start;
		}

		@supports (animation-timeline: view()) {
			.role {
				view-timeline-name: --role;
			}

			.side .read {
				display: block;
			}

			.read span {
				animation: read linear both;
				animation-timeline: --role;
				animation-range: entry 100% exit 0%;
			}
		}
	}

	.read {
		display: none;
		width: 112px;
		height: 2px;
		margin-top: 22px;
		border-radius: 2px;
		background: var(--color-line);
		overflow: clip;
	}

	.read span {
		display: block;
		height: 100%;
		background: var(--color-accent);
		transform-origin: left;
	}

	@keyframes read {
		from {
			transform: scaleX(0);
		}
	}

	ul {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	li {
		position: relative;
		padding-left: 22px;
		font-size: var(--text-body);
		line-height: 1.55;
		color: var(--color-soft);
	}

	li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 11px;
		width: 8px;
		height: 2px;
		background: var(--color-accent);
	}
</style>
