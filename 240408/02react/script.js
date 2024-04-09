// const sutudentA = {
//   name: "Eunjin",
//   grade: "A+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };

// const sutudentB = {
//   name: "yumi",
//   grade: "B+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };

// 위 객체를 class를 활용해서 생성할 수 있도록 class를 만들어보세요

class Sutudent {
  //객체에서 사용할 수 있는 key값 선언
  // field
  name;
  age;
  grade;

  // constructor funtion = 생성자 함수 / this = 인스턴스 객체
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  // method
  study() {
    console.log("열심히 공부함!");
  }
  introdue() {
    console.log(`안녕하세요. ${this.name}입니다!`);
  }
}

const sutudentA = new Sutudent("Romeo", 22, "A+");
console.log(sutudentA);
console.log(sutudentA.study());
console.log(sutudentA.introdue());

// Class를 활용해서 Instance 객체를 생성하고자 할 때, 상속!
// 부모 > 자녀 물려주는것
// Class를 생성 및 선언할 때에도 A => B 값 상속

class SutudentDeveloper extends Sutudent {
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const sutudentB = new SutudentDeveloper("Scharlet", 21, "B+", "JS");
console.log(sutudentB.introdue());
