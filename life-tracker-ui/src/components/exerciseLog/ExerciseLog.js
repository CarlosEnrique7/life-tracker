import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseLog.css";

const ExerciseLog = ({ exercises, setExercises }) => {
  const date = new Date();
  let [month, day, year] = [date.getMonth(), date.getDay(), date.getFullYear()];
  const time = new Date().toLocaleTimeString();

  useEffect(() => {
    const fetchExercises = async () => {
      const { data } = await apiClient.listExercises();
      console.log("data", data.exercise);
      if (data) {
        setExercises(data.exercise);
      }
    };
    fetchExercises();
  }, []);

  console.log("array", exercises);
  return (
    <div className="cards">
      {exercises.map((exercise) => (
        <ExerciseCard
          name={exercise.name}
          category={exercise.category}
          duration={exercise.duration}
          intensity={exercise.intensity}
          timestamp={exercise.timestamp || `${month}/${day}/${year} ${time}`}
        />
      ))}
    </div>
  );
};

export default ExerciseLog;
