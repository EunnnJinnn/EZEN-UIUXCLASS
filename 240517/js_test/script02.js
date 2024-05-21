// 대문자로 통일
// 대문자와 소푼자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램

// 입력 : itisTimeToStudy
// 출력 : ITISTIMETOSTUDY

const userAnswer = prompt("영단어 입력");

const solution = (userAnswer) => {
  let answer = "";

  for (let word of userAnswer) {
    if (word === word.toLowerCase()) {
      answer += word.toUpperCase();
    } else {
      answer += word;
    }
  }
  return answer;
};
console.log(solution(userAnswer));
