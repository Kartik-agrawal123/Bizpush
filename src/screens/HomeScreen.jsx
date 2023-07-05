import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-to-r from-customRed to-customBlue">
      <NavBar />
      <Hero />
    </div>
  );
};

export default HomeScreen;
