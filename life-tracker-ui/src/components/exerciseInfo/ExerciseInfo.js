import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import apiClient from "../services/apiClient";
import { Button } from "@material-ui/core";

const ExerciseInfo = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);

    const { data } = await apiClient.addExerciseData({
      data: {
        name: form.name,
        category: form.category,
        duration: form.duration,
        intensity: form.intensity,
      },
    });
    // log data to see object
    console.log("31", data);

    setIsProcessing(false);
  };

  return (
    <div className="ExerciseInfo">
      <div className="form">
        <form noValidate autoComplete="off" className="exercise-form">
          <TextField
            type="text"
            variant="standard"
            name="name"
            placeholder="Name of exercise"
            value={form.name}
            onChange={handleOnInputChange}
          />
          <TextField
            type="text"
            variant="standard"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleOnInputChange}
          />
          <TextField
            type="number"
            variant="standard"
            name="duration"
            placeholder="Duration"
            value={form.duration}
            onChange={handleOnInputChange}
          />
          <TextField
            type="number"
            variant="standard"
            name="intensity"
            placeholder="Intensity"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
          <Button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
            variant="contained"
            fullWidth
            style={{ backgroundColor: "white" }}
          >
            {isProcessing ? "Loading..." : "Submit Exercise"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ExerciseInfo;
