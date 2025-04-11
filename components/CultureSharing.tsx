"use client";
import React from "react";
import Image from "next/image";

const CultureSharingComponent = () => {
  return (
    <div className="h-screen px-[40px] text-[#111111] py-[240px]">
      <div className="flex flex-col gap-[12px]">
        <div>
          <h1 className="font-[700] text-[72px] leading-[130%] text-center">새로운 문화 나눔을 만들어갑니다.</h1>
        </div>
        <div className="flex justify-center items-center gap-[32px]">
          <h1 className="font-[700] text-[72px] leading-[130%] text-center">우리는</h1>
          <Image
            src="/cultureSection/open-book.svg"
            alt="An open Book"
            width={280}
            height={94}
            style={{ objectFit: "contain" }}
            priority
          />
          </div>
        <div>
          <p className="font-[700] text-[72px] leading-[130%] text-center">사색의향기입니다.</p>
        </div>
        <div>
          <p className="font-[400] text-[20px] leading-[150%] text-center">
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔&quot;을 통한 사회 공헌과 선진적이고
          </p>
          <p className="font-[400] text-[20px] leading-[150%] text-center">
          건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
          </p>
        </div>
      </div>
    </div>
  );
};



export default CultureSharingComponent;
