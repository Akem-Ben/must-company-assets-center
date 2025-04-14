"use client";
import { FooterRightArrow } from "@/constants/SvgPaths";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-300 py-12 md:py-20 lg:py-[120px] px-6 sm:px-8 md:px-12 lg:px-[100px]">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 justify-between">
        <section className="flex flex-col gap-6 md:gap-10">
          <div>
            <Image
              src="sasaek-logo.zip.svg"
              alt="Logo"
              width={230}
              height={53.91}
              className="w-[180px] md:w-[230px]"
            />
          </div>
          <div className="font-[600] text-sm md:text-[16px] flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-[16px] leading-[150%]">
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span className="text-[#7C7C7C] font-[400]">
              고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)
            </span>
          </div>
          <div className="flex flex-col gap-3 md:gap-[10px]">
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-[16px] font-[400] text-xs md:text-[12px] leading-[150%]">
              <span>사단법인 사색의향기</span>
              <p className="text-[#7C7C7C]">
                이사장 <span className="text-white">오덕균</span>
              </p>
              <p className="text-[#7C7C7C]">
                고유번호 <span className="text-white"> 355-82-00129</span>
              </p>
            </div>
            <div className="font-[400] text-xs md:text-[12px] leading-[150%] flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-[16px]">
              <p className="text-white">
                <span className="text-[#7C7C7C]">주소</span> 서울시 강남구
                테헤란로 19길 28 이림빌딩3층(역삼동)
              </p>
              <p className="text-white">
                <span className="text-[#7C7C7C]">전화</span> 02-539-5101
              </p>
              <p className="text-white">
                <span className="text-[#7C7C7C]">팩스</span> 070-8668-5091
              </p>
              <p className="text-white">
                <span className="text-[#7C7C7C]">이메일</span> culppy@culppy.com
              </p>
            </div>
            <div className="text-white font-[400] leading-[150%] text-xs md:text-[12px]">
              <p>Copyright ⓒ 2025 사색의향기. All Rights Reserved</p>
            </div>
          </div>
        </section>

        <section className="max-w-full lg:max-w-[428px] flex flex-col gap-6 md:gap-[32px]">
          <div>
            <h1 className="font-[600] text-xl md:text-[24px] leading-[150%]">
              뉴스레터 구독하기
            </h1>
          </div>
          <div>
            <p className="font-[400] text-sm md:text-[16px] leading-[150%]">
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.
            </p>
          </div>
          <div>
            <button className="border-1 w-full hover:cursor-pointer text-left px-4 md:px-[16px] py-2 md:py-[10px] flex justify-between items-center rounded-full hover:bg-gray-700 transition-colors">
              이메일 구독신청 <FooterRightArrow />
            </button>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;