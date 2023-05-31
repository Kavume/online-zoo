const menu = document.querySelector(".burger-menu");
const closeButton = document.querySelector(".burger-menu__close");

const nav = document.querySelector(".burger-menu__dropdown-content");

menu.addEventListener('click', () => {
    nav.classList.toggle("navbar")
})

closeButton.addEventListener('click', () => {
    nav.classList.toggle("navbar")
})