const container = document.querySelector("#container");
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
let text;
if (hours < 12) {
    text = "오전";
}
else {
    text = "오후";
}
container.innerText = `${text} ${hours}시 ${minutes}분입니다.`;
export {};
//# sourceMappingURL=script.js.map