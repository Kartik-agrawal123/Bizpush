import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import PopularProduct from "../components/PopularProduct";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <div className="bg-gradient-to-r from-customRed to-customBlue">
      <NavBar />
      <Hero />
      {/* <PopularProduct /> */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
