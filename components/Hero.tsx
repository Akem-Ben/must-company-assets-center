"use client";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ImageSlider from "./HeroComponents/ImageSilder";

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "/hero/hero-image1.jpeg",
      alt: "Special sharing moment",
      title: "특별한 나눔",
      subtitle: "함께하는 마음이 만드는 소중한 변화",
      description: "즐거움과 나눔이 있는 감동의 순간",
    },
    {
      src: "/hero/people-smiling.jpg",
      alt: "Second hero image",
      title: "특별한 나눔",
      subtitle: "가족과 공유",
      description: "사랑하는 사람과 공유",
    },
    {
      src: "/hero/korean-crowd.jpg",
      alt: "Third hero image",
      title: "특별한 나눔",
      subtitle: "커뮤니티와 공유",
      description: "모든 사람과, 어디에서나 공유",
    },
  ];

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-screen overflow-hidden rounded-xl md:rounded-3xl lg:rounded-[48px]">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
          {images[currentIndex].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl mb-2 md:mb-6 drop-shadow-lg">
          {images[currentIndex].subtitle}
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl drop-shadow-lg">
          {images[currentIndex].description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <ImageSlider
          goToNext={goToNext}
          goToPrevious={goToPrevious}
          currentIndex={currentIndex}
          totalImages={images.length}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;