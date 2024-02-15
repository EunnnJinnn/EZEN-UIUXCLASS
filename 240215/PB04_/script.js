// while(조건식 => true) {
//   실행문
// }

// 0을 입력하게되면 부정으로 인해
// let stars = Number(prompt("별점을 주세요!"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }
// 조건식을 패칭하기전에 일단 시작하고 조건식을 봄
// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);

// 5의배수이지만 7의 배수가 아닌것
// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }

// break문 예시 멈춤

// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// contunue문 예시 / 완전한 종결은 아니고 스킵

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// 사용자에게 숫자를 하나 전달 받기 -> 해당 숫자가 소수인지 아닌지 식별 후 , 만약 해당 숫자가 소수라면, 웹브라우저 화면에 "00숫자는 소수입니다" 라고 출력

// * 소수 : 1과 자기 자신으로만 나눠질 수 있는 숫자
// 단락회로평가 : 특정값이 논리형 값으로 => true / false

// const number = Number(prompt("숫자를 입력하세요"));
// let isPrime;

// if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }

// if (isPrime) {
//   document.write(`${number}는 소수입니다!`);
// } else {
//   document.write(`${number}는 소수가 아닙니다!`);
// }

// 웹브라우저 화면에 아래 보이는 배열 아이템 중 10이상 되는 숫자만 출력해주세요!

// 인덱스는 전체 총 아이템 개수보다 -1
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}, `);
//   }
// }

// 사용자에게 1보다 큰 수를 하나 전달 받고, 그 숫자 안에 있는 "짝수"들만 모두 더해서 웹 브라우저 화면에 출력해주세요.
// 1. 사용자에게 1보다 큰 수를 받는다
// 2. 짝수 구별식
// 3. 숫자 안에 짝수를 찾아냄
// 4. 찾아낸 짝수를 모두 더한다
// 5. 웹브라우저에 출력한다.

const number = Number(prompt("1보다 큰 수를 적어주세요!", "ex) 2"));
// 숫자를 할당 받지않은 퓨어한 변수
let sum = 0;
console.log(sum + 1);

// for반복문 = if 홀수 안나옴 /
for (let i = 1; i <= number; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    sum += i;
    document.write(`${i} ---- ${sum} <br/>`);
  }
}
