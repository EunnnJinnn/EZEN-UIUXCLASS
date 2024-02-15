// switch(조건식 => 참) { null,0 아니면 다 참
//   case 1 : 실행문
//   break;
//   case 2: 실행문
//   break;
//   case 3: 실행문
//   break;
//   case 4: 실행문
//   break;
// }

// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다!");
//       break;
//     case "2":
//       alert("CSS를 신청하셨습니다!");
//       break;
//     case "3":
//       alert("JS를 신청하셨습니다!");
//       break;
//     default:
//       alert("잘못입력하셨습니다!");
//       location.reload();
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요
// 쇼핑몰 후보 : 쿠팡 / G마켓 / 11ST / 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군에 존재한다면, prompt창에 "확인" 버튼을 클릭하는 순간 해당 쇼핑몰로 바로 이동~
// window 객체 안에 location 객체는 어딘가로 이동하도록 해주는 객체
// location 객체 안에 href 속성 => 경로를 지정해주는 속성
// 사용자가 쿠팡을 선택했다면, location.href ="https://www.coupang.com" 결과값을 설정하면, 해당 사이트로 이동 가능

const shoppingMall = prompt(
  "즐겨찾는 쇼핑몰을 입력해주세요",
  "쿠팡, G마켓, 11ST, 마켓컬리"
);

if (shoppingMall !== null) {
  switch (shoppingMall) {
    case "쿠팡":
      location.href = "https://www.coupang.com";
      break;
    case "G마켓":
      location.href = "https://www.gmarket.co.kr/";
      break;
    case "11ST":
      location.href = "https://www.11st.co.kr";
      break;
    case "마켓컬리":
      location.href = "https://www.kurly.com/main";
      break;
      location.reload();
  }
}
