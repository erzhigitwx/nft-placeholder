import React from "react";

const CreatorItem = ({
  background,
  avatar,
  name,
  id,
  follow,
  changeFollow,
}) => {
  return (
    <>
      {(follow.includes(id) && (
        <div className="creator-item creator-item__active">
          <img
            src={background}
            alt="background"
            className="creator-item__background"
          />
          <div className="creator-item__content">
            <img src={avatar} alt="avatar" />
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <li className="button active-button" onClick={() => changeFollow(id)}>
              Followed
            </li>
          </div>
        </div>
      )) || (
        <div className="creator-item">
          <img
            src={background}
            alt="background"
            className="creator-item__background"
          />
          <div className="creator-item__content">
            <img src={avatar} alt="avatar" />
            <h3>{name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <li className="button" onClick={() => changeFollow(id)}>
              + Follow
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatorItem;
