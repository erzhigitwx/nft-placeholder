import React, { useState } from "react";
import BlockHeader from "../header/blockHeader/BlockHeader";
import { creators } from "./creatorInfo";
import CreatorItem from "./CreatorItem";

const NftCreators = () => {
  const [follow, setFollow] = useState([]);
  const changeFollow = function (id) {
    if (follow.includes(id)) {
      setFollow(follow.filter((item) => item !== id));
    } else {
      setFollow([...follow, id]);
    }
  };
  return (
    <div className="creators">
      <BlockHeader
        title={"Top Creator"}
        des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="creators-content">
        {creators.map((props) => (
          <CreatorItem {...props} follow={follow} changeFollow={changeFollow}/>
        ))}
      </div>
    </div>
  );
};

export default NftCreators;
