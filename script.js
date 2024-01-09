document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    console.log("Scroll event detected!");
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scroll-navbar", window.scrollY > 0);
  });
});
