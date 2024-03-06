const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "Typescrip"];

// 전개 연산자로 인해 중복됨
const subjects = [...member1, ...member2, ...member3];
const resultList = new Set(); //중복된 값을 받을 수 없음
// set 객체 사용. 이터레이터객체 = 반복문 사용 가능 /
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList);

const result = document.querySelector("#result");
//전개연산자...map을 사용하기 위함
result.innerHTML = `
<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>
`;
// 1. 배열의 값을 복제하는 전개연산자 구문 (*원본데이터 값을 유지)
// 2. map() : 새로운 배열을 만들고자 할 때 사용
// 3. join(구분자) : 배열의 데이터를 문자열로 변환
