const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const body = document.body;

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  body.classList.toggle("blur-active");
});
