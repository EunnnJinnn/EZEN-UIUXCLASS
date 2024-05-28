// settime,,
const Spinner = document.querySelector(".loading_spinner");
const CheckBox = document.querySelector(".loading_ch");

console.log(Spinner, CheckBox);

CheckBox.addEventListener("click", () => {
  Spinner.classList.add("active");
});

CheckBox.addEventListener("click", () => {
  Spinner.classList.remove("active");
});
