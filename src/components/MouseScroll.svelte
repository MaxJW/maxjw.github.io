<script lang="ts">
	function scrollIntoView() {
		const aboutSection = document.getElementById('about');
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: 'smooth' });
		} else {
			// Fallback: scroll to after the spacer div
			window.scrollTo({
				top: window.innerHeight,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="icon-scroll" on:click={scrollIntoView} aria-hidden="true"></div>

<style>
	.icon-scroll:before {
		position: relative;
		display: block;
		left: 50%;
	}

	.icon-scroll {
		width: 30px;
		height: 52.5px;
		box-shadow: inset 0 0 0 1.3px #fff;
		border-radius: 25px;
		margin: 0 auto;
		bottom: 10px;
		position: fixed;
		left: 0;
		right: 0;
		z-index: 99;
		cursor: pointer;
	}

	.icon-scroll:before {
		content: '';
		width: 6px;
		height: 6px;
		background: #fff;
		margin-left: -3px;
		top: 8px;
		border-radius: 4px;
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-name: scroll;
	}

	@keyframes scroll {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: translateY(25px);
		}
	}

	/* Smartphones (portrait) */
	@media only screen and (max-width: 700px) {
		.icon-scroll {
			border-radius: 7px;
		}

		.icon-scroll:before {
			top: unset;
			bottom: -30px;
		}

		@keyframes scroll {
			0% {
				opacity: 1;
			}
			100% {
				opacity: 0;
				transform: translateY(-25px);
			}
		}
	}
</style>
