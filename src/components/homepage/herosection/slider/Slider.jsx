import React from "react";
import "./Slider.scss";
import image1 from "../../../../images/slider1.png";
import image2 from "../../../../images/slider2.png";
import image3 from "../../../../images/slider3.png";
import image4 from "../../../../images/slider4.png";
import image5 from "../../../../images/slider5.png";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <img src={image1} alt="#" />
        <img src={image2} alt="#" />
        <img src={image3} alt="#" />
        <img src={image4} alt="#" />
        <img src={image5} alt="#" />
      </div>
    </div>
  );
};

export default Slider;
