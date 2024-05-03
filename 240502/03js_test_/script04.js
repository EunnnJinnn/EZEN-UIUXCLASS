const a = Number(prompt("합을 구할 숫자를 입력하세요"));

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  return answer;
};

console.log(solution(a));
