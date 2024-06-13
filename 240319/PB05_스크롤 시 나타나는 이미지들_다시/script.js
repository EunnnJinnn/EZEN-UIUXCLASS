const progressBar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const depthWrap = document.querySelector(".depthWrap");
const Inz = document.querySelector(".inz");

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const deepSea = () => {
  const scrollNum = window.scrollY;
  const span = depthWrap.querySelector("span");
  span.innerText = scrollNum;

  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + "%";

  submarine.style.transform = `translateX(${per}%)`;
  Inz.style.transform = `translateY(${-per}%)`;
};

window.addEventListener("scroll", deepSea);
