// 전개연산자인 경우
const array1: number[] = [1];
const array2: number[] = [2, 3];
const mergeArray = [...array1, ...array2];

console.log(mergeArray);