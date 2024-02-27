// const today = new Date(); //new = 예약어
// // console.log(today.getFullYear());
// // const theDay = new Date("2025-02-25"); //특정날짜를 입력하게 되면 특정 정보를 가져옴 / 문자열 형식
// const theDay = new Date(2025, 2, 25); //매개변수로 쪼개서 가져온다면 현재 입력한 정보의 다음을 가져옴 / 인스턴스 객체 = 프로토타입 객체
// console.log(theDay);

// const object = new Object();
// const arr = new Array();

// 프로그래밍 언어

// const book1 = {
//   title: "자바스크립트"
//   price: 30000,
//   publishing: "2025-05-05",
// };

// class Book {
//   constructor(title, price, publishing) {
//     this.title = title;
//     this.price = price;
//     this.publishing = publishing;
//   }
// }
// const Book2 = new Book("자바스크립트", 30000, "2025-05-05");
// console.log(Book2);

// <<<<<<<<<<<< 오늘 날짜와 학원 개강 날짜>>>>>>>>>>

// const today = new Date();

// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();

// document.write("<h1>오늘의 날짜</h1>");
// document.write(`현재 월 : ${nowMonth}월 <br />`);
// document.write(`현재 일 : ${nowDate}일 <br />`);

// const open = new Date("2024-01-09");
// console.log(open);
// const theMonth = open.getMonth() + 1;
// const theDate = open.getDate();
// console.log(theMonth);

// document.write("<h1>개강일 날짜</h1>");
// document.write(`개강 월 : ${theMonth}월 <br />`);
// document.write(`개강 일 : ${theDate}일 <br />`);

// 밀리초
// 1밀리초 = 1/1000초
// 1초 = 1000밀리초
// 1분 = 60초 ( 60 * 1000 = 60000밀리초)
// 1시간 = 60분 ( 60 * 60 * 1000 = 3,600,000밀리초)
// 1일 = 24시간 ( 24 * 60 * 60 * 1000 = )

// <<<<<<<<<<<< 연말까지 남은 날짜 계산 >>>>>>>>>>>>>>>>>>
const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - today.getTime();
console.log(diffDate);
const result = Math.floor(diffDate / (24 * 60 * 60 * 1000)); //floor - 소수점자리X
console.log(result);

document.write(`연말 D-day : ${result}일 남음`)