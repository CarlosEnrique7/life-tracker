import React from "react";
import Home from "../home/Home";
import Cards from "../cards/Cards";
import Navbar from "../navbar/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cards />
    </div>
  );
};

export default Homepage;
