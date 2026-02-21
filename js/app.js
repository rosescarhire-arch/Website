const app = document.getElementById("app");

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
