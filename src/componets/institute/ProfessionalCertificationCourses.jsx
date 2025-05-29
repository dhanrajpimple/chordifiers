import React from 'react';
import sidepaino from '../../assets/sidepaino.png';
import middel from '../../assets/middlegitter.png';

const courses = [
  {
    number: '1',
    image: sidepaino,
    alt: 'Music Production Studio',
    title: 'Music Production Courses',
    description:
      "Unlock your creative potential with our <strong>Music Production Courses</strong>, designed for aspiring producers and musicians of all skill levels. Whether you're a beginner eager to learn the basics of recording, mixing, and mastering or looking to refine your existing techniques, our courses cater to all.",
  },
  {
    number: '2',
    image: middel,
    alt: 'Guitar Player',
    title: 'Instrument Courses',
    description:
      "Master the art of playing your favorite instrument with our expertly designed <strong>Instrument Courses</strong>. From guitar and piano to drums and vocals, our experienced instructors and music professionals. Whether you're strumming a guitar, rocking out on the drums, or playing classical piano, we have the perfect course to match your goals and passion.",
  },
  {
    number: '3',
    image: sidepaino,
    alt: 'Music Business Studio',
    title: 'Music Business Course',
    description:
      "Turn your passion for music into a thriving career with our <strong>Music Business Course</strong>. Designed for artists, producers, and music industry professionals, this course equips you with the knowledge and tools to navigate the complex world of the music industry, build your brand, and achieve sustainable success.",
  },
];

const ProfessionalCertificationCourses = () => {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 font-inter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 " style={{ fontFamily: 'Plus Jakarta Sans, serif' }}>
            Professional Certification Courses
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-inter">
            tailored to bring the best out of you!!
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Number */}
              <div className="mb-4 md:mb-6 w-full text-left">
                <span className="text-5xl sm:text-6xl md:text-7xl font-normal text-black pl-4 sm:pl-8 md:pl-0">
                  {course.number}
                </span>
              </div>

              {/* Image */}
              <div className="mb-4 md:mb-6">
                <img
                  src={course.image}
                  alt={course.alt}
                  className={`${
                    course.number === '2'
                      ? 'w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96'
                      : 'w-64 sm:w-72 h-64 sm:h-72'
                  } object-cover shadow-lg`}
                />
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3
                  className="text-lg sm:text-xl font-bold text-black mb-4 " style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {course.title}
                </h3>
                <p
                  className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-xs font-inter"
                  dangerouslySetInnerHTML={{ __html: course.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCertificationCourses;