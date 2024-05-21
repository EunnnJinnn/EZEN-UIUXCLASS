//큰 수 출력하기
// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램( 첫번째 수 무조건 출력)
// 첫 줄에 자연수 N 그 다음 줄 N개의 정수 입력됨
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력

// ex)6 7 3 9 5 6 12 / 7 9 6 12

const arr = [7, 3, 9, 5, 6, 12];

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};
console.log(solution(arr));
