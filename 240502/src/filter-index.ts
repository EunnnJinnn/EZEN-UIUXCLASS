import { range } from "./range";

const array: number[] = range(1, 11);
const half = array.length / 2;

// index는 0부터 시작 /
const belowHalf = array.filter((value, index) => index < half);
const overHalf = array.filter((value, index) => index >= half);

console.log(belowHalf, overHalf);
