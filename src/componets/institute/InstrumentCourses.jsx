import React from 'react';
import guiter from '../../assets/guiter.png'
import drums from '../../assets/drums.png'
import piano from '../../assets/piano.png'
export default function InstrumentCourses() {
  const instruments = [
    {
      id: 'guitar',
      name: 'Guitar',
      image: guiter,
      description: 'Tailored lessons for all skill levels, helping you master guitar at your own pace with expert guidance.'
    },
    {
      id: 'drums',
      name: 'Drums',
      image: drums,
      description: 'Drum lessons for all levels, tailored to your needs. Available online or in-person with experienced instructors.'
    },
    {
      id: 'piano',
      name: 'Piano - Keyboard',
      image: piano,
      description: 'Personalized piano lessons for all levels, available online or in-person with expert instructors and flexible scheduling.'
    }
  ];

  return (
    <div className="bg-[#F0E81B]  min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4" style={{ fontFamily: 'Plus Jakarta Sans, serif' }}>
            Instrument Courses
          </h1>
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {instruments.map((instrument) => (
            <div key={instrument.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Instrument Image */}
              <div className="h-48 sm:h-56 lg:h-48 xl:h-56 overflow-hidden">
                <img 
                  src={instrument.image}
                  alt={instrument.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-5 lg:p-4 xl:p-6">
                {/* Instrument Name */}
                <h3 className="text-lg sm:text-xl lg:text-lg font-['Playfair Display'] xl:text-xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {instrument.name}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base lg:text-sm font-['Roboto'] xl:text-base leading-relaxed mb-4 sm:mb-6" style={{ fontFamily: 'Roboto, serif' }} >
                  {instrument.description}
                </p>

                {/* View More Button */}
                <button className="bg-black text-white px-4 py-2  rounded-full text-sm sm:text-base lg:text-sm xl:text-base font-medium hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto">
                View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
       
      </div>
    </div>
  );
}