import React from 'react';
import newGif from '../../images/new.gif';

function LatestNews() {
  return (
    <div className="card">
      <div className="heading-sect">
        <h3 className="head-title">Latest News</h3>
      </div>
      <marquee direction="up" scrollamount="3">
        <ul className="latest-news-ul">
          <li>Admissions 2025 last date: 25 Aug. <img src={newGif} alt="new" /></li>
          <li>B.A., B.Sc., B.Ed. classes start: 1 Sept. <img src={newGif} alt="new" /></li>
          <li>Orientation Program: 3 Sept. <img src={newGif} alt="new" /></li>
          <li>Library renovation completed. <img src={newGif} alt="new" /></li>
          <li>Scholarship forms till 15 Sept. <img src={newGif} alt="new" /></li>
          <li>NSS enrollment starts 20 Aug. <img src={newGif} alt="new" /></li>
          <li>Annual Sports Meet in Oct. <img src={newGif} alt="new" /></li>
          <li>Internal Exams in Nov. <img src={newGif} alt="new" /></li>
        </ul>
      </marquee>
    </div>
  );
}

export default LatestNews;
