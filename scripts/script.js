const BackHome = document.querySelector(".login-cross");
const allButtons = document.querySelectorAll(".js-expand");
const menuClosed = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const WWvergeten = document.querySelector("button.ww-vergeten");
const WwvergetenP = document.querySelector("p.ww-vergeten");
const RegisterOpen = document.querySelector(".register-link");
const Register = document.querySelector("#register");
const RegisterClose = document.querySelector(".login-cross-register");
const Login = document.querySelector(".login-container");
const RegisterButton = document.querySelector(".register-button");

BackHome.addEventListener("click", () => {
	window.location((href = "index.html"));
});

RegisterClose.addEventListener("click", RegisterGoBack);

RegisterOpen.addEventListener("click", RegisterGo);

RegisterButton.addEventListener("click", RegisterGoBack);

WWvergeten.addEventListener("click", () => {
	WwvergetenP.classList.toggle("visible");
});

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

function RegisterGo() {
	Register.classList.toggle("expand");
	setTimeout(() => {
		Login.classList.toggle("hidden");
	}, 1000);
}

function RegisterGoBack() {
	Register.classList.toggle("expand");
	Login.classList.toggle("hidden");
}
