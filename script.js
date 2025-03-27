document.addEventListener("DOMContentLoaded", function() {
    // Load the navbar dynamically
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;

        // Once the navbar is loaded, initialize functionality
        initializeNavbarScroll();
        initializeHamburgerMenu();
    })
    .catch(error => console.error("Error loading navbar:", error));

    // Initialize cookie handling
    initializeCookieConsent();
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

function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.menu-overlay');
    
    if (!hamburger || !navMenu) return; // Prevent errors if elements aren't found
    
    // Toggle menu and overlay when hamburger is clicked
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.classList.toggle('menu-open');
    });
    
    // Close menu when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-menu li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

function initializeCookieConsent() {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    if (!cookiePopup || !acceptButton || !declineButton) return; // Prevent errors if elements aren't found

    // Check if the user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    if (cookieConsent === "accepted" || cookieConsent === "declined") {
        cookiePopup.style.display = "none";
        
        // Apply cookie consent actions based on previous choice
        if (cookieConsent === "accepted") {
            enableCookies();
        } else {
            disableCookies();
        }
    } else {
        // Show cookie popup if no choice has been made
        cookiePopup.style.display = "block";
    }

    acceptButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookiePopup.style.display = "none";
        enableCookies();
    });

    declineButton.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "declined");
        cookiePopup.style.display = "none";
        disableCookies();
    });
}

function enableCookies() {
    // Function to enable cookies and related functionality
    // This would be where you initialize analytics, etc.
    console.log("Cookies accepted");
}

function disableCookies() {
    // Function to ensure cookies are disabled
    // This would be where you ensure no tracking occurs
    console.log("Cookies declined");
}