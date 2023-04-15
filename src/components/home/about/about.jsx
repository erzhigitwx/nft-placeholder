import React from "react";
import BlockHeader from "../../header/blockHeader/BlockHeader";
import aboutBackground from "../../../../public/assets/about.jpg";

const AboutUs = () => {
  return (
    <div className="about">
      <BlockHeader
        title={"About Us"}
        des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="about-container">
        <img
          src={aboutBackground}
          alt="about background"
          className="about-container__left"
        />

        <div className="about-container__right">
          <h3 className="about-container__right-title">Get Popular NFT</h3>
          <p className="about-container__right-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar.
          </p>
          <li className="button">Show more</li>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
