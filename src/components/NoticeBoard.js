import React from "react";
import "./Section.css";

const NoticeBoard = () => {
  const notices = [
    "Admissions 2025 – Last Date: 25th August 2025",
    "Regular Classes start 1st September 2025",
    "Renovated Library facilities open now",
    "Internal Exams scheduled in November"
  ];

  return (
    <section className="section">
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
    </section>
  );
};

export default NoticeBoard;
