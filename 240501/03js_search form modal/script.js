const openSearch = document.querySelector(".open-search");
const modalSearch = document.querySelector(".modal-search");
const closeSearch = document.querySelector(".close-search");

openSearch.addEventListener("click", () => {
  modalSearch.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  modalSearch.classList.remove("active");
});

// 부모의 부모의 형제 / 클릭 시 해시태그 나타남
const searchBar = document.querySelector(".field input[type=search]");

searchBar.addEventListener("focus", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "block";
});

// 포커스가 나가면 해시태그 숨김
searchBar.addEventListener("blur", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.display = "none";
});
