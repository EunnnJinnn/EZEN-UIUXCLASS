const path = anime.path(".svg .main");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  rotate: path("angle"),
  easing: "linear",
  duration: 10000,
  ioop: true,
});
