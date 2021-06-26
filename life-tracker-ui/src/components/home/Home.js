import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <h1 className="header-title">Life Tracker</h1>
        <p className="header-sub">Helping you take back control of your world.</p>
      </div>
      <div className="header-image">
        <img
          className="image-head"
          src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
