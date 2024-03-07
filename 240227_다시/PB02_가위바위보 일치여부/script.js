document.write("<h1> 퓨터와 나의 가위.바위.보 일치? 불일치? </h1>");

const game = prompt("가위, 바위, 보 중 선택하세요", "ex. 가위, 바위, 보");
let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 입력하였습니다");
    location.reload();
}

const com = Math.ceil(Math.random() * 3); //정수 자리에서 가장 큰 값 2
document.write(`<img src="./images/math_img_${com}.jpg">`);

if (gameNum == com) {
  document.write("퓨터와 동일합니다!");
} else {
  document.write("퓨터와 동일하지 않습니다!");
}

console.log(gameNum, com);
