// 버튼과 인포 를 정의한다 -> 버튼을 누르면 하단에 출력되는 이벤트를 준다 ->
// info에 Javascript = Node.js 가 출력되게한다.

const orderButton = document.querySelector("#order");
const title = document.querySelector("#container h2");
const orderInfo = document.querySelector("#orderInfo");

// console.log(orderButton);

orderButton.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(title.innerText);
    newP.appendChild(textNode);
    newP.style.fontSize = "2rem";
    newP.style.fontWeight = "bold";
    newP.style.color = "black";
    orderInfo.appendChild(newP);
  },
  { once: true }
);
