// 배열의 타입 정의
const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "JS"];

// 배열안에 객체값이 들어가 있다면?

interface IPerson {
  name: string;
  age?: number;
}

const poersonArray: IPerson[] = [
  { name: "dmswls" },
  { name: "dmswls", age: 25 },
];
