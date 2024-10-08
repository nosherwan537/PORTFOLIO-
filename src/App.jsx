// src/App.jsx or src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './AppBg.css';  // Import the CSS file for background
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/footer';
import AboutPage from './aboutpage/aboutpage';
import SkillsPage from './skillspage/skillspage';
import EducationPage from './educationpage/educationpage';
import LiveProjects from './liveprojects/liveprojects';

function App() {
  return (
    <Router>
      <div className="relative h-screen w-screen overflow-hidden montserrat-yes">
        <div className="background-overlay"></div>
        <div className="relative z-10 flex flex-col justify-start h-full w-full">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<LiveProjects />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="*" element={<Navigate to="/home" replace />} /> {/* Default redirect to homepage */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
