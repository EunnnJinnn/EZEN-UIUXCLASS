$("nav a").click(function (e) {
  $.scrolloTo(this.hash || 0, 1500);
  e.preventDefault();
});
