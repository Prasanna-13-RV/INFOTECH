const pega = document.querySelectorAll(".pega");
const flutter = document.querySelectorAll(".flutter");
const dart = document.querySelectorAll(".dart");
const pegama = document.querySelector(".pegama");
const flutterma = document.querySelector(".flutterma");
const dartma = document.querySelector(".dartma");

const mobile = (argv, arg) => {
	argv.addEventListener("mouseover", () => {
		arg.forEach((e) => {
			e.classList.add("hovering-image");
			e.classList.add("hovering-text");
		});
	});
	argv.addEventListener("mouseout", () => {
		arg.forEach((e) => {
			e.classList.remove("hovering-image");
			e.classList.remove("hovering-text");
		});
	});
};

mobile(pegama, pega);
mobile(flutterma, flutter);
mobile(dartma, dart);

const mainside = document.querySelector(".mainside");
const firstside = document.querySelector(".firstside");
const secondside = document.querySelector(".secondside");
const side = document.querySelector(".side");
const side1 = document.querySelector(".side1");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");

img3.addEventListener("mouseenter", () => {
	firstside.classList.add("frontside");
});
img3.addEventListener("mouseleave", () => {
	firstside.classList.remove("frontside");
});

img4.addEventListener("mouseenter", () => {
	secondside.classList.add("frontside");
});
img4.addEventListener("mouseleave", () => {
	secondside.classList.remove("frontside");
});

img3.addEventListener("mouseenter", () => {
	mainside.style.opacity = "0";
	mainside.classList.add("backside");
});
img3.addEventListener("mouseleave", () => {
	mainside.style.opacity = "1";
	mainside.classList.remove("backside");
});
img4.addEventListener("mouseenter", () => {
	mainside.classList.add("backside");
});
img4.addEventListener("mouseleave", () => {
	mainside.style.opacity = "1";
	mainside.classList.remove("backside");
});

const contentai = document.querySelectorAll(".contentai");
const ai = document.querySelectorAll(".ai");
const ai1 = document.querySelector(".ai1");
const ai2 = document.querySelector(".ai2");
const ai3 = document.querySelector(".ai3");
const ai4 = document.querySelector(".ai4");
const ai5 = document.querySelector(".ai5");
const ai6 = document.querySelector(".ai6");

ai.forEach((e) => {
	e.addEventListener("mouseenter", () => {
		switch (e.id) {
			case "oneai":
				ai1.classList.add("contentai1");
				break;
			case "twoai":
				ai2.classList.add("contentai1");
				break;
			case "threeai":
				ai3.classList.add("contentai1");
				break;
			case "fourai":
				ai4.classList.add("contentai1");
				break;
			case "fiveai":
				ai5.classList.add("contentai1");
				break;
			case "sixai":
				ai6.classList.add("contentai1");
				break;

			default:
				break;
		}
	});
	e.addEventListener("mouseleave", () => {
		switch (e.id) {
			case "oneai":
				ai1.classList.remove("contentai1");
				break;
			case "twoai":
				ai2.classList.remove("contentai1");
				break;
			case "threeai":
				ai3.classList.remove("contentai1");
				break;
			case "fourai":
				ai4.classList.remove("contentai1");
				break;
			case "fiveai":
				ai5.classList.remove("contentai1");
				break;
			case "sixai":
				ai6.classList.remove("contentai1");
				break;

			default:
				break;
		}
	});
});
