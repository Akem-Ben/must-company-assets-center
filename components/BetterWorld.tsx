import React from "react";
import Image from "next/image";
import { DownloadArrow } from "@/constants/SvgPaths";

const BetterWorld = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-16 xl:py-24 justify-between items-center gap-8 lg:gap-12">
      <section className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-1/2 order-2 lg:order-1">
        <div>
          <Image
            src="/betterWorld/appicon.svg"
            alt="Better World"
            width={96}
            height={96}
            style={{ objectFit: "contain" }}
            priority
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
          />
        </div>
        <header>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
            더 나은 세상을 만들어 가기 위한 노력.
          </h1>
        </header>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-relaxed text-gray-700 space-y-3 md:space-y-4">
          <p>
            바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를
            초월한 커뮤니티를 만들어나가려고 노력하고 있습니다. 작은 담소와 삶의
            지혜가 필요하신 모든 분들을 환영합니다.
          </p>
          <p>
            삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다.
            법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담
            서포터즈에게 도움을 요청해주세요.
          </p>
        </div>
        <div className="text-base sm:text-lg md:text-xl font-bold leading-tight text-gray-900 flex flex-col sm:flex-row gap-2">
          <span>2025. 6. 출시 예정</span>
          <span className="text-[#8C5947]">커뮤니티 APP &apos;소소담담&apos;</span>
        </div>
        <div>
          <button className="flex gap-2 leading-tight text-sm sm:text-base md:text-lg font-medium hover:cursor-pointer justify-center text-gray-900 items-center border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl hover:bg-gray-700 hover:text-white transition-colors">
            <p>앱 다운로드</p>
            <div>
              <DownloadArrow />
            </div>
          </button>
        </div>
      </section>
      <section className="order-1 lg:order-2 mb-6 lg:mb-0 flex items-center justify-center w-full lg:w-1/2">
        <div className="w-[180px] h-[400px] sm:w-[200px] sm:h-[445px] md:w-[280px] md:h-[623px] lg:w-[320px] lg:h-[712px] xl:w-[360px] xl:h-[802px] relative">
          <Image
            src="/betterWorld/app-screen.svg"
            alt="Better World"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default BetterWorld;