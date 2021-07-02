import React from "react";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import apiClient from "../services/apiClient";
import { Button } from "@material-ui/core";
import "./NutritionInfo.css";

const NutritionInfo = ({ nutrition, setNutrition }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    calories: "",
  });

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    if (form.name == "" || form.category == "" || form.quantity == "" || form.calories == "") {
      return alert("Please fill out the entire form.");
    }

    setIsProcessing(true);

    const { data } = await apiClient.addCalorieData({
      data: {
        name: form.name,
        category: form.category,
        quantity: form.quantity,
        calories: form.calories,
      },
    });
    // log data to see object
    console.log("34", data);
    setNutrition([...nutrition, data.calories]);
    setIsProcessing(false);
  };

  return (
    <div className="NutritionInfo">
      <div className="form">
        <form noValidate autoComplete="off" className="nutrition-form">
          <TextField
            className="textfield"
            type="text"
            variant="standard"
            name="name"
            placeholder="Name of food"
            value={form.name}
            onChange={handleOnInputChange}
          />
          <TextField
            className="textfield"
            type="text"
            variant="standard"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleOnInputChange}
          />
          <TextField
            className="textfield"
            type="number"
            variant="standard"
            name="quantity"
            placeholder="Quantity"
            value={form.quantity}
            onChange={handleOnInputChange}
          />
          <TextField
            className="textfield"
            type="number"
            variant="standard"
            name="calories"
            placeholder="Calories"
            value={form.calories}
            onChange={handleOnInputChange}
          />
          <Button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
            variant="contained"
            style={{ backgroundColor: "white" }}
          >
            {isProcessing ? "Loading..." : "Submit Food"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NutritionInfo;
