const mainHeader = document.querySelector(".mainHeader");
const progressBar = document.querySelector(".bar");
const coverWrap = document.querySelector(".coverWrap");
const coverTitle = coverWrap.querySelector(".coverTitle");
const dimd = coverWrap.querySelector(".dimd");
const contentWrap = document.querySelector(".contentWrap");
// outerHeight 창의 모든것을 뜻함 주소창도 포함
const coverHeight = window.innerHeight;

coverWrap.style.height = coverHeight + "px";
contentWrap.style.marginTop = coverHeight + "px";

const percent = (scrollNum, documentHeight) => {
  return ((scrollNum / documentHeight) * 100).toFixed(0);
};

const scrollEvent = () => {
  const scrollNum = window.scrollY;
  const documentHeight = document.body.scrollHeight;
  // scrollHeight 전체문서에서의 스크롤이 가능한

  const per = percent(scrollNum, documentHeight) + "%";
  console.log(per);
  progressBar.style.width = per;

  if (scrollNum >= coverHeight) {
    mainHeader.classList.add("fixed");
  } else {
    mainHeader.classList.remove("fixed");
    coverTitle.style.top = -scrollNum / 5 + "px";
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundColor = `rgba(0,0,0,${0.4 + scrollNum / 1000})`;
  }
};

window.addEventListener("scroll", scrollEvent);
