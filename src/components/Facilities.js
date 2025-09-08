import React from "react";
import "./Section.css";

const Facilities = () => {
  const facilities = [
    "Library & Reading Room – Rich collection of books, journals, and e-resources.",
    "Computer Lab – Equipped with latest software and high-speed internet.",
    "Spacious Classrooms – Modern teaching aids with projectors & smart boards.",
    "Sports & Recreation – Indoor and outdoor facilities for all-round development."
  ];

  return (
    <section className="section">
      <h2>Our Facilities</h2>
      <ul>
        {facilities.map((f, index) => (
          <li key={index}>{f}</li>
        ))}
      </ul>
    </section>
  );
};

export default Facilities;
