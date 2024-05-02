const pushLike = document.querySelector(".footer .footer-icon");

pushLike.addEventListener("click", (e) => {
  console.log("click");
  e.preventDefault();
  if (pushLike.style.backgroundPosition.slice(0, 4) === "-156") {
    pushLike.style.backgroundPosition = `-130px -478px`;
    likeNum.textContent = Number(likeNum.textContent) + 1;
  } else {
    pushLike.style.backgroundPosition = `-156px -478px`;
    likeNum.textContent = Number(likeNum.textContent) - 1;
  }
});
