import React from "react";
import binance from "../../../../public/assets/platforms/binance.png";
import ethereum from "../../../../public/assets/platforms/ethereum.png";
import blockchain from "../../../../public/assets/platforms/blockchain.png";

const Platforms = () => {
  return (
    <div className="platforms">
      <img src={binance} alt="binance" />
      <img src={ethereum} alt="ethereum" />
      <img src={blockchain} alt="blockchain" />
    </div>
  );
};

export default Platforms;
