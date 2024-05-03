const UnLikeBtn = document.querySelector(".icon_btn1");
const LikeBtn = document.querySelector(".icon_btn2");

console.log(LikeBtn, UnLikeBtn);

UnLikeBtn.addEventListener("click", () => {
  LikeBtn.style.display = "block";
  UnLikeBtn.style.display = "none";
});

LikeBtn.addEventListener("click", () => {
  UnLikeBtn.style.display = "block";
  LikeBtn.style.display = "none";
});
