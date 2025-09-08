import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/hero.jpg"; // apni image src/assets me save karein

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={heroImg} alt="College Campus" className="hero-img" />
    </section>
  );
};

export default HeroSection;
