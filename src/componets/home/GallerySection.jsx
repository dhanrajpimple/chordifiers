import React from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/87284b8c9ea35499751a7d8ee3d1cde0455e5c46.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/87284b8c9ea35499751a7d8ee3d1cde0455e5c46.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",

];

const GallerySection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full py-16 px-4 md:px-10">
      {/* Gallery Grid FIRST */}
      <section className="max-w-7xl mx-auto mb-12">
        <div
          className="grid gap-4 grid-cols-4 auto-rows-[180px]
                     [grid-template-areas:'item1_item2_item3_item3''item1_item4_item5_item6''item7_item7_item7_item7']
                     sm:grid-cols-4 sm:auto-rows-[180px]"
        >
          <img src={images[0]} alt="Studio 1" className="rounded-lg w-full h-full object-cover [grid-area:item1]" />
          <img src={images[1]} alt="Studio 2" className="rounded-lg w-full h-full object-cover [grid-area:item2]" />
          <img src={images[2]} alt="Studio 3" className="rounded-lg w-full h-full object-cover [grid-area:item3]" />
          <img src={images[3]} alt="Studio 4" className="rounded-lg w-full h-full object-cover [grid-area:item4]" />
          <img src={images[4]} alt="Studio 5" className="rounded-lg w-full h-full object-cover [grid-area:item5]" />
          <img src={images[5]} alt="Studio 6" className="rounded-lg w-full h-full object-cover [grid-area:item6]" />
          <img src={images[6]} alt="Studio 7" className="rounded-lg w-full h-full object-cover [grid-area:item7]" />
        </div>
      </section>

      {/* Text Section SECOND */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"  style={{ fontFamily: 'Plus Jakarta Sans, serif' }}>
            Photo Gallery
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-lg leading-relaxed"  style={{ fontFamily: 'Roboto, serif' }}>
            Experience the magic of The Chordflare Studio through our photo gallery. From inspiring sessions to behind-the-scenes moments, every image captures the heart of our music-making journey.
          </p>
        </div>

        {/* Right Button */}
        <div className="md:self-center">
          <button
            onClick={() => {
              navigate('/one_one/upcoming');
              window.scrollTo(0, 0);
            }}
            className="bg-yellow-300 text-black px-6 py-3 rounded-md font-medium text-sm md:text-base hover:bg-yellow-400 transition-all"
          >
            View Our <br className="hidden sm:block" /> Moments
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
