import React from "react";
import Navbar from "../navbar/Navbar";
import ActivityGrid from "../activityGrid/ActivityGrid";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";

const Activity = ({ user }) => {
  const [exercise, setExercise] = useState(0);
  const [calories, setCalories] = useState(0);
  const [sleep, setSleep] = useState(0);

  console.log(user);
  const fetchExerciseData = async () => {
    const { data, errors } = await apiClient.getExerciseData();
    console.log(data);
    try {
      console.log(data.exercise.avg_duration);
      const duration = data.exercise.avg_duration;
      const avgDuration = Math.round(duration);
      console.log(avgDuration);
      setExercise(avgDuration);
    } catch (err) {
      console.log(err);
      setExercise(0);
    }
  };

  const fetchCalorieData = async () => {
    const { data, errors } = await apiClient.getCalorieData();
    console.log(data);
    try {
      console.log("calories", data.calories.avg_calories);
      const calories = data.calories.avg_calories;
      const avgCalories = Math.round(calories);
      console.log(avgCalories);
      setCalories(avgCalories);
    } catch (err) {
      console.log(err);
      setCalories(0);
    }
  };

  const fetchSleepData = async () => {
    const { data, errors } = await apiClient.getSleepData();
    console.log(data);
    try {
      console.log(data.sleep.avg_duration);
      const duration = data.sleep.avg_duration;
      const avgDuration = Math.round(duration);
      console.log(avgDuration);
      setSleep(avgDuration);
    } catch (err) {
      console.log(err);
      setSleep(0);
    }
  };

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      console.log("No user to fetch data for");
    } else {
      fetchExerciseData();
      fetchCalorieData();
      fetchSleepData();
    }
  }, []);

  return (
    <div className="Activity">
      <Navbar />
      {Object.keys(user).length === 0 ? (
        <h1 style={{ marginTop: 200, textAlign: "center" }}>Not logged in</h1>
      ) : (
        <ActivityGrid exercise={exercise} calories={calories} sleep={sleep} />
      )}
    </div>
  );
};

export default Activity;
