<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { projects } from '../../lib/config/projects.js';
	import { getProcessedProjects } from '../../lib/utils/project.ts';
	import ProjectCard from '../ProjectCard.svelte';

	let visible = $state(false);
	let sectionRef: HTMLElement;

	const processedProjects = getProcessedProjects(projects);
	const featuredProjects = processedProjects.filter((p) => p.featured);
	const regularProjects = processedProjects.filter((p) => !p.featured);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					visible = true;
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef) {
			observer.observe(sectionRef);
		}

		return () => observer.disconnect();
	});
</script>

<section bind:this={sectionRef} class="relative mx-auto max-w-7xl px-6 py-20 sm:px-8" id="projects">
	{#if visible}
		<div in:fly={{ y: 50, duration: 800, delay: 200 }}>
			<h2 class="mb-4 text-center text-3xl font-bold text-white sm:text-4xl">Projects & Work</h2>
			<p class="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-300">
				A collection of projects I've built across different technologies and industries, from
				healthcare platforms to personal tools.
			</p>

			<div class="mb-12 grid gap-8 md:grid-cols-2">
				{#each featuredProjects as project, index}
					<div
						class="featured-card hover:-translate-y-2"
						in:fly={{ y: 50, duration: 600, delay: 400 + index * 100 }}
					>
						<ProjectCard {...project} variant="featured" />
					</div>
				{/each}
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each regularProjects as project, index}
					<div
						in:fly={{ y: 30, duration: 500, delay: 600 + index * 50 }}
						class="project-item hover:-translate-y-1"
					>
						<ProjectCard {...project} variant="compact" />
					</div>
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	.featured-card {
		transition: transform 0.3s ease;
	}

	.project-item {
		transition: transform 0.3s ease;
	}
</style>
