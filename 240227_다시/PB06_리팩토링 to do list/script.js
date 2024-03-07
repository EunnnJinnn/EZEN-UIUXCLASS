const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const todos = []; //자료구조

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement; //해당요소의 부모요소를 찾게함
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};

// 값을 추가하는
const addItem = (todo) => {
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text; //span 생성
    button.innerText = "삭제"; //버튼 생성
    button.addEventListener("click", delItem); // 삭제 버튼에 삭제를 작동시켜주는 역할, 위에 delItem 함수 정의 해줘야함!!!

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  }; //삭제한 값을 제외하고 다른 값을 저장하기위해 아이디가 필요함
  todos.push(todo);
  addItem(todo); //인풋창에서 받아질 값
  save();
  // console.log(todos);
  input.value = ""; // 할 일 입력 후 창에서 지워주는 역할
};

const init = () => {
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }

  todos = userTodos;
};

init();
form, addEventListener("submit", handler);

// localStorage.setItem("Hello", "World"); //저장하고 싶을때
// const myData = localStorage.getItem("Hello");
// console.log(myData);
