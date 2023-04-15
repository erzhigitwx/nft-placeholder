import React, { useState } from "react";
import BlockHeader from "../header/blockHeader/BlockHeader";
import { pattern } from "../collection/mockData";
import NftItem from "../collection/nftItem";


const Feature = () => {
  const [feature, setFeature] = useState([]);
  const clickPatternHandler = function (id) {
    if (feature.includes(id)) {
      setFeature([...feature.filter((item) => item !== id)]);
    } else {
      setFeature([...feature, id]);
    }
  };
  return (
    <div className="feature">
      <BlockHeader
        title={"Featured Artworks"}
        des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="collection-content__nft">
        {pattern.map((props) => (
          <NftItem
            {...props}
            toBuy={feature}
            handleButtonClick={clickPatternHandler}
            key={props.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
