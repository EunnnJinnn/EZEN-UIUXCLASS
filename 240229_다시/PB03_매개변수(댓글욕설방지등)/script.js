// const str = "hello";
// console.log(typeof str);

// const greeting = "안녕하세요"
// const str01 = "Good Morning"

// console.log(str01. )

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하시겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string} 에는 ${letter} 가 ${result}번 사용되었습니다.`);

// const str1 = "Good morning, everyone. Beautiful morning";
// str1.indexOf("morning"); //매개변수로 들어온 문자열의 시작점

// console.log(str1.indexOf("morning"));
// console.log(str1.indexOf("evening"));
// // console.log(str1.indexOf("morning", firstIndex + 1));

// // // 댓글 욕설방지 할 때 사용.
// // const str2 = "Hello, everyone";
// // console.log(str2.startsWith("Hello"));
// // console.log(str2.startsWith("hello"));
// // console.log(str2.startsWith("He"));
// // console.log(str2.startsWith("Hello, ev"));
// // console.log(str2.startsWith("el", 1)); //매개변수에 인덱스를 주면 1번째 인덱스에서 el 맞나?
// // console.log(str2.startsWith("0", 4));

// console.log("==== endsWith ====");
// console.log(str2.endsWith("everyone"));
// console.log(str2.endsWith("everyone."));
// console.log(str2.endsWith("Everyone."));
// console.log(str2.endsWith("one"));
// console.log(str2.endsWith("lo, everyone"));

// console.log("==== includes ====");
// console.log(str2.includes("every"));
// console.log(str2.includes("one"));

// console.log("==== trim methods ====");
// const str3 = "ab cd ef";
// const str3_1 = " ab cd ef";
// console.log(str3);
// console.log(str3_1);
// console.log(str3_1.trim());
// console.log(str3_1.trimStart());
// console.log(str3_1.trimEnd());

console.log("==== Uppercase / Lowercase ====");
let str4 = "Good Morning";
console.log(str4.toLocaleUpperCase());
console.log(str4.toLocaleLowerCase());

console.log("==== substring ====");
//음수값을 전혀 인식하지 못함 => 음수값이 들어오는 순간 바로 0으로 치환

console.log(str4.substring(5, 8)); // 첫번째 매개변수부터 두번째 매개변수 앞까지
console.log(str4.substring(-5, 11));

console.log("==== slice ====");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));

console.log("==== split ====");
const str5 = "Hello everyone";
const array1 = str5.split(" "); //공백이 있는 공간이 있다면 배열의 아이템을 각각 넣어라
const array2 = str5.split("");
console.log(array1);
console.log(array2);
