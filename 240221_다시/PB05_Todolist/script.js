// <<<<<<<<내가 했을 때>>>>>>>>

// input, modal, form에 대한 정의를 한다.
// 모달 공간을 정의
// 모달안에 입력된 값을 인식
// submit을 추가하게되면 그 값을 인식한다.
// 인식된 값을 document에 출력하기

// const container = document.querySelector("#container");
// const List = document.querySelector(".List");
// const btn = document.querySelector(".btn");

// console.log(container);
// console.log(btn);
// console.log(List);

// <<<<<<<<<< 선생님 >>>>>>>>>>>>>

//  1. 사용자가 입력하는 값을 찾아오기 위해 입력창 정의
//  2. 사용자가 클릭 할 button에 대한 정의
//  3. button을 클릭했을 때 이벤트에 대한 기능 정의
//  4. li 태그를 DOM에서 생성 -> 입력창을 통해서 전달 받은 값을 li 태그에 삽입 ->  ul 태그 자식요소
//  5. 사용자가 입력한 값을 출력할 공간에 대한 정의

const form = document.querySelector("form");
const input = document.querySelector("form input[type='text']");
const ul = document.querySelector("ul");
// console.log(input);

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
  // console.log(text);
};

form.onsubmit = formFnc;
