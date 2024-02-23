const today = new Date();
const hrs = today.getHours();
// console.log(hrs);

const container = document.querySelector("#container");
const newImg = document.querySelector("img");
newImg.src = hrs < 12 ? "./images/min01.jpg" : "./images/min02.jpg";
container.appendChild(newImg);
