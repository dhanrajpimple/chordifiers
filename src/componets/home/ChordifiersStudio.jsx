import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChordifiersStudio() {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#fcee09] px-5 py-16 text-center font-serif"
       style={{ fontFamily: 'Plus Jakarta Sans, serif' }}
    >
      <h1 className="text-[3rem] mb-5 leading-tight sm:text-4xl">The Chordifiers Studio</h1>
      <p className="text-base mb-2">Client Rating (+50 on Google Maps)</p>
      <div className="text-xl mb-5 text-black">★★★★★</div>

      <div className="inline-block bg-white px-5 py-2 rounded-full text-black shadow-md">
        Want to book a studio session?{' '}
        <span
          onClick={() => {
            navigate('/one_one/upcoming');
            window.scrollTo(0, 0);
          }}
          className="bg-[#fcee09] px-2 py-0.5 rounded-md text-sm font-bold cursor-pointer"
        >
          See More
        </span>
      </div>
    </div>
  );
}
