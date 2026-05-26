// Text rotation: only one role is displayed at a time, with a fade transition.
const roleWord = document.getElementById("role-word");
const roles = ["Engineer", "Maker", "Designer"];
let roleIndex = 0;

if (roleWord) {
    window.setInterval(() => {
        roleWord.classList.add("is-fading");

        window.setTimeout(() => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleWord.textContent = roles[roleIndex];
            roleWord.classList.remove("is-fading");
        }, 340);
    }, 1000);
}

// Darkens the floating header after scrolling away from the hero.
const header = document.querySelector(".site-header");
if (header && !header.classList.contains("inner-header")) {
    const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
}

// Small-screen menu.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const open = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(open));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}
