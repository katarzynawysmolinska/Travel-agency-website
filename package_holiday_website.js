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

// wywołanie animacji w nav poprzez scroll

function startAnimation() {
	const scrollHeight = window.scrollY;
	console.log(scrollHeight);

	const section1Height = document.querySelector(
		"section:nth-of-type(1)"
	).clientHeight;
	const section2Height = document.querySelector(
		"section:nth-of-type(2)"
	).clientHeight;
	const section3Height = document.querySelector(
		"section:nth-of-type(3)"
	).clientHeight;
	const section4Height = document.querySelector(
		"section:nth-of-type(4)"
	).clientHeight;
	const section5Height = document.querySelector(
		"section:nth-of-type(5)"
	).clientHeight;
}

document.addEventListener("scroll", startAnimation);
