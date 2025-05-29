import React from 'react';
import middle from "../../assets/middle.png"
const ComposeSection = () => {
  return (
    <section className="py-8 md:py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Top Left Card - Song Writing */}
          <div className="bg-yellow-400 text-black p-6 rounded-lg flex items-center justify-center text-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2">
                Song Writing
              </h3>
              <p className="text-sm sm:text-base">
                Crafting lyrics and melodies for your next hit
              </p>
            </div>
          </div>

          {/* Center Content - Background Image with Text and Button */}
          <div className="relative col-span-1 md:col-span-1 row-span-2 flex items-center justify-center">
            {/* Background Image (simulated with a div) */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{
                backgroundImage: `url(${middle})`, // Replace with actual image URL
              }}
            ></div>
            {/* Overlay Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
                Let's compose your hit!
              </h2>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
                Compose Now
              </button>
            </div>
          </div>

          {/* Top Right Card - Soundtracks */}
          <div className="bg-gray-200 text-black p-6 rounded-lg flex items-center justify-center text-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2">
                Soundtracks
              </h3>
              <p className="text-sm sm:text-base">
                Crafting lyrics and melodies for your next hit
              </p>
            </div>
          </div>

          {/* Bottom Left Card - Jingles & Themes */}
          <div className="bg-gray-200 text-black p-6 rounded-lg flex items-center justify-center text-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2">
                Jingles & Themes
              </h3>
              <p className="text-sm sm:text-base">
                Catchy and memorable music for brands or campaigns
              </p>
            </div>
          </div>

          {/* Bottom Right Card - Music for Media */}
          <div className="bg-yellow-400 text-black p-6 rounded-lg flex items-center justify-center text-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase mb-2">
                Music for Media
              </h3>
              <p className="text-sm sm:text-base">
                Composing the perfect soundtrack for film, ads, or games
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComposeSection;