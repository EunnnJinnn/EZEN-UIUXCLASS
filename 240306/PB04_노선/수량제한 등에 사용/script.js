const button = document.querySelector("button");
const result = document.querySelector("#result");

// 제너레이터 함수
function* train() {
  yield "김포공항";
  yield "마곡나루";
  yield "가양";
  yield "염창";
  yield "당산";
  yield "여의도";
  yield "노량진";
  yield "동작";
  yield "고속터미널";
  yield "신논현";
  yield "선정릉";
}

const subwayLine9 = train();

const trainChange = () => {
  let current = subwayLine9.next();
  if (current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점!";
    button.setAttribute("disabled", "disabled");
  }
};

button.addEventListener("click", trainChange);
