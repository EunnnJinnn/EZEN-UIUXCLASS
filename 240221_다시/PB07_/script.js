//  1. body와 버튼에 클래스를 줘서 먼저 확인하고 지우기
//  2. body와 button을 찾아와주고 console로 확인해주기
//  3. 버튼 클릭 시 이벤트가 제대로 작동하는지 console로 확인
//  4. body.classList.toggle("dark"); 로 다크모드 가능 하지만 텍스트는 안됨

const body = document.querySelector("body");
const button = document.querySelector("#toggle-box button");

// console.log(body);
// console.log(button);

button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
  // console.log("click");
  // body.classList.toggle("dark");
};
