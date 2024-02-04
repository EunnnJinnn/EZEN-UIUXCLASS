document.addEventListener("DOMContentLoaded", function () {
  const coverHeader = document.querySelector(".cover-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight) {
      coverHeader.classList.add("header-fixed");
    } else {
      coverHeader.classList.remove("header-fixed");
    }
  });
});
