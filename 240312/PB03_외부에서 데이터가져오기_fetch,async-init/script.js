// 외부에서 데이터를 가져오는 방법 1 - fetch()

// fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => console.log(users));

// 외부에서 데이터를 가져오는 방법 2 - async _ init

const display = (users) => {
  const result = document.querySelector("#result");
  let string = ""; // 재할당을 위해 let 사용
  users.forEach((user) => {
    string += `
    <table>
      <tr><th>이름</th><td>${user.name}</td></tr>
      <tr><th>아이디</th><td>${user.username}</td></tr>
      <tr><th>이메일</th><td>${user.email}</td></tr>
    </table>
    `;
  });
  result.innerHTML = string;
};

async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  display(users);
}

init();
