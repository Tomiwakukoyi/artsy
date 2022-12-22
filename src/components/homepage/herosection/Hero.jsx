import React from "react";
import "./Hero.scss";
import Slider from "./slider/Slider";

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>
        Photography is poetry & <br /> beautiful untold stories
      </h1>
      <p>
        Flip through more than 10,000 vintage shots, old photograghs, historic
        <br /> images and captures seamlessly in one place. Register to get top
        access.
      </p>

      <Slider />
    </div>
  );
};

export default Hero;
