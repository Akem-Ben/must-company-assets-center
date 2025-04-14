"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface PartnerItem {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
}

const PartnerCarousel = () => {
  const partners: PartnerItem[] = [
    {
      id: 1,
      imageUrl: "/carouselSection/partner1.svg",
      name: "(주)행복한사람들",
      description: "행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다."
    },
    {
      id: 2,
      imageUrl: "/carouselSection/partner2.svg",
      name: "바른멋글 실천연대",
      description: "바른멋글 정신으로 아름다운 사회를 만들어 갑니다."
    },
    {
      id: 3,
      imageUrl: "/carouselSection/partner3.svg",
      name: "아트리안",
      description: "생활미술시장의 두 패러다임을 제안하는 상설 아트갤러리 프로젝트."
    },
    {
      id: 4,
      imageUrl: "/carouselSection/partner4.svg",
      name: "대한민국위멘워원회",
      description: "어린이를 위한 위대한 멘토, 위원이 함께 합니다."
    },
    {
      id: 5,
      imageUrl: "/carouselSection/partner5.svg",
      name: "파트너 5",
      description: "파트너 5에 대한 설명입니다."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const visibleItems = 4; // Number of visible items at once

  const handlePrev = () => {
    const newIndex = currentIndex - 1 < 0 ? partners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % partners.length;
    setCurrentIndex(newIndex);
  };

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 5000); // 5 seconds interval
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Start autoplay immediately
    if (isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, currentIndex]);

  // Calculate which items to display based on currentIndex
  const getVisiblePartners = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (currentIndex + i) % partners.length;
      result.push(partners[index]);
    }
    return result;
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    startAutoPlay();
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">함께하는</h2>
          <h2 className="text-4xl font-bold mb-8">이들</h2>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full w-12 h-12 flex items-center justify-center shadow-md text-white hover:bg-gray-800 transition-colors"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black rounded-full w-12 h-12 flex items-center justify-center shadow-md text-white hover:bg-gray-800 transition-colors"
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

          {/* Partners carousel */}
          <div className="overflow-hidden px-12">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id}
                  className="w-1/4 flex-shrink-0 px-4 transition-all duration-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 h-24 flex items-center justify-center">
                      <div className="relative w-40 h-16">
                        <Image
                          src={partner.imageUrl}
                          alt={partner.name}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">{partner.name}</h3>
                    <p className="text-sm text-center text-gray-600">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCarousel;