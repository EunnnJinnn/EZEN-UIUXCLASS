// span에 대한 정의 >span 클릭시 발생 하는 이벤트 정의 > span 클릭 시  p,span 동시에 사라지게 하기

const buttons = document.querySelectorAll("p span");

for (let button of buttons) {
  button.addEventListener("click", function () {
    this.parentNode.remove();
  });
}
// this = 버튼의 부모 / remove를 사용

// console.log(buttons);
