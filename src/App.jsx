import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componets/constant/Navbar';
import Footer from './componets/constant/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Institute from './pages/Institute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/institute" element={<Institute />} />
      </Routes>
      <Footer />
      </>
    
  );
}

export default App;
