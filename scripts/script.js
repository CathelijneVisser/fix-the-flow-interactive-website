let closeLogin = document.querySelector(".login-cross");
let openLogin = document.querySelector(".account-icon");
let loginContainer = document.querySelector(".login-container");
const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
var wwDialog = document.querySelector("ww-dialog");
var diaOpen = document.querySelector("ww-vergeten");
console.log(diaOpen);

closeLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});

openLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});

// diaOpen.addEventListener("click", function () {
// 	wwDialog.showModal;
// });

console.log(allButtons);
allButtons.forEach((button) => {
	button.addEventListener("click", function () {
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
