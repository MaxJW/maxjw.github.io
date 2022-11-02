<script lang="ts">
    import { onMount } from 'svelte';
    import { clamp } from 'fractils';
    /* Blur profile on scroll to projects? */
    let y;
    let opacityVal;
    let el: any = false;

    onMount(async () => {
        el = document.getElementById('blur');
    });
    $: opacityVal = clamp(y / 150 ?? 0, 0, 6);
    $: el && el.style.setProperty('backdrop-filter', `blur(${opacityVal}px)`);
</script>

<svelte:window bind:scrollY={y} />
<div id="blur" />

<style>
    #blur {
        top: 0;
        left: 0;
        z-index: 9;
        width: 100vw;
        height: 100vh;
        position: fixed;
        pointer-events: none;
    }
</style>
