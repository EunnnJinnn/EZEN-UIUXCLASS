// input 태그를 통해서 사용자에게 어떤 숫자를 받는다

// 사용자가 숫자를 입력한 후 "입력"버튼을 클릭하게 되면, 다음과 같은 조건에 따라서 아래와 같은 결과가 출력되도록  함

// 만약, 10보다 큰 숫자를 입력했다면, 알림창을 통해서 "10보다 작은 숫자를 입력하세요!"라는 메세지가 출력
// 10보다 작은 숫자를 입력했다면,result 라는 공간에 해당 숫자가 출력되도록 함
// try, catch, finally문을 활용해서 코드 작성

// try문 : 실행문을 작성하는 공간
// catch함수 : 만약 에러가 발생하게 되었을 때, 에러 메세지를 출력시켜줄 수 있는 함수
// finally문 : 상단 실행문이 정상 혹은 에러와 관계없이 무조건 실행되는 공간

const userNumber = document.querySelector("#user-number");
const button = document.querySelector("form");

// console.log(userNumber);
// console.log(button);

const resultNumber = (e) => {
  e.preventDefault();
  // userNumber의 값을 value로 찾아 올 수 있음
  let n = userNumber.value; // n은 재할당을 해야하기 때문에 let사용

  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요!";
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요!";
    }
  } catch (err) {
    alert(err);
  } finally {
    userNumber.value = "";
  }
  // console.log("click");
};

button.addEventListener("submit", resultNumber);

// button.addEventListener("submit", (e) => {
//   e.preventDefault();

// });
