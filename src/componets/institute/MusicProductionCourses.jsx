import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import courseimage from '../../assets/course.jpg';
import image3 from "../../assets/1.jpg"
import image2 from "../../assets/2.jpg"
import image1 from "../../assets/3.jpg"
import image4 from "../../assets/4.jpg"
export default function MusicProductionCourses() {
  const [expandedCards, setExpandedCards] = useState({});
    const navigate = useNavigate();
  const toggleCard = (cardId, questionId) => {
    const key = `${cardId}-${questionId}`;
    setExpandedCards(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const courses = [
    {
      id: 'basic',
      level: 'BASIC',
      title: 'Music Production Basic',
      image: image1,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'intermediate',
      level: 'INTERMEDIATE',
      title: 'Music Production Intermediate',
      image: image2,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'advance',
      level: 'ADVANCE',
      title: 'Music Production Advance',
      image: image3,
      color: 'from-blue-400 to-purple-500'
    },
    {
      id: 'pro',
      level: 'PRO',
      title: 'Music Production Pro',
      image: image4,
      color: 'from-green-400 to-blue-500'
    }
  ];

  const questions = [
    'How long do the courses last?',
    'How long is each class?',
    'Are the courses online or offline?',
    'Will I receive a certificate after completion?'
  ];

  return (
    <div className="bg-black min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <h1 className="text-2xl text-center  sm:text-5xl lg:text-7xl font-bold font-sans text-white mb-6">
           Professional Certification Courses
          </h1>
          
          {/* Limited Seats Banner */}
          {/* <div className="bg-[#F0E81B] flex flex-col items-center rounded-lg p-4 mx-auto max-w-7xl">
            <h2 className="text-2xl sm:text-4xl font-normal text-black mb-1" style={{ fontFamily: 'Crimson Text, serif' }}>
              Limited Seats Available
            </h2>
            <p className="text-black text-sm sm:text-xl">
              Get your seat as soon as possible!
            </p>
          </div> */}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-900 rounded-lg overflow-hidden">
              {/* Course Image with Overlay */}
              <div className="relative h-56 sm:h-56 lg:h-48">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
               
                
                {/* Level Badge */}
                {/* <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} px-3 py-1 rounded-full`}>
                  <span className="text-white font-bold text-sm">
                    {course.level}
                  </span>
                </div> */}
              </div>

              {/* Course Title */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-center mb-4 text-sm sm:text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {course.title}
                </h3>

                {/* FAQ Dropdowns */}
                <div className="space-y-2 border-gray-400 border-[0.5px]   rounded-2xl">
                  {questions.map((question, index) => (
                    <div key={index} className="border-b border-gray-400 last:border-b-0">
                      <button
                        onClick={() => toggleCard(course.id, index)}
                        className="w-full flex items-center justify-between p-2 text-left text-white hover:text-gray-300 transition-colors"
                      >
                        <span className="text-xs sm:text-sm px-2">
                          {question}
                        </span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform  duration-200 flex-shrink-0 ${
                            expandedCards[`${course.id}-${index}`] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {expandedCards[`${course.id}-${index}`] && (
                        <div className="px-2 text-gray-400 text-xs sm:text-sm">
                          <p>
                            {index === 0 && "Our courses typically last 8-12 weeks depending on the level."}
                            {index === 1 && "Each class is 2-3 hours long with hands-on practice sessions."}
                            {index === 2 && "We offer both online and offline modes to suit your preference."}
                            {index === 3 && "Yes, you'll receive a professional certificate upon successful completion."}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="bg-[#F0E81B] flex flex-col items-center rounded-lg p-4 mx-auto max-w-7xl mt-20 mb-8 gap-3">
            <h2 className="text-2xl sm:text-4xl font-normal text-black " style={{ fontFamily: 'Crimson Text, serif' }}>
              Limited Seats Available
            </h2>
            <p className="text-black text-sm sm:text-xl">
              Get your seat as soon as possible!
            </p>
            <button className="px-4 py-2 rounded-xl text-sm font-bold transition-colors duration-200  border-2 border-black  bg-black text-yellow-400" onClick={()=>navigate('/Music-certificate-form')}>Enroll Now</button>
          </div>
          <div className='flex flex-col items-center rounded-lg text-center  min-w-full text-red-600 text-lg sm:text-xl'>
           *EMI Options are available on prior Request
          </div>
    </div>
  );
}