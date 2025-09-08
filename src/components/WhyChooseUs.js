import React from "react";
import "./Section.css";

const WhyChooseUs = () => {
  const points = [
    "Modern Curriculum: Updated courses designed to meet industry standards.",
    "Expert Faculty: Experienced educators dedicated to student success.",
    "Strong Placements: Partnerships with top companies ensure career growth.",
    "Leadership: Guided by visionaries committed to quality education."
  ];

  return (
    <section className="section">
      <h2>Why Choose Our College?</h2>
      <ul>
        {points.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
