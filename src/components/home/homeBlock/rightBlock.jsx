import React from "react";
import nft1 from "../../../../public/assets/mainNFT-s/nft1.jpg";
import nft2 from "../../../../public/assets/mainNFT-s/nft2.jpg";
import nft3 from "../../../../public/assets/mainNFT-s/nft3.jpg";
import nft4 from "../../../../public/assets/mainNFT-s/nft4.jpg";
import nft5 from "../../../../public/assets/mainNFT-s/nft5.jpg";
import nft6 from "../../../../public/assets/mainNFT-s/nft6.jpg";
import nft7 from "../../../../public/assets/mainNFT-s/nft7.jpg";

function RightBlock() {
  return (
    <div className="right-block">
      <div className="right-block__content">
        <div className="right-block__content-column1">
          <img src={nft1} alt="nft photo" className="nft-img1" />
          <img src={nft3} alt="nft photo" className="nft-img3" />
          <img src={nft6} alt="nft photo" className="nft-img5" />
        </div>
        <div className="right-block__content-column2">
          <img src={nft2} alt="nft photo" className="nft-img2" />

          <img src={nft4} alt="nft photo" className="nft-img4" />
          <img src={nft7} alt="nft photo" className="nft-img6" />
        </div>
      </div>
      <div className="tv-center">
        <img src={nft5} alt="nft photo" className="nft-img7" />
      </div>
    </div>
  );
}

export default RightBlock;
