const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");
// console.log(nav);
// console.log(btn);

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  nav.classList.toggle("active");
});
