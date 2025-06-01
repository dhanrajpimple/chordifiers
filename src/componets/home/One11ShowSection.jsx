import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel '; // Make sure this exists or update path
import bg from '../../assets/one11mainlogo-bg.png';

const One11ShowSection = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center bg-[#F0E81B] px-5 sm:px-10 md:px-20 py-10 font-['Orbitron']">
      <h2 className="my-4">
        <img
          src={bg}
          alt="The ONE11 Show"
          className="mx-auto w-[200px] sm:w-[300px] md:w-[356px] -mt-6"
        />
      </h2>

      <p className="max-w-3xl mx-auto text-[14px] sm:text-lg md:text-[25px] leading-relaxed mt-6 " style={{ fontFamily: 'Commissioner, serif' }}>
        <strong>“The One11 Show”</strong> is an artist launch platform by The Chordifiers Studio, that focuses on
        launching artists and creators of various niches into the world.
      </p>

      <div className="my-6 sm:my-8 overflow-hidden">
        <ImageCarousel />
      </div>

      <h4 className="text-[16px] sm:text-2xl md:text-[40px] leading-snug mt-6 " style={{ fontFamily: 'Rubik, serif' }}>
        Click here to register for
        <br />
        “The ONE11 Show”
      </h4>

      <button
  
        className="bg-black text-white mt-4 py-2 px-6 sm:py-3 sm:px-10 text-sm sm:text-base rounded-full font-bold font-sans hover:bg-gray-900 transition"
      >
       <a href="https://theone11.show"
  target="_blank"
  rel="noopener noreferrer"> Register Now </a>
      </button>
    </div>
  );
};

export default One11ShowSection;
