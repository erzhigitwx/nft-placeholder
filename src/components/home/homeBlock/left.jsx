import React from "react";

function LeftBlock() {
  return (
    <div className="left-block">
      <h1 className="left-block__text">
        Create, Sell & Collect Your Own Creative NFT
      </h1>
      <p className="left-block__des">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit.
      </p>
      <div className="left-block__buttons">
        <li className="button">Explore Now</li>
        <li className="buy-nft">Sell NFT</li>
      </div>

      <div className="left-block__statistics">
        <div className="column1">
          <h1 className="column1-title">37k+</h1>
          <p className="column1-p">Artworks</p>
        </div>
        <div className="column2">
          <h1 className="column2-title">20k+</h1>
          <p className="column2-p">Artists</p>
        </div>
        <div className="column3">
          <h1 className="column3-title">99k+</h1>
          <p className="column3-p">Aucations</p>
        </div>
      </div>
    </div>
  );
}

export default LeftBlock;
