<script lang="ts">
	import BackgroundWrapper from '../components/Blur.svelte';
	import GridBackground from '../components/GridBackground.svelte';
	import MouseScroll from '../components/MouseScroll.svelte';
	import Profile from '../components/sections/Profile.svelte';
	import ProjectGrid from '../components/sections/ProjectGrid.svelte';
	import About from '../components/sections/About.svelte';
	import Experience from '../components/sections/Experience.svelte';
</script>

<div class="fixed inset-0 z-0">
	<BackgroundWrapper>
		<GridBackground />
		<Profile />
		<MouseScroll />
	</BackgroundWrapper>
</div>

<div class="pointer-events-none h-screen"></div>

<div class="relative z-10">
	<About />
	<Experience />
	<ProjectGrid />
</div>
