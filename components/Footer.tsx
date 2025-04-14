"use client";
import { FooterRightArrow } from "@/constants/SvgPaths";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="bg-[#222222] text-gray-300 py-[120px] px-[250px]">
        <div className="flex justify-between">
        <section className="flex flex-col gap-10">
          <div>
            <Image
                src="sasaek-logo.zip.svg"
                alt="Logo"
                width={230}
                height={53.91}
            />
          </div>
          <div className="font-[600] text-[16px] flex gap-[16px] leading-[150%]">
            <span>개인정보 처리방침</span> <span>이용약관</span> <span className="text-[#7C7C7C] font-[400]">고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span>
          </div>
          <div className="flex flex-col gap-[10px]">
          <div className="flex gap-[16px] font-[400] text-[12px] leading-[150%]">
            <span>사단법인 사색의향기</span> <p className="text-[#7C7C7C]">이사장 <span className="text-white">오덕균</span></p> <p className="text-[#7C7C7C]">고유번호 <span className="text-white">{" "} 355-82-00129</span></p>
          </div>
          <div className="font-[400] text-[12px] leading-[150%] flex gap-[16px]">
            <p className="text-white"><span className="text-[#7C7C7C]">주소</span>{" "} 서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</p> <p className="text-white"><span className="text-[#7C7C7C]">전화</span>{" "} 02-539-5101</p> <p className="text-white"><span className="text-[#7C7C7C]">팩스</span>{" "} 070-8668-5091</p> <p className="text-white"><span className="text-[#7C7C7C]">이메일</span>{" "} culppy@culppy.com</p>
          </div>
          <div className="text-white font-[400] leading-[150%] text-[12px]"><p>Copyright ⓒ 2025 사색의향기. All Rights Reserved</p></div>
          </div>
        </section>
        <section className="max-w-[428px] flex flex-col gap-[32px]">
          <div><h1 className="font-[600] text-[24px] leading-[150%]">뉴스레터 구독하기</h1></div>
          <div><p className="font-[400] text-[16px] leading-[150%]">이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
          빠르게 받아보실 수 있습니다.</p></div>
          <div><button className="border-1 w-full text-left px-[16px] py-[10px] flex justify-between items-center rounded-full">이메일 구독신청 <FooterRightArrow /></button></div>
        </section>
        </div>
    </footer>
  );
};

export default Footer;
