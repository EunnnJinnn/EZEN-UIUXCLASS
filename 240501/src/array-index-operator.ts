const numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  const item: number = numbers[i];
  console.log(item);
}

// 배열의 구조분해할당
const array: number[] = [1, 2, 3, 4, 5];
const [f0, s, t, f1, g] = array;
console.log(f0, s, t, f1, g);

// for it문 객체의 key값을 가져와서 뭔가를 할 때
interface testObj {
  first: string;
  second: string;
  third: string;
}

const names: testObj = {
  first: "dmswls",
  second: "wldnjs",
  third: "codbs",
};

for (let i in names) {
  console.log(i);
}
