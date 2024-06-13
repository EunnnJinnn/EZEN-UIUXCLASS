//  1. open 버튼 정의
//  2. close 버튼 정의
//  3. 출력되어야할 모달 페이지 정의

const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const container = document.querySelector(".container");

// console.log(openButton);
// console.log(closeButton);
// console.log(container);

const openFnc = () => {
  // console.log("open");
  openButton.style.display = "none";
  container.style.display = "flex";
};

const closeFnc = () => {
  // console.log("close");
  container.style.display = "none";
  openButton.style.display = "block";
};

openButton.onclick = openFnc;
closeButton.onclick = closeFnc;
