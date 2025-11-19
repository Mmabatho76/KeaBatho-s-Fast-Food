
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

 // Close other accordions
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) {
        c.classList.remove("open");
        c.style.maxHeight = null;
      }
    });

// Toggle current accordion
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.style.maxHeight = null;
    } else {
      content.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  
// ---------------- LIGHTBOX ----------------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

document.querySelectorAll(".popup-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});


// ---------------- BACK TO TOP ----------------
const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


document.querySelectorAll(".popup-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});


