// import { UpdateBundleProject } from "typescript";

// // 타입 주석을 달았다
// let n: number = 1;
// let b: boolean = true;
// let s: string = "hello";
// let o: object = {};

// // 타입 불일치 발생 시 즉각 경고
// // n = "a";
// // b = 1;
// // s = false;

// // 실무에서는 타입 주석-> 특별한 케이스가 아니면 잘 사용 안함.
// // 타입스크립트는 타입 추론

// let m = 1;
// let p = "Hello";
// let q = false;
// let obj = {};

// let any: any = 0;

// any = "10";
// any = true;
// any = {};

// let unTest: undefined = undefined;
// unTest = 1;

// let numTest = 10;

// let ol object = {
//   name:"enujin",
// age: 20,
// }

// o = {
//   name: 7,
//   age: 2m
// }
interface Iperson {
  name: string;
  age: number;
}
let good = {
  name: "Eunjin",
  age: 25,
};

// good = {
//   name: 7,
// };

// let bad: Iperson = {
//   name: "eunjin",
// };

interface Iperson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let good1: Iperson2 = { name: "Paris", age: 20 };
let good2: Iperson2 = { name: "Paris", age: 20, etc: true };

// 익명 interface => 고차함수
let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "dmswls",
  age: 20,
};

const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
};
printMe(ai);
