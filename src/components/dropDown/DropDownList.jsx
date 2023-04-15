import React, { useCallback, useState } from "react";
import BlockHeader from "../header/blockHeader/BlockHeader";
import DropDownItem from "./DropDownItem";

const DropDownList = () => {
  const [activeList, setActiveList] = useState([]);

  // change active list

  const changeActiveList = useCallback((id) => {
    setActiveList((prevActiveList) => {
      if (prevActiveList.includes(id)) {
        return [];
      } else {
        return [id];
      }
    });
  }, []);

  return (
    <div className="dropDown">
      <BlockHeader
        title={"Freaquently Asked Question"}
        des={"Wanna Ask Something?"}
      />
      <div className="dropDown-content">
        <div className="dropDown-content__left">
          <DropDownItem
            id={1}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
          <DropDownItem
            id={2}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
          <DropDownItem
            id={3}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
        </div>
        <div className="dropDown-content__right">
          <DropDownItem
            id={4}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
          <DropDownItem
            id={5}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
          <DropDownItem
            id={6}
            activeList={activeList}
            changeActiveList={changeActiveList}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownList;
