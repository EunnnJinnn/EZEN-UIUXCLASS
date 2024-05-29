import { Stack } from "./Stack.mjs";

let stack = new Stack();

console.log("=== 1번째 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("=== 2번째 출력 ===");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
