(() => {
	if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	document.documentElement.classList.add('js');

	const observer = new IntersectionObserver(
		(entries) => {
			for (const { isIntersecting, target } of entries) {
				if (!isIntersecting) continue;
				target.classList.add('is-visible');
				observer.unobserve(target);
			}
		},
		{ threshold: 0.6 }
	);

	for (const element of document.querySelectorAll('[data-reveal]')) observer.observe(element);
})();
