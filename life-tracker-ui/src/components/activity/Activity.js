import React from "react";
import Navbar from "../navbar/Navbar";
import ActivityGrid from "../activityGrid/ActivityGrid";
import apiClient from "../services/apiClient";
import { useState, useEffect } from "react";

const Activity = ({ user }) => {
  const [exercise, setExercise] = useState("No Exercises to display");
  const [calories, setCalories] = useState("No Calories to display");
  const [sleep, setSleep] = useState("No Sleep to display");

  console.log(user);
  const fetchExerciseData = async () => {
    const { data, errors } = await apiClient.getExerciseData();
    try {
      console.log(data.activities.avg_duration);
      const duration = data.activities.avg_duration;
      const avgDuration = Math.round(duration);
      console.log(avgDuration);
      setExercise(avgDuration);
    } catch (err) {
      console.log(err);
      setExercise(0);
    }
  };

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      console.log("No user to fetch data for");
    } else {
      fetchExerciseData();
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
