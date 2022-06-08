import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div
      className="product__card"
      style={{
        height: 600,
        width: 400,
        background: "#ffffff",
        borderRadius: 10,
      }}
    >
      <div id="hero__image"></div>
    </div>
  );
};

export default Card;
