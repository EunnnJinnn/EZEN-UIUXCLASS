// 버튼 찾아오기 > 하단 찾아오기 > 버튼 클릭 시 상세페이지 나오는 이벤트 부여 >  버튼 클릭 시 상세페이지 안보이는 이벤트.

/* css가서 가상클래스를 주기~!~ */
// .hidden {
//   display: none;
// }

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");
// console.log(viewBtn);
// console.log(detail);

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
