// 사용자가 이메일 주소를 입력하면, result 공간에 사용자의 이메일 정보를 출력

// 단, 이메일 주소 중 @ 앞의 내용을 세자리까지만 출력하게해주세요. 그리고 네번째 자리부터는 ... 온점으로 표기해주세요.

// 사용자가 입력한 이메일 : abcde@nver.com
// 출력되어야할 이메일 : abc...@naver.com

// 모든 이메일 주소에는 @이 존재한다.
// 1. @이라는문자열을 중심으로 앞,뒤쪽으로 쪼갠다 - split 함수
// 2. 앞쪽에 쪼개진 문자열에서 1~3번 인덱스까지만 정상출력 +... - substring, slice 함수
// 3. 뒤쪽에 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let usderName = "";
  let domain = "";

  if (userEmail.value !== "") {
    usderName = userEmail.value.split("@")[0]; // 식별자의 역할을 할 문자열"@"
    usderName = usderName.substring(0, 3); //3번인덱스 앞까지
    domain = userEmail.value.split("@")[1]; //1번째 인덱스 값 @ 뒤쪽
    result.innerText = `${usderName}***@${domain}`;
    userEmail.value = "";
  }
});
