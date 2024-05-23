document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".index-section01-image img");
  const prevButton = document.getElementById("section1prev");
  const nextButton = document.getElementById("section1next");

  let currentIndex = 0;
  const totalImages = images.length;

  showImage(currentIndex);

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    showImage(currentIndex);
  });

  function showImage(index) {
    images.forEach((image) => {
      image.style.display = "none";
    });

    images[index].style.display = "block";
  }
});
//section2 slide
document.addEventListener("DOMContentLoaded", function () {
  const arrows = document.querySelectorAll(".index-section02-arrows i");
  const productTexts = document.querySelectorAll(
    ".index-section02-product-info div"
  );
  const images = document.querySelectorAll(".index-section02-image div");
  let currentIndex = 0;

  showContent(currentIndex);

  arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", function () {
      if (index === 0) {
        currentIndex =
          currentIndex === 0 ? productTexts.length - 1 : currentIndex - 1;
      } else {
        currentIndex =
          currentIndex === productTexts.length - 1 ? 0 : currentIndex + 1;
      }
      showContent(currentIndex);
    });
  });
  autoSlideInterval = setInterval(() => {
    currentIndex =
      currentIndex === productTexts.length - 1 ? 0 : currentIndex + 1;
    showContent(currentIndex);
  }, 5000);

  function showContent(index) {
    productTexts.forEach((text) => {
      text.style.display = "none";
    });
    images.forEach((image) => {
      image.style.display = "none";
    });

    productTexts[index].style.display = "flex";
    productTexts[index].style.flexDirection = "column";
    images[index].style.display = "flex";
  }
});
//section4

const wrapper = document.querySelector(".product_list");
let pressed = false;
let startX = 0;

wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  console.log(startX);
});
wrapper.addEventListener("mouseleave", function (e) {
  pressed = false;
});

window.addEventListener("mouseup", function (e) {
  pressed = false;
});
wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});

//section5 parallax

const parallax = document.querySelector(".index-section05");

window.addEventListener("scroll", function () {
  const offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
});

//aside queryselector

const asidebutton01 = document.querySelector(".aside-logo-login");
const asidehidden = document.querySelector(".aside-hidden");
const asideheaderx = document.querySelector(".aside-header-x");
const asidelogo = document.querySelector(".aside-logo");
const asidechevronup = document.querySelector(".aside-logo-chevron-up");
const asidechevrondown = document.querySelector(".aside-logo-chevron-down");
// asid hidden 클릭이벤트

asidebutton01.addEventListener("click", function () {
  asidehidden.style.display = "block";
  asidelogo.style.display = "none";
});

asideheaderx.addEventListener("click", function () {
  asidehidden.style.display = "none";
  asidelogo.style.display = "block";
});

//aside popup 클릭이벤트
const asidepopup = document.querySelector(".aside-popup");
const asidepopuptextclose = document.querySelector(".aside-popup-text-close");
console.log(asidepopup);

asidepopuptextclose.addEventListener("click", function () {
  asidepopup.style.display = "none";
});

//scroll 숨김

const asidebuttonshow = function () {
  if (window.scrollY > window.innerHeight) {
    asidechevronup.classList.add("show");
  } else {
    asidechevronup.classList.remove("show");
  }
};

window.addEventListener("scroll", asidebuttonshow);

// aside 스크롤업
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

asidechevronup.addEventListener("click", scrollToTop);

//aside 스크롤 다운
function scrollToDown() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

asidechevrondown.addEventListener("click", scrollToDown);

//슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".aside-popup-button div");
  const images = document.querySelectorAll(".aside-popoup-image-wrapper img");
  let currentIndex = 0;

  const clickHandler = function (index) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    buttons[index].classList.add("active");
    images.forEach((img) => (img.style.display = "none"));
    images[index].style.display = "block";
    currentIndex = index;
  };

  clickHandler(currentIndex);

  const interval = setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    clickHandler(currentIndex);
  }, 3000);

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      clickHandler(index);
    });
  });
});
//팝업

const popupCloseDate = localStorage.getItem("CloseDate");
const asidetodayclose = document.querySelector(".aside-popup-text-todayclose");

asidetodayclose.addEventListener("click", function () {
  const today = new Date().toLocaleDateString();
  popupCloseDate = today;
  localStorage.setItem("CloseDate", popupCloseDate); //
  checkPopupStatus();
});

function checkPopupStatus() {
  const today = new Date().toLocaleDateString();
  const asidepopup = document.querySelector(".aside-popup");

  if (asidepopup) {
    if (popupCloseDate !== today) {
      asidepopup.style.display = "block";
    } else {
      asidepopup.style.display = "none";
    }
  }
}

checkPopupStatus();

// Accordion 메뉴 기능
const accordionMenu = function () {
  document.addEventListener("click", function (event) {
    const trigger = event.target.closest(".menu_link");
    if (!trigger) return;

    const target = document.querySelector(trigger.hash);
    if (!target) return;

    event.preventDefault();

    target.classList.toggle("menu_hidden");

    trigger.classList.toggle("accordion-menu--active");
  });

  document.addEventListener("click", function (event) {
    event.preventDefault();
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      return;
    }

    target.classList.toggle("active");
  });
};

accordionMenu();

// // 메뉴 링크 클릭 시 다른 HTML로 이동
// const menuLinks = document.querySelectorAll(".menu_link");

// for (const menuLink of menuLinks) {
//   menuLink.addEventListener("click", (event) => {
//     // Prevent default anchor tag behavior (following the link)
//     event.preventDefault();

//     // Get the URL from the href attribute of the clicked link
//     const targetUrl = menuLink.getAttribute("href");

//     // Check if the target URL exists (ignores links with "#" as href)
//     if (targetUrl && targetUrl !== "#") {
//       // Redirect the browser to the target URL
//       window.location.href = targetUrl;
//     }
//   });
// }

// // 서브 메뉴 클릭 시 다른 HTML로 이동
// const subMenuLinks = document.querySelectorAll(".sub-menu .menu_link");

// for (const subMenuLink of subMenuLinks) {
//   subMenuLink.addEventListener("click", (event) => {
//     // Accordion 동작 방지
//     event.stopPropagation();

//     // 기본 anchor tag 동작 방지
//     event.preventDefault();

//     const targetUrl = subMenuLink.getAttribute("href");

//     if (targetUrl && targetUrl !== "#") {
//       window.location.href = targetUrl;
//     }
//   });
// }

// const mainMenuLinkss = document.querySelectorAll(".main-menu a");

// for (const mainMenuLink of mainMenuLinkss) {
//   mainMenuLink.addEventListener("click", (event) => {
//     event.preventDefault();

//     const target = mainMenuLink.getAttribute("href");
//     if (target === "#") {
//       const subMenu = mainMenuLink.parentNode.querySelector(".sub-menu");
//       subMenu.classList.toggle("active");
//     } else {
//       window.location.href = target;
//     }
//   });
// }
// ---------------서브메뉴 클릭-------------------
const subMenuLinkss = document.querySelectorAll(".menu_sublist");

for (const subMenuLink of subMenuLinkss) {
  subMenuLink.addEventListener("click", (event) => {
    event.stopPropagation();
    event.preventDefault();

    const targetUrl = subMenuLink.getAttribute("href");
    window.location.href = targetUrl;
  });
}

const subMenuLinksss = document.querySelectorAll(".sub-menu a");

for (const subMenuLink of subMenuLinksss) {
  subMenuLink.addEventListener("click", (event) => {
    event.stopPropagation(); // 이벤트 전파 중단
    event.preventDefault(); // 기본 동작 방지

    const targetUrl = subMenuLink.getAttribute("href");
    window.location.href = targetUrl;
  });
}

//menu close
const menuclose = document.querySelector(".menu_lf_cls");
const menu = document.querySelector("#menu");
menuclose.addEventListener("click", () => {
  menu.style.display = "none";
});
const menuopen = document.querySelector(".header_menu");
menuopen.addEventListener("click", () => {
  menu.style.display = "block";
});
