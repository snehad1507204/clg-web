import React from 'react';
import '../styles/home.css';
import heroImage from '../assets/hero.jpg';
import newGif from '../images/new.gif';
import noticeImg from '../images/notice-board-img.png';


function Home() {
  return (
    <>
      {/* Top News Header */}
      <div className="headquote-container">
        <marquee className="headquote" behavior="scroll" direction="left" scrollamount="10" loop="infinite">
          Education is the key to success, and at Sw. Narendra Singh Mahavidyalaya we unlock every student's potential. Education is the most powerful weapon which you can use to change the world
        </marquee>
      </div>

      {/* Hero Slider */}
      <div className="hero-img">
        <img src={heroImage} alt="College Campus" />
      </div>

      {/* Main Content */}
      <div className="container margin-top-50 main-sections">
        {/* Latest News */}
        <div className="card">
          <div className="heading-sect">
            <h3 className="head-title">Latest News</h3>
          </div>
          <marquee direction="up" scrollamount="3">
            <ul className="latest-news-ul">
              <li>Admissions 2025 last date: 25 Aug. <img src={newGif} alt="New" /></li>
              <li>B.A., B.Sc., B.Ed. classes start: 1 Sept. <img src={newGif} alt="New" /></li>
              <li>Orientation Program: 3 Sept. <img src={newGif} alt="New" /></li>
              <li>Library renovation completed. <img src={newGif} alt="New" /></li>
              <li>Scholarship forms till 15 Sept. <img src={newGif} alt="New" /></li>
              <li>NSS enrollment starts 20 Aug. <img src={newGif} alt="New" /></li>
              <li>Annual Sports Meet in Oct. <img src={newGif} alt="New" /></li>
              <li>Internal Exams in Nov. <img src={newGif} alt="New" /></li>
            </ul>
          </marquee>
        </div>

        {/* Upcoming Events */}
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

        {/* Notice Board */}
        <div className="card">
          <div className="heading-sect">
            <h3 className="head-title">Notice Board</h3>
          </div>
          <ul className="notice-board-list">
            <li><img src={noticeImg} alt="Notice" /> Admissions 2025 – Last Date: 25th August 2025</li>
            <li><img src={noticeImg} alt="Notice" /> Regular Classes start 1st September 2025</li>
            <li><img src={noticeImg} alt="Notice" /> Renovated Library facilities open now</li>
            <li><img src={noticeImg} alt="Notice" /> Internal Exams scheduled in November</li>
          </ul>
        </div>

        {/* Student Life */}
        <div className="card">
          <div className="heading-sect">
            <h3 className="head-title">Student Life</h3>
          </div>
          <ul className="student-life">
            <li>Regular Cultural & Sports Activities</li>
            <li>Skill Development Workshops</li>
            <li>Active Student Clubs & Societies</li>
            <li>Supportive and Inclusive Environment</li>
          </ul>
        </div>

        {/* Facilities */}
        <div className="card">
          <div className="heading-sect">
            <h3 className="head-title">Our Facilities</h3>
          </div>
          <ul className="college-campus-list">
            <li><b>Library & Reading Room –</b> Rich collection of books, journals, and e-resources.</li>
            <li><b>Computer Lab –</b> Equipped with latest software and high-speed internet.</li>
            <li><b>Spacious Classrooms –</b> Modern teaching aids with projectors & smart boards.</li>
            <li><b>Sports & Recreation –</b> Indoor & outdoor facilities for all-round development.</li>
          </ul>
        </div>

        {/* College Campus */}
        <div className="card">
          <div className="heading-sect">
            <h3 className="head-title">College Campus</h3>
          </div>
          <ul className="college-campus-list">
            <li><b>Plot Area:</b> 10,250 sq. meters – eco-friendly learning environment.</li>
            <li><b>Built-Up Area:</b> 40,000 sq. ft. with modern classrooms & labs.</li>
            <li><b>Green Campus:</b> Lush gardens & open spaces for holistic growth.</li>
            <li><b>Facilities:</b> Library, seminar halls, labs, sports & hostel.</li>
          </ul>
        </div>
      </div>

      {/* Why Choose College */}
      <div className="why-choose">
        <div className="container">
          <h2>Why Choose Our College?</h2>
          <div className="underline"></div>
          <p><strong>Modern Curriculum:</strong> Updated courses designed to meet industry standards.</p>
          <p><strong>Expert Faculty:</strong> Experienced educators dedicated to student success.</p>
          <p><strong>Strong Placements:</strong> Partnerships with top companies ensure career growth.</p>
          <p><strong>Leadership:</strong> Guided by visionaries committed to quality education.</p>
        </div>
      </div>

      
    </>
  );
}

export default Home;
