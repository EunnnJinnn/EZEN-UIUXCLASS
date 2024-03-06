// // 함수의 매개변수 및 인자값(인수) 작동 원리
// // const hello = (name, message) => {
// //   console.log(`${name}님, ${message} `);
// // };

// // hello("박은진", "안녕하세요");
// // hello("이젠");

// //매개변수가 누락됐을 경우 매개변수의 디폴트 값을 설정
// const hello = (name, message = "안녕하세요") => {
//   console.log(`${name}님, ${message} `);
// };

// hello("박은진", "안녕하세요");
// hello("이젠");

// //함수, 나머지 매개변수
// const addNum = (...numbers) => {
//   let sum = 0;

//   for (let number of numbers) {
//     sum += number;
//   } //배열에 해당하는

//   return sum;
// };

// console.log(addNum(1, 2));
// console.log(addNum(1, 2, 3, 4, 5));

// // 서로 다른 2개의 배열을 합치고자 할 때  _ concat
// const animals = ["bird", "cat"];
// const fruits = ["apple", "banana", "cherry"];

// console.log(animals.concat(fruits));

// // 서로 다른 2개의 배열을 합치고자 할 때  _ ...
// // const result = [...animals, ...fruits];
// // console.log(result);

// //서로 다른 두개의 배열을 하나의 배열에 넣은것.
// const result = [animals, fruits];
// console.log(result);

// //원본 데이터 변경시 사본데이터도 변경
// const fruits01 = ["apple", "banana", "cherry"];
// const fruits02 = fruits01;
// console.log(fruits01);
// console.log(fruits02);

// // fruits01[0] = "grape";
// // console.log(fruits01);
// // console.log(fruits02);

// //원본 데이터 변경시 사본데이터는 변경 X

// const fruits03 = [...fruits01];

// fruits01[0] = "grape";
// console.log(fruits01);
// console.log(fruits02);

// //객체 안에 신규 key & value를 생성하는 방법
// const book = {
//   title: "자바스크립트",
//   pages: 500,
// };

// // 온점 표기법
// book.published = "2024-03";
// console.log(book);

// // 대괄호 표기법
// book["author"] = "eunjin";
// console.log(book);

// // 객체 안에 프로퍼티 이름을 함수로 생성하는 방법

// const fn = () => {
//   return "result";
// };

// const add = (a, b) => {
//   return a + b;
// };

// const obj = {
//   [fn()]: "함수 키",
//   [`${add(10, 20)} key`]: "계산식 키",
// };

// console.log(obj);

// Symbol() : 유일무이한 값을 생성 / 외부에서 특정 객체의 키값을 찾아오지 못하도록 하기위한 목적
// let id = Symbol("id");
// let tel = Symbol("telnumber");
// console.log(id);

// const member = {
//   name: "eunjin",
//   age: 20,
//   fnc: function () {
//     console.log("test");
//   },
//   [id]: 1235,
//   [tel]: function () {
//     alert(prompt("전화번호 : "));
//   },
// };

// console.log(member);
// // member.fnc();
// // member[tel]();

// for (let item in member) {
//   console.log(`${item} : ${member[item]}`);
// }

// 전역 요소 심볼 생성 => 찾아오고 싶을 때 // 전역요소에서 해당
const tel = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tel === phone);
console.log(Symbol.keyFor(phone));
