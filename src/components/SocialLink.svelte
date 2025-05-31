<script lang="ts">
	import type { Icon } from '@tabler/icons-svelte';

	export let href: string;
	export let tooltip: string;
	export let icon: Icon;
	export let iconSize: number = 24;
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="tooltip-container group hover:text-accent relative text-white transition-colors duration-250 hover:text-gray-400"
	data-tooltip={tooltip}
	{...$$restProps}
>
	<svelte:component this={icon} size={iconSize} />
</a>

<style>
	.tooltip-container {
		position: relative;
	}

	.tooltip-container::before,
	.tooltip-container::after {
		content: '';
		position: absolute;
		opacity: 0;
		pointer-events: none;
		transition: all 0.2s ease-in-out;
		transform: translate(-50%, -10px);
		left: 50%;
		top: 100%;
		z-index: 10;
	}

	/* Tooltip text */
	.tooltip-container::before {
		content: attr(data-tooltip);
		background: rgba(0, 0, 0, 0.9);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		color: white;
		padding: 8px 12px;
		border-radius: 6px;
		font-size: 14px;
		font-weight: 500;
		white-space: nowrap;
		margin-top: 8px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	}

	/* Tooltip arrow */
	.tooltip-container::after {
		border: 6px solid transparent;
		border-bottom-color: rgba(0, 0, 0, 0.9);
		margin-top: 2px;
	}

	/* Show tooltip on hover */
	.tooltip-container:hover::before,
	.tooltip-container:hover::after {
		opacity: 1;
		transform: translate(-50%, 0);
	}

	/* Responsive adjustments */
	@media (max-width: 640px) {
		.tooltip-container::before {
			font-size: 12px;
			padding: 6px 10px;
		}

		.tooltip-container::after {
			border-width: 5px;
		}
	}

	/* Accessibility: Hide tooltips on touch devices to prevent sticky tooltips */
	@media (hover: none) {
		.tooltip-container::before,
		.tooltip-container::after {
			display: none;
		}
	}
</style>
