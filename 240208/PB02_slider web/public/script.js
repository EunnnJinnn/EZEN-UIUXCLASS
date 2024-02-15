// slick.js : history-info
$(".history-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// slick.js : project-photo
$(".project-photo").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  cssEase: "linear",
});

// header > trriger btn  미디어 쿼리 - 모바일 trigger

$(".trigger").click(function () {
  $(this).toggleClass("active"); /* 위에있는 선택자 불러옴 */
  $(".gnb").toggleClass("active");
});

// 모바일 trigger 메뉴 선택 시 자동으로 닫힘
$(".menu a, .gototop").click(function () {
  $(".gnb").removeClass("active");
  $(".trigger").removeClass("active");
});

// scrollTo : header > trriger btn trigger 메뉴 선택 후 부드럽게 이동하는 효과
$(".menu a").click(function () {
  $.scrollTo(this.hash || 0, 900); /* 900 = 0.9s */
});

// headaer scroll event / jquery
/* () => 조건식 */
$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("header, .gototop").addClass("active");
  } else {
    $("header, .gototop").removeClass("active");
  }
});
