// // jQuery 구현

// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("ㅈ..진짜 별로야" + '<img src="./images/star-lv1.png"/>');
//   } else if (starRate === 2) {
//     $(".print").html("ㅇ..조금 별로야" + '<img src="./images/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("응..보통이네" + '<img src="./images/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("오..조흔데?!" + '<img src="./images/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("밋쳤다!!최고!" + '<img src="./images/star-lv5.png"/>');
//   }
// });

// Javascript 구현
const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
const imgs = [
  "./images/star-lv1.png",
  "./images/star-lv2.png",
  "./images/star-lv3.png",
  "./images/star-lv4.png",
  "./images/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = current.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    console.log("click");
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");

    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (preStar) {
      preStar.classList.add("active");
    });

    const num = Array.from(stars).indexOf(this);
    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = `별로에요! <img src=${imgs[0]}>`;
    } else if (starRate === 2) {
      print.innerHTML = `보통이에요! <img src=${imgs[1]}>`;
    } else if (starRate === 3) {
      print.innerHTML = `그냥그래요! <img src=${imgs[2]}>`;
    } else if (starRate === 4) {
      print.innerHTML = `맘에들어요! <img src=${imgs[3]}>`;
    } else if (starRate === 5) {
      print.innerHTML = `아주좋아요! <img src=${imgs[4]}>`;
    }
  });
});
// console.log(stars);  console 확인
// const text = document.getElementById; html에서 id를 복수로 사용해야하는 이유
// [배열을 만들겠따는 뜻] , forEach =
