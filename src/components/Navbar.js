import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo2.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  return (
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
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>

        {/* Dropdown */}
        <li className="dropdown">
          <a href="/" onClick={(e) => {
              e.preventDefault();
              setAdmissionOpen(!admissionOpen);
            }}>Admission▾</a>
          <ul className={`dropdown-menu ${admissionOpen ? "show" : ""}`}>
            <li><a href="/">Courses</a></li>
            <li><a href="/">Eligibility</a></li>
            <li><a href="/">Admission Process</a></li>
            <li><a href="/">Admission Query</a></li>
            <li><a href="/">Scholarship</a></li>
            <li><a href="/">NCC</a></li>
          </ul>
        </li>

        <li><a href="/">Free Courses</a></li>
        <li><a href="/">Gallery</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
