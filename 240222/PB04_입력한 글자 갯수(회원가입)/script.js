// const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
const button = document.querySelector("#submit");
// console.log(button);

// 1. 서버 제출 목적
// form.addEventListener("submit", () => {

// });

// 2. 버튼에 클릭 주기  (e) => {e.preventDefault(); 이벤트 객체에 함수값을 줘서 서버로 넘어가지 않음.
button.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#text").value; // 넣은 값을 찾아와라 value
  // console.log(word);
  const result = document.querySelector(".result");
  const count = word.length; //length: 문자열의 길이
  result.innerText = count;

  if (count >= 10) {
  } else {
    alert("검색어는 10자 이상이어야합니다!!");
  }
});
