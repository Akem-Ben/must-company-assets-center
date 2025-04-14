import { HeartHandshakeImage } from "@/constants/SvgPaths";

const DonationSection = () => {
  return (
    <section className="bg-[#F8F4F3] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex text-[#111111] justify-center items-center text-center">
          <div className="md:w-2/3 p-8 md:p-12">
            <h2 className="text-[30px] leading-[150%] font-bold  mb-4">
              기부를 통해 따뜻한 마음을 보내고 싶다면,
            </h2>

            <div className="mt-8 text-[20px] leading-[150%] font-[400]">
              <h3 className="mb-2">후원계좌 안내</h3>
              <div className="">
                <p>국민 924501-01-351204 / 사단법인 사색의향기</p>
              </div>
            </div>
            <div className="text-[18px] mt-10 font-[500] leading-[100%] justify-center items-center gap-[12px] flex">
              <button className="flex hover:cursor-pointer hover:bg-[#4C4C4C] hover:text-white justify-center items-center gap-[8px] border-1 px-4 py-2 rounded-2xl">
                <HeartHandshakeImage /> 정기 후원
              </button>
              <button className="flex hover:cursor-pointer hover:bg-[#4C4C4C] hover:text-white  justify-center items-center border-1 px-4 py-3 rounded-2xl">
                일시 후원
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
