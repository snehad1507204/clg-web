import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LatestNews from '../components/home/LatestNews';
import UpcomingEvents from '../components/home/UpcomingEvents';
import NoticeBoard from '../components/home/NoticeBoard';
import StudentLife from '../components/home/StudentLife';
import Facilities from '../components/home/Facilities';
import CollegeCampus from '../components/home/CollegeCampus';
import WhyChooseCollege from '../components/home/WhyChooseCollege';
import Footer from '../components/Footer';

import '../styles/home.css';

function Home() {
  return (
    <>
      <HeroSection />
      <div className="main-sections">
        <LatestNews />
        <UpcomingEvents />
        <NoticeBoard />
        <StudentLife />
        <Facilities />
        <CollegeCampus />
      </div>
      <WhyChooseCollege />
      <Footer />
    </>
  );
}

export default Home;
