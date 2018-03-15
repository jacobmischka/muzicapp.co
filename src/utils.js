export function scrollToElement(href, pushState = true) {
	if (!href.startsWith('#'))
		return;

	let scrolled = false;

	if (href === '#') {
		window.scrollTo(0, 0);
		scrolled = true;
	} else {
		const header = document.querySelector('#header');
		const el = document.querySelector(href);
		if (header && el) {
			const headerHeight = header.getBoundingClientRect().height;
			const targetTop = el.getBoundingClientRect().top;
			console.log(targetTop - headerHeight);
			window.scrollBy(0, targetTop - headerHeight);
			scrolled = true;
		}
	}

	if (pushState && scrolled) {
		const { origin, pathname, search } = window.location;

		window.history.pushState(
			{ href },
			null,
			origin + pathname + href + search
		);
	}
}
