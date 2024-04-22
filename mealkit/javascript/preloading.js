const preloading = document.querySelector(".preloading");
preloading.addEventListener("click", () => {
  window.location.href = "https://m.naver.com";
});
setTimeout(() => {
  window.location.href = "https://m.naver.com";
}, 3000);
