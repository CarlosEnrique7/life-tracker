import React from "react";
import "./Navbar.css";
import logo from "../assets/codepath.svg";
import Button from "@material-ui/core/Button";
import { useState } from "react";

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

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="nav-links">
        <h5 className="link-name">Activity</h5>
        <h5 className="link-name">Exercise</h5>
        <h5 className="link-name">Nutrition</h5>
        <h5 className="link-name">Sleep</h5>
      </div>
      {!loggedIn ? (
        <div className="buttons">
          <Button variant="outlined" color="primary">
            Sign in
          </Button>
          <Button variant="contained" color="primary" style={style}>
            Register
          </Button>
        </div>
      ) : (
        <div className="buttons">
          <Button variant="contained" color="secondary" style={signOutStyle}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
