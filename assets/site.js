// Custom dynamic interactions
(function () {
  const STORAGE_KEY = "preferred-theme";

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    return mql.matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const toggle = document.getElementById("themeToggle");
    if (toggle) toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }

  // Initialize theme early
  applyTheme(getPreferredTheme());

  // Theme toggle button
  function ensureThemeToggle() {
    if (document.getElementById("themeToggle")) return;
    const button = document.createElement("button");
    button.id = "themeToggle";
    button.title = "Toggle theme";
    button.innerHTML = "<span aria-hidden='true'>🌓</span>";
    button.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      applyTheme(current === "dark" ? "light" : "dark");
    });
    document.body.appendChild(button);
  }

  // Back to top button
  function ensureBackToTop() {
    if (document.getElementById("backToTop")) return;
    const button = document.createElement("button");
    button.id = "backToTop";
    button.title = "Back to top";
    button.innerHTML = "<span aria-hidden='true'>⬆️</span>";
    button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.body.appendChild(button);

    function updateVisibility() {
      const visible = window.scrollY > 300;
      button.classList.toggle("visible", visible);
    }
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
  }

  // Scroll reveal using IntersectionObserver
  function setupReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    const candidates = document.querySelectorAll("h1, h2, h3, p, li, table, img, .post, .page-content > *");
    candidates.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
  }

  // Enhance tables resembling cards
  function enhanceTables() {
    document.querySelectorAll("table").forEach((table) => {
      table.classList.add("table-card", "hover-lift");
    });
  }

  // Run once DOM is ready
  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    ensureThemeToggle();
    ensureBackToTop();
    setupReveal();
    enhanceTables();
  });
})();
