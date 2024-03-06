// React => 구조 분해 할당

// const fruits = ["사과", "복숭아"];

// // const apple = fruits[0];
// // const peach = fruits[1];

// // 할당을 하고자하는 자료의 형태 = 배열 / 값을 받고자하는 자료도 배열로
// const [apple, peach] = fruits;

// console.log(apple, peach);

// 배열의 구조 분해 할당
// const [teacher, ...students] = ["park", "kim", "choi", "lee"];

// console.log(teacher, students);

// 객체의 구조 분해 할당 / 유의사항!! - 구조분해할당 값을 전달받을 변수이름 = 객체의 key명 동일!
// const member = {
//   name: "park",
//   age: 25,
// };
// // 변수 뒤에 :  변수명 바꿀 때
// const { name: userName, age } = member;
// console.log(userName, age);


const student = {
  name: "손흥민",
  score:{
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

const {
  name,
  score: { history, science },
  friends: [f1, f2, f3],
} = student;

console.log(history, f2)