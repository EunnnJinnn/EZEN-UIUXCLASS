import React from "react";
import "./Button.css";

const Button = ({ text, type, onClick }) => {
  // includes 배열에 값이 존재 = true, 없으면 false
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
