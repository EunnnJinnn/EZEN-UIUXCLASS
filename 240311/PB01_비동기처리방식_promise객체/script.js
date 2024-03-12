// 동기 & 비동기

// 외부에서 data 받아와서 웹브라우저에 출력
// JS 동기처리 방식 언어

// JS => 비동기 처리 방식 방법
// 1) Callback 함수
//  -setInterval()
//  -setTimeout()
//  -setClear()
// 콜백 지옥 => 콜백 > 콜백 > 콜백

// 2) Promise 객체
// 계획한 실행이 예쩡대로 진행되었을 때, 무언가를 추가로 실행하겠다 라는 약속

// 프로토타입으로 사용 시 new ! / promis((resolve(함수일 수 있다.), reject(함수)))

// const likePizza = false; //true = 불리언 값

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다.");
//   } else {
//     reject("피자를 주문하지 않습니다.");
//   }
// });

// // 실행을 해야할 구현부는 따로 resolve의 값은  then => 해당 실행값을 받아서 출력/. reject 의 실행값은 catch 가 받아서 출력하게된다.
// pizza.then((result) => console.log(result)).catch((err) => console.log(err));

// 외부에서 데이터를 가져올 때, 예외조항 처리
// 에러가 발생했을 때, 미리 에러메세지를 커스텀
// try / catch / finally

const likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다."); //출력시켜주자! 약속만 한거임
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});

// method chaining 기법
// 1개의 객체 뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
