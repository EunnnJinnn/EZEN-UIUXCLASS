// 점수 계산 O,X문제는 두경우의 답을 가진다. 1번문제가 맞으면 1점, 연속으로 맞으면 +1점씩 늘어가고, 답을 틀리게 되면 0점, 다시 맞으면 1점으로 계산한다.
// 입력 : 채점 - 1 0 1 1 1 0 0 1 1 0
// 출력 : 점수 - 1 0 1 2 3 0 0 1 2 0
// 총 점수 : 10점

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

const solution = (arr) => {
  let answer = 0;
  let cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++; // 연속으로 답을 맞은경우 증감연산자
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
};
console.log(solution(arr));
