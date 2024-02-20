// 변수 선언 시 let, const, var 사용하지 않으면 무조건 전역변수화
// function greeting() {
//   hi = "hello";
// }

// const hi = "hello";
// function greeting() {}

// greeting();
// console.log(hi);

// 콜백함수 - 함수 안에 또다른 함수를 호출할 때 부름 defer 넣어주기

// 1번째 경우

// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 화이팅 해라");
// };
// btn.addEventListener("click", display);
// 이벤트의 매개변수를 정의하기위해서는 클래스라면 아래에 사용해도 됨 . 화살표함수를 사용할거면 위에 사용해야함
// console.log(btn); 노드

// 2번째 경우
// const btn = document.querySelector("button");
// // const display = () => {
// //   alert("오늘도 화이팅 해라");
// // };
// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅 해라");
// });

// const showData = (name, age) => {
//   alert(`안녕하세요 ${name}님 나이가 ${age}살 이군요`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요.");
//   const userAge = prompt("나이를 입력하세요.");
//   callback(userName, userAge);
// };

// getData(showData);

// JS 함수 => 1급시민, first-class citizen
// 모든 프로그래밍 언어에서 1급시민이 되려면 다음과 같은 조건 부합
//  1. 함수를 변수에 값으로 할당할 수 있어야 한다.
//  2. 함수가 또 다른 함수의 매개변수 혹은 인자값으로 사용도리 수 있어야 한다. (콜백함수로 사용 가능해야함)
//  3. 함수가 또다른 함수의 return  안에 반환값으로 들어올 수 있어야 한다. => 고차함수

// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };

// console.log(`init(30, 20) : ${init(30, 20)}`);

// const addNum = (a, b) => a + b;

// console.log(addNum(1, 3, 5, 7));
