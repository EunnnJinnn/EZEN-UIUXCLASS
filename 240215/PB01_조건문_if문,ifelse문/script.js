// if(조건식이참이어야 => true) {
// 실행문 실행됨
// }
// 식별자 변수
// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// // null 값 X , alert = 알림창, else = 조건식의 반대
// if (userInput ==== null) {
//   alert("취소하셨습니다~");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// if = 조건문 () = 조건식
// const score = Number(prompt("프로그램 점수 : "));

// // 예외조항처리 / if문 중첩사용 가능 = 반복해서 사용 할 수 있음
// if (score != null) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점");
//   } else {
//     alert("C 학점");
//   }
// }

// camel 표기법 = userPickNum , sneak표기법 = user_picknum , 헝가리언표기법 = Userpicknum
// 가장 좋은 변수명 = 식별자는 명시적 & 직관적

//  - 변수명에서 사용하면 안되는것
// 1. 예약어 : 이미 JS & window 사용중인 고유명사
// 2. 변수명 작명 시 가장 앞에 사용 할 수 있는것들 :숫자 / 특수문자 불가 (* $, _, 영문자 가능 )
// 3. 변수명 반드시 대.소문자 구분

// 조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지 확인 후 알림창을 활용해서 사용자에게 짝수 혹은 홀수 입니다. 라는 메세지를 출력해주세요
//  1. 사용자에게 숫자를 받는다
//  2. 짝수와 홀수를 선언한다
//  3. 알림창을 이용해 짝수. 홀수를 출력해준다

// const userNum = prompt("숫자를 입력해주세요");

// if (userNum ! = null) {
//   const resetnum = Number(userNum)
//   if (userNum % 2=== 0) {
//     alert("당신이 선택한 숫자는 짝수입니다.");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다.");
//   }
// } else {
//   alert("취소하셨습니다");
// }

// if (userNum != null) {
//   const resetnum = Number(userNum);
//   resetnum % 2 === 0 ? alert("짝수입니다") : alert("홀수입니다.");
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자가 입력한 숫자 : 9~11 => 독서의 계절 가을이네요!
// 사용자가 입력한 숫자 : 6~8 => 여행하기 좋은 여름이네요!
// 사용자가 입력한 숫자 : 3~5 => 햇살 가득한 봄이네요!
// 사용자가 입력한 숫자 : 12~2 => 스키의 계절 겨울이네요!
// let으로
// let month = prompt("현재는 몇 월 인가요?", "ex. 2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else if (month >= 13) {
//     alert("존재하지 않는 월입니다!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 id와 pw 값을 받으세요! / 그리고 해당 id와 pw 값이 다음과 같다면,/ "반갑습니다. 어서오세요!" 라는 알림 메세지를 출력/
//  id : ezenit / pw :1234
//  만약, id만 일치하고, pw가 틀렸을 경우에는 "비밀번호를 확인해주세요!"라는 알림 메세지를 출력해주시고, / 만약 id와 pw 둘 다 틀렸을 경우에는 "아이디를 확인해주세요!" 라는 알림 메세지를 출력/

const id = "ezenit";
const pw = 1234;

const userId = prompt("아이디를 입력해주세요");

if (userId === id) {
  const userPw = Number(prompt("당신의 비밀번호는?"));
  if (userPw === pw) {
    alert(`${userId}님 반갑습니다!`);
  } else {
    alert("비밀번호가 일치하지 않습니다!");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다!");
  window.location.reload(); /* 아이디를 일치하지않을때 다시 입력할 수 있는 창 */
}
