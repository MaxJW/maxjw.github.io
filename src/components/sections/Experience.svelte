<script lang="ts">
	import { experiences } from '$lib/config/experience';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let visible = $state(false);
	let sectionRef: HTMLElement;

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

<section
	bind:this={sectionRef}
	class="relative mx-auto max-w-4xl px-6 py-16 sm:px-8"
	id="experience"
>
	{#if visible}
		<div in:fly={{ y: 50, duration: 800, delay: 200 }}>
			<h2 class="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">Experience</h2>
			<div class="relative">
				<div
					class="from-primary to-secondary absolute top-0 left-8 h-full w-0.5 bg-gradient-to-b sm:left-1/2 sm:-translate-x-px"
				></div>

				<div class="space-y-8">
					{#each experiences as exp, index}
						<div
							class="relative flex items-center sm:justify-center"
							in:fly={{ x: index % 2 === 0 ? -50 : 50, duration: 600, delay: 300 + index * 100 }}
						>
							<div
								class="bg-primary absolute left-8 z-10 flex h-4 w-4 -translate-x-2/5 items-center justify-center rounded-full sm:left-1/2 sm:-translate-1/2"
							>
								<div class="h-2 w-2 rounded-full bg-white"></div>
							</div>

							<div
								class="ml-16 w-full sm:ml-0 sm:w-5/12 {index % 2 === 0
									? 'sm:mr-auto sm:text-right'
									: 'sm:ml-auto'}"
							>
								<div
									class="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/70"
								>
									<h3 class="text-xl font-semibold text-white">{exp.title}</h3>
									<a
										class="text-lg text-blue-400 hover:underline"
										href={exp.companyUrl}
										target="_blank">{exp.company}</a
									>
									<p class="mb-1 text-sm text-gray-400">{exp.period}</p>
									<p class="mb-3 text-xs text-gray-500">{exp.location}</p>
									<p class="mb-4 text-gray-300">{exp.description}</p>
									<div class="flex flex-wrap gap-2 {index % 2 === 0 ? 'sm:justify-end' : ''}">
										{#each exp.technologies as tech}
											<span class="bg-primary/20 rounded-full px-3 py-1 text-xs text-blue-300">
												{tech}
											</span>
										{/each}
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>
