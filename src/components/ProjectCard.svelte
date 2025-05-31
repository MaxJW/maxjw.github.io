<script lang="ts">
	export let link: string;
	export let title: string;
	export let languages: string;
	export let source: string;
	export let icon: string;
	export let image: string;
	export let image_webp: string;
	export let notif_text: string = '';
	export let notif_colour: string = '';
	export let className: string = '';
</script>

<div
	class="group relative inline-grid aspect-[2/1] rounded-[10px] shadow-none transition-shadow duration-300 ease-in-out hover:shadow max-[700px]:mb-5 {className}"
>
	{#if notif_text}
		<div
			class="absolute -top-2 -left-[1.2rem] z-[12] rounded-[70px] px-[0.6rem] py-[0.22rem] font-bold text-white select-none"
			style="background-color: {notif_colour}"
		>
			{notif_text}
		</div>
	{/if}
	<a
		href={link}
		target="_blank"
		class="absolute inset-0 z-[11] cursor-pointer text-white transition-all duration-300 ease-in-out hover:text-black hover:no-underline"
	>
		<div
			class="pointer-events-none absolute bottom-0 z-[11] mb-0 w-full rounded-b-[9px] bg-white p-0"
		>
			<div class="my-[0.7em] w-4/5">
				<p
					class="mb-[0.4rem] ml-[10px] max-w-[95%] overflow-hidden text-base font-bold text-ellipsis whitespace-nowrap text-[#161616] transition-all duration-500 ease-in-out"
				>
					{title}
				</p>
				<p
					class="mt-0 ml-[10px] max-w-[95%] overflow-hidden text-[0.8rem] font-normal text-ellipsis whitespace-nowrap text-[#777777] transition-all duration-500 ease-in-out"
				>
					{languages}
				</p>
			</div>
			<div
				class="absolute -top-1/2 right-[5%] flex h-[70px] w-[70px] items-center justify-center rounded-full border-[6px] border-white bg-white max-[700px]:-top-[30%] max-[700px]:h-[50px] max-[700px]:w-[50px]"
			>
				<img
					class="absolute block max-h-full max-w-full rounded-full"
					src={icon}
					alt="{source} Logo"
					aria-label="{source} Logo"
				/>
			</div>
		</div>
	</a>
	<picture class="z-10 max-h-full overflow-hidden rounded-[10px]">
		<source srcset={image_webp} type="image/webp" />
		<source srcset={image} type="image/png" />
		<img
			class="block h-full w-full rounded-[10px] object-cover object-top transition-transform duration-[600ms] ease-in-out group-hover:scale-125"
			src={image}
			alt="{title} Screenshot"
			aria-label="{title} Screenshot"
			loading="lazy"
			decoding="async"
		/>
	</picture>
</div>
