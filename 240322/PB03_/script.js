const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// ctx.font = "italic 60px serif";
// ctx.fillText("Javascript", 50, 70);

// ctx.font = "bold 60px sans-serif";
// ctx.fillText("Javascript", 50, 150);

// // drawImage 이미지를 그려줌
// let img = new Image();
// img.onload = () => {
//   ctx.drawImage(img, 0, 0, 300, 200);
// };
// img.src = "./cat.jpg";

// img 잘라내기
let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 300, 200);
};
img.src = "./cat.jpg";
