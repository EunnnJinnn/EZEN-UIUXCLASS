// 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라 함
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "yes", 회문 문자열이 아니면 "no"를 출력하는 프로그램 검사 시 대소문자 구분 X

// 입력 : gooG
// 출력 : YES

const userWord = prompt("영어단어를 입력하세요");

const solution = (userWord) => {
  let answer = "YES";
  const test = userWord.toLowerCase();
  const len = test.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (test[i] !== test[len - i - 1]) {
      return "NO";
    }
  }
  return answer;
};
console.log(solution(userWord));
