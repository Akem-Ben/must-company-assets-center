"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CarouselItem {
  id: number;
  imageUrl: string;
}

const CarouselSection = () => {
  const items: CarouselItem[] = [
    {
      id: 1,
      imageUrl: "/carouselSection/partner1.svg",
    },
    {
      id: 2,
      imageUrl: "/carouselSection/partner2.svg",
    },
    {
      id: 3,
      imageUrl: "/carouselSection/partner3.svg",
    },
    {
      id: 4,
      imageUrl: "/carouselSection/partner4.svg",
    },
    {
      id: 5,
      imageUrl: "/carouselSection/partner5.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [itemWidth, setItemWidth] = useState(0);

  // Calculate number of visible items based on screen width
  const getVisibleItemCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 640) return 1;
      if (width < 1024) return 2;
      return 3;
    }
    return 3; // Default
  };

  // Duplicate items for infinite loop effect
  const carouselItems = [...items, ...items, ...items];

  const scrollToItem = (index: number) => {
    if (carouselRef.current && itemWidth > 0) {
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex + items.length);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex + items.length);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Update item width on mount and window resize
    const updateItemWidth = () => {
      if (carouselRef.current) {
        const visibleItems = getVisibleItemCount();
        const containerWidth = carouselRef.current.clientWidth;
        const newItemWidth = containerWidth / visibleItems;
        setItemWidth(newItemWidth);
      }
    };

    updateItemWidth();
    window.addEventListener("resize", updateItemWidth);

    return () => window.removeEventListener("resize", updateItemWidth);
  }, []);

  useEffect(() => {
    // Start autoplay immediately
    if (isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, currentIndex]);

  useEffect(() => {
    // Initialize carousel position after item width is calculated
    if (carouselRef.current && itemWidth > 0) {
      carouselRef.current.scrollLeft = itemWidth * items.length;
    }
  }, [itemWidth, items.length]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    startAutoPlay();
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div
          className="relative mt-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex transition-transform duration-300">
              {carouselItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 px-2"
                  style={{ width: itemWidth > 0 ? `${itemWidth}px` : "auto" }}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={`Carousel image ${item.id}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 5}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToItem(index + items.length);
              }}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
