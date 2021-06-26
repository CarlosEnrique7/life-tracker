import React from "react";
import Card from "../card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="grid">
        <Card
          cardTitle="Fitness 🏊"
          cardImage="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        />
        <Card
          cardTitle="Food 🥗"
          cardImage="https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
          cardTitle="Rest 🌙"
          cardImage="https://images.pexels.com/photos/723675/pexels-photo-723675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
        <Card
          cardTitle="Planner 🗓"
          cardImage="https://images.pexels.com/photos/5408818/pexels-photo-5408818.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </div>
    </div>
  );
};

export default Cards;
