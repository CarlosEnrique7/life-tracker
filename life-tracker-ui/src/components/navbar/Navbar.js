import React from "react";
import "./Navbar.css";
import logo from "../assets/codepath.svg";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const style = {
  background: "linear-gradient(45deg, #48CAE4 30%, #0077B6 90%)",
  height: 48,
  boxShadow: "0 3px 5px 2px rgba(0, 150, 199, .3)",
};

const signOutStyle = {
  background: "linear-gradient(45deg, #D90429 30%, #EF233C 90%)",
  height: 48,
  boxShadow: "0 3px 5px 2px rgba(239, 35, 60, .3)",
};

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("fitness_tracker_token")) {
      setLoggedIn(!loggedIn);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/activity">
          <h5 className="link-name">Activity</h5>
        </Link>
        <Link to="/exercise">
          <h5 className="link-name">Exercise</h5>
        </Link>
        <Link to="/calories">
          <h5 className="link-name">Nutrition</h5>
        </Link>
        <h5 className="link-name">Sleep</h5>
      </div>
      {!loggedIn ? (
        <div className="buttons">
          <Link to="/login">
            <Button variant="outlined" color="primary" style={{ height: 48 }}>
              Sign in
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="contained" color="primary" style={style}>
              Register
            </Button>
          </Link>
        </div>
      ) : (
        <div className="buttons">
          <Button variant="contained" color="secondary" style={signOutStyle} onClick={handleLogOut}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
