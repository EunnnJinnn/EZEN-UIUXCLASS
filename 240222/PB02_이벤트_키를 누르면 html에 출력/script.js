const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = event.key;
// };

// <<<<<<<<<<<<<<< key code까지 같이 출력 >>>>>>>>>>>>>>

document.body.onkeydown = (event) => {
  result.innerText = `
  code : ${event.code},
  key : ${event.key}
  `;
};
