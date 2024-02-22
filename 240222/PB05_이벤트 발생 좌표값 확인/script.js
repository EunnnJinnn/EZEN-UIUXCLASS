// 좌표값 찾을 수 있는 pageX,Y  / 스티키에서 사용할 때 중요

const box = document.querySelector("#box");
box.addEventListener("click", (e) => {
  alert(`이벤트 발생 위치: ${e.pageX}, ${e.pageY}`);
});
