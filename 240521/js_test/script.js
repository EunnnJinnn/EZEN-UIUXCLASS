//등수 구하기
// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램

// 첫 줄에 N(1<=N<=100)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력. 같은 점수가 입력될 경우 높은 등수로 동일 처리. 즉 가장 높은 점수가 92점인데 92점이 3명이 존재하면 1등이 3명 그다음 학생은 4등이 된다.
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력

// 입력 :  5 / 98 89 92 100 76
// 출력 : 4 3 2 1 5

const arr = [87, 89, 92, 100, 76];

const solution = (arr) => {
  const n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  // 이중 for문
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
};
console.log(solution(arr));
