// const Imgs = ["slide-01", "slide-02", "slide-03"];
// console.log(Imgs);

// const slidePagers = document.querySelector(".slide_pagers");
// const pagers = document.querySelectorAll(".slide_pagers li");

// 1. 이미지를 불러와야함
// 2. 슬라이드 페이저를 인식
// 3. 페이저 인식
// 4. 페이저 클릭 시 슬라이드 작동
// 5. 이미지 변경 시 페이저 색도 변경되어야 함
// 5. 5초마다 이미지가 변경되는 무한 슬라이더

// function ChangeImg() {
//   document.getElementById("img").src = "../images/slide-02.jpg";
//   document.body.style.backgroundImage = "url('../images/slide-01)";
// }
const slideImg = document.querySelector(".imgs");
const pagers = document.querySelectorAll(".slide_pagers li");

const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];

slideImg.style.backgroundImage = `url(./images/${imgs[0]})`;

let index = 0;

const rotation = () => {
  index = (index + 1) % imgs.length;
  slideImg.style.backgroundImage = `url(./images/${imgs[index]})`;
  pagers.forEach((pager, idx) => {
    if (index === idx) {
      pager.classList.add("active");
    } else {
      pager.classList.remove("active");
    }
    pager.addEventListener("click", function () {
      pagers.forEach((pager) => {
        pager.classList.remove("active");
      });
      this.classList.add("active");
      slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
    });
  });
};

setInterval(rotation, 3000);
