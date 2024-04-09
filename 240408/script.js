// React.js에서 자주 사용되는 Javascript 주요 문법 정리

// 1. 객체 줄임 표기법
// const name = "Eunjin";
// const age = 25;

// const person = {
//   name: name,
//   age,
// };
// console.log(person);

// 2. 구조 분해 할당
// const person = {
//   name: "Eunjin",
//   age: 25,
// };
// ---구조 분해 전----
// const name = person.name;
// const age = person.age;

// ----구조 분해 -----
// const { name, age } = person;

// console.log(name, age);

// 3. 전개연산자 구문
// const arr = [1, 2, 3, 4];
// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

// 4. 깊은 복사 (feat. 참조타입 자료)
// const person = {
//   name: "Eunjin",
//   age: 20,
// };

// const person2 = person;
// const person3 = { ...person };

// console.log(person2, person3);
// console.log(person == person2);
// console.log(person == person3);

// 5. 삼항조건 연산자
// const coffee = null;

// console.log(coffee ? coffee.name : "there is no coffee");

// 6. 조건부 랜더링 (삼항조건 연산자 응용) / && 단락 회로 평가

// const coffee = {
//   name: "americano",
//   price: 2000,
// };

// const coffee = null;

// if (coffee) {
//   console.log(coffee.name);
// }else {
//   console.log("there is no coffee");
// }

// --------&&단락회로 평가---------
const coffee = {
  name: "americano",
  price: 2000,
};
const result = coffee.name && coffee.price;
console.log(result);
