import React from "react";
import { useSearchParams } from "react-router-dom";

const Product = () => {
  const [query, Setquery] = useSearchParams();
  console.log(query.get("q"));
  return <div>Product All</div>;
};

export default Product;
