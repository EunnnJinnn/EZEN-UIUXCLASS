// window 운영체제 => 내장함수 사용
// JS => 싱글스레드로 작동하는 객체지향 프로그래밍 언어
// <-> 멀티스레드 : 복수 차선
// 비동기처리 하기 위해서 필요함

// window 비동기 함수

// setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수 (무한슬라이드도 가능)

// const greeting = () => {
//   console.log("안녕하세요!");
// };
// 실행시키고자하는 함수 / 프로그래밍 언어에서는 1000밀리초 = 1초
// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval(): 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수
// 단락회로평가 - 사전에 기준값을 정하고,
// 전역스코프 ↓
// let counter = 0;

// let timer = setInterval(() => {
//   console.log("반갑습니다!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// setTimeout() : 특정 시간이 경과한 이후에 작동하게 만드는 함수 / ~초 후 등장
// heap / callstack / Que

setTimeout(() => {
  console.log("안녕하세요~");
}, 3000);
