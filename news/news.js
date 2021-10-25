const hides1 = document.querySelectorAll('.hide1');
const hides2 = document.querySelectorAll('.hide2');
const hides3 = document.querySelectorAll('.hide3');
const learnMore1 = document.querySelector('.learn-more1');
const learnMore2 = document.querySelector('.learn-more2');
const learnMore3 = document.querySelector('.learn-more3');
const cards = document.querySelectorAll('.card');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');
const buttons = document.querySelectorAll('.button');

const handleClick1 = () => {
	hides1.forEach((hide) => {
		hide.style.display = 'block';
		learnMore1.style.display = 'none';
	});
};

const handleClick2 = () => {
	hides2.forEach((hide) => {
		hide.style.display = 'block';
		learnMore2.style.display = 'none';
	});
};

const handleClick3 = () => {
	hides3.forEach((hide) => {
		hide.style.display = 'block';
		learnMore3.style.display = 'none';
	});
};

cards.forEach((card) => {
	card.addEventListener('click', (e) => {
		popup.children[0].src = card.children[0].src;
		popup.style.display = 'flex';
		body.style.overflow = 'hidden';
		popup.style.position = 'fixed';
	});
});

popup.addEventListener('click', () => {
	popup.style.display = 'none';
	body.style.overflow = 'auto';
});

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.stopPropagation()
	});
});
