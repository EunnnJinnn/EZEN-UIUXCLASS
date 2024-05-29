// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드룸이라고 함
// 문자열이 입력되면 해당 문자열이 팰린드룸이면 "YES", 아니면 "NO"를 출력. 단, 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자 구분 X, 알파벳 이외의 문자들은 무시
// 입력 : found7, time: study; Yduts; emit, 7Dnuof
// 출력 : YES

const str = "found7, time: study; Yduts; emit, 7Dnuof";

const solution = (str) => {
  let answer = "YES";
  const test = str.toLowerCase().replace(/[^a-z]/g, "");

  // 배열로 만들어줘야함
  if (test.split("").reverse().join("") !== test) {
    return "NO";
  }
  return answer;
};
console.log(solution(str));
