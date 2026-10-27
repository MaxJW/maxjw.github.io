<script lang="ts">
	import AlsoBuilt from '#lib/components/AlsoBuilt.svelte';
	import Dock from '#lib/components/Dock.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Intro from '#lib/components/Intro.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Stats from '#lib/components/Stats.svelte';
	import Work from '#lib/components/Work.svelte';
</script>

<div id="top"></div>
<Dock />
<main>
	<Hero />
	<Stats />
	<Intro />
	<Work />
	<Projects />
	<AlsoBuilt />
</main>
<Footer />
