document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");
  const closeBtn = document.getElementById("closeSidebar");
  const topbar = document.querySelector(".topbar");

  const openBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");

  let lastScroll = 0;

  // Mobile menu
  toggle.addEventListener("click", () => {
    navLinks.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });

  // Modal
  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });

  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });

  // Mobile Hide
  function isMobile() {
    return window.innerWidth <= 1230;
  }

  window.addEventListener("scroll", () => {
    if (!isMobile()) return;

    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
      topbar.style.top = "-100px";
    } else {
      topbar.style.top = "0";
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
  });

  window.addEventListener("resize", () => {
    if (!isMobile()) topbar.style.top = "0";
  });
});