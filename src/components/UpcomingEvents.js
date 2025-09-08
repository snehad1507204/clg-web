import React from "react";
import "./Section.css";

const UpcomingEvents = () => {
  const events = [
    { date: "24 Sep", title: "Seminar on B.Sc courses" },
    { date: "26 Sep", title: "Seminar on B.A courses" },
    { date: "28 Sep", title: "Seminar on B.Ed courses" },
    { date: "28 Oct", title: "2nd Convocation Ceremony" }
  ];

  return (
    <section className="section">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.date}:</strong> {event.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEvents;
