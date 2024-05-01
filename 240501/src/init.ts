// callback 매개체 / (callback: () => void) : 반환값이 없는 함수
export const init = (callback: () => void): void => {
  console.log("default initialization finished.");
  callback();
  console.log("all initialization finished.");
};
