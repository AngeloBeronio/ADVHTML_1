document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const closeBtn = document.getElementById("closeSidebar");

  toggle.addEventListener("click", () => {
    navLinks.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});