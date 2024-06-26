// 어떤 숫자 값을 인수로 전달했을 때, 숫자가 1개씩 증가하는 함수

// const myFuncion = (number) => {
//   console.log(number);
//   myFuncion(number + 1);
// };

// myFuncion(1);

// 재귀함수의 단점 중 하나
// 브레이크를 걸어주지 않은 무한으로 셀프반복
// 컴퓨터는 재귀함수를 만나면 cpu를 활용해서 계산 => 저장공간 = 콜스택 ()
// 브레이크 = 기저조건 = 탈출조건

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   let c = funcB;
//   return a + b + c;
// };

// console.log(funcA());
// funcB();

// ------------------------------------
// const myFuncion = (n) => {
//   if (n > 3) return;
//   console.log(n);
//   myFuncion(n + 1);
// };
// // ↑ 작동방식
// // const myFuncion = (1) => {
// //   if (1 > 3) return;
// //   console.log(n);
// //   myFuncion(n + 1);
// // };

// // const myFuncion = (2) => {
// //   if (2 > 3) return;
// //   console.log(n);
// //   myFuncion(n + 1);
// // };

// // const myFuncion = (3) => {
// //   if (3 > 3) return;
// //   console.log(n);
// //   myFuncion(n + 1);
// // };

// // const myFuncion = (4) => {
// //   if (4 > 3) return;
// //   console.log(n);
// //   myFuncion(n + 1);
// // };

// 재귀함수는 콜스택의 영역을 많이 차지함
// 메모리가 많지 않은 시스템일수록 재귀함수 X

// 팩토리얼 타입의 연산 작업
// 숫자 n이 주어졌을 때, 1부터 n까지의 모든 수의 곱을 계산하는 것

// 5! = 5팩토리얼
// 5 x 4 x 3 x 2 x 1

// 재귀적으로 무언가를 표현하는 것이 처음에는 굉장히 어색함
//  재귀함수를 하향식으로 작성하는 것을 추천 => 이미 재귀함수의 시스템이 구축되어있다고 생각하고 연산신을 작성

// --- 하양식  재귀함수
// const factorial = (number) => {
//   if (number === 1 || number === 0) {
//     return 1;
//   } else {
//     number * factorial(number - 1);
//   }
// };
// console.log(factorial(5));

// // 반복문
// for (let i =1; i < 11, o++) {
//   console.log(i);
// }

// // 상향식 재귀함수
// const myFuncion = (number) => {
//   if (number > 10) return;
//   console.log(number);
//   myFuncion(number + 1)
// }

// console.log(myFuncion(1));

// [1,2,3,4,5 ] => 해당 배열안에 입력되어있는 숫자를 모두 더하는 하향식 재귀함수를 활용해서 결과값을 도출하세요.

// const arr = [1, 2, 3, 4, 5];

// const sumArray = (arr) => {
//   if (arr.length === 1 || arr.length === 0) {
//     return 1;
//   } else {
//     return arr[arr.length - 1] + sumArray(arr.slice(0, -1));
//   }
// };

// console.log(sumArray(arr));

// -------------------------------

// 하노이 탑
// 원반의 개수 : count, 시작하는 기둥 : from, 도착하는 기둥 : to, 잠시머물러야하는 기둥 : temp

const hanoi = (count, from, to, temp) => {
  if (count === 0) return;
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};

hanoi(3, "A", "C", "B");
