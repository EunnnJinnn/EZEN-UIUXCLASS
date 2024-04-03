import React from "react";

// 함수형 컴포넌트 생성 변수명과 value값이 같아야함
const Viewer = ({ number }) => {
  console.log("viewer component update!");
  return (
    // <div>{number % 2 === 0 ? <h3>짝수입니다.</h3> : <h3>홀수입니다.</h3>}</div>
    <div>Viewer</div>
  );
};

export default Viewer;
