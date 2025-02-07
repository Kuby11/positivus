const burgerButton = document.querySelector(".burger-button") as HTMLElement;
const sidebar = document.querySelector(".sidebar") as HTMLElement;

burgerButton.addEventListener("click", () =>{
	burgerButton.classList.toggle("open")
	sidebar.classList.toggle("visually-hidden")
})
