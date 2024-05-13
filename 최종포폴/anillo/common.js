const openMenu = document.querySelector(".header_menu");
const openMenuMobile = document.querySelector(".header_menu_mobile");
const modalMenu = document.querySelector(".menu_container");
const closeMenu = document.querySelector(".menu_lf_cls");
// console.log(modalMenu);

openMenu.addEventListener("click", () => {
  modalMenu.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  modalMenu.classList.remove("active");
});

openMenuMobile.addEventListener("cilck", () => {
  modalMenu.classList.add("active");
});
// const headerPopup = document.querySelector("#header_popup");
// const ClosePopup = document.querySelector(".popup_img");

// console.log(headerPopup, ClosePopup);
// ClosePopup.addEventListener("click", () => {
//   headerPopup.classList.remove("active");
// });
