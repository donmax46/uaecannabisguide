// NAVBAR SHADOW ON SCROLL

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 40){

    navbar.style.boxShadow =
    "0 8px 30px rgba(0,0,0,0.06)";

    navbar.style.background =
    "rgba(255,255,255,0.96)";

  } else {

    navbar.style.boxShadow = "none";

    navbar.style.background =
    "rgba(255,255,255,0.92)";

  }

});

// SIMPLE FADE-IN EFFECT

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

// TARGET SECTIONS

const hiddenElements = document.querySelectorAll(
  ".featured-section, .editorial-section, .category-card, .guide-card, .faq-box"
);

hiddenElements.forEach((el) => {

  el.classList.add("hidden");

  observer.observe(el);

});
