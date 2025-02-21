document.addEventListener("DOMContentLoaded", function() {
    // Load the navbar dynamically
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;

        // Once the navbar is loaded, initialize scroll behavior
        initializeNavbarScroll();
    })
    .catch(error => console.error("Error loading navbar:", error));
});

function initializeNavbarScroll() {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector("nav");

    if (!nav) return; // Prevent errors if navbar isn't found

    window.addEventListener("scroll", () => {
        if (window.scrollY > lastScrollY) {
            nav.classList.add("hidden-nav");
        } else {
            nav.classList.remove("hidden-nav");
        }
        lastScrollY = window.scrollY;
    });

    window.addEventListener("mousemove", () => {
        nav.classList.remove("hidden-nav");
    });
}