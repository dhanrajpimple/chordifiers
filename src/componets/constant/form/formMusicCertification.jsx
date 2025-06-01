import React, { useState } from 'react';
import { Music, User, Mail, Phone, GraduationCap, Award, Calendar, MessageSquare, Monitor, Users } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Clock, Headphones, Guitar, Piano, Mic } from 'lucide-react';
export default function CourseRegistrationForm() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    certificationCourses: [],
    diplomaCourses: [],
    learningMode: '',
    daws: [],
    otherDAW: '',
    goals: '',
    experience: '',
    availability: [],
    finalNotes: '',
    hearAboutUs: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const certificationOptions = [
    'Basic Music Production',
    'Intermediate Music Production',
    'Advanced Music Production',
    'Professional Music Production'
  ];

  const diplomaOptions = [
    'Diploma in Music Production',
    'Diploma in Sound Designing',
    'Diploma in Music Production & Music Business',
    'Diploma in Music Production & Sound Designing',
    'Diploma in Music Production, Sound Designing & Music Business'
  ];

  const dawOptions = [
    'Ableton Live',
    'Logic Pro',
    'Other (please specify)'
  ];

  const availabilityOptions = [
    'Weekdays',
    'Weekends', 
    'Mornings',
    'Afternoons',
    'Evenings'
  ];

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Course selection validation
    if (formData.certificationCourses.length === 0 && formData.diplomaCourses.length === 0) {
      newErrors.courses = 'Please select at least one course';
    }

    // Learning mode validation
    if (!formData.learningMode) {
      newErrors.learningMode = 'Please select your preferred learning mode';
    }

    // DAW validation
    if (formData.daws.length === 0) {
      newErrors.daws = 'Please select at least one DAW';
    } else if (formData.daws.includes('Other (please specify)') && !formData.otherDAW.trim()) {
      newErrors.otherDAW = 'Please specify the other DAW';
    }

    // Goals validation
    if (!formData.goals.trim()) {
      newErrors.goals = 'Please describe your goals for this course';
    } else if (formData.goals.trim().length < 10) {
      newErrors.goals = 'Please provide more details about your goals (at least 10 characters)';
    }

    // Availability validation
    if (formData.availability.length === 0) {
      newErrors.availability = 'Please select your availability';
    }

    // How did you hear about us validation
    if (!formData.hearAboutUs.trim()) {
      newErrors.hearAboutUs = 'Please let us know how you heard about the course';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCheckboxChange = (field, option) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(option)
        ? prev[field].filter(item => item !== option)
        : [...prev[field], option]
    }));

    // Clear related errors
    if (errors[field] || errors.courses) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
        courses: ''
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    const formEncoded = new URLSearchParams();

    for (const key in formData) {
      const value = formData[key];
      formEncoded.append(key, Array.isArray(value) ? value.join(', ') : value);
    }

    try {
      const res = await axios.post(
        'https://script.google.com/macros/s/AKfycbwrn69kC36fjdNXmh8f36ZpUPpnAJKCYJtLpcYMIFpuhLWMCxNAg3QvQD5ttZ8GTOArlQ/exec',
        formEncoded,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      if (res.data.status === 'success') {
        alert('Form submitted successfully!');
        setIsSubmitted(true); // Set submitted state to true
      } else {
        alert('Submission failed.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Check the console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      certificationCourses: [],
      diplomaCourses: [],
      learningMode: '',
      daws: [],
      otherDAW: '',
      goals: '',
      experience: '',
      availability: [],
      finalNotes: '',
      hearAboutUs: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-black/20 shadow-2xl">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="w-10 h-10 text-yellow-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
              Registration Successful! 
            </h2>
            <p className="text-lg text-black/80 mb-6">
              Welcome to our music production family! Your registration has been submitted successfully. 
              We'll contact you within 24-48 hours to discuss your course schedule and next steps.
            </p>
            <div className="bg-black/10 rounded-2xl p-4 mb-6">
              <p className="text-black font-semibold flex items-center justify-center gap-2">
                <Monitor className="w-5 h-5" />
                Remember: All courses are available both offline and online!
              </p>
            </div>
            <button
              onClick={()=>navigate("/institute")}
              className="px-8 py-3 bg-black text-yellow-400 font-bold rounded-xl hover:bg-black/90 transition-all duration-300"
            >
              Explore More Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

    const musicIcons = [
    { Icon: Music, delay: '0s' },
    { Icon: Headphones, delay: '0.5s' },
    { Icon: Guitar, delay: '1s' },
    { Icon: Piano, delay: '1.5s' },
    { Icon: Mic, delay: '2s' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 px-4 py-8">
       <div className="absolute inset-0 overflow-hidden">
        {musicIcons.map(({ Icon, delay }, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-10"
            style={{
              left: `${20 + index * 15}%`,
              top: `${10 + index * 20}%`,
              animationDelay: delay,
              animationDuration: '3s'
            }}
          >
            <Icon size={48} className="text-black" />
          </div>
        ))}
      </div>

      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full mb-4 shadow-2xl">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black mb-3 tracking-tight">
             Register for Music Production Certification Course
          </h1>
          <p className="text-lg sm:text-xl text-black/80 max-w-2xl mx-auto">
            Fill out the form below to sign up for our course and take your music production skills to the next level.
          </p>
        </div>

        {/* Form */}
        <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-black/20 shadow-2xl">
          
          {/* Personal Info Section */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-black mb-6">
              <User className="w-5 h-5" />
              Personal Info
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="lg:col-span-2">
                <label className="text-black font-semibold mb-2 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black placeholder-black/50 ${
                    errors.fullName ? 'border-red-500' : 'border-black/20 focus:border-black'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-600 text-sm mt-1 font-medium">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-black font-semibold mb-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black placeholder-black/50 ${
                    errors.email ? 'border-red-500' : 'border-black/20 focus:border-black'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-black font-semibold mb-2">
                  <Phone className="w-4 h-4" />
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-black placeholder-black/50"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Course Details Section */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-black mb-6">
              <Music className="w-5 h-5" />
            Course Details
            </h3>

            <div className="mb-6">
              <p className="text-black font-semibold mb-4">Which course are you interested in?</p>
              
              {/* Certification Courses */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-black mb-3">
                  <Award className="w-4 h-4" />
                 Certification Courses
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certificationOptions.map((course) => (
                    <label key={course} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.certificationCourses.includes(course)}
                        onChange={() => handleCheckboxChange('certificationCourses', course)}
                        className="w-4 h-4 text-black rounded focus:ring-2 focus:ring-black"
                      />
                      <span className="text-black font-medium">{course}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Diploma Courses */}
              <div className="mb-4">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-black mb-3">
                  <GraduationCap className="w-4 h-4" />
                   Diploma Courses
                </h4>
                <div className="space-y-3">
                  {diplomaOptions.map((course) => (
                    <label key={course} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.diplomaCourses.includes(course)}
                        onChange={() => handleCheckboxChange('diplomaCourses', course)}
                        className="w-4 h-4 text-black rounded focus:ring-2 focus:ring-black"
                      />
                      <span className="text-black font-medium">{course}</span>
                    </label>
                  ))}
                </div>
              </div>

              {errors.courses && <p className="text-red-600 text-sm font-medium mb-4">{errors.courses}</p>}

              {/* Note about course format */}
              <div className="bg-black/10 rounded-2xl p-4 mb-6 border border-black/20">
                <p className="text-black font-semibold flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  Note: All courses are conducted simultaneously in both offline (classroom) and online (live) formats.
                </p>
              </div>

              {/* Learning Mode */}
              <div className="mb-6">
                <label className="text-black font-semibold mb-2 block">
                  Preferred learning mode: *
                </label>
                <select
                  value={formData.learningMode}
                  onChange={(e) => handleInputChange('learningMode', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black ${
                    errors.learningMode ? 'border-red-500' : 'border-black/20 focus:border-black'
                  }`}
                >
                  <option value="">Select your preferred mode</option>
                  <option value="offline">Offline (attend in-person at the studio)</option>
                  <option value="online">Online (attend live via Zoom or Google Meet)</option>
                </select>
                {errors.learningMode && <p className="text-red-600 text-sm mt-1 font-medium">{errors.learningMode}</p>}
              </div>

              {/* DAWs */}
              <div className="mb-6">
                <label className="text-black font-semibold mb-2 block">
                  What DAW(s) do you use or want to learn? *
                </label>
                <div className="space-y-3">
                  {dawOptions.map((daw) => (
                    <label key={daw} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-200 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.daws.includes(daw)}
                        onChange={() => handleCheckboxChange('daws', daw)}
                        className="w-4 h-4 text-black rounded focus:ring-2 focus:ring-black"
                      />
                      <span className="text-black font-medium">{daw}</span>
                    </label>
                  ))}
                </div>
                {errors.daws && <p className="text-red-600 text-sm mt-1 font-medium">{errors.daws}</p>}
                
                {formData.daws.includes('Other (please specify)') && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={formData.otherDAW}
                      onChange={(e) => handleInputChange('otherDAW', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black placeholder-black/50 ${
                        errors.otherDAW ? 'border-red-500' : 'border-black/20 focus:border-black'
                      }`}
                      placeholder="Please specify the DAW"
                    />
                    {errors.otherDAW && <p className="text-red-600 text-sm mt-1 font-medium">{errors.otherDAW}</p>}
                  </div>
                )}
              </div>

              {/* Goals */}
              <div className="mb-6">
                <label className="text-black font-semibold mb-2 block">
                  What are your goals for this course? *
                </label>
                <textarea
                  value={formData.goals}
                  onChange={(e) => handleInputChange('goals', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black placeholder-black/50 resize-none ${
                    errors.goals ? 'border-red-500' : 'border-black/20 focus:border-black'
                  }`}
                  placeholder="Describe what you want to achieve through this course..."
                />
                {errors.goals && <p className="text-red-600 text-sm mt-1 font-medium">{errors.goals}</p>}
              </div>

              {/* Experience */}
              <div className="mb-6">
                <label className="text-black font-semibold mb-2 block">
                  Any prior experience with music production?
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-black placeholder-black/50 resize-none"
                  placeholder="Tell us about your background in music production, if any..."
                />
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-black mb-6">
              <Calendar className="w-5 h-5" />
               Availability
            </h3>

            <div className="mb-6">
              <label className="text-black font-semibold mb-2 block">
                When are you generally available to take classes? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availabilityOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-black/10 hover:bg-white/70 transition-all duration-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.availability.includes(option)}
                      onChange={() => handleCheckboxChange('availability', option)}
                      className="w-4 h-4 text-black rounded focus:ring-2 focus:ring-black"
                    />
                    <span className="text-black font-medium">{option}</span>
                  </label>
                ))}
              </div>
              {errors.availability && <p className="text-red-600 text-sm mt-1 font-medium">{errors.availability}</p>}
            </div>
          </div>

          {/* Final Notes Section */}
          <div className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-bold text-black mb-6">
              <MessageSquare className="w-5 h-5" />
              Final Notes
            </h3>

            {/* Additional Notes */}
            <div className="mb-6">
              <label className="text-black font-semibold mb-2 block">
                Anything else you'd like us to know?
              </label>
              <textarea
                value={formData.finalNotes}
                onChange={(e) => handleInputChange('finalNotes', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-2 border-black/20 bg-white/90 backdrop-blur-sm focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-black placeholder-black/50 resize-none"
                placeholder="Share any additional information, special requirements, or questions..."
              />
            </div>

            {/* How did you hear about us */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-black font-semibold mb-2">
                <Users className="w-4 h-4" />
                How did you hear about the course? *
              </label>
              <input
                type="text"
                value={formData.hearAboutUs}
                onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border-2 bg-white/90 backdrop-blur-sm focus:outline-none focus:bg-white transition-all duration-300 text-black placeholder-black/50 ${
                  errors.hearAboutUs ? 'border-red-500' : 'border-black/20 focus:border-black'
                }`}
                placeholder="Social media, Google search, referral, etc."
              />
              {errors.hearAboutUs && <p className="text-red-600 text-sm mt-1 font-medium">{errors.hearAboutUs}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-8 py-4 bg-black text-yellow-400 font-bold rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                isSubmitting 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:bg-black/90 transform hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  Submitting Registration...
                </span>
              ) : (
                'Submit Registration'
              )}
            </button>
            <p className="text-sm text-black/70 mt-4">
              * Required fields must be filled out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}