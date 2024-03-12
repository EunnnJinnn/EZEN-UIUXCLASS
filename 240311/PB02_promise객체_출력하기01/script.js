// const order = new Promise((resolve, reject) => {
//   const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
//   if (coffee != null && coffee != "") {
//     document.querySelector(
//       ".start"
//     ).innerText = `${coffee} 주문이 접수되었습니다.`;
//     setTimeout(() => {
//       resolve(coffee);
//     }, 3000);
//   } else {
//     reject("커피를 주문하지 않았습니다!");
//   }
// });

// // result 매개변수 = 커피메뉴
// order
//   .then((result) => {
//     document.querySelector(".end").innerText = `${result}준비완료`;
//   })
//   .catch((err) => (document.querySelector(".start").innerText = `${err}`));

// ------------------리팩토링 / 깔끔하게 정리를 하는것 ------------------
const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
  if (coffee != null && coffee != "") {
    document.querySelector(
      ".start"
    ).innerText = `${coffee} 주문이 접수되었습니다.`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다!");
  }
});

const display = (result) => {
  document.querySelector(".end").innerText = `${result} ☕ 준비완료 ☕`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
};

const showErr = (err) => {
  document.querySelector(".start").innerText = `${err}`;
};

// result 매개변수 = 커피메뉴
order.then(display).catch(showErr);
