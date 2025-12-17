"use client";

import Image from "next/image";
import Link from "next/link";

interface Leader {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

const leadersData: Leader[] = [
  {
    id: 1,
    name: "Rahul Wanchoo",
    title: "Entrepreneur | India's Leading Internet Marketer",
    description: "Rahul's extraordinary digital marketing skills have generated millions of dollars in sales!",
    image: "/images/about/Group 9257 (1).png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    id: 2,
    name: "Suresh Khorate",
    title: "Entrepreneur | Expert in Visual communication",
    description: "Suresh stands as a beacon in the realm of visual communication.",
    image: "/images/about/Group 9258.png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  /*
  {
    id: 3,
    name: "Aarzoo Shah",
    title: "Entrepreneur | Author | Coach | TEDx Speaker",
    description: "As an entrepreneur, writer and coach, Aarzoo shah is a force for transformative change.",
    image: "/images/about/Group 9259.png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  */
];

const Leadership = () => {
  return (
    <section className="relative py-6 sm:py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-2 md:mb-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2">
            Meet our leadership
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="max-w-7xl mx-auto space-y-0">
          {leadersData.map((leader, index) => (
            <div
              key={leader.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-1 md:gap-2`}>
              {/* Image Section */}
              <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                <div className="relative w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] aspect-[3/4]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full md:w-2/3 lg:w-3/4 ${index % 2 === 0 ? "md:pl-2" : "md:pr-2"}`}>
                <div className="space-y-1">
                  {/* Name */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-black text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.name}
                  </h3>

                  {/* Title */}
                  <p className={`text-sm sm:text-base font-semibold text-[#FF7A00] text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.title}
                  </p>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm md:text-base text-[#FF7A00] leading-relaxed text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.description}
                  </p>
                  
                  {/** Social Icons hidden for now */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
