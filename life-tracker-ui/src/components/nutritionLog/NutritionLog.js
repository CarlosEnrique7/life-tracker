import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import NutritionCard from "./NutritionCard";
import "./NutritionLog.css";

const NutritionLog = ({ nutrition, setNutrition }) => {
  const date = new Date();
  let [month, day, year] = [date.getMonth(), date.getDay(), date.getFullYear()];
  const time = new Date().toLocaleTimeString();

  useEffect(() => {
    const fetchNutrition = async () => {
      const { data } = await apiClient.listCalories();
      console.log("data", data.calories);
      if (data) {
        setNutrition(data.calories);
      }
    };
    fetchNutrition();
  }, []);

  console.log("array", nutrition);
  return (
    <div className="cards">
      {nutrition.map((entry) => (
        <NutritionCard
          name={entry.name}
          category={entry.category}
          quantity={entry.quantity}
          calories={entry.calories}
          timestamp={entry.timestamp || `${month}/${day}/${year} ${time}`}
        />
      ))}
    </div>
  );
};

export default NutritionLog;
