const buttons = document.querySelectorAll("button"); //유사배열
const computerChoice = document.querySelector("computer-choice");
const userChoice = document.querySelector("you-choice");
const winner = document.querySelector(".reult");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "나의 승리";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "퓨터 승리";
        break;
    }
  }
  SharedWorker(user, computer, message);
};

const play = (e) => {
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  console.log(user, computer);
}; //play를 화살표함수로 만들어주기 위해 선 선언함

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
