// A를 #로
// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 "#"으로 바꾸어 출력하는 프로그램

// ex) banana => b#n#n#

const userAnswer = prompt("A가 포함된 단어 입력");

const solution = (word) => {
  let answer = word;
  // g: globla (*전역)
  // i : ignore case (*제외 혹은 열외를 허용하지 않음)
  answer = answer.replace(/A/gi, "#");
  return answer;
};

console.log(solution(userAnswer));
