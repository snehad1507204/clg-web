import React from "react";
import "./Section.css";

const StudentLife = () => {
  const activities = [
    "Regular Cultural & Sports Activities",
    "Skill Development Workshops",
    "Active Student Clubs & Societies",
    "Supportive and Inclusive Environment"
  ];

  return (
    <section className="section">
      <h2>Student Life</h2>
      <ul>
        {activities.map((act, index) => (
          <li key={index}>{act}</li>
        ))}
      </ul>
    </section>
  );
};

export default StudentLife;
