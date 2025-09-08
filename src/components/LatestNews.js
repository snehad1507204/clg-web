import React from "react";
import "./Section.css";

const LatestNews = () => {
  const news = [
    "Admissions 2025 last date: 25 Aug.",
    "B.A., B.Sc., B.Ed. classes start: 1 Sept.",
    "Orientation Program: 3 Sept.",
    "Library renovation completed.",
    "Scholarship forms till 15 Sept.",
    "NSS enrollment starts 20 Aug.",
    "Annual Sports Meet in Oct.",
    "Internal Exams in Nov."
  ];

  return (
    <section className="section">
      <h2>Latest News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default LatestNews;
