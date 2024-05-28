const arr = [12, 77, 98, 41, 53, 92, 85];

const solution = (arr) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) min = num;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
};

console.log(solution(arr));

// 랜덤으로 7개의 숫자를 받아옴
// 받은 숫자 들 중 가장 작은 수를 출력