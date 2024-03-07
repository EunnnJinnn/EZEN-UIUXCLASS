// JSON 에서 여러개의 데이터를 하나의 그룹으로 만들기 위해서는 [] 배열의 형태로 넣어줘야 적용이됨

const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true);
xhr.send();

const renderHTML = (students) => {
  let output = "";
  students.forEach((student) => {
    output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ul>
    <hr/>
    `;
  });
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    renderHTML(students);
  }
};

console.log(xhr);
