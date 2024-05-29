const reviewBtn = document.querySelectorAll(".review");
const noticeBtn = document.querySelectorAll(".notice");
const reviewPage = document.querySelector("#info_review");
const noticePage = document.querySelector("#info_notice");
// console.log(reviewBtn, noticeBtn, reviewPage, noticePage);

for (let i = 0; i < reviewBtn.length; i++) {
  reviewBtn[i].addEventListener("click", () => {
    reviewPage.style.display = "block";
    noticePage.style.display = "none";
  });
}

for (let i = 0; i < noticeBtn.length; i++) {
  noticeBtn[i].addEventListener("click", () => {
    reviewPage.style.display = "none";
    noticePage.style.display = "block";
  });
}

const AddBtn = document.querySelector(".address_btn");
console.log(AddBtn);

AddBtn.