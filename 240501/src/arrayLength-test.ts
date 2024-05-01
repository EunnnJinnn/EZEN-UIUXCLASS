import { arrayLength, isEmpty } from "./arrayLength";

interface IPerson {
  name: string;
  age?: number;
}

const numArray: number[] = [1, 2, 3];
const strArray: string[] = ["Hello", "TS"];
const personArray: IPerson[] = [
  { name: "dmswls" },
  { name: "wldnjs", age: 22 },
];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
);
