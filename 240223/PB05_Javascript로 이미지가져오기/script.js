const newImg = document.createElement("img");
// createAttribute : 속성을 만든다
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://file3.instiz.net/data/cached_img/upload/2022/12/09/12/ec66216ca0aa79662cd59f8532fc139a.jpg";
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
console.log(newImg);

// .appendChild - 독립적
