const a = Number(prompt("학생 수를 입력하세요"));

const solution = (n) => {
  let answer;
  answer = Math.ceil(n / 12);

  return answer;
};

console.log(solution(a));
