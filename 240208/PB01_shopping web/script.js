$(function () {
  $(".scroll").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $(this.hash).offset().top },
      500
    ); /*1000=1초.밀리초*/
  });

  $(window).resize(function () {
    $(".container").width($(window).width()).height($(window).height());
    $(".content").each(function () {
      $(this)
        .css("margin-left", ($(this).width() / 2) * -1 + "px")
        .css("margin-top", ($(this).height() / 2) * -1 + "px");
    });
  });

  setTimeout(function () {
    $(window).resize();
  }, 0);

  $(".container").parallaxScroll({
    friction: 0.5,
  });
});
