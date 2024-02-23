// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("타입스크립트");
// tsNode.appendChild(tsTextNode);

// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);

// // document.body.appendChild(tsNode); 맨 아래에 넣음

// document.body.insertBefore(tsNode, basisNode);
// /* insertBefore - 2개 변수 받음 / 특정 값 앞에 값을 넣겠다  */

// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parentH1);

// const heading = document.querySelector("h1");
// // 클릭한 이벤트의 부모를 찾아오기

// heading.addEventListener("click", () => {
//   heading.remove();  //객체 자체를 없애겠다는 것
// });

// this 객체 조건 = 현제 선택한 li 태그를 this 객체로 대체해서 사용할 수 있음, 단! 화살표 함수를 사용할 때는 this 객체가 이벤트를 실행시키는 당사자 = 주체가 되는 것이 아니라 window 객체가 this가 됨

// <<<<<<<<<<<<<지우고 싶은 요소 클릭 시 지워짐>>>>>>>>>>>>>>>>
// const items = document.querySelectorAll("li");
// console.log(items);
// for (let item of items) {
//   item.addEventListener("click", () => {
//     item.parentNode.removeChild(item);
//   });
// }

// <<<<< this 객체 사용 시  화살표 함수가 아닌 function을 사용해야 함  >>>>>>
// 상황에 따라 사용되는 함수가 다름
const items = document.querySelectorAll("li");
console.log(items);
for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
  });
}
