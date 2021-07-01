import React from "react";
import Navbar from "../navbar/Navbar";
import "./Exercise.css";
import ExerciseContent from "./ExerciseContent";

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
        <ExerciseContent user={user} />
      )}
    </div>
  );
};

export default Exercise;
