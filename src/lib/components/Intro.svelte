<script lang="ts">
	import { intro } from '#lib/content.ts';
</script>

{#if intro}
	<section class="page pt-28">
		<p class="text-soft text-title max-w-205 leading-snug">{intro}</p>
	</section>
{/if}
