// 객체 타입 정의
interface IPerson {
  name: string;
  age: number;
}

// 템플릿 리터럴 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때
// 리터럴 타입 : 문자 타입
// 타입정의 : 주석처리
// 숫자 : number, 문자 : string
// TS : 타입에 대한 추론이 가능 : 추론 - "hello" -> 타입 정의-> 문자
// 변수안에 담기는 value값을 가지고 타입을 추론할 때, 리터럴 타입이 작동/실행

// 타입구조도
// 슈퍼타입 <-> 서브타입
// number: 슈퍼타입 , 10 : 서브타입 / age 값이 없을 경우 10으로 주겠음

// 실행문 : 값을 반환해야함
// const makePerson = (name: string, age: number = 10): IPerson => {
//   const person = {
//     name: name,
//     age: age,
//   };
//   return person;
// };

// console.log(makePerson("dmswls"));
// console.log(makePerson("dmswls", 25));

// 위의 실행문을 표현식문으로 변경 => 변수선언 X , return,{} X, 객체는 속성과 값이 같다면 축약이 가능함, ()추가
const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("dmswls"));
console.log(makePerson("dmswls", 25));
