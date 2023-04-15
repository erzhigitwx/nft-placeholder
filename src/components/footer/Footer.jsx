import React from "react";
import PrefooterBlock from "./prefooter/PrefooterBlock";

const Footer = () => {
  return (
    <div className="footer">
      <PrefooterBlock />
      <div className="footer-content">
        <div className="footer-content__column1">
          <div className="logo">
            <h3 className="logo-content">PsychoArt</h3>
          </div>
          <p>
            The best NFT marketplace website in the world and feel your
            experience in selling or buy our work
          </p>
        </div>

        <div className="footer-content__columns-wrapper">
          <div className="footer-content__column2">
            <h4>About</h4>
            <p>Product</p>
            <p>Resource</p>
            <p>Term & Condition</p>
            <p>FAQ</p>
          </div>

          <div className="footer-content__column3">
            <h4>Company</h4>
            <p>Our Team</p>
            <p>Partner With Us</p>
            <p>Privacy & Policy</p>
            <p>Features</p>
          </div>

          <div className="footer-content__column4">
            <h4>Contact</h4>
            <p>+012 3456789</p>
            <p>adorableprog@gmail.com</p>
          </div>
        </div>
      </div>

      <span className="footer-author">
        Created by <strong>Erhigitwx</strong> | All Right Reserved!
      </span>
    </div>
  );
};

export default Footer;
