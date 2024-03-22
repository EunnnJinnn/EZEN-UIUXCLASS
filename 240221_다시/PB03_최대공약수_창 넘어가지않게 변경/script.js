// 1.사용자가 입력한 두개의 수를 찾아온다
// 2. 출력될 공간을 정의한다.
// 3. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다.
// 4. 값을 출력시켜주기 위한 연산작업이 필요하다.
// 5. 최대공약수에 대한 개념이 필요하다.

const firstNum = document.querySelector("#number1");
const secondNum = document.querySelector("#number2");
const button = document.querySelector("form input[type='submit']");
const result = document.querySelector("#result");

// console.log(firstNum);
// console.log(secondNum);
// console.log(result);

// 둘 중 큰 숫자가 무엇인지
const getGCD = (firstNum, secondNum) => {
  const max = firstNum > secondNum ? firstNum : secondNum;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};
// % = 피연산자를 나누고 나머지를 구하는데 사용

// 인풋 안에있는 벨류를
button.onclick = function (e) {
  e.perventDefault();
  result.innerText = getGCD(firstNum.value, secondNum.value);
};
