// 1. json 만들기 "animal.json"
// 2. json 인식 target?..ummm...
// 3. btn, content 인식 "document.querySelector"
// 4. btn 클릭 시 해당 json 데이터가 인식되어야함
// 5. content화면에 출력 시켜야함 "innerHTML"?? "createElement"?

// const ageBtn = document.querySelectorAll(".btns button");
const ageBtn = document.querySelector(".btns button");
const ageAnimalList = document.querySelector(".content");

console.log(ageBtn, ageAnimalList);

ageBtn.addEventListener("click", () => {
  console.log("click");
});
