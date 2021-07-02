import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import ExerciseCard from "./ExerciseCard";
import "./ExerciseLog.css";

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

const ExerciseLog = ({ exercises, setExercises }) => {
  const currentTime = new Date().toLocaleString();
  console.log("current time", currentTime);

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
          timestamp={formatDate(exercise.timestamp) == "Invalid Date" ? currentTime : formatDate(exercise.timestamp)}
        />
      ))}
    </div>
  );
};

export default ExerciseLog;
