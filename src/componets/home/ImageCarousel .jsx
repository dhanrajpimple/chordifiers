import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const ImageCarousel = () => {
  const images = [
    { 
      src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/122.jpg', 
      alt: 'Battle of Rappers',
      title: 'Battle of Rappers',
      url: 'https://example.com/battle-rappers'
    },
    { 
      src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/30.jpg', 
      alt: 'Battle of Singers',
      title: 'Battle of Singers',
      url: 'https://example.com/battle-singers'
    },
    { 
      src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4.jpg', 
      alt: 'Another Battle',
      title: 'Epic Battle',
      url: 'https://example.com/epic-battle'
    },
    { 
      src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/18.jpg', 
      alt: 'New Show 1',
      title: 'New Show',
      url: 'https://example.com/new-show-1'
    },
    { 
      src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/26.jpg', 
      alt: 'New Show 2',
      title: 'Latest Show',
      url: 'https://example.com/new-show-2'
    },
  ];

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return { visibleCount: 1, gap: 16 };
    } else if (width < 768) {
      return { visibleCount: 2, gap: 20 };
    } else if (width < 1024) {
      return { visibleCount: 3, gap: 24 };
    } else {
      return { visibleCount: 4, gap: 28 };
    }
  };

  const [{ visibleCount, gap }, setResponsive] = useState(getResponsiveValues());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(getResponsiveValues());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, isPaused, images.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleImageClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % images.length;
      visible.push({ ...images[index], index });
    }
    return visible;
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
     

      {/* Carousel Container */}
      <div className="relative bg-transparent rounded-2xl p-6 ">


        {/* Images Grid */}
        <div 
          className="grid auto-cols-fr overflow-visible"
          style={{ 
            gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
            gap: `${gap}px`
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {getVisibleImages().map((img, idx) => (
            <div
              key={`${img.index}-${idx}`}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-110 hover:z-10"
              onClick={() => handleImageClick(img.url)}
              style={{ transformOrigin: 'center center' }}
            >
              {/* Image Container */}
              <div className="relative rounded-xl bg-gray-200 dark:bg-gray-700 aspect-[4/5] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay */}
             
             

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default ImageCarousel;