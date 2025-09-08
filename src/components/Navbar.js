import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/logo2.png";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import FreeCourses from "../pages/FreeCourses";
import Faculty from "../pages/Faculty";
import Contact from "../pages/Contact";
import Admission from "../pages/Admission";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      {/* Logo & Title */}
      <div className="logo-title">
        <img src={Logo} alt="College Logo" />
        <span>Sw. Narendra Singh Mahavidyalaya</span>
      </div>

      {/* Hamburger for mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Dropdown */}
        <li className="dropdown">
          <a href="/" onClick={(e) => {
              e.preventDefault();
              setAdmissionOpen(!admissionOpen);
            }}>Admission▾</a>
          <ul className={`dropdown-menu ${admissionOpen ? "show" : ""}`}>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/admission">Eligibility</Link></li>
            <li><Link to="/admission">Admission Process</Link></li>
            <li><Link to="/admission">Admission Query</Link></li>
            <li><Link to="/admission">Scholarship</Link></li>
            <li><Link to="/admission">NCC</Link></li>
          </ul>
        </li>

        <li><Link to="/free-courses">Free Courses</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    {/* Routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/free-courses" element={<FreeCourses />} />
      <Route path="/faculty" element={<Faculty />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admission" element={<Admission />} />
    </Routes>
    </>
  );
};

export default Navbar;
