// // Map 객체 => 2015년 , ES6
// // arr.map()

// // 이유
// // 1) JS객체 => 일반객체 > 배열객체
// // 2) 일반객체
// // 장점 : key, value 값을 가지고 있는 프로퍼티 / 데이터 체계적으로 보관, 관리, 사용
// // 단점 : for...in문 => 객체 안에 있는 value값만을 찾아와서 직접적으로 반복문으로 돌릴 수 있는 방법 X, 객체 안에 구성되어있는 아이템들은 배열처럼 인덱스 번호를 할당받지 못한다

// // 3) 배열객체
// // 장점: 배열안에 포함되어있는 아이템들이 고유의 인덱스값을 가지고 있으며, for문을 활용한 반복문으로 업무의 효율성 극대화
// // 객체처럼 key & value 형태로 구성된 체계적인 데이터 관리 X

// // Solution : 일반객체 & 배열객체의 장점만 모아서 하나로 만듦 => Map 객체

// // Map객체
// // 장점 : key, value 값으로 구성된 아이템을 가질 수 있다, 각 아이템별 인덱스 값을 할당 / for의 반복문을 활용해서 언제든지 값을 추출

// // const bag = new Map();
// // bag.set("color", "blue");
// // console.log(bag);

// // 객체생성과 동시에 할당
// const myCup = new Map([
//   ["color", "white"],
//   ["material", "ceramic"],
//   ["capacity", "600ml"],
// ]);
// console.log(myCup);

// // set = map객체에 key , value 값 추가 가능 / .set을 통해 추가, 체이닝기법
// myCup.set("type", "mini").set("purpose", "daily");

// console.log(myCup);
// // size = 맵 객체의 갯수
// console.log(myCup.size);
// get = console.log(myCup.get("color"));
// // has = 앞에 붙은 맵 객체의 매개변수가 존재 한다면 true
// console.log(myCup.has("color"));
// // 맵 객체 안에 있는 특정 요소의 key값을 지우고 싶을 때
// myCup.delete("type");

// console.log(myCup);

// // clear = 모든 요소를 삭제함
// // myCup.clear();
// // console.log(myCup);

// console.log(myCup.keys());

// for (let key of myCup.keys()) {
//   console.log(key);
// }
// // Iterator = 배열과 같이 내부 아이템을 한개씩 찾아와서 반복 순회할 수 있도록 해주는 객체

// for (let value of myCup.values()) {
//   console.log(value);
// }
// // 배열형태로 묶어서
// for (let value of myCup.entries()) {
//   console.log(value);
// }

// Map객체 => 데이터의 중복을 막을 수 없음. 동일한 데이터 하나의 객체안에 들어오면 안되는 상황
// set() = 일반객체 + 배열객체 + Map + 데이터 중복X

// const numSet1 = new Set();
// numSet1.add("one").add("two");

// console.log(numSet1);

const numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

console.log(numSet2.has(2));

numSet2.delete(1);
numSet2.clear();
console.log(numSet2);
