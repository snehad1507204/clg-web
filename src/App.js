import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Eligibility from './pages/Eligibility';
import Admission from './pages/Admission';
import Faculty from './pages/Faculty';
import FreeCourses from './pages/FreeCourses';
import Contact from './pages/Contact';
import NCC from './pages/NCC';
import Scholarship from './pages/Scholarship';
import AdmissionProcess from './pages/AdmissionProcess';
import AdmissionQuery from './pages/AdmissionQuery';
import './styles/main.css';

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
