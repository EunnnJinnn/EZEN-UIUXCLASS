// 사용자에게 100이하의 값 3개를 받아오기
//

const a = Number(prompt("첫번째 100이하의 자연수를  입력해주세요"));
const b = Number(prompt("두번째 100이하의 자연수를  입력해주세요"));
const c = Number(prompt("세번째 100이하의 자연수를  입력해주세요"));

const solution = (a, b, c) => {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) answer = c;

  return answer;
};

console.log(solution(a, b, c));
