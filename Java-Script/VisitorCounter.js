// Counter.dev tracking + display logic
function initVisitorCounter() {
  const counterEl = document.getElementById("visit-count");
  if (!counterEl) return; // Exit if no counter element found

  // Local testing fallback
  if (window.location.href.includes("localhost")) {
    counterEl.style.color = "Red";
    counterEl.textContent = "69420 (local preview)";
    return;
  }

  // Production: Use Counter.dev
  if (window.__counterdev) {
    counterEl.textContent = window.__counterdev.count;
  } else {
    counterEl.textContent = "Something is preventing Visitor Tracking";
    counterEl.style.color = "Red";
  }
}
window.counter
// Initialize when the page loads
document.addEventListener("DOMContentLoaded", initVisitorCounter);