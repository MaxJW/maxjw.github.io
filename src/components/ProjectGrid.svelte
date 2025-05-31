<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import { projects } from '../lib/config/projects.js';
	import { getProcessedProjects } from '../lib/utils/project.ts';

	const processedProjects = getProcessedProjects(projects);

	$: featuredProjects = processedProjects.filter((p) => p.featured);
	$: regularProjects = processedProjects.filter((p) => !p.featured);
</script>

<div id="projects" class="min-h-[90vh]">
	<div
		class="z-10 mx-7 mt-[calc(100vh+5%)] mb-[5%] grid scroll-m-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 rounded sm:mx-8 sm:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] sm:gap-8"
	>
		<!-- Featured projects section -->
		<div
			id="featured"
			class="col-span-full m-0 contents max-h-96 max-w-none gap-4 sm:gap-8 lg:flex"
		>
			{#each featuredProjects as project}
				<ProjectCard {...project} className="lg:w-[calc(50%-1rem)] w-auto" />
			{/each}
		</div>

		<!-- Regular projects -->
		{#each regularProjects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
</div>
