interface Iperson4 {
  name: string;
  age?: number;
}
// // 정석
// class Person4 implements Iperson4 {
//   name: string;
//   age?: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
class Person4 implements Iperson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: Iperson4 = new Person4("jack", 20);

console.log(jack4);
