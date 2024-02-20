// const desc = document.querySelector("#desc");
// // desc.innerText = "이름 : 홍길동";

// // 웹브라우저에 출력되는것만 숨겨진것은 불러오지않음
// const descName = desc.innerText;
// console.log(descName);

// const descHtml = desc.innerHTML;
// console.log(descHtml);

// // 담고있는 모든 컨텐츠를 가져옴 / 숨겨져있는것까지
// // Context = 맥락
// const descContext = desc.textContent;
// console.log(descContext);

// 이벤트 핸들러'on'이 붙으면 이벤트 -> 이벤트 작동 실행
// 클릭시 한글로 변경

const title = document.querySelector("h1");
// title.onclick = function () {
//   title.innerText = "내 프로필";
// };

// < 화살표 함수 > return문을 사용하지않으면 중괄호 벗길 수 있음
title.onclick = () => (title.innerText = "내 프로필");
