import React from 'react';

function UpcomingEvents() {
  return (
    <div className="card">
      <div className="heading-sect">
        <h3 className="head-title">Upcoming Events</h3>
      </div>
      <ul className="upcoming-event-list">
        <li><span className="event-date">24 <br /> Sep</span> Seminar on B.Sc courses</li>
        <li><span className="event-date">26 <br /> Sep</span> Seminar on B.A courses</li>
        <li><span className="event-date">28 <br /> Sep</span> Seminar on B.Ed courses</li>
        <li><span className="event-date">28 <br /> Oct</span> 2nd Convocation Ceremony</li>
      </ul>
    </div>
  );
}

export default UpcomingEvents;
