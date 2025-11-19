
// ---------------- HAMBURGER MENU ----------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
}

// ---------------- ACCORDION ----------------
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
  })
})


