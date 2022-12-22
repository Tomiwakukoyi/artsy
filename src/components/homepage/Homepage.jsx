import React from "react";
import Featured_products from "./featured-products/Featured_products";
import Hero from "./herosection/Hero";
import Navbar from "./navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured_products />
    </div>
  );
};

export default Homepage;
