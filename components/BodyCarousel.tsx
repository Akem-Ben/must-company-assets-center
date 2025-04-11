"use client"
import { useState, useEffect, useRef } from "react";

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
}

const CarouselSection = () => {
  const items: CarouselItem[] = [
    {
      id: 1,
      title: "(주) 행복한사람들",
      subtitle: "❶ ❶",
      description: "행복한실, 행복한사람들과 함께하는 특별한 실을 선거합니다.",
    },
    {
      id: 2,
      title: "버튼맞글 실천연대",
      subtitle: "❷ ❷",
      description: "버튼맞글 장착으로 인터넷은 사례를 만들어 간다니.",
    },
    {
      id: 3,
      title: "아트리안",
      subtitle: "❸ ❸",
      description:
        "생활이용시장의 ‘뉴 레이언움 제안서는 상 실’아트로부터 프로젝트.",
    },
    {
      id: 4,
      title: "대한민국위원위원회",
      subtitle: "❹ ❹",
      description: "어린이를 위한 위원인 명도, 위원이 전에 만나다.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // Duplicate items for infinite loop effect
  const carouselItems = [...items, ...items, ...items];

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.clientWidth || 0;
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex - 1 < 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex + items.length);
    resetAutoPlay();
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    scrollToItem(newIndex + items.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0]?.clientWidth || 0;
      carouselRef.current.scrollLeft = itemWidth * items.length;
    }
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">함께하는 이들</h2>

        <div className="relative mt-8">
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
          <div ref={carouselRef} className="overflow-hidden py-4">
            <div className="flex whitespace-nowrap transition-transform duration-300">
              {carouselItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="inline-flex flex-col p-6 mx-2 bg-white rounded-lg shadow-md w-72 flex-shrink-0"
                >
                  <span className="text-xl font-semibold mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 whitespace-normal">
                    {item.description}
                  </p>
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
                setIsAutoPlaying(false);
                resetAutoPlay();
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
