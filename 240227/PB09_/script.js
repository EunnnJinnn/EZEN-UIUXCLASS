// <<<<<<<<<내가 얼렁뚱땅한거 >>>>>>>>>>>>>>>>

// 제목,저자,저장,삭제,출력 공간 정의하기 > 사용자에게 두 값을 받아온다 (value로 값을 받아와서 담아줘야함)> 저장하기 버튼을 클릭 시 이벤트를 정의함 > 이벤트 시 list 출력 공간에 값을 넣어준다 > 삭제 버튼을 누르면 지워지는 이벤트를 추가한다
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const savebtn = document.querySelector(".btn[type='submit']");
// const bookList = document.querySelector("#bookList li");
// const delbtn = document.querySelector("#bookList span");

// // click, (e)
// title.value = "eeee";

// savebtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const newli = document.createElement("li");
//   const textNode = (bookList.innerText = `${title.value}-${author.value}`);
//   newli.appendChild(textNode);
// });

// // console.log(title);
// // console.log(author);
// // console.log(savebtn);
// // console.log(bookList);
// // console.log(delbtn);

//  1. 제목 & 저자 값을 찾아와야 함  /  -input > .value

//  2. 이벤트가 작동하도록 해주는 저장하기 버튼 정의 / e.preventDefault()
//  -> form ->submit (여기서는 이게 맞음)  /  button -> click

//  3. 찾아온 값을 출력해 주도록 도와주는 이벤트 함수 / addEventListener()

//  4. 출력할 공간에 대한 정의  / .querySelector

//  5. 삭제하기 버튼 정의 / .createElement, .appendChild

//  6. 삭제하기 버튼이 복수의 갯수로 생성 -> 반복문을 사용해서 클릭한 삭제버튼을 찾아오기 위함  / this (*클래스 함수 VS 화살표함수)

//  5. 삭제하기 버튼 클릭 시 , 목록 삭제 이벤트 함수 /  PannerNode, removeChild

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>  
  `;
  bookList.appendChild(li);
  // 저장 후 제목,저자의 텍스트를 지우는것.
  title.value = "";
  author.value = "";

  // span에 있는 삭제를 버튼으로 만들어주기
  const delButtons = document.querySelectorAll("span");
  // 반복문인 for
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      // this =삭제하기 버튼 / parentNode = 버튼의 부모를 찾기 / 이벤트가 일어난 부모를 찾기 위한 체이닝기법. 자식이 조부모(ul)한테가서 우리 부모 좀 찾아주세요 이런 느낌
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});
