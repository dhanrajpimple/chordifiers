import React from 'react';
import diskone from '../../assets/diskone.jpg'
const ProMusicServices = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 px-5 sm:px-10 md:px-16 py-10 bg-[#F0E81B] font-[Georgia] text-center md:text-left">
      
      {/* Left Side - Image */}
      <div className="flex-1 min-w-[300px] flex justify-center">
        <img
          src={diskone}
          alt="Star Music"
          className="w-[70%] md:w-[90%] max-w-[350px] rounded-[20px] shadow-xl"
        />
      </div>

      {/* Right Side - Text */}
      <div className="flex-1 min-w-[300px] max-w-[600px] px-2">
        <h3 className="text-[24px] md:text-[60px] text-black font-light leading-tight font-['Plus_Jakarta_Sans']">
          Looking for Pro Music Services?
        </h3>
      </div>
    </div>
  );
};

export default ProMusicServices;
