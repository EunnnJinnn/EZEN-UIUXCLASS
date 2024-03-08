const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
// 데이터를 가져오겠음, 경로, 비동기
xhr.open("GET", url, true);
xhr.send();

// 온점표기법/ 태그사용해서 값을 넣고 싶은경우 = innerHTML / 외부에서 가져온 태그는 css에서 가능
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);
    console.log(product);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>생산년도 : ${product.data.year}</p>
    `;
  }
};

console.log(xhr);
