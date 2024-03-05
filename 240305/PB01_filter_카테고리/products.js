const products = {
  data: [
    {
      id: Date.now(),
      name: "Cup",
      price: 9900,
      category: "life",
      img: "./img/cup.jpg",
    },
    {
      id: Date.now() + 1,
      name: "Mouse",
      price: 15000,
      category: "it",
      img: "./img/mouse.jpg",
    },
    {
      id: Date.now() + 2,
      name: "Keyboard",
      price: 21000,
      category: "it",
      img: "./img/keyboard.jpg",
    },
    {
      id: Date.now() + 3,
      name: "Book",
      price: 19900,
      category: "book",
      img: "./img/book.jpg",
    },
    {
      id: Date.now() + 4,
      name: "Pen",
      price: 1500,
      category: "book",
      img: "./img/pen.jpg",
    },
  ],
};

export default products;

// products.js에 있는 카테고리와 html에 있는 value의 값이 같은것을 불러오는 것

// id: Date.now() + 2, => 동일한 아이디를 넣으면 나올수 없음
