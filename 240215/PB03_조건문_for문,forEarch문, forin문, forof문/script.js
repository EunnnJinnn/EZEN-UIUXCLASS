// for문
// for( 초기값(변수를 초기화시켜줌 let, const, var); 조건식; 증감문){
//   실행문
// }
// 대괄호를 쳐서 해당 인덱스 값을 넣어줌 `` => 식별자(변수)를 가져옴
// const students = ["Park", "Kim", "Lee", "Kang"];

// // 아이라는 변수(식별자)
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }

// foreEarch문
// foreach() 함수 / 앞에서 객체로 배열을 받음 function(매개변수)
// 배열.foreach(function(배열안에 있는 각각의 아이템) {
//   실행문
// })
// 배열은 반복문으로 돌릴 생각을 함 -students 복수로 사용
// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

// for문 활용 구구단 출력하기 if처럼 중첩해서 사용 가능!

// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + " X " + b + " = " + a * b);
//     document.write("</br>");
//   }
// }

// 중첩for문 활용해서 5행 5열 테이블 만들기 /테이블 안에 숫자를 넣기 위해 let 사용
// let num = 1;
// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }

// t += "</table>";
// document.write(t);

// for in => 객체 전용
// for of => 배열 전용

// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };

// //  in 전치사 뒤에 가져오고자 하는 gitBook(변수명) 객체를 써줌 key변수를앞에 사용

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}<br/>`);
// }

const students = ["Park", "Kim", "Lee", "Kang"];

for (student of students) {
  document.write(`${student}, `);
}
