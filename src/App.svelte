<script lang="ts">
    import { onMount } from 'svelte';
    import Profile from './components/Profile.svelte';
    import ProjectGrid from './components/ProjectGrid.svelte';
    import MouseScroll from './components/MouseScroll.svelte';
    import Blur from './components/Blur.svelte';
    import CustomParticles from './components/CustomParticles.svelte';

    /* Force window back to top on reload */
    onMount(async () => {
        window.addEventListener('unload', function (e) {
            window.scrollTo(0, 0);
        });
    });
</script>

<CustomParticles />
<Blur />
<Profile />
<MouseScroll />
<ProjectGrid />
