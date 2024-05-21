// TS 기본개념

// 1) 타입별칭 - 변수를 생성하듯이 간편하게 사용하고자 할 때 사용
// : 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

const user = {
  id: 1,
  name: "dmswls",
  nickname: "응디",
  birth: "00.03.82",
  location: "서울시",
};

const user1: User = {
  id: 2,
  name: "짱구",
  nickname: "ZZG",
  birth: "00.12.31",
  location: "떡잎마을",
};

// 타입별칭 사용의 원래 목적?
// 최초로 정의된 객체의 모습

type ICountryCodes = {
  // korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string;
};

const CountryCodes = {
  korea: "Ko",
  UnitedState: "US",
  Brazil: "bz",
};

// type 별칭 VS Interface
// 1) Interface 상속 : extends
// => 객체지향언어: class

// 2) type별칭 : Union 타입을 활용해서 커스텀 타입을 생성

// Type 호환성
// 슈퍼타입 & 서브타입

// let num1: number = 10;
// // 타입 리터럴
// let num2: 10 = 10;

// num1 = num2;
// num2 = num1;

interface Animal {
  name: string;
  color: string;
}
interface Dog {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "흰둥이",
  color: "white",
  breed: "말티즈",
};

// 얼핏보면 dog > animal

// 1)타입별칭
// 2)타입호환
// 3) 초과프로퍼티 검사 : 변수안에 담긴 어떤 값 => 자바스크립트라는 프로그래밍 언어는 변수안에 어떤 값이 담겨있으면 그 값을 꺼내서 검사 => 타입검사

interface Book {
  name: string;
  price: number;
}
interface ProgrammingBook {
  name: string;
  price: number;
  skill: string;
}

let ProgrammingBook = {
  name: "자바스크립트",
  price: 33000,
  skill: "react.js",
};

let book2: Book = ProgrammingBook;

let book = ProgrammingBook;

const func = (book: Book) => {};

func(ProgrammingBook);

// 1) 타입별칭
// 2) 타입호환
// 3) 초과프로퍼티 검사
// 4) 대수 타입 (*여러개의 타입을 합서해서 만드는 타입)
// - Union 타입 : 합집합
// - Intersaction 타입 : 교집합

let a: number | string | boolean = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고 있는 타입정의가 있더라도 충돌되지 않음
interface Dog {
  name: string;
  color: string;
}
// type별칭의 경우는 동일한 네임이 사용된 경우라면 재사용이 불가
type Dog01 = {
  name: string;
  color: string;
};

type Person01 = {
  name: string;
  language: string;
};

type Union1 = Dog01 | Person01;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   name: "",
// };

// 두가지 타입 모두
type Intersaction = Dog01 & Person01;

let union5: Intersaction = {
  name: "",
  color: "",
  language: "",
};

// 1) 타입별칭
// 2) 타입호환
// 3) 초과프로퍼티 검사
// 4) 대수 타입 (*여러개의 타입을 합서해서 만드는 타입)
// - Union 타입 : 합집합
// - Intersaction 타입 : 교집합
// 5) 타입단언 (*단언 : 약속)
//  - useState("") => 버튼, 이벤트 행위로 인해 ""가 리터럴 형식의 문자 타입으로 바뀜
// [] => 약속(*단언) => 내부에 객체가 들어갈 배열의 타입으로 바뀜

// React.js 타입
// 함수형 컴포넌트 : 매개변수 타입 => props => 객체
// interface
// 반환값 : 타입 => void
// 고차함수 : type별칭을 활용해서 타입시그니처
// 함수타입 : 매개변수로 들어와야하는 타입 불문명 : <> 타입
// 아직 결정되지는 않았지만, 앞으로 이러한 타입이 될거야 => as 타입단언

// any

interface Person02 {
  name: string;
  age: number;
}

// 사용자가 어떤 버튼을 클릭한다면, 아래 빈 객체안에 name, age 값이 포함될 예정
let person = {} as Person02;

person.name = "";
person.age = 25;

// 초과프로퍼티 검사도 해결가능

// 타입단언 사용하기 위해서는 다음과 같은 조건
// value as type define
// value & type => 슈퍼 및 서브타입 구조를 띄고 있어야함

let num4 = 10 as never;
let num5 = 10 as unknown;

// let num6 = 10 as string;

// 좋지 않은 타입 정의방법 = > any
// 다중 타입 단언
let num7 = 10 as unknown as string
