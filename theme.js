const toggle = document.getElementById("theme-toggle");

function updateIcon() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    toggle.textContent = isLight ? "🌙" : "☀️";
}

updateIcon();

toggle.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    updateIcon();
});

let lastY = window.scrollY;
const navBar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const y = window.scrollY;
    navBar.classList.toggle("hide", y > lastY && y > 100);
    lastY = y;
});