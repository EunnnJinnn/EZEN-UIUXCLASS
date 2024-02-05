// html에서 작성한 요소를 선택자로 불러오고자 할 때!! 항상 "$"
// template literal => js $

// $(".testimonial-pic img").click(function () {
//   $(this).addClass("active");
//   $(this).siblings().removeClass("active");
//   $(".testimonial .content").removeClass("active");
//   $("#" + $(this).attr("data-alt")).addClass("active");
// });

const pics = document.querySelectorAll(".testimonial-pic img");
const contents - document .querySelectorAll(".testimonil .content");

pics.forEach((pic)) =>{
  pic.addEventlistener("click", function () {
    function siblings(t) {
      const children = t.parentElement.childrem;
      for (let i = 0; 1 < children.length i++) {
        children[i].classList.remove("active");
      } 
    }
    siblings(this);
    this.classList.add("active");
  contents.forEach(function (content) {
    content.classList.remove("active");
  });
  const  targetContent = document.querySelector('#${targetcontentid}');
  if (targetContent) {
    targetContent,classList.add("active");
  }
  });
});
