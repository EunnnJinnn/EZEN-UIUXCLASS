const elemets = document.querySelectorAll("*");
for (let element of elemets) {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true //아무런 값을 넣지 않았을 때 본인부터 타고 올라감
  );
}
// currentTarget = 도미노현상으로 전파되는 지점

// 음악 플레이어로 따지게된다면 이벤트행위 = 노래 제목 / 이벤트 커런트 타겟 = 듣기버튼
