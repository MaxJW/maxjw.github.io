<script lang="ts">
	import { IconExternalLink } from '@tabler/icons-svelte';

	export let link: string;
	export let title: string;
	export let languages: string[];
	export let source: string;
	export let icon: string;
	export let image: string;
	export let image_webp: string;
	export let notif_text: string = '';
	export let notif_colour: string = '';
	export let variant: 'featured' | 'compact' = 'compact';
</script>

<div
	class="group relative h-full cursor-pointer overflow-hidden rounded-xl border transition-all duration-300
	{variant === 'featured'
		? 'border-gray-700 bg-gray-900/50 hover:border-gray-500 hover:bg-gray-800/50'
		: 'border-gray-800 bg-gray-900/30 hover:border-gray-600 hover:bg-gray-800/40'}
	shadow-lg backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/5"
>
	{#if notif_text}
		<div
			class="absolute top-3 left-3 z-20 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-lg"
			style="background-color: {notif_colour}"
		>
			{notif_text}
		</div>
	{/if}

	<div
		class="absolute top-3 right-3 z-20 rounded-full bg-gray-900/80 p-2 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
	>
		<IconExternalLink class="h-4 w-4 text-gray-300" size={24} />
	</div>

	<a href={link} target="_blank" rel="noopener noreferrer" class="block h-full">
		<div class="relative aspect-[4/2] overflow-hidden">
			<picture>
				<source srcset={image_webp} type="image/webp" />
				<source srcset={image} type="image/png" />
				<img
					class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
					src={image}
					alt="{title} Screenshot"
					loading="lazy"
					decoding="async"
				/>
			</picture>
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			></div>
		</div>

		<div class="{variant === 'featured' ? 'p-6' : 'p-4'} flex flex-grow flex-col justify-between">
			<div class="mb-3 flex items-center gap-2">
				<img src={icon} alt="{source} logo" class="h-4 w-4 rounded-sm" />
				<span class="text-xs font-medium text-gray-400">{source}</span>
			</div>

			<h3
				class="mb-2 leading-tight font-semibold text-white transition-colors duration-200 group-hover:text-blue-300
				{variant === 'featured' ? 'text-xl' : 'text-base'}"
			>
				{title}
			</h3>

			<div class="-ml-0.5 flex flex-wrap gap-2">
				{#each languages as tech}
					<span class="bg-primary/20 rounded-full px-2 py-1 text-xs text-blue-300">
						{tech}
					</span>
				{/each}
			</div>
		</div>
	</a>
</div>
