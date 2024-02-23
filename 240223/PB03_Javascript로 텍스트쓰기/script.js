// createElement : html에서 사용 할 p노드를 만들어 newp에 넣는다
const newP = document.createElement("p");
// createTextNode : 텍스트를 만들어서 텍스트 노드에 넣어라
const textNode = document.createTextNode("Typescript");
// appendChild : 자식요소로 만들어라
newP.appendChild(textNode);

document.body.appendChild(newP);
// console.log(newP);
// console.log(textNode);
