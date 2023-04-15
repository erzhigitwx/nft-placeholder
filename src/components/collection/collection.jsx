import React, { useCallback, useState } from "react";
import BlockHeader from "../header/blockHeader/BlockHeader";
import { art, pattern, photography, sport } from "./mockData";
import NftItem from "./nftItem";

const Collection = () => {
  const [activeSection, setActiveSection] = useState("Sport");
  const [basket, setBasket] = useState({
    artBasket: [],
    sportBasket: [],
    photographyBasket: [],
    patternBasket: [],
  });
  const handleSectionClick = useCallback((section) => {
    setActiveSection(section);
  }, []);

  const handleClick = React.useMemo(() => {
    return {
      artClick: function (id) {
        if (basket.artBasket.includes(id)) {
          setBasket({
            ...basket,
            artBasket: basket.artBasket.filter((item) => item !== id),
          });
        } else {
          setBasket({ ...basket, artBasket: [...basket.artBasket, id] });
        }
      },
      sportClick: function (id) {
        if (basket.sportBasket.includes(id)) {
          setBasket({
            ...basket,
            sportBasket: basket.sportBasket.filter((item) => item !== id),
          });
        } else {
          setBasket({
            ...basket,
            sportBasket: [...basket.sportBasket, id],
          });
        }
      },

      photoClick: function (id) {
        if (basket.photographyBasket.includes(id)) {
          setBasket({
            ...basket,
            photographyBasket: basket.photographyBasket.filter(
              (item) => item !== id
            ),
          });
        } else {
          setBasket({
            ...basket,
            photographyBasket: [...basket.photographyBasket, id],
          });
        }
      },
      patternClick: function (id) {
        if (basket.patternBasket.includes(id)) {
          setBasket({
            ...basket,
            patternBasket: patternBasket.filter((item) => item !== id),
          });
        } else {
          setBasket({
            ...basket,
            patternBasket: [...basket.patternBasket, id],
          });
        }
      },
    };
  }, [basket, setBasket]);
  return (
    <div className="collection">
      <BlockHeader
        title={"Collection"}
        des={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="collection-content">
        <div className="collection-content__navbar">
          <span
            className={`collection-content__navbar-section ${
              activeSection === "Art" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Art")}
          >
            Art
          </span>
          <span
            className={`collection-content__navbar-section ${
              activeSection === "Sport" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Sport")}
          >
            Sport
          </span>
          <span
            className={`collection-content__navbar-section ${
              activeSection === "Photography" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Photography")}
          >
            Photography
          </span>
          <span
            className={`collection-content__navbar-section ${
              activeSection === "Pattern" ? "active" : ""
            }`}
            onClick={() => handleSectionClick("Pattern")}
          >
            Pattern
          </span>
        </div>

        <div className="collection-content__nft">
          {activeSection === "Sport" &&
            sport.map((props) => (
              <NftItem
                {...props}
                toBuy={basket.sportBasket}
                handleButtonClick={handleClick.sportClick}
                key={props.id}
              />
            ))}
          {activeSection === "Art" &&
            art.map((props) => (
              <NftItem
                {...props}
                toBuy={basket.artBasket}
                handleButtonClick={handleClick.artClick}
                key={props.id}
              />
            ))}
          {activeSection === "Photography" &&
            photography.map((props) => (
              <NftItem
                {...props}
                toBuy={basket.photographyBasket}
                handleButtonClick={handleClick.photoClick}
                key={props.id}
              />
            ))}
          {activeSection === "Pattern" &&
            pattern.map((props) => (
              <NftItem
                {...props}
                toBuy={basket.patternBasket}
                handleButtonClick={handleClick.patternClick}
                key={props.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
