// <<<<<<<<<<< 자주 사용하는 window 프로퍼티 >>>>>>>>>>>>
// window.document(window 생략가능) - 웹브라우저에 출력될 문서( * html > body)
// window.innerHeight - 문서 내용의 높이
// window.innerWidht - 문서 내용의 너비
// window.outerHeight - 웹 브라우저 창의 높이
// window.outerWidth - 웹 브라우저 창의 너비
// window.screenX - 모니터의 왼쪽부터 떨어진 지점의 X 좌표
// window.screenY - 모니터의 상단부터 떨어진 지점의 Y 좌표
// window.scrollX(= pageXOffset) - 스크롤 시, 수평으로 이동한 만큼의 X 좌표
// window.scrollY(= pageYOffset) - 스크롤 시, 수직으로 이동한 만큼의 Y 좌표
// window.localStorage - 웹 브라우저에서 생성되는 데이터를 저장할 수 있도록 해주는 프로퍼티( * 웹 브라우저가 종료가 되어도 데이터 유지)
// window.sessionStorage - 웹 브라우저에서 생성되는 데이터를 저장할 수 있도록 해주는 프로퍼티( * 웹 브라우저가 종료/새로고침 시 데이터 리셋 )
// window.location - window 객체의 현 위치를 URL로 표기

// <<<<<<<<<<< 자주 사용하는 window 메서드(* 함수 ) >>>>>>>>>>>>>>>>>
// alert() - 웹 브라우저 알림창을 표시할 때
// prompt() - 사용자가 입력한 텍스트를 사용하고자 할 때
// focus() - 특정 윈도우창에 마우스 커서가 위치 한 경우
// open() - 새로운 창을 열고자 할 때
// close() - 현재 열려있는 창을 닫고자 할 때
// confirm() - 확인 및 취소 버튼이 있는 확인창 표시
// print() - 현재 웹 브라우저 문서를 출력할 때
// scroll() - 문서에서 특정 위치로 스크롤할 때
// scrollTo() - 문서에서 지정한 위치까지 한번에 스크롤 할 때
// stop() - 웹 문서 로딩을 멈추게 할 때

// Date() 프로토타입을 통해서 생성되는 인스턴스 객체가 사용할 수 있는 메서드()
// .getFullYear() - 연도 값을 가져올 때
// .getMonth() - 월 값을 가져올 때 ( * 0~11 숫자 / 0 => 1월)
// .getDate() - 일 값을 가져올 때 ( * 1~31 까지)
// .getDay() - 요일 값을 가져올 때 ( * 0~6까지 / 0 => 일요일)
// .getTime - 시간 값을 가져올 때 ( * 1970년 1월 1일부터 현시점까지의 시간 / 밀리초)
// .setHours() - 시
// .setMinutes() - 분
// .setSeconds() - 초

// .setFullYear() - 연도 값을 설정할 때
// .setMonth() - 월 값을 설정할 때 ( * 0~11 숫자 / 0 => 1월)
// .setDate() - 일 값을 설정할 때 ( * 1~31 까지)
// .setDay() - 요일 값을 설정할 때 ( * 0~6까지 / 0 => 일요일)
// .setTime - 시간 값을 설정할 때 ( * 1970년 1월 1일부터 현시점까지의 시간 / 밀리초)
// .setHours() - 시 값을 설정할 때
// .setMinutes() - 분 값을 설정할 때
// .setSeconds() - 초 값을 설정할 때

// const btn = document.querySelector("button");
// const popupWidth = 600;
// const popupHeight = 500;
// // console.log(btn);
// btn.addEventListener("click", () => {
//   const left = (window.screen.availWidth - popupWidth) / 2;
//   const top = (window.screen.availHeight - popupWidth) / 2;
//   window.open(
//     "popup.html",
//     "event",
//     `width = ${popupWidth} height = ${popupHeight} left = ${left} top = ${top}`
//   );
// });
// .availWidth 현제 보여지는 화면에서 전체 가용 너비


const btn = document.querySelector("button");
const popupWidth = 600;
const popupHeight = 500;

btn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupHeight) / 2;
  window.open(
    "popup.html",
    "event",
    `width = ${popupWidth} height = ${popupHeight} left = ${left} top= ${top}`
  );
});
