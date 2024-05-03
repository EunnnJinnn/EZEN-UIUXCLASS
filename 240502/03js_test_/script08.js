const arr = [20, 7, 23, 19, 10, 25, 8, 13];

const solution = (arr) => {
  const answer = arr;
  const sum = answer.reduce((a, b) => a + b, 0);
  let flag = false;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[6]) === 100) {
        answer.splice(j, 1);
        answer.splice(j, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
};

console.log(solution(arr));

// 랜덤으로 7개의 숫자를 받아옴
// 받은 숫자 들 중 가장 작은 수를 출력
