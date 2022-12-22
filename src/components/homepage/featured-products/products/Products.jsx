import React from "react";
import "./Products.scss";

const Products = ({ image }) => {
  return (
    <div className="product_container">
      <div className="line1"></div>
      <div className="first_product">
        <div className="picture">
          <img
            style={{
              borderColor: "blue",
              backgroundImage: `url(${require(`../../../../images/${image}`)})`,
            }}
          />
        </div>
        <div className="text">
          <h1>The Boolean Egyptian</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit ut
            aliquam, purus sit amet luctus venenatis, <br /> lectus magna
            fringilla urna, porttitor rhoncus dolor <br /> pur
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
