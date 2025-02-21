/* JavaScript to handle navbar hiding */
<script>
    let lastScrollY = window.scrollY;
    const nav = document.querySelector("nav");
    
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

document.addEventListener("DOMContentLoaded", function() {
    fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading navbar:", error));
});
</script>