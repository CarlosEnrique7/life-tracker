import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import NutritionCard from "./NutritionCard";
import "./NutritionLog.css";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const NutritionLog = ({ nutrition, setNutrition }) => {
  const currentTime = new Date().toLocaleString();
  console.log("current time", currentTime);

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
          timestamp={formatDate(entry.timestamp) == "Invalid Date" ? currentTime : formatDate(entry.timestamp)}
        />
      ))}
    </div>
  );
};

export default NutritionLog;
