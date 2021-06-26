import "./App.css";
import Navbar from "../navbar/Navbar";
import Homepage from "../homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
      if (error) setError(error);
    };
    const token = localStorage.getItem("student_store_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
