class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  buy() {
    console.log(`${this.title}을(를) ${this.price}원에 구매하였습니다!`);
  }
}

// 인스턴스 객체
const book1 = new BookC("자바스크립트", 15000);
book1.buy();

// extends = 연장
class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price); //상속하고자하는 키값을
    this.major = major;
  }

  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다.`);
  }
}

const book2 = new TextbookC("AI인공지능", 50000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
