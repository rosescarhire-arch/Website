const app = document.getElementById("app");

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

function router() {
    const path = window.location.pathname;

    if (path === "/" || path === "/fleet") {
        loadFleet();
    } else if (path === "/bookings") {
        loadBookings();
    } else if (path === "/payments") {
        loadPayments();
    } else {
        app.innerHTML = "<h2>Page not found</h2>";
    }
}

// Intercept link clicks
document.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState(null, "", e.target.href);
        router();
    }
});

window.addEventListener("popstate", router);

router();  // initial load
