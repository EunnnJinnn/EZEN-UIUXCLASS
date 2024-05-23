// 가장 짧은 문자거리
// 한 개의 문자열 s와 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램

// 첫줄 = 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어짐. 문자열의 길이 100 넘지X ,
// 첫줄 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

// 입력 teachermode e
// 출력 10121012210

// 1. 사용자에게 문자열 받기
// 2. 사용자에게 특정 문자
// 3. 빈 변수를 만들고
// 4. 사용자가 입력한 문자열의 문자를 하나씩 추출해서 특정 문자인지 아닌지를 반복해서 검사
// 5. 검사 완료 후 빈 변수를 생성한 다음
// 6. 빈 변수에 만약, 문자열의 문자들 가운데, 사용자가 입력한 문자와 같으면 0을 대임
// 7. 만약 0이 아니라고 한다면, 증감연산자로 숫자를 증가 시킨후 빈 변수에 대입
// (* 좌측을 기준으로 특정문자가 아닌 경우, 무한으로 값이 증가)
// 8. 위의 같은 행위를 정반대측면 (*인덱스가 가장 큰 영역부터 다시 문자열 검사)
// 9. Math 객체에서 최소값을 찾아주는 min()메서드를 활용해서 죄총결과값으로 도출

const userWord = prompt("문자열을 입력하세요.");
const searchWord = prompt("찾고자하는 단어를 입력하세요.");

const solution = (userWord, searchWord) => {
  let answer = [];
  let p = Number.MAX_SAFE_INTEGER;

  for (x of userWord) {
    if (x === searchWord) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = Number.MAX_SAFE_INTEGER;

  for (let i = userWord.length - 1; i >= 0; i--) {
    if (userWord[i] === searchWord) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

console.log(solution(userWord, searchWord));
