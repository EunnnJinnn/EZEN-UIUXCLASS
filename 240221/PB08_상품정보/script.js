// 변수 => 자료형
// 숫자형, 문자열, 논리형, 심볼, 객체, 배열, 함수, BigInt

// 원시타입 자료형 = primitive type
// 숫자형, 문자열, 논리형, BigInt

// 참조타입 자료형 = reference type
// 심볼, 객체, 배열, 함수

// << 원시타입 >>

// let number1 = 100;
// let number2 = number1; //let 재할당 가능
// number2 = 200;

// console.log(number1);
// console.log(number2);

// // << 참조타입 >>

// let bag1 = {
//   color: "powderblue",
//   width: 30,
//   hight: 50,
// };
// let bag2 = bag1;
// bag2.color = "yellow"; //원본데이터까지 같이 바뀜
// console.log(bag1);
// console.log(bag2);

const userName = document.querySelector("#order-name");
console.log(userName.value);
