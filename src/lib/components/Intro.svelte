<script lang="ts">
	import { intro } from '#lib/content.ts';
</script>

{#if intro}
	<section class="page pt-28">
		<p class="text-soft max-w-[820px] text-[28px] leading-snug">{intro}</p>
	</section>
{/if}
