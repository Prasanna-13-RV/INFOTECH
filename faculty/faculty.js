const cardContent = document.querySelectorAll(".container-2");
const scrollContent = document.querySelectorAll(".scroll-content");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");

scrollContent.forEach((element) => {
	element.addEventListener("click", function content() {
		cardContent.forEach((content) => {
			content.classList.remove("show");
		});

		scrollContent.forEach((content) => content.classList.remove("color"));

		this.classList.add("color");

		const carContentItems = document.querySelector(`.${this.id}-content`);
		carContentItems.classList.add("show");
	});
});
