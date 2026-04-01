const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mainNav.classList.remove("open");
    }
});