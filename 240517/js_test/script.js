//대문자 찾기
// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램

// ex)KoreaTimeGood / 3

const word = prompt("문자열을 입력해주세요 ");

const solution = (word) => {
  let answer = 0;

  for (let b of word) {
    if (b === b.toUpperCase()) answer++;
  }
  return answer;
};
console.log(solution(word));
