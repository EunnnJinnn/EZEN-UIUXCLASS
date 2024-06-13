// 돈가스, 마라탕, 엽기떡볶이, 부대찌개, 짜장면 메뉴 후보 중 랜덤으로 1개 메뉴를 선택해서 웹브라우저 출력

// <<<<<<<<<<<<<<<내가 짠 코드 >>>>>>>>>>>>>>>
// onload 사용시 출력되어야하는 모든 요소들이 onload 안에 들어가 있어야함
// const menus = ["돈가스", "마라탕", "엽기떡볶이", "부대찌개", "짜장면"];
// // console.log(menus);

// window.onload = () => {
//   document.write("<h1> 오늘의 점심 메뉴는? </h1>");
//   const menuCount = 4;
//   const randomMenu = Math.ceil(Math.random() * menuCount);
//   console.log(menus[randomMenu]);
//   document.write(`${menus[randomMenu]}`);
// };

// `` = 문자열과 변수를 가져오기위함
document.write("<h1>오늘의 점심 메뉴는!?!</h1>");
const menus = ["돈가스", "마라탕", "엽기떡볶이", "부대찌개", "짜장면"];
const menuNum = Math.floor(Math.random() * menus.length);
const result = menus[menuNum];
document.write(result);
