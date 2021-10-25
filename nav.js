const navContainer = document.querySelector('.nav-container');

lastScroll = 0;
window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	if (currentScroll > lastScroll) {
		navContainer.style.transform = `translateY(${-100}%)`;
	} else {
		navContainer.style.transform = `translateY(${0}%)`;
	}
	lastScroll = currentScroll;
});
