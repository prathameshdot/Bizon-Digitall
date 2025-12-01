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
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Gradient Background - Orange to White */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00] via-[#FFA940] to-white" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto lg:items-start">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-tl-[30px] rounded-br-[30px] p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${
                service.id === 2 ? 'lg:mt-12' : ''
              }`}
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${service.iconBg} flex items-center justify-center mb-4 sm:mb-5`}>
                <span className="text-2xl sm:text-3xl flex items-center justify-center">{service.icon}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
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
