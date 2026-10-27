(() => {
	const tile = document.querySelector('.tile');
	if (!(tile instanceof HTMLElement)) return;

	const { left, right } = tile.getBoundingClientRect();
	const middle = (left + right) / 2;
	const weekBehindPhoto = [...document.querySelectorAll('.hero svg g')].find((week) => {
		const bounds = week.getBoundingClientRect();
		return bounds.left <= middle && bounds.right >= middle;
	});

	if (weekBehindPhoto) tile.style.animationDelay = getComputedStyle(weekBehindPhoto).animationDelay;
})();
