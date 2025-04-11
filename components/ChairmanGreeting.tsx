import React from "react";
import Image from "next/image";

const ChairmanGreetings = () => {
  return (
    <div className="h-screen">
      <section className="pl-[260px] w-[900px]">
        <div>
          <h1 className="text-[#111111] font-[700] text-[60px] leading-[150%]">
            이사장 인사말.
          </h1>
        </div>
        <div className="text-[#4C4C4C] mt-10 font-[400] text-[20px] leading-[150%]">
          <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
          <p>
            사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
            노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린
            커뮤니티로서 함께 성장하겠습니다.
          </p>
          <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
        </div>
        <div className="font-[700] flex mt-6 gap-6 items-center text-[24px] leading-[150%] text-[#111111]">
          <p>사단법인 사색의향기 이사장 오덕균</p>
          <Image
            src="/chairmanGreetingSection/signature.svg"
            alt="Chairman's Signature"
            width={280}
            height={94}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
        <div>
          <p className="font-[500] text-[#111111] text-[18px] leading-[100%]">
            인터뷰 더 보기
          </p>
        </div>
      </section>
      <section className="px-[260px] flex justify-center items-center mt-20">
        <div className="flex text-[#111111] justify-between w-full">
          <div className="font-[700] text-[24px] leading-[150%] flex flex-col justify-center items-center gap-2">
            <Image
              src="/chairmanGreetingSection/chairman3.svg"
              alt="Chairman's Image"
              width={270}
              height={94}
              style={{ objectFit: "contain" }}
              priority
            />
            <p>오덕균 이사장</p>
          </div>
          <div className="font-[700] text-[24px] leading-[150%] flex flex-col justify-center items-center gap-2">
            <Image
              src="/chairmanGreetingSection/speaker2.svg"
              alt="Speaker's Image"
              width={270}
              height={94}
              style={{ objectFit: "contain" }}
              priority
            />
            <p>정준호 이사</p>
          </div>
          <div className="font-[700] text-[24px] leading-[150%] flex flex-col justify-center items-center gap-2">
            <Image
              src="/chairmanGreetingSection/speaker3.svg"
              alt="Speaker's Image"
              width={270}
              height={94}
              style={{ objectFit: "contain" }}
              priority
            />
            <p>권혁준 고문</p>
          </div>
        </div>
      </section>
      <div className="absolute right-0 top-480">
        <Image
          src="/chairmanGreetingSection/chairman-image.svg"
          alt="Chairman's Image"
          width={660}
          height={435}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
};

export default ChairmanGreetings;
