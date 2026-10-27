(() => {
	const grid = document.querySelector('.hero svg');
	const tile = document.querySelector('.tile');
	if (!(grid instanceof SVGSVGElement) || !(tile instanceof HTMLElement)) return;

	const weeks = [...grid.querySelectorAll('g')];
	const firstOnScreen = weeks.find((week) => week.getBoundingClientRect().right > 0);
	if (firstOnScreen) {
		const entrance = getComputedStyle(firstOnScreen).getPropertyValue('--entrance');
		grid.style.setProperty('--offscreen-weeks', entrance);
	}

	const { left, right } = tile.getBoundingClientRect();
	const middle = (left + right) / 2;
	const weekBehindPhoto = weeks.find((week) => {
		const bounds = week.getBoundingClientRect();
		return bounds.left <= middle && bounds.right >= middle;
	});
	if (weekBehindPhoto) tile.style.animationDelay = getComputedStyle(weekBehindPhoto).animationDelay;
})();
