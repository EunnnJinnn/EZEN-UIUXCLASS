// 사용자로부터 숫자 하나를 받아, 해당 숫자가 양수인지, 음수인지, 0인지 판단해서 알림창을 활용해서 이에 대한 결과를 출력
// 반환값이 숫자일 경우에만 함수를 실행

// 사용자로부터 숫자 받기 > 사용자에게 전달받은 값이 숫자인 경우를 필터링 함 > 사용자에게 받은 값이 숫자라고 한다면, 해당 숫자를 조건식에 따라서 양,음,0 인지 출력해줄 수 있는 함수 정의

const number = parseInt(prompt("숫자를 입력해주세요"));

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다!`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다!`);
  } else {
    alert(`${n}은 0입니다!`);
  }
};

// 숫자면 true
// console.log(isNaN("hi"));
if (!isNaN(number)) {
  isPositive(number);
}
