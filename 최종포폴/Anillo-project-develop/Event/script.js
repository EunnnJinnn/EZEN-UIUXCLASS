document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const pages = document.querySelectorAll(".page");
  let currentPage = 1;

  const showPage = (pageNum) => {
    const allPages = document.querySelectorAll(".content-page");
    allPages.forEach((page) => {
      page.style.display = "none"; // 모든 페이지를 숨깁니다.
    });
    document.getElementById(`page${pageNum}`).style.display = "block"; // 선택된 페이지만 보여줍니다.
  };

  const updatePagerState = () => {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === 5;
  };

  pages.forEach((button) => {
    button.addEventListener("click", (event) => {
      currentPage = parseInt(event.target.dataset.page, 10);
      showPage(currentPage);
      updatePagerState();
    });
  });

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      showPage(currentPage);
      updatePagerState();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < 5) {
      currentPage += 1;
      showPage(currentPage);
      updatePagerState();
    }
  });

  showPage(currentPage); // 초기 페이지 컨텐츠를 보여줍니다.
  updatePagerState(); // 초기 상태를 업데이트합니다.
});
