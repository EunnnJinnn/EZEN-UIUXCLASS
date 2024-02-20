// prompt, alert,  호출함수이지만 window의 내장함수
// prompt(); 사용자로부터 값을 받아오는 함수
// alert();

// document.write();어떠한 연산작업을 도출한 값을 웹브라우저에 출력하고 싶을때

// 함수의 생김새 = 단어(=키워드)() => 함수

// 함수가 작동하기 위해서 필요한 것
//  1. 함수를 구현 = 제작
//  2. 함수를 호출 = 실행

// 함수 구현 어떻게 하나?
// 함수를 구현하는 방법 3가지
//  1. 클래스 함수를 구현하는 방법
//  2. 익명 함수를 구현하는 방법
//  3. 화살표 함수를 구현하는 방법 (경우에 따라 사용하는 함수가 다름)

// - 클래스 함수를 구현하는 방법

// 초보레벨 단계 비효율적
// let num = 0;
// num += 1;
// num += 2;
// num += 3;
// num += 4;
// num += 5;

// 중급 레벨 단계 / 반복문
// 재활용이 불가능한 코드
// 만약 숫자를 1~5가 아닌, 1~100가지를 더해라 같은 경우 사용 X
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum += i;
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }

// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
// }

// 고급 레벨 단계
// calcSum = 함수명, ()=> 매개변수의 자리/ 구현 / -> 반복문을 funtion으로 감싼것
// 재활용이 가능한 코드 업그레이드

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum} 입니다.`);
// }

// // 함수 호출 방법 / 위의 매개변수(구현부)와, 아래 인자값에도 값을 줘야한다.

// calcSum(10);

// 두개의 값을 받아서 연산하는 함수 만들기

// const userNum01 = Number(prompt("첫번째 숫자를 입력하세요"));
// const userNum02 = Number(prompt("두번째 숫자를 입력하세요"));

// <클래스 함수>
// function sum(a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// }

// <익명함수> 함수의 이름이 없는대신 특정한 식별자 안에 할당해줘야함.
// const sum = function (a, b) {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// <화살표 함수> 함수의 이름, funtion의 의미도 없앰
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두 수의 합은 ${result} 입니다`);
// };

// sum(userNum01, userNum02);

// return문 함수가 어떠한 연산작업을 한 이후에 연산작업을 바깥으로 꺼내고 싶을 때사용

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   // document.write(`1부터 ${n} 까지 더하면 ${sum} 입니다.`);
//   return sum;
// }

// calcSum(num);
// // ${n}과, ${sum}는 calcSum 안에서 연산작업을 할 경우 사용, 밖에서 사용시  결과값을  다르게 해준다.
// document.write(`1부터 ${num} 까지 더하면 ${calcSum(num)} 입니다.`);

// const usserNum01 = Number(prompt("첫번째 숫자~"));
// const usserNum02 = Number(prompt("두번째 숫자~"));
// const usserNum03 = Number(prompt("세번째 숫자~"));

// c =10 기본매개 변수 = 사용자가 값을 입력하지 않았을 경우 입력되는것
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }

// console.log(multiple(1, 2));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입디나.`);
// }

// calcSum(5);

// JS 코드 작성하다보면 큰 이슈가 생김
// JS 엄청 큰 문제점을 발견하면 => console 창에서 알려줌
// 아주 사소한 문법상의 문제점은 알려주지 않음 ex)오타 등등
// 코드상의 문제가 발생 => 버그발생
// TS => 실무에서
// JSx => TS 프론트엔드 사용
// 보다 효율적으로 버그를 찾는 방법

// const hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// function greeting02() {
//   console.log(hi);
// }

// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);

// change();

// const factor = 5;

// // num 블록변수, factor 전역변수
// function calc() {
//   return num * factor;
// }

// const num = 10;
// let result = calc();
// document.write(`redult : ${result}`);

// JS 권장사항
//  1. var 보다는 let, const 키워드로 변수를 선언하기

// function addSum(n) {
//   var sum = 0;
//   for (var i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

//  2. 가급적이면, 전역 스코프의 변수선언은 피하기

//  3. 그래서 var, let 보다는 const에 적응해라

// 함수의 구현부
// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }

// 함수의 실행부
// sum(1, 2);

// 즉시실행 함수
// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// 익명함수로 사용해도 상관이 없음
// (function (a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

// const example = function () {
//   console.log("hello");
// };

// example();

// Hoisting 기법 (무언가를 끌어올리다)
// class 함수는 hoisting 가능 / 화살표 & 익명 hoisting 불가능

// example();

// 클래스 함수
// const example = () => {
//   console.log("hello");
// };

// function example01() {
//   console.log("hello");
// }

// const example01 = function () {
//   console.log("hello");
// };

// 화살표 함수 에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중활호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동 가능
// let hi = () => `안녕하세요~`;

// console.log(hi());

// 익명함수
// let sum = function (a, b) {
//   return a + b;
// };

// 화살표 함수
// let sum = (a, b) => a + b;

// 화살표 함수 탄생 이유: (ES6문법)
//  1. 반복적으로 사용되는 function & 함수명을 생략
//  2. JS 근본없는 구현 & 호출부의 순서를 명확하게 정의
//  3. 함수의 실행문에서 굳이 중괄호 & return문을 사용하지 않아도 구현할 수 있도록 해주기위함

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

// ... 전개연산자 (Numbers 배열형태)
// const addNum = (...numbers) => {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(addNum(1, 3));
// console.log(addNum(1, 3, 5, 7));

// 나머지 매개변수

// const displayFavorites = (first, second, ...favor) => {
//   const str = `가장 멋진사람은 ${first}`;
//   const str01 = `두번째로 멋진 사람은 ${second}`;
//   return str;
// };

// console.log(displayFavorites("민채", "서윤", "남주"));
