const closeLogin = document.querySelector(".login-cross");
const openLogin = document.querySelector(".inloggen");
const loginContainer = document.querySelector(".login-container");
const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const wwDialog = document.querySelector("ww-dialog");
const diaOpen = document.querySelector("ww-vergeten");
console.log(diaOpen);

closeLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});

openLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});

// diaOpen.addEventListener("click", => {
// 	wwDialog.showModal;
// });

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
