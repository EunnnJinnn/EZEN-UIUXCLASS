// 사용자에게 키와 몸무게의 정보를 받아서 사용자가 현재 적정체중인지 확인 후 웹브라우저 화면에 다음과 같이 출력해주세요
// 만약, 적정체중이라면 "적정체중이시네요. 축하드립니다" 라는 메세지 출력, 적정체중 아니라면 "조금만 더 노력해주세요." 메세지 출력
// 적정체중 구하는 공식 = (본인키 - 100) * 0.9
// 적정체중 구하는 공식을 통한 결과값 +- 5kg까지 허용

// 1. 사용자가 입력한 키값을 받아온다
// 2. 사용자가 입력한 몸무게값을 받아온다
// 3. 사용자에게 받아온 키 & 몸무게값을 가지고 적정체중을 구한다.
// 4. 적정체중을 구한 이후에 +- 5kg 범위를 설정한다
// 5. 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
// 6. 최종 결과값을 웹 브라우저 화면에 출력한다.

const userName = prompt("당신의 성함을 말씀해주세요.", "ex.곽두식");
const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?", "ex.180"));
const userWeight = Number(prompt("당신의 몸무게는 어떻게 되십니까?", "ex.70"));

const normalWeight = (userHeight - 100) * 0.9;
let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5; // 재할당 let
result = result
  ? "적정체중이시네요! 축하합니다~"
  : "적정체중이 아닙니다. 노력해주세요ㅠ";

document.write(`${userName}님 ${result}`);
