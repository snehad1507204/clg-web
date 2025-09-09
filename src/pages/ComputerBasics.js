import React from 'react';
import '../styles/computer-basics.css';

function ComputerBasics() {
  return (
    <div className="computer-basics">
      <header className="page-header">
        <h1>Computer Basics Course</h1>
        <p>Learn essential computer skills step by step — from understanding hardware & software to office applications and internet usage.</p>
      </header>

      <div className="course-content">
        <section className="level">
          <h2>Level 1: Beginner</h2>
          <div className="modules">
            <div className="module">
              <h3>Module 1: Introduction to Computers</h3>
              <ul>
                <li>Types of computers and their uses</li>
                <li>Basic hardware components</li>
                <li>Operating system overview (Windows/Linux basics)</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 2: Basic Applications</h3>
              <ul>
                <li>MS Word: Creating and formatting documents</li>
                <li>MS Excel: Basic formulas and spreadsheet creation</li>
                <li>MS PowerPoint: Simple presentations</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 3: Internet & Email</h3>
              <ul>
                <li>Browsing the web safely</li>
                <li>Creating and managing email accounts</li>
                <li>Basic online communication</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="level">
          <h2>Level 2: Intermediate</h2>
          <div className="modules">
            <div className="module">
              <h3>Module 1: File & Data Management</h3>
              <ul>
                <li>Organizing files and folders</li>
                <li>Using USB and cloud storage</li>
                <li>Basic data entry techniques</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 2: Advanced Office Skills</h3>
              <ul>
                <li>MS Excel: Charts, tables, and formulas</li>
                <li>MS Word: Templates and advanced formatting</li>
                <li>MS PowerPoint: Animations and transitions</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 3: Digital Tools</h3>
              <ul>
                <li>Google Drive, Docs, Sheets, and Slides</li>
                <li>Using collaboration tools online</li>
                <li>Basic troubleshooting and support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="level">
          <h2>Level 3: Advanced</h2>
          <div className="modules">
            <div className="module">
              <h3>Module 1: Networking & Security</h3>
              <ul>
                <li>Understanding networks and connectivity</li>
                <li>Internet safety and cybersecurity basics</li>
                <li>Data backup and recovery</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 2: Professional Applications</h3>
              <ul>
                <li>Email etiquette and professional communication</li>
                <li>Collaborative online projects</li>
                <li>Time management tools</li>
              </ul>
            </div>
            <div className="module">
              <h3>Module 3: Practical Projects</h3>
              <ul>
                <li>Creating professional documents and presentations</li>
                <li>Data analysis in Excel</li>
                <li>Real-life digital project simulations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ComputerBasics;
