import React from "react";
import {
  UilSearch,
  UilShoppingCartAlt,
  UilBell,
} from "@iconscout/react-unicons";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav-container">
      {/* Logo */}
      <div className="logo">ARTSY.</div>

      {/* Navigation Menus */}
      <div className="menus">
        <ul>
          <li className="menu menu-trans">Home</li>
          <li className="menu menu-trans">Marketplace</li>
          <li className="menu menu-trans">Auctions</li>
          <li className="menu menu-trans">Drop</li>
        </ul>
      </div>

      {/* Navigation icons */}
      <div className="nav-icons">
        <UilSearch size={25} style={{ marginRight: 20, cursor: "pointer" }} />
        <UilShoppingCartAlt
          size={25}
          style={{ marginRight: 20, cursor: "pointer" }}
        />
        <UilBell size={25} style={{ marginRight: 20, cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Navbar;
