const arrows = document.querySelectorAll(".arrow"); //배열
const container = document.querySelector("#container");
let i = 0; // 단락회로 평가를 주기 위해 정의 해줌 0번째서부터 시작했다는걸 알리기위해
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
// console.log(arrows);
// console.log(container);

// 반복문 = forEach  단락회로평가가 필요함 -
container.style.backgroundImage = `url(./images/${pics[0]})`;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if ((e, target.id === "right")) {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }

    container.style.backgroundImage = `url(./images/${pics[i]})`;
    // console.log(e.target.id);
  });
});
