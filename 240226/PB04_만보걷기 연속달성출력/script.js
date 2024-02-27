// 사용자로부터 "오늘부터 며칠간 만 보 걷기"를 했는지 물어보고 임의 날짜를 받으세요
// 00일 연속 달성 출력될 수 있도록 해주세요

// 사용자에게 값을 받아오기 >

const userQuery = prompt("언제부터 만보를 걸으셨나요?!", "ex.2024-02-26");

const today = new Date();
const userDate = new Date(userQuery);
const result = document.querySelector("#result");

const passedTime = today.getTime() - userDate.getTime();
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
