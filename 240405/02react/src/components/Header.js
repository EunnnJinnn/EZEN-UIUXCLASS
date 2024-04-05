// 랜더링 1번만
import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
      <h3> 의 Todo 작성하기 🍀 </h3>
    </div>
  );
};

export default React.memo(Header);
