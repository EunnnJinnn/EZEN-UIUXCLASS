// 함수를 활용해 객체를 만듦 / key 대괄호 표기법
interface keyValueType {
  [key: string]: string;
}

// 실행문 형식
// 반환값 : keyValueType: 객체
// const makeObject = (key: string, value: string): keyValueType => {
//   return { [key]: value };
// };

// 표현식문: 반환해야할 값이 존재하는데, 굳이 해당 함수의 문법을 표현식문으로 작성해주고 싶은 경우, 결과값 부분에 소괄호() 처리를 해서 해당값이 반환값이라는 것을 알려줘야함.
const makeObject = (key: string, value: string): keyValueType => ({
  [key]: value,
});

console.log(makeObject("name", "dmswls"));
console.log(makeObject("firstName", "park"));

// 전통적인 함수에서 this 객체가 의미하는 것 => 현재 이벤트가 발생된 요소  
// class 함수에서 this객체가 의미하는 것 => 인스턴스 객체안에서 어떤 키를 지칭하고자 할 때

// this객체는 화살표 함수에서는 사용불가
// : this객체가 가르키는 것은 window 객체이기 때문에 원하는 결과값이 나올 수 없다.