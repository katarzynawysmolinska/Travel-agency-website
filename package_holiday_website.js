//slogan otwierający w sekcji1

const slogan = document.querySelector("div.slogan > p");
const txt = "Podaruj sobie trochę luksusu...";
const time = 60;
let i = 0;

slogan.textContent = "";

function delay() {
	const typing = () => {
		slogan.textContent += txt[i];
		i++;

		if (i === txt.length) {
			clearInterval(typingIntervalId);
		}
	};

	const typingIntervalId = setInterval(typing, time);
}

setTimeout(delay, 1300);

function showCurrentSectionInNav() {
	const scrollHeight = window.scrollY;
	console.log(scrollHeight);

	const section1Height = document.querySelector("#start").clientHeight;
	const section2Height = document.querySelector("#offer").clientHeight;
	const section3Height = document.querySelector("#portfolio").clientHeight;
	const section4Height = document.querySelector("#about-us").clientHeight;

	const section1DistanceFromBeginningOfBrowser =
		document.querySelector("#start").offsetTop;
	const section2DistanceFromBeginningOfBrowser =
		document.querySelector("#offer").offsetTop;
	const section3DistanceFromBeginningOfBrowser =
		document.querySelector("#portfolio").offsetTop;
	const section4DistanceFromBeginningOfBrowser =
		document.querySelector("#about-us").offsetTop;

	if (scrollHeight < section1Height) {
		console.log("Sekcja1");
	} else if (
		scrollHeight <
		section2Height + section2DistanceFromBeginningOfBrowser
	) {
		console.log("Sekcja2");
	} else if (
		scrollHeight <
		section3Height + section3DistanceFromBeginningOfBrowser
	) {
		console.log("Sekcja3");
	} else if (
		scrollHeight <
		section4Height + section4DistanceFromBeginningOfBrowser
	) {
		console.log("Sekcja4");
	} else {
		console.log("Sekcja5");
	}
}

document.addEventListener("scroll", showCurrentSectionInNav);
