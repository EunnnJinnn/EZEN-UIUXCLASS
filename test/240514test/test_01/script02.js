// 1. 텍스트, 트윗하기을 인식
// 2. 텍스트에 값을 입력하면 인식해야함
// 3. 인식한 값을 쿼리값으로 바꿔야함
// 4. 입력된 값을 트윗하기 버튼을 누르면 주소창에 쿼리값으로 변경된 후 트위터 창으로 가야함

const tweetBtn = document.querySelector("#tweetButton");
console.log(tweetBtn);

// tweetBtn.addEventListener("click", () => {
//   const tweetText = document.querySelector("#tweetTextArea").value;
//   console.log(tweetText);
// });

tweetBtn.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  // 시그니처
  tweetText += "#dmswls";

  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});

// 인코딩 & 디코딩
// *웹의 개말은 미국 : 한국어X
// *인코딩 : 각 국에 사용자가 입력한 텍스트를 웹이 이해할 수 있는 언어 구조로 바꿔줌
