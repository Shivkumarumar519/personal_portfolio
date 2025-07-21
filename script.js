function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


const toggleBtn = document.getElementById("theme-toggle");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleBtn.textContent = "☀️ Light Mode";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  // Save theme
  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Update button text
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});


