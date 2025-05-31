<script lang="ts">
	import { onMount } from 'svelte';

	export let blurStyle = '';

	let gridContainer: HTMLDivElement;
	let squares: HTMLDivElement[] = [];
	let currentActiveSquare: HTMLDivElement | null = null;
	let currentHoveredIndex: number = -1;

	const config = {
		gridSize: 40,
		hoverFadeSpeed: 0.95, // How slowly hovered squares fade (closer to 1 = slower)
		minOpacity: 0.02 // Minimum opacity before completely clearing
	};

	let cols = 0;
	let rows = 0;
	let hoverOpacities: number[] = []; // Track opacity for each square's hover trail
	let animationId: number;

	function createGridSquares() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		cols = Math.ceil(width / config.gridSize);
		rows = Math.ceil(height / config.gridSize);

		gridContainer.innerHTML = '';
		squares = [];
		hoverOpacities = [];
		currentActiveSquare = null;
		currentHoveredIndex = -1;

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const left = col * config.gridSize;
				const top = row * config.gridSize;

				if (left < width && top < height) {
					const square = document.createElement('div');
					square.className = 'absolute opacity-0';
					square.style.left = `${left}px`;
					square.style.top = `${top}px`;
					square.style.width = `${config.gridSize - 2}px`;
					square.style.height = `${config.gridSize - 2}px`;
					square.style.borderRadius = '2px';
					square.style.transition = 'none';

					gridContainer.appendChild(square);
					squares.push(square);
					hoverOpacities.push(0);
				}
			}
		}
	}

	function clearActiveSquare() {
		if (currentActiveSquare) {
			const index = squares.indexOf(currentActiveSquare);
			updateSquareVisual(index);
			currentActiveSquare = null;
		}
	}

	function activateSquare(index: number, color: string, opacity: number = 0.8) {
		if (index < 0 || index >= squares.length) return;
		clearActiveSquare();

		const square = squares[index];
		currentActiveSquare = square;
		square.style.opacity = opacity.toString();
		square.style.backgroundColor = color;
		square.style.boxShadow = `0 0 20px ${color.replace(/[\d.]+\)$/g, '0.6)')}, inset 0 0 15px rgba(255, 255, 255, 0.2)`;
	}

	function addHoverTrail(index: number) {
		if (index >= 0 && index < hoverOpacities.length) {
			hoverOpacities[index] = Math.min(1, hoverOpacities[index] + 0.3);
		}
	}

	function updateSquareVisual(index: number) {
		if (index < 0 || index >= squares.length) return;

		const square = squares[index];
		const hoverOpacity = hoverOpacities[index];

		if (square === currentActiveSquare) return;

		if (hoverOpacity > config.minOpacity) {
			square.style.opacity = hoverOpacity.toString();
			square.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
			square.style.boxShadow = `0 0 ${10 * hoverOpacity}px rgba(255, 255, 255, ${0.3 * hoverOpacity}), inset 0 0 10px rgba(255, 255, 255, 0.1)`;
		} else {
			square.style.opacity = '0';
			square.style.backgroundColor = '';
			square.style.boxShadow = '';
		}
	}

	function animate() {
		hoverOpacities.forEach((opacity, index) => {
			if (index === currentHoveredIndex) return;

			if (opacity > config.minOpacity) {
				hoverOpacities[index] *= config.hoverFadeSpeed;
				updateSquareVisual(index);
			} else if (opacity > 0) {
				hoverOpacities[index] = 0;
				updateSquareVisual(index);
			}
		});

		animationId = requestAnimationFrame(animate);
	}

	function getSquareIndex(x: number, y: number): number {
		const col = Math.floor(x / config.gridSize);
		const row = Math.floor(y / config.gridSize);
		return row * cols + col;
	}

	let mouseTimeout: number;
	function handleMouseMove(event: MouseEvent) {
		clearTimeout(mouseTimeout);

		const index = getSquareIndex(event.clientX, event.clientY);
		currentHoveredIndex = index;

		addHoverTrail(index);
		activateSquare(index, 'rgba(100, 200, 255, 0.8)', 0.7);

		mouseTimeout = setTimeout(clearActiveSquare, 200);
	}

	function handleMouseLeave() {
		currentHoveredIndex = -1;
		clearTimeout(mouseTimeout);
		clearActiveSquare();
	}

	function handleTouchStart(event: TouchEvent) {
		if (event.touches.length > 0) {
			const touch = event.touches[0];
			const index = getSquareIndex(touch.clientX, touch.clientY);
			currentHoveredIndex = index;
			addHoverTrail(index);
			activateSquare(index, 'rgba(100, 200, 255, 0.8)', 0.7);
		}
	}

	function handleTouchMove(event: TouchEvent) {
		if (event.touches.length > 0) {
			const touch = event.touches[0];
			const index = getSquareIndex(touch.clientX, touch.clientY);
			currentHoveredIndex = index;
			addHoverTrail(index);
			activateSquare(index, 'rgba(100, 200, 255, 0.8)', 0.7);
		}
	}

	function handleTouchEnd(event: TouchEvent) {
		currentHoveredIndex = -1;
		clearTimeout(mouseTimeout);
		clearActiveSquare();
	}

	let resizeTimeout: number;
	function handleResize() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(createGridSquares, 150);
	}

	onMount(() => {
		createGridSquares();
		animate();

		window.addEventListener('mousemove', handleMouseMove, { passive: true });
		window.addEventListener('resize', handleResize, { passive: true });
		window.addEventListener('touchstart', handleTouchStart, { passive: true });
		window.addEventListener('touchmove', handleTouchMove, { passive: true });
		window.addEventListener('touchend', handleTouchEnd, { passive: true });

		if (gridContainer) {
			gridContainer.addEventListener('mouseleave', handleMouseLeave, { passive: true });
		}

		return () => {
			cancelAnimationFrame(animationId);
			clearTimeout(mouseTimeout);
			clearTimeout(resizeTimeout);

			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);

			if (gridContainer) {
				gridContainer.removeEventListener('mouseleave', handleMouseLeave);
			}
		};
	});
</script>

<div class="fixed inset-0 -z-10 overflow-hidden" style="filter: {blurStyle}">
	<div class="absolute inset-0 bg-gray-950"></div>

	<div
		class="absolute inset-0 opacity-30"
		style="
			background-image:
				linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
				linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px);
			background-size: {config.gridSize}px {config.gridSize}px;
		"
	></div>

	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-purple-950/40"
	></div>
	<div
		class="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-indigo-950/30"
	></div>
	<div
		class="absolute inset-0"
		style="background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%);"
	></div>

	<div bind:this={gridContainer} class="pointer-events-none absolute inset-0"></div>
</div>
