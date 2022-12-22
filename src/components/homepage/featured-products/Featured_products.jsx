import React from "react";
import "./Featured_products.scss";
import MidProduct from "./products/MidProduct";
import Products from "./products/Products";

const Featured_products = () => {
  return (
    <div className="featured-products">
      <h1>Featured Product</h1>
      <Products image="product1.png" />
      <MidProduct image="product2.png" />
      <Products image="product3.png" />
    </div>
  );
};

export default Featured_products;
