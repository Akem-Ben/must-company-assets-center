import React from "react";
import Image from "next/image";

interface ActivitiesData {
  id: string;
  title: string;
  subtitle: string;
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
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col space-y-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="text-black">함께하는 일</span>
            <span className="mx-2 text-gray-300">·</span>
            <span className="text-gray-300">우리의 흔적</span>
          </h1>
        </div>

        {/* Content Sections */}
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col md:flex-row w-full">
            {section.imagePosition === "right" ? (
              <>
                {/* Text on left */}
                <div className="w-full md:w-1/3 flex flex-col justify-center mb-4 md:mb-0 md:pr-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                    <h2 className="text-2xl font-bold mt-4">{section.title}</h2>
                  </div>
                </div>

                {/* Image on right */}
                <div className="w-full md:w-2/3 relative h-64 md:h-auto">
                  <div className="relative w-full h-full">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />

                    {/* Overlay text - right side */}
                    <div className="absolute top-1/2 right-6 transform -translate-y-1/2 text-right">
                      <p className="text-sm text-gray-700 mb-2">
                        {section.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold">{section.title}</h3>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Image on left */}
                <div className="w-full md:w-2/3 relative h-64 md:h-auto mb-4 md:mb-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={section.imageUrl}
                      alt={section.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md"
                    />
                  </div>
                </div>

                {/* Text on right */}
                <div className="w-full md:w-1/3 flex flex-col justify-center md:pl-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {section.description}
                    </p>
                    <h2 className="text-2xl font-bold mt-4">{section.title}</h2>
                  </div>
                </div>
              </>
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
      subtitle:
        "깊은 사유와 따뜻한 대화가 어우러진 시간\n마음을 울리는 문학과 인문학의 이야기",
      description: "",
      imageUrl: "/images/concert.jpg",
      imagePosition: "right",
    },
    {
      id: "section2",
      title: "지역 축제",
      subtitle: "",
      description:
        "지역의 습관을 느끼며 함께 웃는 하루\n소박한 만남속에 커지는 우리",
      imageUrl: "/images/festival.jpg",
      imagePosition: "left",
    },
    {
      id: "section3",
      title: "나눔 바자회",
      subtitle: "행복이 전해지는 물건들,\n그 속의 이야기들",
      description: "",
      imageUrl: "/images/bazaar.jpg",
      imagePosition: "right",
    },
    {
      id: "section4",
      title: "따뜻한 후원",
      subtitle: "",
      description:
        "작은 나눔이 모여 큰 울림이 됩니다\n사색의향기와 함께 만들어가는 더 나은 내일",
      imageUrl: "/images/donation.jpg",
      imagePosition: "left",
    },
  ];

  return <ActivitiesComponent sections={ActivitiesData} />;
};
