"use client";

import Image from "next/image";

interface ServiceCard {
  id: number;
  icon: string;
  iconBg: string;
  title: string;
  description: string;
}

const servicesData: ServiceCard[] = [
  {
    id: 1,
    icon: "🔍",
    iconBg: "bg-blue-200",
    title: "Search Engine Optimization",
    description: "Boost your visibility and rank higher on search engines with strategic SEO techniques.",
  },
  {
    id: 2,
    icon: "👍",
    iconBg: "bg-pink-200",
    title: "Social Media Strategy",
    description: "Build engaging campaigns and grow your audience across all social media platforms.",
  },
  {
    id: 3,
    icon: "📊",
    iconBg: "bg-yellow-200",
    title: "Reporting & Analysis",
    description: "Track performance with detailed analytics and data-driven insights for better decisions.",
  },
];

const DigitalMarketingServices = () => {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 lg:py-12 overflow-hidden">
      {/* Gradient Background - Orange to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00] via-[#FFA940] to-white" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto items-stretch">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-tl-[30px] rounded-br-[30px] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between`}
            >
              {/* Icon Circle - commented out per request */}
              {/**
              <div className={`w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full ${service.iconBg} flex items-center justify-center mb-4 sm:mb-5`}>
                <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl flex items-center justify-center">{service.icon}</span>
              </div>
              */}
              
              {/* Title */}
              <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingServices;
