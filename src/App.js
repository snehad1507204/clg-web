import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Eligibility from './pages/Eligibility';
<<<<<<< HEAD
import Admission from './pages/Admission';
import Faculty from './pages/Faculty';
import FreeCourses from './pages/FreeCourses';
=======
import Faculty from './pages/Faculty';
import FreeCourses from './pages/FreeCourses';
import ComputerBasics from './pages/ComputerBasics';
import EnglishSpeaking from './pages/EnglishSpeaking';
import DigitalMarketing from './pages/DigitalMarketing';
import CareerGuidance from './pages/CareerGuidance';
import PersonalityDevelopment from './pages/PersonalityDevelopment';
>>>>>>> 65dde52 ( commit)
import Contact from './pages/Contact';
import NCC from './pages/NCC';
import Scholarship from './pages/Scholarship';
import AdmissionProcess from './pages/AdmissionProcess';
import AdmissionQuery from './pages/AdmissionQuery';
import './styles/main.css';
<<<<<<< HEAD
=======
import './App.css';
>>>>>>> 65dde52 ( commit)

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/admissionprocess" element={<AdmissionProcess />} />
            <Route path="/admissionquery" element={<AdmissionQuery />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/free-courses" element={<FreeCourses />} />
<<<<<<< HEAD
=======
            <Route path="/computer-basics" element={<ComputerBasics />} />
            <Route path="/english-speaking" element={<EnglishSpeaking />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/personality-development" element={<PersonalityDevelopment />} />
>>>>>>> 65dde52 ( commit)
            <Route path="/contact" element={<Contact />} />
            <Route path="/ncc" element={<NCC />} />
            <Route path="/scholarship" element={<Scholarship />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
