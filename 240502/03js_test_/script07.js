const day = Number(prompt("며칠인지 입력해주세요.", "ex)5"));
const arr = [25, 23, 11, 47, 53, 17, 33];

const solution = (day, arr) => {
  let answer = 0;
  for (let car of arr) {
    if (car % 10 === day) answer++;
  }

  return answer;
};

console.log(solution(day, arr));

// 랜덤으로 7개의 숫자를 받아옴
// 받은 숫자 들 중 가장 작은 수를 출력
