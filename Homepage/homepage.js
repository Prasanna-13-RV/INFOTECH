const hero = document.querySelector('.hero');
const laptop = document.querySelector('.laptop');
const layers = document.querySelectorAll('.layer');
const words = document.querySelectorAll('.Words');
const IT = document.querySelector('.name-backdrop');
const cards = document.querySelectorAll('.gridfr');
const grid = document.querySelector('.grid');
const grid1 = document.querySelector('#grid1');
const grid2 = document.querySelector('#grid2');
const grid3 = document.querySelector('#grid3');
const grid4 = document.querySelector('#grid4');
const grid5 = document.querySelector('#grid5');
const grid6 = document.querySelector('#grid6');
const grids = [grid1, grid2, grid3, grid4, grid5, grid6];

const menu = document.querySelector('.menu');
const nav_container = document.querySelector('.nav-container');
let menuopen = false;

const parallax = (args, e) => {
	args.forEach((arg) => {
		let speed = arg.getAttribute('data-speed');
		const x = (e.pageX * speed) / 100;
		const y = (e.pageY * speed) / 100;
		arg.style.transform = `translateX(${x}px) translateY(${y}px)`;
	});
};
hero.addEventListener('mousemove', (e) => {
	parallax(layers, e);
	parallax(words, e);
	const x = (e.pageX * 1) / 100;
	const y = (e.pageY * 1) / 100;
	IT.style.transform = `translateX(${x}px) translateY(${y}px) scale(14)`;
});

function gridsystem(n) {
	for (let i = 1; i <= grids.length; i++) {
		if (i == n) {
			continue;
		} else {
			grids[i - 1].classList.add('grid11');
		}
	}
}

cards.forEach((card) => {
	card.addEventListener('mouseenter', () => {
		var cardid = card.id;
		switch (cardid) {
			case 'grid1':
				card.classList.add('gridhover');
				gridsystem(1);
				break;
			case 'grid2':
				card.classList.add('gridhover');
				gridsystem(2);
				break;
			case 'grid3':
				card.classList.add('gridhover');
				gridsystem(3);
				break;
			case 'grid4':
				card.classList.add('gridhover');
				gridsystem(4);
				break;
			case 'grid5':
				card.classList.add('gridhover');
				gridsystem(5);
				break;
			case 'grid6':
				card.classList.add('gridhover');
				gridsystem(6);
				break;
			default:
				break;
		}
	});

	card.addEventListener('mouseleave', () => {
		card.classList.remove('gridhover');
		grid1.classList.remove('grid11');
		grid2.classList.remove('grid11');
		grid3.classList.remove('grid11');
		grid4.classList.remove('grid11');
		grid5.classList.remove('grid11');
		grid6.classList.remove('grid11');
	});
});
