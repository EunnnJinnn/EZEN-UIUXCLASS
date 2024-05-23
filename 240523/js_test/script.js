// 숫자만 출력
// 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다
// 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다. 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// 첫 줄에 N(1<=N<=100)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력. 같은 점수가 입력될 경우 높은 등수로 동일 처리. 즉 가장 높은 점수가 92점인데 92점이 3명이 존재하면 1등이 3명 그다음 학생은 4등이 된다.
// 자신의 바로 앞 수보다 큰 수만 한 줄로 출력

// 입력 :  g0en2T0s8eSoft
// 출력 : 208

const userWord = prompt("문자와 숫자 조합의 단어 입력");

const solution = (userWord) => {
  let answer = "";

  for (let w of userWord) {
    if (!isNaN(w)) answer += w;
  }
  // 정수로 바꿔줌
  return Number(answer);
};
console.log(solution(userWord));

// !isNaN => flase의 부정 true
