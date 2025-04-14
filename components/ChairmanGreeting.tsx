import React from "react";
import Image from "next/image";

const ChairmanGreetings = () => {
  return (
    <div className="z-10 relative pb-16 md:pb-24 lg:pb-0 px-4 sm:px-6 lg:px-8">
      {/* Chairman's Message Section */}
      <section className="pt-10 z-30 relative sm:pt-16 md:pt-20 lg:pt-16 w-full max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl lg:pl-[100px] xl:pl-[200px]">
        <div>
          <h1 className="text-[#111111] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-[150%]">
            이사장 인사말.
          </h1>
        </div>
        <div className="text-[#4C4C4C] mt-6 md:mt-8 lg:mt-10 font-normal text-base sm:text-lg md:text-[20px] leading-relaxed lg:leading-[150%] space-y-4">
          <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
          <p>
            사색의향기는 &apos;행복한 문화 나눔&apos;을 통해 더 나은 사회를
            만들어가고자 노력해왔습니다. 앞으로도 문학과 인문학의 가치를
            공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
          </p>
          <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
        </div>
        <div className="font-bold flex flex-col sm:flex-row mt-6 gap-4 sm:gap-6 items-start sm:items-center text-lg sm:text-xl md:text-2xl leading-tight md:leading-[150%] text-[#111111]">
          <p>사단법인 사색의향기 이사장 오덕균</p>
          <div className="w-[200px] sm:w-auto">
            <Image
              src="/chairmanGreetingSection/signature.svg"
              alt="Chairman's Signature"
              width={280}
              height={94}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="font-medium text-[#111111] text-base md:text-[18px] leading-tight md:leading-[100%] cursor-pointer hover:underline">
            인터뷰 더 보기
          </p>
        </div>
      </section>

      {/* Speakers Images Section */}
      <section className="mt-16 z-20 relative sm:mt-20 md:mt-24 lg:mt-40 w-full max-w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 text-[#111111]">
            <div className="font-bold text-lg sm:text-xl md:text-2xl leading-tight md:leading-[150%] flex flex-col justify-center items-center gap-2">
              <div className="w-[200px] sm:w-[180px] md:w-[220px] lg:w-[270px]">
                <Image
                  src="/chairmanGreetingSection/chairman3.svg"
                  alt="Chairman's Image"
                  width={270}
                  height={94}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <p>오덕균 이사장</p>
            </div>
            <div className="font-bold text-lg sm:text-xl md:text-2xl leading-tight md:leading-[150%] flex flex-col justify-center items-center gap-2">
              <div className="w-[200px] sm:w-[180px] md:w-[220px] lg:w-[270px]">
                <Image
                  src="/chairmanGreetingSection/speaker2.svg"
                  alt="Speaker's Image"
                  width={270}
                  height={94}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <p>정준호 이사</p>
            </div>
            <div className="font-bold text-lg sm:text-xl md:text-2xl leading-tight md:leading-[150%] flex flex-col justify-center items-center gap-2">
              <div className="w-[200px] sm:w-[180px] md:w-[220px] lg:w-[270px]">
                <Image
                  src="/chairmanGreetingSection/speaker3.svg"
                  alt="Speaker's Image"
                  width={270}
                  height={94}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <p>권혁준 고문</p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Chairman's Image on the right */}
      <div className="hidden lg:block absolute right-0 top-[10px] z-10">
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