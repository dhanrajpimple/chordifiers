import React from "react";
import bg from '../../assets/bg-component.jpg'
const testimonials = [
  {
    text: `I would like to recommend "The Chordifiers Studio" to everyone. Here satisfaction is guaranteed with utmost priority with reasonable pricing. The zeal and enthusiasm shown by the members are well exemplary.`,
    name: "Sambid Dutta",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  },
  {
    text: `Great experience! The Chordifiers helped us in launching our track. Amazing support and top quality.`,
    name: "Arjun Roy",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
  },
  // Add more as needed
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div
      className="w-full bg-cover bg-center min-h-[70vh] flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white rounded-lg shadow-lg border border-blue-500 p-6 max-w-xl w-full text-center">
        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
          {current.text}
        </p>
        <div className="flex flex-col items-center">
          <img
            src={current.avatar}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover mb-2"
          />
          <span className="font-semibold text-sm text-gray-700">{current.name}</span>
        </div>
      </div>
    </div>
  );
}
