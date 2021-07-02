import "./App.css";
import Homepage from "../homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import Register from "../register/Register";
import Activity from "../activity/Activity";
import Exercise from "../exercise/Exercise";
import Nutrition from "../nutrition/Nutrition";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("fitness_tracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  // console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        <Route path="/register" element={<Register user={user} setUser={setUser} />} />
        <Route path="/activity" element={<Activity user={user} />} />
        <Route path="/exercise" element={<Exercise user={user} />} />
        <Route path="/calories" element={<Nutrition user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
