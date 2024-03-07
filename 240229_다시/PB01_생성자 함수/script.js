// // 생성자함수를 익명함수 형태로 만든것 / 인스턴스 객체(this)의 키(title) = value값
// const Book = function (title, pages, done) {
//   this.title = title;
//   this.pages = pages; // 인스턴스 (this).pages(매개변수)
//   this.done = done;
//   // this.finish = function () {
//   //   this.done === false ? (str = "읽는중") : (str = "완독");
//   //   return str;
//   // };
// };
// //prototype 부모요소들의 요소 사용 가능 /메서드함수를 인스턴스로 사용하게 해줌
// Book.prototype.finish = function () {
//   this.done = false ? (str = "읽는 중") : (str = "완독");
//   return str;
// };

// const book1 = new Book("주술회전", 348, false); //생성자 함수는 new라는 예약어와 함께 사용해야함
// console.log(book1.finish());

// // 생성자 함수 => 프로토타입의 영향을 받음  => 인스턴스
// // Object(__proto__)생성자함수의 기원 =>Book(prototype)생성자함수 => book1(__proto__)

// ----------------생성자 함수---------------
function Book(title, price) {
  this.title = title;
  this.price = price;
}

Book.prototype.buy = function () {
  console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
};

const book1 = new Book("ABCDE", 10000);
// console.log(book1.buy());
book1.buy(); //buy라는 메서드 함수를 사용하게됨

// 위에서 만든 생성자 함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?

//Textbook(매개변수를 받겠다)
function Textbook(title, price, major) {
  Book.call(this, title, price); //    call   Textbook의 생성자 함수를 만들어주겠다는 것
  this.major = major;
}
Textbook.prototype.buyTextBook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
};
Object.setPrototypeOf(Textbook.prototype, Book.prototype); //객체의 키근원 /상속을 주고자하는요소와 받고자하는 요소를 매개변수로

const book2 = new Textbook("타입스크립트", 5000, "컴퓨터공학");
book2.buyTextBook();
book2.buy();
