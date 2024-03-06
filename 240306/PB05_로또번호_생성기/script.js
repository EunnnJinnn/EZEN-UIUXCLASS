const button = document.querySelector("button");
const result = document.querySelector("#result");

// 로또의 규칙
// 한 번 추첨 시 : 6개의 숫자 (*반드시 중복X)

// 각각의 6개의 숫자 : 최대 45까지 가능
// 1~45까지의 구간 숫자, 랜덤 => 수학객체 RTCEncodedAudioFrame() *45

// 반복문 *6번

// 절대 중복X => Set()
// add()

// result 출력
// innerText

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};

const lottoPlay = () => {
  const { digitCount, maxNumber } = luckyNumber;
  const myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size !== 6) {
    for (let i = 0; i < digitCount; i++) {
      myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
    }
  } else {
    result.innerText = `${[...myNumber]}`;
  }
  console.log(myNumber);
};

button.addEventListener("click", lottoPlay);

//--------- 1부터 45까지의 숫자가 console에 나옴 -----------
// const lottoPlay = () => {
//   const lotto = Math.floor(Math.random() * 45) + 1;
//   console.log(lotto);
// };

// button.addEventListener("click", lottoPlay);

// -------- 6번 반복을 할 때마다 생성된 값이 set객체에 들어가야함 -------
// const lottoPlay = () => {
//   const myNumber = new Set();
//   for (let i = 0; i < 6; i++) {
//     myNumber.add(Math.floor(Math.random() * 45) + 1);
//   }
//   console.log(myNumber);
// };

// 랜덤으로 생성되기때문에 중복으로 되어 6개 이하로 나올 수 있다.
// const luckyNumber = {
//   digitCount: 6,
//   maxNumber: 45,
// };

// const lottoPlay = () => {
//   const { digitCount, maxNumber } = luckyNumber;
//   const myNumber = new Set();
//   for (let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }
//   console.log(myNumber);
// };

// button.addEventListener("click", lottoPlay);

// 6개의 숫자가 아니면 다시 돌려라.
// const lottoPlay = () => {
//   const { digitCount, maxNumber } = luckyNumber;
//   const myNumber = new Set();
//   for (let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//   }
//   if (myNumber.size !== 6) {
//     for (let i = 0; i < digitCount; i++) {
//       myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
//     }
//   } else {
//     result.innerText = `${myNumber}`;
//   }
//   console.log(myNumber);
// };
