import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    // 쿼리의 값으로 불러오는 "?"
    navigate("/product?");
  };
  return (
    <div className="homepage">
      <div>Home Page</div>
      <Link to="/about">Go To About Page</Link>
      <button onClick={goProductPage}>Go To Product Page</button>
    </div>
  );
};

export default Home;
