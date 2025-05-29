import React from 'react';
import piono from '../../assets/piano.jpg'
const JoinUsSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 sm:px-10 md:px-[200px] py-10 gap-8 bg-white font-['Plus_Jakarta_Sans']">
      {/* Left Side */}
      <div className="flex-1 min-w-[300px] max-w-full md:max-w-[50%] text-center md:text-left space-y-5" style={{ fontFamily: 'Plus Jakarta Sans, serif' }}>
        <p className="text-[22px] md:text-[40px] leading-snug font-semibold">
          Are you ready to take your
          <br />
          Music Career to the next level?
        </p>
        <p className="text-[16px] leading-relaxed " style={{ fontFamily: 'Roboto, serif' }}>
          Our team of industry professionals are here to guide you through every step of your music journey and provide you with tailored guidance, mentorship and strategies personalized for your success.
        </p>
        <button
          
          className="bg-black text-[#F0E81B] text-[16px] px-5 py-2 md:px-6 md:py-3 rounded-[20px] hover:bg-gray-900 transition font-semibold"
        >
          Join Us
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 min-w-[300px] max-w-full md:max-w-[50%] text-center">
        <img
          src={piono}
          alt="Music Career Visual"
          className="w-full max-w-[508px] mx-auto h-auto"
        />
      </div>
    </div>
  );
};

export default JoinUsSection;
