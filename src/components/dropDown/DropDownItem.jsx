import React from "react";

const DropDownItem = ({ id, activeList, changeActiveList }) => {
  return activeList.includes(id) ? (
    <div
      className={"drop-item drop-item__active"}
      onClick={() => changeActiveList(id)}
    >
      <div className="drop-item__preview">
        <p>Lorem ipsum ipsum ?</p>
        <p className="drop-item__preview-icon">+</p>
      </div>
      <div className="drop-item__active-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          molestias ex aut dolores iusto aliquam assumenda earum laudantium
          impedit in animi cumque, non, distinctio quam accusamus ab cum quasi
          iste.
        </p>
      </div>
    </div>
  ) : (
    <div className={"drop-item"} onClick={() => changeActiveList(id)}>
      <div className="drop-item__preview">
        <p>Lorem ipsum ipsum ?</p>
        <p className="drop-item__preview-icon">+</p>
      </div>
    </div>
  );
};

export default DropDownItem;
