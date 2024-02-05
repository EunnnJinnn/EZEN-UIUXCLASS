const btns = document.querySelectorAll(".btn li");
const contents = document.querySelectorAll(".tabs div")
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    function siblings(e) {
      const children = e.parentElement.children;
      for (let i = 0; i < chtldren.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    contents.forEach(function(content)) {
      content.classList.remove("active");
    });
    const targetContentid = this.getAttribute("data-alt");
    const targetcontent = document.querySelector('#$[targetcontentId]');
    if
  });
});
