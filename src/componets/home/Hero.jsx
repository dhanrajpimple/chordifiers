import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-[70vh] sm:min-h-[90vh] md:min-h-screen pt-[100px] bg-fixed bg-center bg-cover flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/3bb25b2526519f66c08b0cb47e42ad5d8cbd3adf.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 py-10">
        <img
          src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4d9261216de606e1cb701ad4448c05c248a6e160+(1).png"
          alt="Chordifiers Logo"
          className="w-36 h-36 sm:w-56 sm:h-56 md:w-[300px] md:h-[300px] lg:w-[349px] lg:h-[349px] rounded-full bg-black object-contain mb-6"
        />

        <h1
          className="text-2xl sm:text-3xl font-jakarta md:text-6xl lg:text-6xl font-medium leading-tight"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
        >
          Your Record Label, Production House <br className="hidden sm:block" /> & Music Institute
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          "You Love being Creative? We Love You"
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
