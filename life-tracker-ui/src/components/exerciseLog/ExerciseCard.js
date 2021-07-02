import React from "react";
import "./ExerciseCard.css";

const ExerciseCard = ({ name, category, duration, intensity, timestamp }) => {
  return (
    <div className="ExerciseCard">
      <h4 className="info time">Date: {timestamp}</h4>
      <h2 className="title">Exercise: {name}</h2>
      <h3 className="subtitle info">Category: {category}</h3>
      <div className="values">
        <h4 className="info">Duration: {duration}</h4>
        <h4 className="info">Intensity: {intensity}</h4>
      </div>
    </div>
  );
};

export default ExerciseCard;
