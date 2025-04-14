import React from "react";
import Image from "next/image";
import { DownloadArrow } from "@/constants/SvgPaths";

const BetterWorld = () => {
  return (
    <div className="flex h-screen px-[250px] py-[140px] justify-between items-center">
      <section className="flex flex-col gap-[72px] w-[649px]">
        <div>
          <Image
            src="/betterWorld/appicon.svg"
            alt="Better World"
            width={96}
            height={96}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <header>
          <h1 className="text-[60px] font-[700] leading-[150%] text-[#111111]">
            더 나은 세상을 만들어 가기 위한 노력.
          </h1>
        </header>
        <div className="text-[18px] font-[400] leading-[150%] text-[#4C4C4C]">
          <p>
            바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를
            초월한 커뮤니티를 만들어나가려고 노력하고 있습니다. 작은 담소와 삶의
            지혜가 필요하신 모든 분들을 환영합니다.{" "}
          </p>
          <p>
            삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다.
            법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담
            서포터즈에게 도움을 요청해주세요.
          </p>
        </div>
        <div className="text-[20px] font-[700] leading-[150%] text-[#111111] flex gap-[12px]">
          <span>2025. 6. 출시 예정</span>
          <span className="text-[#8C5947]">커뮤니티 APP ‘소소담담’</span>
        </div>
        <div>
          <button className="flex gap-[8px] leading-[100%] text-[18px] font-[500] hover:cursor-pointer justify-center text-[#111111] items-center border-1 px-4 py-3 rounded-3xl hover:bg-[#4C4C4C] hover:text-white">
            <p>앱 다운로드</p>
            <div>
              <DownloadArrow />
            </div>
          </button>
        </div>
      </section>
      <section className="">
        <div>
          <Image
            src="/betterWorld/app-screen.svg"
            alt="Better World"
            width={360}
            height={802}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default BetterWorld;
