import React from 'react';
import { useNavigate } from 'react-router-dom';
import music from "../../assets/MusicCourse.png";
import Production from "../../assets/MusicProduction.png";
import instrument from "../../assets/InstrumentCourse.png";

const ProfessionalCertificationCourses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      number: "1",
      title: "Music Production Courses",
      image: music,
      description: "Unleash your creative potential with our Music Production Courses, designed for students aspiring to master production at all skill levels. Whether you're a beginner eager to learn the basics or an experienced producer looking to refine your techniques, our courses cater to all.",
      link1 : "/institute/certification-courses",
      link2 : "/institute/diploma-courses",
    },
    {
      id: 2,
      number: "2",
      title: "Instrument Courses",
      image: instrument,
     description: "Master the art of playing your favorite instrument with our expertly designed Instrument Courses, tailored for musicians and aspiring professionals. Whether you're strumming a guitar, rocking out on the drums, or playing classical pieces on the piano, we have the right course to match your goals and passion.",
      link1 : "/institute/instrument-certificate",
      link2 : "/comingsoon",
    },
    {
      id: 3,
      number: "3",
      title: "Music Business Course",
      image: Production,
        description: "Turn your passion for music into a thriving career with our Music Business Course. Designed for artists, managers, and industry professionals, this course equips you with the essential skills needed to navigate the dynamic world of the music industry, build your brand, and achieve sustainable success.",
       link1 : "/institute/music-certificate",
      link2 :"/comingsoon",
      }
  ];



  return (
    <div className="bg-[#F0E81B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2">
            The Courses We Offer
          </h1>
          <p className="text-lg sm:text-xl text-black">
            tailored to bring the best out of you!!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {courses.map((course, index) => (
            <div key={course.id} className="flex flex-col">
              <div className="sm:text-left text-center mb-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-normal text-black">
                  {course.number}
                </span>
              </div>

              <div className="mb-6 border-b-1 border-black pb-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className={`
                    w-full object-cover rounded-lg shadow-lg
                    ${index === 1
                      ? 'h-48 sm:h-36 lg:h-36 xl:h-52'
                      : 'h-48 sm:h-56 lg:h-48 xl:h-56'
                    }
                  `}
                />
              </div>

              <div className="flex-1 flex flex-col">
                <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-black mb-4" style={{ fontFamily: 'Commissioner, serif' }}>
                  {course.title}
                </h2>

                <p className="text-sm sm:text-base lg:text-sm xl:text-base text-black leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3  ">
                  <button
                    onClick={() => navigate(course.link1)}
                    className="px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 bg-black text-yellow-400 hover:bg-gray-800"
                  >
                    Certification Courses
                  </button>
            {course.id !== 3 && (
  <button
    onClick={() => navigate(course.link2)}
    className="px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 border-2 bg-black text-yellow-400 border-black"
  >
    Diploma Courses
  </button>
)}


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCertificationCourses;
