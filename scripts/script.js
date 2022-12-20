const BackHome = document.querySelector(".login-cross");
const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const WWvergeten = document.querySelector("button.ww-vergeten");
const WwvergetenP = document.querySelector("p.ww-vergeten")

BackHome.addEventListener("click", () => {
	window.location,href = "index,html"
});

WWvergeten.addEventListener("click", () => {
	WwvergetenP.classList.toggle("visible")
})

allButtons.forEach((button) => {
	button.addEventListener("click", () => {
		button.parentElement.classList.toggle("expand");
	});
});

if (menuClosed) {
	menuClosed.addEventListener("click", () => {
		nav.classList.toggle("open");
	});

	nav.addEventListener("click", () => {
		nav.classList.toggle("open");
	});
}
