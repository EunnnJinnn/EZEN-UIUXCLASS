// 가운데 문자 출력
// 소문자로 된 단어가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램, 단어의 길이가 짝수일 경우 2개의 문자 출력

// 입력 : userInput   /  good
// 출력 : u      / oo

const userInput = prompt("영단어 입력");

const solution = (userInput) => {
  let answer = "";

  // 사용자가 입력한 문자열의 정가운데를 정의하는 기준값
  let middle = Math.floor(userInput.length / 2);

  // substring(a, b) : 메서드함수 => 문자열 객체의 시작 인덱스(a)부터 종료 인덱스(b) 직전까지 문자열 반환
  if (userInput.length % 2 === 1) {
    answer = userInput.substring(middle, middle + 1);
  } else {
    answer = userInput.substring(middle - 1, middle + 1);
  }

  return answer;
};
console.log(solution(userInput));
