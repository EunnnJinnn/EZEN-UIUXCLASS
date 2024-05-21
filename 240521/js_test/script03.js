// 가위 바위 보
// A,B 가 가위바위보 겜을 함 N번의 게임을 하여 A가 이기면 A를 출력하고 B가 이기면 B 출력 비길경우 D 출력, 1 : 가위, 2 : 바위, 3 : 보

// 입력 : 회수 : 5 / A : 2 3 3 1 3 / B : 1 1 2 2 3
// 출력 : A B A A D

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

const solution = (a, b) => {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer += "D";
    } else if (a[i] === 1 && b[i] === 3) {
      answer += "A";
    } else if (a[i] === 2 && b[i] === 1) {
      answer += "A";
    } else if (a[i] === 3 && b[i] === 2) {
      answer += "A";
    } else {
      answer += "B";
    }
  }
  return answer;
};
console.log(solution(a, b));
