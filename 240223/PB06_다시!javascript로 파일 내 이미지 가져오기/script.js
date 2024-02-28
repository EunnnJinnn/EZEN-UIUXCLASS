const today = new Date();
const hrs = today.getHours();
// console.log(hrs);

const container = document.querySelector("#container");
const newImg = document.querySelector("img");
newImg.src = hrs < 12 ? "./images/min01.jpg" : "./images/min02.jpg";
container.appendChild(newImg);

if (container) {
  container.appendChild(newImg);
} else {
  console.error("Element with ID 'container' not found");
}

if (newImg) {
  newImg.src = hrs < 12 ? "./images/min01.jpg" : "./images/min02.jpg";
} else {
  console.error("No image element found");
}
