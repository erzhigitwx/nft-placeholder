import React from "react";
import BurgerMenu from "../navbar/burgerMenu.jsx/BurgerMenu";

function Header() {
  return window.innerWidth <= 1200 ? (
    <BurgerMenu />
  ) : (
    <div className="header">
      <div className="logo">
        <h3 className="logo-content">PsychoArt</h3>
      </div>

      <input
        type="text"
        className="header-input"
        placeholder={"Search items and collections"}
      />

      <div className="header-sections">
        <li>Collections</li>
        <li>Feature</li>
        <li>FAQ</li>
        <li className="button">Select Wallet</li>
      </div>
    </div>
  );
}

export default Header;
