const major = document.querySelector("#major");
// console.log(major.options);

const displaySelect = () => {
  const selectedText = major.options[major.selectedIndex].innerText;
  // console.log(selectedText);
  alert(`${selectedText}를 선택했음~`);
};

major.onchange = displaySelect;

const subject = document.testForm.subject;
console.log(subject);

// 이벤트 기능이 없어서 무엇을 선택했는지 알 수 없지만 console창에서는 확인 가능
const checked = document.querySelector("input[name='subject']:checked");
console.log(checked);
