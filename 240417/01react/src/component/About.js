import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About Page</div>
      <button onClick={goToHomepage}>Go To Home Page</button>
    </div>
  );
};

export default About;
