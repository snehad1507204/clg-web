import React from "react";
import Navbar from "./components/Navbar";
import LatestNews from "./components/LatestNews";
import UpcomingEvents from "./components/UpcomingEvents";
import NoticeBoard from "./components/NoticeBoard";
import StudentLife from "./components/StudentLife";
import Facilities from "./components/Facilities";
import CollegeCampus from "./components/CollegeCampus";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LatestNews />
      <UpcomingEvents />
      <NoticeBoard />
      <StudentLife />
      <Facilities />
      <CollegeCampus />
      <WhyChooseUs />
      <About />
      <Footer />
    </div>
  );
}

export default App;
