import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MusicProducerCTA() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#111] text-white px-6 py-10 flex flex-wrap justify-between items-center box-border">
      <div className="max-w-full flex-1 min-w-[250px]">
        <p className="text-[2.5rem] font-semibold mb-2 leading-tight sm:text-3xl md:text-[2.5rem]"  style={{ fontFamily: 'Plus Jakarta Sans, serif' }}>
          Want to become a <span className="font-semibold">Music Producer</span>?
        </p>
        <p className="text-sm text-gray-400" style={{ fontFamily: 'Roboto, serif' }}  >
          We’ll help you to amplify your career and reach new heights.
        </p>
      </div>

      <button
        onClick={() => {
          navigate('/one_one/upcoming');
          window.scrollTo(0, 0);
        }}
        className="bg-yellow-400 text-black font-semibold text-base rounded-full px-8 py-3 cursor-pointer mt-6 sm:mt-0"
        style={{ backgroundColor: '#fcee09' }} // to keep exact yellow color
      >
        Apply
      </button>
    </div>
  );
}
