// 보이는 학생
// 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세움 일렬로 서 있는 학생의 키가 앞에서 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램

// 입력 : 첫줄에 정수 N , 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어짐
// 출력 : 선생님이 볼 수 있는 최대학생수
// T : 130인 친구 앞에 존재함,/ 총 5명의 친구 : 130 135 148 150 153
const arr = [130, 135, 148, 140, 145, 150, 150, 153];

const solution = (arr) => {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
};
console.log(solution(arr));
