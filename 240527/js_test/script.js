// 봉우리
// N*N 격자판에 주어짐. 각 격자에는 그 지역의 높이가 쓰여있음. 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역. 봉우리 지역이 몇 개 있는지 알ㅇ아 내는 프로그램
// 격자의 가장자리는 0으로 초기화 되어있다고 가정
// 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리는 10개

// 5 3 7 2 3
// 3 7 1 6 1
// 7 2 5 3 4
// 4 3 6 4 1
// 8 7 3 5 2

// 입력 :
// 출력 :

// N개의 행 & 열 격자판 : N = 5
const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

const solution = (arr) => {
  let answer = 0;
  const n = arr.length;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 행 & 열 총  25개의 값 찾기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
};
console.log(solution(arr));

// !isNaN => flase의 부정 true
