// 외부에서 json 형식의 데이터를 가져와서 웹브라우저 출력해야하는 상황
// JS 언어 => 태생적으로 동기 처리 방식을 하도록 만듦

// XHR => 비동기 / JS => 동기

// 동기 => 순차적으로 무언가를 처리한다는 뜻
// 예시 => 커피숍 / 비동기 처리 = 키오스크

// JS 동기이지만, 특정 상황에 닥쳤을 때, 비동기처리를 할 수 있도록 해야하지 않나?

// JS 비동기처리방식 총 3번에 걸쳐서 업그레이드 됨

// 1) 콜백함수
// 2) promise 객체
// 3) async, await 키워드 사용

// ---------- 호출 / 동기처리 ---------
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 아무리 displayB함수의 호출이 displayC함수 호출보다 먼저 발생했어도, displayC함수의 결과값이 먼저 나오게 할 수 만 있다면, 우리는 자바스크립트언어를 비동기처리가 된것처럼 만들어 낼 수 있다.

// --------------- 비동기 처리1 (setTimeout함수)---------------
// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// --------------- 비동기 처리2 (setTimeout함수,callback함수)---------------

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000); //2초뒤
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// --------------- 비동기 처리3 (setTimeout함수,callback함수)---------------

// const display = (result) => {
//   console.log(`${result} 준비 완료`);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

// 콜백 지옥
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
