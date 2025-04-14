"use client";
import React from "react";
import Image from "next/image";

const CultureSharingComponent = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 text-gray-900 py-16 md:py-24 lg:py-32">
      <div className="flex flex-col gap-3 md:gap-4">
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
            새로운 문화 나눔을 만들어갑니다.
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 md:gap-8">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
            우리는
          </h1>
          <div className="w-full max-w-xs sm:w-auto">
            <Image
              src="/cultureSection/open-book.svg"
              alt="An open Book"
              width={280}
              height={94}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <div>
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center">
            사색의향기입니다.
          </p>
        </div>
        <div className="mt-4">
          <p className="font-normal text-base sm:text-lg md:text-xl leading-relaxed text-center px-2 sm:px-4 md:px-8 lg:px-16">
            사색의향기는 문학인들의 커뮤니티로서 &quot;행복한 문화 나눔&quot;을
            통한 사회 공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해
            노력하는 비영리 단체입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureSharingComponent;
