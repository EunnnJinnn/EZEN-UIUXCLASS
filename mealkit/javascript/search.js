const allClear = document.querySelector(".btn-all-clear");
const searchItemas = document.querySelector(".search-recent .items");

// 전체삭제 클릭시 모든 아이템 삭제
allClear.addEventListener("click", () => {
  searchItemas.style.display = "none";
});

// 낱개로 삭제
const eachItems = document.querySelectorAll(".search-recent .btn-clear");
eachItems.forEach((item) => {
  item.addEventListener("click", function () {
    this.parentNode.style.display = "none";
  });
});
