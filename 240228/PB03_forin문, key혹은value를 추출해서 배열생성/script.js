// 객체 값 반복 실행
// for ...in 문

const bag = {
  type: "bagpack",
  color: "pink",
  size: 15,
};

// key = let으로 사용해도됨 / for in문 시 대괄호 표기법을 많이 사용

for (key in bag) {
  console.log(`${key} : ${bag[key]}`);
}

const book1 = {
  title: "자바스크립트",
  pages: 648,
  buy: function () {
    console.log("이 책을 구입했습니다!");
  },
};

// 에크마스크립트 ES6 문법
// 객체의 key 혹은 value을 추출해서 배열을 생성

const keys = Object.keys(book1);
console.log(keys);

const values = Object.values(book1);
console.log(values);

const entries = Object.entries(book1);
console.log(entries);

// 의 배열 형태

[
  ["key", "value"],
  ["key", "value"],
  ["key", "value"],
];
