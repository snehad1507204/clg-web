import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // React Router v6
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
