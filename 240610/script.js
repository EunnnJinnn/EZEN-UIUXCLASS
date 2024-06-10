// 괄호 문자 제거
// 입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만  출력하는 프로그램을 작성하세요

// 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 X

// 입력 : (A(BC)D)EF(G(H)(IJ)K)LM(N)
// 출력 : EFLM

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

const solution = (str) => {
  let answer = undefined;
  let stack = [];

  for (let x of str) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  answer = stack.join("");
  return answer;
};

console.log(solution(str));
