import React from "react";
import Navbar from "../navbar/Navbar";
import "./Exercise.css";
import ExerciseInfo from "../exerciseInfo/ExerciseInfo";

const Exercise = ({ user }) => {
  return (
    <div className="Exercise">
      <Navbar />
      <div className="banner">
        <h1>Exercises</h1>
      </div>
      {Object.keys(user).length === 0 ? (
        <h1 style={{ marginTop: 200, textAlign: "center" }}>Not logged in</h1>
      ) : (
        <ExerciseInfo />
      )}
    </div>
  );
};

export default Exercise;
