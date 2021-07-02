import React from "react";
import { useState } from "react";
import NutritionInfo from "../nutritionInfo/NutritionInfo";
import NutritionLog from "../nutritionLog/NutritionLog";

const NutritionContent = ({ user }) => {
  const [nutrition, setNutrition] = useState([]);

  return (
    <div>
      <div className="Form">
        {Object.keys(user).length === 0 ? (
          <h1 style={{ marginTop: 200, textAlign: "center" }}>Not logged in</h1>
        ) : (
          <NutritionInfo nutrition={nutrition} setNutrition={setNutrition} />
        )}
      </div>
      <NutritionLog user={user} nutrition={nutrition} setNutrition={setNutrition} />
    </div>
  );
};

export default NutritionContent;
