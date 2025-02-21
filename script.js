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

document.addEventListener("DOMContentLoaded", function() {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    // Check if the user has already made a choice
    if (localStorage.getItem("cookieConsent") === "accepted" || localStorage.getItem("cookieConsent") === "declined") {
        cookiePopup.style.display = "none";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookiePopup.style.display = "none";
    });

    declineButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "declined");
        cookiePopup.style.display = "none";
    });
});