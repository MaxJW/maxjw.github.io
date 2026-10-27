<script lang="ts">
	let { value }: { value: string } = $props();

	const characters = $derived(
		[...value].map((character, index) => ({
			character,
			index,
			digit: /\d/.test(character) ? Number(character) : null
		}))
	);
</script>

<span class="counter" data-reveal>
	<span class="sr-only">{value}</span>
	<span aria-hidden="true" class="inline-flex">
		{#each characters as { character, index, digit } (index)}
			{#if digit === null}
				<span>{character}</span>
			{:else}
				<span class="column" style:--digit={digit} style:--index={index}>
					<span class="strip">
						{#each { length: 20 }, n (n)}<span>{n % 10}</span>{/each}
					</span>
				</span>
			{/if}
		{/each}
	</span>
</span>

<style>
	.column {
		display: inline-block;
		height: 1.1em;
		overflow: clip;
	}

	.strip {
		display: flex;
		flex-direction: column;
		line-height: 1.1em;
		transform: translateY(calc((10 + var(--digit)) * -1.1em));
	}

	:global(.js) .counter:not(:global(.is-visible)) .strip {
		transform: translateY(0);
	}

	.counter:global(.is-visible) .strip {
		animation: roll 1.8s cubic-bezier(0.16, 1, 0.3, 1) backwards;
		animation-delay: calc(var(--index) * 90ms);
	}

	@keyframes roll {
		from {
			transform: translateY(0);
		}
	}
</style>
