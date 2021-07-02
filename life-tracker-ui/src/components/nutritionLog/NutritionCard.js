import React from "react";
import "./NutritionCard.css";

const NutritionCard = ({ name, category, quantity, calories, timestamp }) => {
  return (
    <div className="NutritionCard">
      <h4 className="info time">Date: {timestamp}</h4>
      <h2 className="title">Food: {name}</h2>
      <h3 className="subtitle info">Category: {category}</h3>
      <div className="values">
        <h4 className="info">Quantity: {quantity}</h4>
        <h4 className="info">Calories: {calories}</h4>
      </div>
    </div>
  );
};

export default NutritionCard;
