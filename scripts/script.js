const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
let closeLogin = document.querySelector(".login-cross");
let openLogin = document.querySelector(".acount-icon");
let loginContainer = document.querySelector(".login-container");

console.log(closeLogin);

allButtons.forEach((button) => {
	button.addEventListenr("click", function () {
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

closeLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});

openLogin.addEventListener("click", () => {
	loginContainer.classList.toggle("expand");
});
