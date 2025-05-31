import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componets/constant/Navbar';
import Footer from './componets/constant/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Institute from './pages/Institute';
import CertificationCourses from './pages/CertificationCourses';
import DiplomaCourses from './pages/DiplomaCourses';
import ScrollToTop from './componets/constant/Topscroll';
import InstrumentCertificate from './pages/InstrumentCertificate';
import Commingsoon from './pages/Commingsoon';
import MusicCourse from './pages/MusicCourse';
import Musiccertificateform from './pages/Music-certificate-form';
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Institute & Nested Routes */}
        <Route path="/institute" element={<Institute />}/>
          <Route path="/institute/certification-courses" element={<CertificationCourses />} />
          <Route path="/institute/diploma-courses" element={<DiplomaCourses />} />
          <Route path="/institute/instrument-certificate" element={<InstrumentCertificate />} />
          <Route path="/institute/music-certificate" element={<MusicCourse/>} />
          <Route path="/comingsoon" element={<Commingsoon />} />
          <Route path="/Music-certificate-form" element={<Musiccertificateform />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
