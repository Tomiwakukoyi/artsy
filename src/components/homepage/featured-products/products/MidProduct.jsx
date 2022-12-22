import React from "react";
import "./Midproduct.scss";

const MidProduct = ({ image }) => {
  return (
    <div className="midproduct_container">
      <div className="line1"></div>

      <div className="product">
        <div className="text">
          <h1>The Boolean Egyptian</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit ut
            aliquam, purus sit amet luctus venenatis, <br /> lectus magna
            fringilla urna, porttitor rhoncus dolor <br /> pur
          </p>
        </div>
        <div className="picture">
          <img
            style={{
              borderColor: "blue",
              backgroundImage: `url(${require(`../../../../images/${image}`)})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MidProduct;
