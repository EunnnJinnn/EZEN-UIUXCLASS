import products from "./products.js";

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");

let selected = []; //체크박스로 선택된 애들만 모아놓음 /

const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex; //인덱스 값을 가져옴
  const value = e.target.options[selectedIndex].value; // 선택한 value 값을 불러옴
  //filter 콜백 함수 사용 가능
  const filtered = products.data.filter((product) => {
    return product.category === value; // 카테고리와 벨류값이 일치하면 filtered로
  });

  removeItems();
  filtered.forEach((product) => {
    createItem(product);
  });
};

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const updateTotal = (price) => {
  const totalPrice = document.querySelector(".total-price");
  const formatted = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(price);
  totalPrice.innerText = formatted;
};

// 누산기    / reduce => 콜백함수
const calculate = () => {
  const result = selected.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

  updateTotal(result);
};

const addCart = (e) => {
  const id = e.target.parentElement.parentElement.id; //부모요소의 아이디가 필요
  const checked = e.target.checked;
  console.log(typeof id);

  if (checked) {
    products.data.forEach((product) => {
      //products.js의 id값과 위의 id값이 같다면? // product의 id는 문자열 / parseInt = 변경
      if (product.id === parseInt(id)) {
        selected.push(product);
      }
    });
  } else {
    selected = selected.filter((product) => {
      return product.id !== parseInt(id); // 선택 되지않는 상품을 모아놓음 //parseInt = 형변환
    });
  }

  calculate();
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const check = document.createElement("input");
  const img = document.createElement("img");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  //속성값 생성
  check.setAttribute("type", "checkbox");
  check.addEventListener("change", addCart); //눌렀을 때 true

  // checkbox 생성
  div.append(check, h3, span);
  li.append(div, img);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);

//importData => 상품목록 불러오기 / 동일한 시점에 아이디가 생겼기때문에 안다음이 안생김
