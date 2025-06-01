<script lang="ts">
	import { onMount } from 'svelte';

	let gridContainer: HTMLDivElement;
	let squares: HTMLDivElement[] = [];
	let currentActiveSquare: HTMLDivElement | null = null;
	let currentHoveredIndex: number = -1;
	let isTouchDevice = false;
	let touchStartIndex: number = -1;

	const config = {
		gridSize: 40,
		hoverFadeSpeed: 0.9,
		minOpacity: 0.02,
		waveSpeed: 0.34,
		waveThickness: 1.5,
		waveFadeRate: 0.7
	};

	let cols = 0;
	let rows = 0;
	let hoverOpacities: number[] = [];
	let waveEffects: Map<number, { startTime: number; centerIndex: number }> = new Map();
	let waveCounter = 0;
	let animationId: number;

	// Cache for performance
	let squareDistances: number[][] = [];

	function createGridSquares() {
		const width = window.innerWidth;
		const height = window.innerHeight;
		cols = Math.ceil(width / config.gridSize);
		rows = Math.ceil(height / config.gridSize);

		gridContainer.innerHTML = '';
		squares = [];
		hoverOpacities = [];
		squareDistances = [];
		currentActiveSquare = null;
		currentHoveredIndex = -1;
		touchStartIndex = -1;
		waveEffects.clear();

		for (let i = 0; i < rows * cols; i++) {
			squareDistances[i] = [];
		}

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				const left = col * config.gridSize;
				const top = row * config.gridSize;

				if (left < width && top < height) {
					const square = document.createElement('div');
					square.className = 'absolute opacity-0';
					square.style.cssText = `left:${left}px;top:${top}px;width:${config.gridSize - 2}px;height:${config.gridSize - 2}px;border-radius:2px;transition:none`;

					gridContainer.appendChild(square);
					squares.push(square);
					hoverOpacities.push(0);
				}
			}
		}
	}

	function activateSquare(index: number, color: string, opacity: number = 0.8) {
		if (index < 0 || index >= squares.length) return;

		if (currentActiveSquare) {
			currentActiveSquare.style.cssText = currentActiveSquare.style.cssText
				.replace(/opacity:[^;]*/g, 'opacity:0')
				.replace(/background-color:[^;]*/g, '')
				.replace(/box-shadow:[^;]*/g, '');
		}

		const square = squares[index];
		currentActiveSquare = square;
		square.style.opacity = opacity.toString();
		square.style.backgroundColor = color;
		square.style.boxShadow = `0 0 20px ${color.replace(/[\d.]+\)$/g, '0.6)')}, inset 0 0 15px rgba(255, 255, 255, 0.2)`;
	}

	function clearActiveSquare() {
		if (currentActiveSquare) {
			currentActiveSquare.style.opacity = '0';
			currentActiveSquare.style.backgroundColor = '';
			currentActiveSquare.style.boxShadow = '';
			currentActiveSquare = null;
		}
	}

	function addHoverTrail(index: number) {
		if (index >= 0 && index < hoverOpacities.length) {
			hoverOpacities[index] = Math.min(1, hoverOpacities[index] + 0.3);
		}
	}

	function getSquareDistance(index1: number, index2: number): number {
		if (squareDistances[index1] && squareDistances[index1][index2] !== undefined) {
			return squareDistances[index1][index2];
		}

		const col1 = index1 % cols;
		const row1 = Math.floor(index1 / cols);
		const col2 = index2 % cols;
		const row2 = Math.floor(index2 / cols);

		const distance = Math.sqrt(Math.pow(col2 - col1, 2) + Math.pow(row2 - row1, 2));
		if (!squareDistances[index1]) squareDistances[index1] = [];
		squareDistances[index1][index2] = distance;
		return distance;
	}

	function getWaveOpacity(distance: number, waveRadius: number): number {
		const distanceFromWave = Math.abs(distance - waveRadius);

		if (distanceFromWave > config.waveThickness) return 0;

		const ringOpacity = (1 - distanceFromWave / config.waveThickness) * 0.9;
		const fadeFactor = Math.exp(-waveRadius * config.waveFadeRate);

		return ringOpacity * fadeFactor;
	}

	function updateSquareVisual(index: number) {
		if (index < 0 || index >= squares.length || squares[index] === currentActiveSquare) return;

		const square = squares[index];
		const hoverOpacity = hoverOpacities[index];
		let maxWaveOpacity = 0;

		for (const wave of waveEffects.values()) {
			if (index === wave.centerIndex) continue;

			const waveRadius = ((Date.now() - wave.startTime) / 16.67) * config.waveSpeed;
			const distance = getSquareDistance(index, wave.centerIndex);
			const waveOpacity = getWaveOpacity(distance, waveRadius);
			maxWaveOpacity = Math.max(maxWaveOpacity, waveOpacity);
		}

		if (maxWaveOpacity > 0) {
			square.style.cssText += `;opacity:${maxWaveOpacity};background-color:rgba(100, 200, 255, 0.9);box-shadow:0 0 ${20 * maxWaveOpacity}px rgba(100, 200, 255, ${0.8 * maxWaveOpacity}), inset 0 0 15px rgba(255, 255, 255, 0.3)`;
		} else if (hoverOpacity > config.minOpacity) {
			square.style.cssText += `;opacity:${hoverOpacity};background-color:rgba(255, 255, 255, 0.6);box-shadow:0 0 ${10 * hoverOpacity}px rgba(255, 255, 255, ${0.3 * hoverOpacity}), inset 0 0 10px rgba(255, 255, 255, 0.1)`;
		} else {
			square.style.cssText += `;opacity:0;background-color:;box-shadow:`;
		}
	}

	function createWave(centerIndex: number) {
		waveEffects.set(waveCounter++, {
			startTime: Date.now(),
			centerIndex
		});
	}

	function getSquaresNeedingUpdate(): Set<number> {
		const needsUpdate = new Set<number>();

		hoverOpacities.forEach((opacity, index) => {
			if (opacity > 0) needsUpdate.add(index);
		});

		for (const wave of waveEffects.values()) {
			const waveRadius = ((Date.now() - wave.startTime) / 16.67) * config.waveSpeed;
			const centerCol = wave.centerIndex % cols;
			const centerRow = Math.floor(wave.centerIndex / cols);
			const searchRadius = Math.ceil(waveRadius + config.waveThickness);

			const minCol = Math.max(0, centerCol - searchRadius);
			const maxCol = Math.min(cols - 1, centerCol + searchRadius);
			const minRow = Math.max(0, centerRow - searchRadius);
			const maxRow = Math.min(rows - 1, centerRow + searchRadius);

			for (let row = minRow; row <= maxRow; row++) {
				for (let col = minCol; col <= maxCol; col++) {
					const index = row * cols + col;
					if (index < squares.length && index !== wave.centerIndex) {
						const distance = Math.sqrt(Math.pow(col - centerCol, 2) + Math.pow(row - centerRow, 2));
						if (distance <= waveRadius + config.waveThickness) {
							needsUpdate.add(index);
						}
					}
				}
			}
		}

		return needsUpdate;
	}

	function animate() {
		for (const [waveId, wave] of waveEffects) {
			const waveRadius = ((Date.now() - wave.startTime) / 16.67) * config.waveSpeed;
			const maxOpacity = 0.9 * Math.exp(-waveRadius * config.waveFadeRate);

			if (maxOpacity < 0.001 && waveRadius > 10) {
				waveEffects.delete(waveId);
			}
		}

		hoverOpacities.forEach((opacity, index) => {
			if (index !== currentHoveredIndex && opacity > config.minOpacity) {
				hoverOpacities[index] *= config.hoverFadeSpeed;
			} else if (opacity <= config.minOpacity) {
				hoverOpacities[index] = 0;
			}
		});

		const squaresToUpdate = getSquaresNeedingUpdate();
		squaresToUpdate.forEach((index) => updateSquareVisual(index));

		animationId = requestAnimationFrame(animate);
	}

	function getSquareIndex(x: number, y: number): number {
		return Math.floor(y / config.gridSize) * cols + Math.floor(x / config.gridSize);
	}

	function handleMouseMove(event: MouseEvent) {
		const index = getSquareIndex(event.clientX, event.clientY);
		currentHoveredIndex = index;
		addHoverTrail(index);
		activateSquare(index, 'rgba(100, 200, 255, 0.8)', 0.7);
	}

	function handleClick(event: MouseEvent) {
		if (isTouchDevice) return;
		const index = getSquareIndex(event.clientX, event.clientY);
		if (index >= 0 && index < squares.length) {
			createWave(index);
		}
	}

	function handleMouseLeave() {
		currentHoveredIndex = -1;
		clearActiveSquare();
	}

	function handleTouchStart(event: TouchEvent) {
		isTouchDevice = true;
		if (event.touches.length > 0) {
			const touch = event.touches[0];
			const index = getSquareIndex(touch.clientX, touch.clientY);
			touchStartIndex = index;
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
		event.preventDefault();

		if (event.changedTouches.length > 0) {
			const touch = event.changedTouches[0];
			const index = getSquareIndex(touch.clientX, touch.clientY);

			if (index >= 0 && index < squares.length && index === touchStartIndex) {
				createWave(index);
			}

			clearActiveSquare();
		}

		currentHoveredIndex = -1;
		touchStartIndex = -1;
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
		window.addEventListener('click', handleClick, { passive: true });
		window.addEventListener('resize', handleResize, { passive: true });
		window.addEventListener('touchstart', handleTouchStart, { passive: true });
		window.addEventListener('touchmove', handleTouchMove, { passive: true });
		window.addEventListener('touchend', handleTouchEnd, { passive: true });

		if (gridContainer) {
			gridContainer.addEventListener('mouseleave', handleMouseLeave, { passive: true });
		}

		return () => {
			if (animationId) cancelAnimationFrame(animationId);
			clearTimeout(resizeTimeout);

			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('click', handleClick);
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

<div class="fixed inset-0 -z-10 overflow-hidden">
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
		class="from-primary/40 to-secondary/40 absolute inset-0 bg-gradient-to-tr via-transparent"
	></div>
	<div
		class="absolute inset-0"
		style="background: radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 40%);"
	></div>

	<div bind:this={gridContainer} class="pointer-events-none absolute inset-0"></div>
</div>
