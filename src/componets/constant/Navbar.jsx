import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDropdownClick = () => {
    if (window.innerWidth <= 768) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTimeout(() => setDropdownOpen(false), 100);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white w-full sticky z-50 font-jakarta text-l py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center  px-6 md:px-0">
        <Link to="/" onClick={handleLinkClick}>
          <img
            src={logo}
            alt="theChordifiersStudio"
            className="h-16 md:h-20 w-auto"
          />
        </Link>

        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`flex-col md:flex-row md:flex md:items-center absolute md:static top-full left-0 right-0 bg-black md:bg-transparent ${menuOpen ? 'flex' : 'hidden'} md:space-x-6`}>
          <Link to="/" className="block px-4 py-2" onClick={handleLinkClick}>Home</Link>
          <Link to="/institute" className="block px-4 py-2" onClick={handleLinkClick}>Institute</Link>
        <a
  href="https://theone11.show"
  target="_blank"
  rel="noopener noreferrer"
  className="block px-4 py-2"
  onClick={() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }}
>
  The One11 Show
</a>
          <div
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <span
              onClick={handleDropdownClick}
              className="block px-4 py-2 cursor-pointer"
            >
              Services
            </span>

            <div className={`absolute left-0 mt-1 bg-gray-900 rounded shadow-lg z-[100] w-56 flex flex-col ${dropdownOpen ? 'block' : 'hidden'} md:top-full md:absolute`}>
              {[
                'Pro Music Composition',
                'Pro Audio Recording',
                'Pro Audio Editing & Arrangement',
                'Pro Sound Design',
                'Pro Audio Mixing',
                'Pro Audio Mastering',
                'Music Distribution',
                'Video Production',
                'Portfolio Shoot',
                'Music Promotion',
                'Artist',
                'Artist Promotion',
                'Artist Management'
              ].map((service, index) => (
                <Link
                  key={index}
                  to="/one_one/upcoming"
                  onClick={handleLinkClick}
                  className="px-4 py-2 hover:bg-gray-700 text-sm"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/one_one/upcoming" className="block px-4 py-2" onClick={handleLinkClick}>Record Label</Link>
          <Link to="/about" className="block px-4 py-2" onClick={handleLinkClick}>About Us</Link>
        </div>
      </div>
    </nav>
  );
}
