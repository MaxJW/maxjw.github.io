<script lang="ts">
	import { onMount } from 'svelte';
	import {
		IconMail,
		IconBrandGithub,
		IconBrandLinkedin,
		IconBrandBluesky,
		IconBrandInstagram,
		IconBrandYoutube
	} from '@tabler/icons-svelte';
	import SocialLink from './SocialLink.svelte';
	import { fly } from 'svelte/transition';

	let loaded = $state(false);
	onMount(() => (loaded = true));
</script>

{#if loaded}
	<div
		class="fixed inset-0 z-10 mx-auto flex h-screen max-w-fit flex-col items-center justify-center pb-20 md:pb-0"
	>
		<img
			class="mb-6 block w-72 max-w-9/12 rounded-full shadow-none transition-all duration-250 hover:shadow-lg hover:shadow-black/30"
			alt="Profile"
			src="https://avatars1.githubusercontent.com/u/15789924"
			in:fly={{
				duration: 1000,
				y: -200,
				opacity: 0
			}}
		/>

		<div
			class="flex flex-col items-center text-center font-normal text-white"
			in:fly={{
				delay: 300,
				duration: 1000,
				y: -120,
				opacity: 0
			}}
		>
			<h1 class="mt-1 mb-0 text-4xl font-medium">Max Wilson</h1>
			<h2 class="mt-2 mb-1 text-2xl">Full Stack Developer</h2>
			<h3 class="mt-1 mb-8 text-base">
				<a href="https://hertilityhealth.com/" class="hover:font-bold"> Hertility Health </a> • Fife,
				Scotland
			</h3>
		</div>

		<div
			class="flex justify-between gap-6"
			in:fly={{
				delay: 525,
				duration: 1000,
				y: 50,
				opacity: 0
			}}
		>
			<SocialLink
				href="mailto:max@maxwilson.co.uk"
				tooltip="max@maxwilson.co.uk"
				aria-label="Email"
				icon={IconMail}
			/>
			<SocialLink
				href="https://github.com/MaxJW"
				tooltip="MaxJW"
				aria-label="Github"
				icon={IconBrandGithub}
			/>
			<SocialLink
				href="https://linkedin.com/in/maxjwilson-1"
				tooltip="Max Wilson"
				aria-label="LinkedIn"
				icon={IconBrandLinkedin}
			/>
			<SocialLink
				href="https://bsky.app/profile/maxwilson.co.uk"
				tooltip="@maxwilson.co.uk"
				aria-label="Bluesky"
				icon={IconBrandBluesky}
			/>
			<SocialLink
				href="https://instagram.com/maxjwilson_/"
				tooltip="maxjwilson_"
				aria-label="Instagram"
				icon={IconBrandInstagram}
			/>
			<SocialLink
				href="https://youtube.com/@MaxJW_"
				tooltip="@MaxJW_"
				aria-label="YouTube"
				icon={IconBrandYoutube}
			/>
		</div>
	</div>
{/if}
