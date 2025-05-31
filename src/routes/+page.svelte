<script lang="ts">
	import BackgroundWrapper from '../components/Blur.svelte';
	import GridBackground from '../components/GridBackground.svelte';
	import MouseScroll from '../components/MouseScroll.svelte';
	import Profile from '../components/Profile.svelte';
	import ProjectGrid from '../components/ProjectGrid.svelte';
</script>

<BackgroundWrapper>
	<GridBackground />
	<Profile />
	<MouseScroll />
</BackgroundWrapper>

<ProjectGrid />
