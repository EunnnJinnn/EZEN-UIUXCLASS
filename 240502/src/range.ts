// 매개변수의 숫자가 뒤에 매개변수보다 작다면 반복해서 사용할 때, 재귀함수 range()를 사용
export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : [];
