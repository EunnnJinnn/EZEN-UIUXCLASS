import { pureDelete } from "./pureDelete";

const mixedArray: object[] = [
  [],
  { name: "dmswls" },
  { name: "wldnjs", age: 20 },
  ["Javascript"],
];

const objectOnly: object[] = pureDelete(mixedArray, (value) =>
  Array.isArray(value)
);

console.log(mixedArray, objectOnly);
