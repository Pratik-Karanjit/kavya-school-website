import React from "react";
import "./stylesheet.css";

const Item = ({ imageUrl, caption }) => {
  return (
    <div className="item">
      <img className="hexagon-image" src={imageUrl} alt={caption} />
    </div>
  );
};

export default Item;
