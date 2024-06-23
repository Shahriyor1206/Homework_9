const container = document.querySelector(".container");
const burgerMenu = document.querySelector(".burger_menu");

burgerMenu.onclick = () => container.classList.toggle("active");
container.onclick = () => container.classList.toggle("active");