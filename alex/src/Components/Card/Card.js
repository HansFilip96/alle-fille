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
      <div className="order_summary_container">
        <h3 className="order_summary_title">Order Summary</h3>
        <p className="order_summary_text">
          You can now listen to millions of songs, <br /> audiobooks, and
          podcasts on any device <br /> anywhere you go
        </p>
      </div>
    </div>
  );
};

export default Card;
