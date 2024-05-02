// class Person1 {
//   name?: string;
//   age?: number;
// }

// let dmswls = new Person1();
// dmswls.name = "jack";
// dmswls.age = 20;

// console.log(dmswls);

// class를 생성할 때, 꼭 반드시 field값을 사전 정의를 해야만 class를 만들 수 있는건 아님 => 접근제어자를 활용해서 field값을 생략할 수 있음
class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2("jack", 22);


// JS를 활용해서 생성할 수 있는 class 형태의 FM문법
class Person3 {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("jack", 20);
console.log(jack3);
