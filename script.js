document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible")
            }
        });
    };
    window.addEventListener("scroll", revealSection);
    revealSection()
})

document.getElementById("menu-btn").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show")
})