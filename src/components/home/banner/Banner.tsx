"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

// Importing images
import img1 from "../../../../public/assets/home/01.jpg";
import img2 from "../../../../public/assets/home/02.jpg";
import img3 from "../../../../public/assets/home/03.png";
import img4 from "../../../../public/assets/home/04.jpg";
import img5 from "../../../../public/assets/home/05.png";
import img6 from "../../../../public/assets/home/06.png";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle slide navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, nextSlide]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    } else if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div>
      <div className="w-full max-w-[1920px] mx-auto mb-[32px] md:mb-[55px] lg:mb-[79px] ">
        {/* Main Carousel */}
        <div
          className="relative overflow-hidden group h-[200px] md:h-[400px] lg:h-[804px]"
          // style={{ height: "804px" }}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "" : "opacity-0 z-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  priority={index === currentIndex}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          {/* Left Button */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20  hover:bg-black/40 text-[#EEFF25] p-1 h-full 
               opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <IoMdArrowDropleft size={40} />
          </button>

          {/* Right Button */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20  hover:bg-black/40 text-[#EEFF25] p-1 h-full 
               opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <IoMdArrowDropright size={40} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-20 lg:flex space-x-2 hidden ">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-4 lg:mt-12 flex items-center gap-2 md:gap-6 justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative lg:h-[72px] lg:w-30 md:h-[45px] md:w-[75px] h-[20px] w-[36px] cursor-pointer ${
                index === currentIndex
                  ? "ring-1 md:ring-4 ring-[#353235] scale-105"
                  : "opacity-70 hover:opacity-100 hover:scale-105"
              }`}
              onClick={() => goToSlide(index)}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover p-[1px] md:p-[2px]"
                sizes="(max-width: 768px) 100px, 150px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
