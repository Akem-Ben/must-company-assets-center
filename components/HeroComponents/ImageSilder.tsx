// HeroComponents/ImageSlider.tsx
import React from "react";

interface ImageSliderProps {
  goToPrevious: () => void;
  goToNext: () => void;
  currentIndex: number;
  totalImages: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  goToPrevious,
  goToNext,
  currentIndex,
  totalImages,
}) => {
  return (
    <div className="">
      <div className="absolute bg-white p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 rounded-lg sm:rounded-xl md:rounded-2xl bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 lg:right-8 z-10 flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        <div className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">
          <span>{currentIndex + 1}</span>
          <span className="mx-2 sm:mx-3 md:mx-4 lg:mx-6 inline-block w-6 sm:w-8 md:w-10 lg:w-12 h-px bg-gray-300"></span>
          <span>{totalImages}</span>
        </div>

        <button
          onClick={goToPrevious}
          className="p-2 sm:p-3 md:p-4 rounded-full bg-black hover:bg-gray-800 transition-all duration-300"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="p-2 sm:p-3 md:p-4 rounded-full bg-black hover:bg-gray-800 transition-all duration-300"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;