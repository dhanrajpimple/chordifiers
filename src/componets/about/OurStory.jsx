import React from 'react';

const milestones = [
  { date: 'Aug, 2022', event: 'Founded & Established' },
  { date: 'March, 2023', event: 'Ranked to Top 10 Music Studios in North Bengal' },
  { date: 'April, 2023', event: 'Introduced the First Music Production School in the town' },
  { date: 'June, 2023', event: 'Introduced Other Courses' },
  { date: 'Dec, 2024', event: "Ranked to Top 3 Music Studio's & School category in North Bengal" },
  { date: 'June, 2024', event: 'Renovations Started' },
  { date: 'Nov, 2024', event: 'Renovations Ongoing' },
  { date: '2025', event: 'Relaunching Soon' },
];

const OurStory = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black mb-8 md:mb-12">
          Our Story
        </h2>

        <div className="relative mt-8 md:mt-20 pl-4 sm:pl-8">
          {/* Vertical Line (aligned to the left) */}
          <div className="absolute top-0 left-9 sm:left-[70px] w-1 bg-yellow-500 h-full"></div>

          <div className="flex flex-col space-y-8 md:space-y-12 relative z-10">
            {milestones.map((item, index) => (
              <div key={index} className="flex items-start w-full relative">
                {/* Dot (aligned with the vertical line) */}
                <div className="absolute left-6 sm:left-10 transform -translate-x-1/2 w-5 h-5 bg-yellow-500 rounded-full z-20"></div>

                {/* Content box (aligned to the right of the dot) */}
                <div className="ml-12 sm:ml-16 flex flex-col">
                  <h3 className="text-base sm:text-lg font-normal text-black uppercase">
                    {item.date}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-black">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;