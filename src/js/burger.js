const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", function () {
    navMenu.classList.toggle("is-open");
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-xmark");
});
