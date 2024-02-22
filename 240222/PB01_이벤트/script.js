// <<<<<<<<<< 웹 문서 로딩 이벤트 종류 >>>>>>>>>>>>>>
// 이벤트 종류 - 실행되는 순간
// load - 문서 로딩이 종료되었을 때
// scroll - 문서 화면이 스크롤 되었을 때
// error - 문서가 정확하게 로딩되지 않았을 때
// resize - 문서 화면의 크기가 바뀌었을 때
// abort - 문서가 완전히 로딩되기 전에 불러오기를 멈췄을 때
// unload - 문서를 벗어나게 되었을 때

// window.onload = alert("안녕하세요");

// <<<<<<<<<<< 마우스 이벤트 종류 >>>>>>>>>>>>>>>>
// click - 사용자가 html 요소를 클릭했을 때               -> 전치사 on이 붙는 순간 이벤트 핸들러가 됨
// dbclick - 사용자가 html 요소를 더블클릭했을 때
// mousedown - 사용자가 특정 요소에서 마우스 버튼을 눌렀을 때
// mousemove - 사용자가 특정 요소에서 마우스 포인터를 움직일 때
// mouseover - 마우스 포인터를 특정 요소 위로 옮길 때
// mouseout - 마우스 포인터가 특정 요소를 벗어날 때
// mouseup - 특정 요소 위에 올려놓은 마우스 버튼에서 손을 땔 때

// const body = document.querySelector("body");   //윈도우 객체 안에 있는 body
// const button = document.querySelector("button");
// console.log(body);
// console.log(button);

// // 변수 뒤에 붙는건 두 가지뿐 /.onclick = 속성 , 변수 뒤 함수(소괄호) = 매서드

// button.onclick = () => {
//   body.style.backgroundColor = "lightblue";
// };

//  <<<<<<<<<<< Cleancode  버전 >>>>>>>>>>>>
const button = document.querySelector("button");

const btnFnc = () => {
  window.document.body.style.backgroundColor = "lightblue"; //윈도우 생략 가능
};

button.onclick = btnFnc;

//  <<<<<<<<<<<<<<<<<<< 키보드 이벤트 종류 >>>>>>>>>>>>>>>>>>>>>
// keydown - 키를 누르는 순간 (* 어떤 키를 눌렀는가에 대한 관심)
// keyup - 키에서 손을 땔 때
// keypress ( * 점차 사용하지 않는 추세) - 키를 눌렀을 때 ( * 키를 누르는 행위 그 자체에 대한 관심)

//  <<<<<<<<<<<<<<<<<<< 폼 이벤트 종류 >>>>>>>>>>>>>>>>>>>>>
// submit - [submit] 속성값을 갖고있는 버튼을 클릭했을 때
// change - 목록이나 체크 등의 상태 변화가 발생했을 떼 ( *select > option 변경 )
// focus - 폼 요소에 마우스를 포커스 했을 때
// blur - 폼 요소에 포커스를 해제했을 때
// reset - 폼안에 있는 내용이 리셋되었을 때

//  <<<<<<<<<<<<<<<<<<< 이벤트 객체 프로퍼티 & 메서드 >>>>>>>>>>>>>>>>>>>>>
// event 객체 프로퍼티 - 기능

// charCode - kepress 이벤트가 발생했을 때, 어떤 키를 눌렀는지 "유니코드" 값으로 반환
// clientX - 이벤트가 발생한 가로 위치값 변환
// clientY - 이벤트가 발생한 세로 위치값 변환
// pageX - 현재 작업하고 있는 html 전체문서를 기준으로 이벤트가 발생한 가로 위치값 반환
// pageY- 현재 작업하고 있는 html 전체문서를 기준으로 이벤트가 발생한 세로 위치값 반환
// screenX - 현재 화면을 기준으로 이벤트가 발생한 가로 위치값 반환  / vw - css
// screenY - 현재 화면을 기준으로 이벤트가 발생한 세로 위치값 반환  / vh - css
// taget - 이벤트가 발생한 대상 / 버튼을 클릭했을 때 이벤트가 발생함 = 타겟 버튼
// altKey - 이벤트가 발생했을 때 alt를 클릭하고 있었는지의 여부를 확인하고 true/false 값으로 반환
// shiftKey - 이벤트가 발생했을 때 shift 클릭하고 있었는지의 여부를 확인하고 true/false 값으로 반환
// code - 키보드 이벤트(Keydown)가 발생했을 때, 입력한 키를 확인하고자 할 때 사용( * 키의 이름값 반환 )

// event 객체 메서드 - 기능
// preventDefault - 기본적으로 탑재되어있는 기능을 무력화하거나 취소시키고자 할 때 사용
