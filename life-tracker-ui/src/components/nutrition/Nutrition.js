import React from "react";
import Navbar from "../navbar/Navbar";
import "./Nutrition.css";
import NutritionContent from "./NutritionContent";

const Nutrition = ({ user }) => {
  return (
    <div className="Nutrition">
      <Navbar />
      <div className="banner">
        <h1>Nutrition</h1>
      </div>
      {Object.keys(user).length === 0 ? (
        <h1 style={{ marginTop: 200, textAlign: "center" }}>Not logged in</h1>
      ) : (
        <NutritionContent user={user} />
      )}
    </div>
  );
};

export default Nutrition;
