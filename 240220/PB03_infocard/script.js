// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img");
// // 복수의 값을 가져오기 위해서는 .querySelectorAll [대괄호] : 배열
// const users = document.querySelectorAll(".user");
// const address = users[1]; //index 사용가능

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// 구식
const h1 = document.getElementsByTagName("h1");
const profile = document.getElementById("profile");
const users = document.getElementsByClassName("user");

console.log(h1);
console.log(profile);
console.log(users);
