import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import d1 from "../../assets/d1.jpg"
import d2 from "../../assets/d2.jpg"
import d3 from "../../assets/d3.jpg"
import d4 from "../../assets/d4.jpg"
import d5 from "../../assets/d5.jpg"
const MusicCourses = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId, questionIndex) => {
    const key = `${sectionId}-${questionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const courses = [
    // {
    //   id: 'music-production',
    //   title: 'Diploma in Music Production',
    //   image: d1,
    //   questions: [
    //     'How long is the course last?',
    //     'How long to apply the course?',
    //     'Are the courses offline or online?',
    //     'Will I receive a certificate after completion?'
    //   ]
    // },
    // {
    //   id: 'sound-designing',
    //   title: 'Diploma in Sound Designing',
    //   image: d2,
    //   questions: [
    //     'How long is the course last?',
    //     'How long to apply about?',
    //     'Are the courses offline or online?',
    //     'Will I receive a certificate after completion?'
    //   ]
    // },
    {
      id: 'musicproduction',
      title: 'Diploma in Music Production & Music Business (Specialization)',
      image: d3,
      questions: [
        'How long do the courses last?',
        'How long is each class?',
        'Are the courses online or offline?',
        'Will I receive a certificate after completion?'
      ]
    },
    // {
    //   id: 'sound-designing-Specialization',
    //   title: 'Diploma in Sound Designing & Music Production  (Specialization)',
    //   image: d4,
    //   questions: [
    //     'How long is the course last?',
    //     'How long to apply about?',
    //     'Are the courses offline or online?',
    //     'Will I receive a certificate after completion?'
    //   ]
    // },
    {
      id: 'sound-designing-Business',
      title: 'Diploma in Sound Designing & Music Production & Music Business (Specialization)',
      image: d5,
      questions: [
        'How long is the course last?',
        'How long to apply about?',
        'Are the courses offline or online?',
        'Will I receive a certificate after completion?'
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-12">
          Professional Diploma Courses
        </h1>
        
        <div className="space-y-8 md:space-y-12 flex flex-col items-center">
          {courses.map((course) => (
            <div key={course.id} className="max-w-xl mt-4">
              {/* Course Image and Title */}
               <h2 className="w-full text-center text-3xl sm:text-4xl mb-5" tyle={{ fontFamily: 'Crimson Text, serif' }}>
                    {course.title}
                  </h2>
              
               
          <div className="relative h-full">
            <img 
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover rounded-t-lg"
            />
</div>
                
                {/* Course Title Card */}
               
              

              {/* FAQ Section */}
              <div className=" w-full mt-2">
                {course.questions.map((question, index) => (
                  <div key={index} className="border border-gray-400  overflow-hidden">
                    <button
                      onClick={() => toggleSection(course.id, index)}
                      className="w-full flex items-center justify-between p-3 md:p-4 bg-gray-900 hover:bg-gray-800 transition-colors duration-200 text-left"
                    >
                      <span className="text-sm md:text-base font-medium">
                        {question}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ml-2 ${
                          expandedSections[`${course.id}-${index}`] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {expandedSections[`${course.id}-${index}`] && (
                      <div className="p-3 md:p-4 bg-gray-800 border-t border-gray-700">
                        <p className="text-sm md:text-base text-gray-300">
                          This is placeholder content for the question "{question}". 
                          You can replace this with actual course information and details.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
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
            <button className="px-4 py-2 rounded-xl text-sm font-bold transition-colors duration-200  border-2 border-black  bg-black text-yellow-400">Enroll Now</button>
          </div>
          <div className='flex flex-col items-center rounded-lg text-center  min-w-full text-red-600 text-lg sm:text-xl'>
           *EMI Options are available on prior Request
          </div>
    </div>
  );
};

export default MusicCourses;