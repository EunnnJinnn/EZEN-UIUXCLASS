// Accordion 메뉴 기능
// const accordionMenu = function () {
//   document.addEventListener("click", function (event) {
//     const trigger = event.target.closest(".menu_link");
//     if (!trigger) return;

//     const target = document.querySelector(trigger.hash);
//     if (!target) return;

//     event.preventDefault();

//     target.classList.toggle("menu_hidden");

//     trigger.classList.toggle("accordion-menu--active");
//   });

//   document.addEventListener("click", function (event) {
//     event.preventDefault();
//     if (target.classList.contains("active")) {
//       target.classList.remove("active");
//       return;
//     }

//     target.classList.toggle("active");
//   });
// };

// accordionMenu();
const openMenu = document.querySelector(".header_menu ");
const modalMenu = document.querySelector(".menu_container");
const closeMenu = document.querySelector(".menu_lf_cls");
console.log(modalMenu);

openMenu.addEventListener("click", () => {
  modalMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  modalMenu.classList.remove("active");
});
