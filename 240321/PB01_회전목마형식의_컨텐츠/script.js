// css 애니메이션

// Y축 rotation 중심으로 돌아야함
// transform : rotateY

// 원주율 = 파이 = 3.14
// - 모든 원은 다음과 같은 특징을
//  => 원의 지름 * 3.14 = 원의 둘레 길이
// => 600 * 8 = 4800
// => 4800 / 3.14 /2   = 764

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });

  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
