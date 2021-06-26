import React from "react";
import "./Card.css";

const Card = ({ cardTitle, cardImage }) => {
  return (
    <div className="card">
      <h6 className="title">{cardTitle}</h6>
      <img className="image" src={cardImage} alt={cardTitle + " image"} />
    </div>
  );
};

export default Card;
