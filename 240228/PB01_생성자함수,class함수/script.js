// 객체 프로퍼티 =속성
// key : value 1쌍 -> 프로퍼티

// const book1 = {
//   title: "자바스크립트", //문자열 "" 사용
//   pages: 648,
// };
// //온점 표기법
// console.log(book1.title); //book1이라는 객체 안에 문자열을 가지고 있는 key 를 가져오면됨

// // 대괄호 표기법
// console.log(book1["pages"]);

// book1.pages = 50;
// book1.author = "dmswls";
// console.log(book1);

// new Date();
// new Object();
// new Array();

// // 프로토타입 = 붕어빵 틀
// // 인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵

// const book2 = new Object(); // book2 인스턴스
// console.log(typeof book2);

// book2.title = "Typescript";
// book2.pages = 500;
// book2.author = "Alice";

// console.log(book2);

// delete book2.pages;

// console.log(book2);

// 객체 중첩

//------- 반복문의 중첩 -----------
// for (let i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {}
// }
//--------- 조건문의 중첩 --------
// if (true) {
//   if (true) {
//     console.log("ture");
//   }
// }

// 객체 중첩 안에 함수할당 가능   /
// const student = {
//   name: "dmswls",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history = this.science) / 2; //해당 요소를 감싸고 있는 객체를 뜻함  - score
//     },
//   },
// };

// window.document.querySelector();

// const window = {
//   document: {
//     querySelector: function () {},
//   },
// };

// 메서드 = 함수

// 1번째 방법

// console.log(student.score.history); //객체안의 객체안의 key
// console.log(student.score.average());

// const book3 = {
//   title: "은진",
//   pages: 360,
//   buy: function () {
//     console.log("이 책을 구입했습니다");
//   },
// };

// console.log(book3.buy());

// 2번째 방법

// const book3 = {
//   title: "은진",
//   pages: 360,
//   buy() {
//     console.log("이 책을 구입했습니다");
//   },
// };

// console.log(book3.buy());

// this
//  1) addEventListener => 콜백함수 / 화살표함수 => window
//  2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위요소
//  3) 객체 메서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소
//  4) 객체 메서드 함수를 생성할 때 / 화살표 함수 => this => window

// const book4 = {
//   title: "은진",
//   pages: 360,
//   author: "dmswls",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는중") : console.log("완독"); //this 가 훨씬 안정적임
//   },
// };
// book4.finish();

// (객체) => 참조타입:referece - 객체, 배열 <-> 원시타입:primitve - 숫자, 문자, 논리
// 객체 - 원본 데이터 자료 && 사본 데이터 자료

// const book1 = {
//   title: "나는 메트로폴리탄 미술관의 경비원입니다",
//   pages: 500,
//   publish: "2023-11-24",
//   price: 30000,
// };

// 커스터마이징 된 객체를 생성

// 생성자 "함수" = 다른 일반적인 함수와는 기능이 상이함, 함수이름 첫글자는 대문자로
// 붕어빵 틀 = 생성자 함수
// 붕어빵 = 만들어질 객체

// -------생성자함수를 이용한 프로토타입 생성-----------
// function Book(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = ""; //빈 문자열 할당
//     this.done === false ? (str = "읽는중") : (str = "완독");
//   };
// }

// //------------ 생성자 함수 -------------
// const book1 = new Book("내가 한 말을 내가 오해하지 않기로 함", 648, false);
// const book2 = new Book("기분이 태도가 되지 말자", 216, true);

// console.log(book1);
// console.log(book2);

// class
// 매서드 함수와 독립적
// class book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }

//   finish() {
//     let str = "";
//     this.done === false ? (str = "읽는 중") : (str = "완독");
//   }
// }

// const book4 = new Book2("기분이 태도가 되지 말자", 216, true);
// console.log(book4);
