// 문자찾기
// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램

// 입력 : computterprogramming / r
// 출력 : 3

const str = prompt("단어를 입력하세요!");
const search = prompt("찾고싶은 단어!");

const solution = (str, search) => {
  let answer = 0;
  for (let word of str) {
    if (word === search) answer++;
  }
  return answer;
};

console.log(solution(str, search));
