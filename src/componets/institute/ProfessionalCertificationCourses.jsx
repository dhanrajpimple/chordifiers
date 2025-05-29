import React from 'react';
import sidepaino from '../../assets/sidepaino.png'
import middel from "../../assets/middlegitter.png"
export default function ProfessionalCertificationCourses() {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 font-['Plus Jakarta Sans']">
            Professional Certification Courses
          </h1>
          <p className="text-gray-600 text-lg">
            tailored to bring the best out of you!!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Course 1 - Music Production */}
          <div className="flex flex-col items-center">
            <div className="mb-6 min-w-full">
              <span className="text-6xl md:text-7xl font-[400] md:pl-10 text-left text-black">1</span>
            </div>
            <div className="mb-6">
              <img 
                src={sidepaino}
                alt="Music Production Studio"
                className="w-64 h-64 object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">
                Music Production Courses
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                Unlock your creative potential with our <strong>Music Production Courses</strong>, designed for aspiring producers and musicians of all skill levels. Whether you're a beginner eager to learn the basics of recording, mixing, and mastering or looking to refine your existing techniques, our courses cater to all.
              </p>
            </div>
          </div>

          {/* Course 2 - Instrument Courses */}
          <div className="flex flex-col items-center">
            <div className="mb-6 min-w-full">
              <span className="text-6xl md:text-7xl md:pl-10 font-[400] text-black">2</span>
            </div>
            <div className="mb-6">
              <img 
                src={middel}
                alt="Guitar Player"
                className="w-80 h-80 object-cover  shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">
                Instrument Courses
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                Master the art of playing your favorite instrument with our expertly designed <strong>Instrument Courses</strong>. From guitar and piano to drums and vocals, our experienced instructors and music professionals. Whether you're strumming a guitar, rocking out on the drums, or playing classical piano, we have the perfect course to match your goals and passion.
              </p>
            </div>
          </div>

          {/* Course 3 - Music Business */}
          <div className="flex flex-col items-center">
            <div className="mb-6 min-w-full">
              <span className="text-6xl  md:text-7xl md:pl-15 font-[400] text-black">3</span>
            </div>
            <div className="mb-6">
              <img 
                src={sidepaino}
                alt="Music Business Studio"
                className="md:w-64 h-64 object-cover shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-black mb-4">
                Music Business Course
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed max-w-xs">
                Turn your passion for music into a thriving career with our <strong>Music Business Course</strong>. Designed for artists, producers, and music industry professionals, this course equips you with the knowledge and tools to navigate the complex world of the music industry, build your brand, and achieve sustainable success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}