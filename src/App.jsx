import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componets/constant/Navbar';
import Footer from './componets/constant/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Institute from './pages/Institute';
import CertificationCourses from './pages/CertificationCourses';
import DiplomaCourses from './pages/DiplomaCourses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Institute & Nested Routes */}
        <Route path="/institute" element={<Institute />}/>
          <Route path="/institute/certification-courses" element={<CertificationCourses />} />
          <Route path="/institute/diploma-courses" element={<DiplomaCourses />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
