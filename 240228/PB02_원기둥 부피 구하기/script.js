// 원기둥의 부피 = 밑면적 x 높이
// 밑면적 = 파이 x ((지름/2)제곱)

// 생성자 함수 혹은 class를 활용해서 코드작성

// --------- 생성자 함수 ------------
// function Cylidner(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cylidner = new Cylidner(8, 10);
// console.log(`원기둥의 부피는 ${cylidner.getVolume()} 입니다.`)

const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

class Cylidner {
  constructor(cylinderDiamter, cylinderHeight) {
    this.diameter = cylinderDiamter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value; // .value를 넣어야 인풋안에 있는 값을 찾아옴
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름값과 높이값을 입력하세요!";
  } else {
    const cylidner = new Cylidner(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylidner.getVolume()} 입니다`;
  } //예외조항 처리
});
