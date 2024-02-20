// 타이틀 클릭 시 스타일 변경

// 전역스코프
const title = document.querySelector("h1");
// 이름만 찾아오기 위해서 0번째 인덱스를 가져온것
const userName = document.querySelectorAll(".user")[0];
console.log(userName);

title.onclick = () => {
  title.style.backgroundColor = "powderblue";
  title.style.color = "#000";
};

// 있으면 하고 없으면 하지마, 참이면 하고 거짓이면 하지마

// classList =  앞에 붙은 객체의 class 값이 있는지만 확인 / 이름 클래스 앞에 clicked 해줘야함
// const classGroup = userName.classList;
// console.log(classGroup);

// 가상클래스 / classList = 클래스값을 찾아와라 / add. = class없다면 추가해주세여
// userName.onclick = () => {
//   userName.classList.add("clicked");
// };

// <contains>

// contains = 클래스가 있다면 true / class 유무를 확인
// const clickedTure = userName.classList.contains("clicked");

// console.log(clickedTure);

// clickeds는 없기때문에 console창에서 false 로 나옴
// const clickedTure = userName.classList.contains("clickeds");

// console.log(clickedTure);

// 클릭 시 사라지고 없어지는 방법1 !부정

// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

// 클릭 시 사라지고 없어지는 방법2 toggle함수 사용
userName.onclick = () => {
  userName.classList.toggle("clicked");
};
