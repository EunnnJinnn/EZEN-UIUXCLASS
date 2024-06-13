// 사용자 신장, 체중을 받기
// 몸무게 / 키 100을 나눔 => 제곱

// 키 170 => 170/ 100
// 몸무게 73
// 73 / (1.7 * 1.7)

//  1. 사용자가 입력한 H , W 값을 받아오기 위해 입력창 정의
//  2. 계산하기 버튼, result 값 정의
//  3. button 이벤트 연산 작업하기
//  3-1. H & W 값을 활용 -> 연산 -> 변수명 -> 할당
//  3-2. 함수 & 조건문으로 연산작업
//  4. result에 출력하기

// <<<<<<<<<내가 한 거 >>>>>>>>>>>>
// const userHeight = document.querySelector("#height");
// const userWeight = document.querySelector("#weight");
// const button = document.querySelector("form input[type='submit']");
// const bmiResult = document.querySelector(".result");

// console.log(userHeight);
// console.log(userWeight);
// console.log(button);
// console.log(bmiResult);

// const Result = () => {
//   userHeight % 100;
//   console.log(Result);
// };

// userHeight % 100;
// userWeight;
// document.write();

// <<<<<<<< 선생님 >>>>>>>>
// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const form = document.querySelector("form");
// const result = document.querySelector(".result");

// const formHandler = (e) => {
//   e.preventDefault();
//   const heightValue = height.value;
//   const weightValue = weight.value;
//   // console.log("test");
//   console.log(heightValue, weightValue);
// };

// form.onsubmit = formHandler;

// <<<<<<<<<<<<<효율적인 방법>>>>>>>>>>>>>>>

const form = document.querySelector("form");

const display = (bmi) => {
  const result = document.querySelector(".result");
  let group;

  if (bmi >= 30.0) {
    group = "중등도 비만";
  } else if (bmi >= 25.0) {
    group = "경도 비만";
  } else if (bmi >= 23.0) {
    group = "과체중";
  } else if (bmi >= 18.5) {
    group = "정상";
  } else {
    group = "저체중";
  }

  result.innerText = `${bmi} -> ${group} 입니다.`;
};

const calculate = (weight, height) => {
  return (weight / (height * height)).toFixed(1);
};

const formHandler = (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");

  if (weightInput.value !== "" && heightInput.value !== "") {
    const height = heightInput.value / 100;
    const weight = weightInput.value;
    const bmi = calculate(weight, height);

    display(bmi);
    heightInput.value = "";
    weightInput.value = "";
  }
};

form.onsubmit = formHandler;