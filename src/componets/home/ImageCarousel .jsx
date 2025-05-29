import React, { useRef, useEffect, useState } from 'react';

const ImageCarousel = () => {
  const images = [
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/122.jpg', alt: 'Battle of Rappers' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/30.jpg', alt: 'Battle of Singers' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4.jpg', alt: 'Another Battle' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/18.jpg', alt: 'New Show 1' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/26.jpg', alt: 'New Show 2' },
  ];

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 480) {
      return { imageWidth: 300, visibleCount: 1 };
    } else if (width < 768) {
      return { imageWidth: 200, visibleCount: 2 };
    } else {
      return { imageWidth: 300, visibleCount: 4 };
    }
  };

  const [{ imageWidth, visibleCount }, setResponsive] = useState(getResponsiveValues());
  const imageMargin = 10;
  const extendedImages = [...images, ...images];
  const totalImages = extendedImages.length;
  const containerRef = useRef(null);
  const scrollPosition = useRef(0);
  const speed = 0.5;
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(getResponsiveValues());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (hoveredIndex === null) {
        scrollPosition.current += speed;
        const resetPosition = (imageWidth + imageMargin) * images.length;
        if (scrollPosition.current >= resetPosition) {
          scrollPosition.current = 0;
        }
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [imageWidth, hoveredIndex]);

  return (
    <div
      className="mx-auto overflow-hidden"
      style={{
        width: visibleCount * (imageWidth + imageMargin) - imageMargin,
        height: imageWidth <= 160 ? 200 : imageWidth <= 200 ? 250 : 300,
        position: 'relative',
      }}
    >
      <div
        ref={containerRef}
        className="flex transition-transform will-change-transform"
        style={{ width: (imageWidth + imageMargin) * totalImages }}
      >
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            width={imageWidth}
            height={imageWidth <= 160 ? 200 : imageWidth <= 200 ? 250 : 300}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`mr-[10px] flex-shrink-0 rounded-sm object-cover transition-transform duration-300 ${
              hoveredIndex === index ? 'scale-125 z-10' : 'scale-100 z-0'
            }`}
            style={{ transformOrigin: 'center center', cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
