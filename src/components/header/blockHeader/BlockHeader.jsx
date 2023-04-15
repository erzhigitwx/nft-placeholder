import React from "react";

const BlockHeader = ({ title, des }) => {
  return (
    <div className="block-header">
      <h1 className="block-header__title">{title}</h1>
      <p className="block-header__des">{des}</p>
    </div>
  );
};

export default BlockHeader;
