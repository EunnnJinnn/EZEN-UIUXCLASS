// 자바스크립트에서 숫자를 어디까지 사용?

// 비트 : 메모리의 최소단위
// 바이트 : 8비트 -> 1바이트

// JS : 자료구조 & 알고리즘
// 제어문 : 반복문 = for, forEach, forin, forof
// Number = 객체
// MAX_SAFE_INTEGER = 자바스크립트에서 사용할 수 있는 가장 큰 정수
// const testNum = Number.MAX_SAFE_INTEGER;
// // MIN_SAFE_INTEGER =자바스크립트에서 사용할 수 있는 가장 작은 정수
// const testNum01 = Number.MIN_SAFE_INTEGER;
// console.log(testNum);
// console.log(testNum01);

// // 조건식 : 초과 시 멈춰라
// // if (inputData >= testNum) {
// //   alert("error");
// // }
// // int = 정수, BigInt 타입으로 재정의 된것 = + 1n(n은 정수,자연수는 연산작업 안되고, 같은 type끼리만 가능하다)
// const testNum02 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// const testNum03 = BigInt(Number.MIN_SAFE_INTEGER);

// console.log(testNum02);
// console.log(testNum03);

// e 10의 제곱근..
const testNum04 = 1400000000000000000000000000;
console.log(testNum04);

const testNum05 = 14e3;
console.log(testNum05);
