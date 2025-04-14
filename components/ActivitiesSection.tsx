import React from "react";
import Image from "next/image";

interface ActivitiesData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  imagePosition: "left" | "right";
}

interface ActivitiesComponentProps {
  sections: ActivitiesData[];
}

const ActivitiesComponent: React.FC<ActivitiesComponentProps> = ({
  sections,
}) => {
  return (
    <div className="w-full lg:mt-20 max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col space-y-8 md:space-y-12">

        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold leading-tight md:leading-[150%]">
            <span className="text-[#111111]">함께하는 일</span>
            <span className="mx-1 sm:mx-2 text-[#DDDCDC]">·</span>
            <span className="text-[#BBBBBB]">우리의 흔적</span>
          </h1>
        </div>

        {/* Content Sections */}
        {sections.map((section) => (
          <div key={section.id} className="w-full">
            {section.imagePosition === "right" ? (
              <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
                {/* Image on right */}
                <div className="w-full md:w-2/3 order-1 md:order-1">
                  <div className="relative w-full h-[150px] sm:h-[171px] rounded-md overflow-hidden">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 825px"
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />
                  </div>
                </div>

                {/* Text on left */}
                <div className="w-full md:w-1/3 order-2 md:order-2 flex flex-col justify-center mt-4 md:mt-0">
                  <div className="space-y-2">
                    <p className="text-base md:text-lg font-normal leading-relaxed text-[#111111]">
                      {section.description}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[150%] text-[#111111] mt-2 md:mt-4">
                      {section.title}
                    </h2>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6 md:gap-[40px]">
                {/* Text on left */}
                <div className="w-full md:w-1/3 order-2 md:order-1 flex flex-col justify-center mt-4 md:mt-0">
                  <div className="space-y-2 text-left md:text-right">
                    <p className="text-base md:text-lg font-normal leading-relaxed text-[#111111]">
                      {section.description}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight md:leading-[150%] text-[#111111] mt-2 md:mt-4">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Image on right */}
                <div className="w-full md:w-2/3 order-1 md:order-2">
                  <div className="relative w-full h-[150px] sm:h-[171px] rounded-md overflow-hidden">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 825px"
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesComponent;

export const ActivitiesPage: React.FC = () => {
  const ActivitiesData: ActivitiesData[] = [
    {
      id: "section1",
      title: "인문학 콘서트",
      description: "깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과 인문학의 이야기",
      imageUrl: "/activitiesSection/activity-image-1.svg",
      imagePosition: "right",
    },
    {
      id: "section2",
      title: "지역 축제",
      description:
        "지역의 숨결을 느끼며 함께 웃는 하루 박한 만남속에 커지는 온기",
      imageUrl: "/activitiesSection/activity-image-2.svg",
      imagePosition: "left",
    },
    {
      id: "section3",
      title: "나눔 바자회",
      description: "행복이 전해지는 물건들, 그 속의 이야기들",
      imageUrl: "/activitiesSection/activity-image-3.svg",
      imagePosition: "right",
    },
    {
      id: "section4",
      title: "따뜻한 후원",
      description:
        "작은 나눔이 모여 큰 울림이 됩니다 사색의향기와 함께 만들어가는 더 나은 내일",
      imageUrl: "/activitiesSection/activity-image-4.svg",
      imagePosition: "left",
    },
  ];

  return <ActivitiesComponent sections={ActivitiesData} />;
};