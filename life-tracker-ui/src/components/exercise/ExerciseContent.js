import React from "react";
import { useState } from "react";
import ExerciseInfo from "../exerciseInfo/ExerciseInfo";
import ExerciseLog from "../exerciseLog/ExerciseLog";

const ExerciseContent = ({ user }) => {
  const [exercises, setExercises] = useState([]);

  return (
    <div>
      <div className="Form">
        {Object.keys(user).length === 0 ? (
          <h1 style={{ marginTop: 200, textAlign: "center" }}>Not logged in</h1>
        ) : (
          <ExerciseInfo exercises={exercises} setExercises={setExercises} />
        )}
      </div>
      <ExerciseLog user={user} exercises={exercises} setExercises={setExercises} />
    </div>
  );
};

export default ExerciseContent;
