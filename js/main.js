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

// Skills pie chart scroll-reveal animation
const aboutSection = document.getElementById("about");
const skillPieChart = document.querySelector(".pie-chart");

if (aboutSection && skillPieChart) {
    let chartAnimationFrame = null;

    const updatePieChartProgress = () => {
        const aboutPosition = aboutSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        /*
            The chart begins loading when the About section starts
            entering the viewport.

            Increase this number to begin the animation earlier.
            Decrease it to begin later.
        */
        const animationStart = viewportHeight * 0.88;

        /*
            The chart becomes fully loaded once the About section
            is strongly visible on screen.

            Decrease this number to make the chart finish later.
            Increase it to make the chart finish earlier.
        */
        const animationFinish = viewportHeight * 0.17;

        const progress =
            (animationStart - aboutPosition.top) /
            (animationStart - animationFinish);

        const clampedProgress = Math.min(Math.max(progress, 0), 1);

        skillPieChart.style.setProperty(
            "--chart-progress",
            `${clampedProgress * 100}%`
        );
    };

    const handleChartScroll = () => {
        if (chartAnimationFrame !== null) {
            return;
        }

        chartAnimationFrame = window.requestAnimationFrame(() => {
            updatePieChartProgress();
            chartAnimationFrame = null;
        });
    };

    updatePieChartProgress();

    window.addEventListener("scroll", handleChartScroll, { passive: true });
    window.addEventListener("resize", handleChartScroll);
}
