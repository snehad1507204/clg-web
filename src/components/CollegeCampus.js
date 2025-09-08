import React from "react";
import "./Section.css";

const CollegeCampus = () => {
  const campus = [
    "Plot Area: 10,250 sq. meters – eco-friendly learning environment.",
    "Built-Up Area: 40,000 sq. ft. with modern classrooms & labs.",
    "Green Campus: Lush gardens & open spaces for holistic growth.",
    "Facilities: Library, seminar halls, labs, sports & hostel."
  ];

  return (
    <section className="section">
      <h2>College Campus</h2>
      <ul>
        {campus.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </section>
  );
};

export default CollegeCampus;
