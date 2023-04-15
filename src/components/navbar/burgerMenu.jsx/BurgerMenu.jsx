import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="burgerMenu header">
      <div
        className="burger-btn__wrapper burger-btn__wrapper-close"
        onClick={() => setIsOpen(false)}
      >
        <span className="burger-btn burger-btn__active" />
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
  ) : (
    <div className="header burger-header">
      <div className="logo">
        <h3 className="logo-content">PsychoArt</h3>
      </div>
      <div className="burger-btn__wrapper" onClick={() => setIsOpen(true)}>
        <span className="burger-btn" />
      </div>
    </div>
  );
};

export default BurgerMenu;
