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
      <div className="absolute bg-white p-8 rounded-2xl bottom-0 right-8 z-10 flex items-center space-x-4">
        <div className="text-gray-500 font-medium">
          <span>{currentIndex + 1}</span>
          <span className="mx-6 inline-block w-12 h-px bg-gray-300"></span>
          <span>{totalImages}</span>
        </div>

        <button
          onClick={goToPrevious}
          className="p-4 rounded-full bg-black hover:bg-gray-800 transition-all duration-300"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
          className="p-4 rounded-full bg-black hover:bg-gray-800 transition-all duration-300"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
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
