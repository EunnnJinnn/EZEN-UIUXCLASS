// 문자열의 검증을 위함 = keydown => 한/영 키를 누르면 한글모드 인식함.

// document.body.addEventListener("keydown", (e) => {
//   const result = document.querySelector(".result");
//   result.innerText = `
//   code: ${e.code},
//   key: ${e.key}
//   `;
// });

// 문자열의 검증을 위함 = keypress => 한/영 키를 눌러도 한글모드를 인식 못함

document.body.addEventListener("keypress", (e) => {
  const result = document.querySelector(".result");
  result.innerText = `
  code: ${e.code},
  key: ${e.key}
  `;
});
