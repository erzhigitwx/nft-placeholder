import React from "react";

const NftItem = ({
  photo,
  author,
  des,
  priceEth,
  toBuy,
  handleButtonClick,
  id,
}) => {
  return (
    <>
      {(toBuy.includes(id) && (
        <div
          className="collection-content__nft-item"
          style={{ background: "rgba(255, 255, 255, 0.5)" }}
        >
          <img src={photo} alt="NFT photo" loading="lazy" />

          <div className="nft-item__content">
            <div className="nft-item__content-inner">
              <div className="column1">
                <p className="nft-author">{author}</p>
                <h3 className="nft-des">{des}</h3>
              </div>

              <div className="column2">
                <p>Current Bid</p>
                <h3 className="nft-price">{priceEth}</h3>
              </div>
            </div>

            <li
              className="button active-button"
              onClick={() => handleButtonClick(id)}
            >
              Place a bid
            </li>
          </div>
        </div>
      )) || (
        <div className="collection-content__nft-item">
          <img src={photo} alt="NFT photo" loading="lazy" />

          <div className="nft-item__content">
            <div className="nft-item__content-inner">
              <div className="column1">
                <p className="nft-author">{author}</p>
                <h3 className="nft-des">{des}</h3>
              </div>

              <div className="column2">
                <p>Current Bid</p>
                <h3 className="nft-price">{priceEth}</h3>
              </div>
            </div>

            <li className="button" onClick={() => handleButtonClick(id)}>
              Place a bid
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default NftItem;
