<script lang="ts">
	import { onMount } from 'svelte';

	let { children } = $props();

	let scrollY = $state(0);
	let innerHeight = $state(0);

	const blurAmount = $derived(
		Math.min(Math.max((scrollY - innerHeight * 0.2) / (innerHeight * 0.8), 0), 1)
	);
	const blurStyle = $derived(`blur(${blurAmount * 8}px)`);

	onMount(() => {
		const updateScroll = () => (scrollY = window.scrollY);
		const updateHeight = () => (innerHeight = window.innerHeight);

		window.addEventListener('scroll', updateScroll, { passive: true });
		window.addEventListener('resize', updateHeight, { passive: true });
		updateHeight();

		return () => {
			window.removeEventListener('scroll', updateScroll);
			window.removeEventListener('resize', updateHeight);
		};
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class="fixed inset-0 transition-all duration-300 ease-out" style="filter: {blurStyle}">
	{@render children()}
</div>
