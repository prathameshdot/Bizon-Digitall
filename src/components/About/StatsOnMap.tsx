"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import aboutData from "@/data/aboutPageData.json";

const StatsOnMap = () => {
  const { stats } = aboutData;
  const [counts, setCounts] = useState(stats.items.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const interval = duration / steps;

    const counters = stats.items.map((stat, index) => {
      const target = parseInt(stat.number.replace(/[^0-9]/g, ''));
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(counters[index]);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, interval);
    });

    return () => counters.forEach(counter => clearInterval(counter));
  }, [stats.items]);

  const formatNumber = (num: number, original: string) => {
    if (original.includes('+')) return `${num.toLocaleString()}+`;
    return num.toLocaleString();
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-[#FF7A00]">{stats.title}</span>
            </h2>
            {/* Underline */}
            <div className="mt-4 sm:mt-6 mx-auto">
              <div className="h-1 w-32 sm:w-48 md:w-64 lg:w-80 bg-gray-300 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Map with Stats Cards */}
          <div className="relative w-full h-[350px] xs:h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[650px]">
            {/* World Map Image */}
            <Image
              src="/images/about/Container.png"
              alt="Global Reach Map"
              fill
              className="object-contain"
              priority
            />

            {/* Stat Card 1 - Top Left (North America) */}
            <div className="absolute top-[12%] left-[5%] xs:left-[8%] sm:left-[15%] animate-fade-in">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-5 md:p-6 shadow-xl border border-[#FF7A00]/20 hover:scale-105 transition-transform duration-300 w-[90px] xs:w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                <div className="text-center">
                  {/* <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight"> */}
                  <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight">
                    {formatNumber(counts[0], stats.items[0].number)}
                  </div>
                  <div className="text-[9px] xs:text-[10px] sm:text-base md:text-lg font-semibold text-black min-h-[24px] xs:min-h-[28px] sm:min-h-[40px] md:min-h-[48px] flex items-center justify-center leading-tight">
                    {stats.items[0].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 2 - Top Right (Europe) */}
            <div className="absolute top-[18%] right-[8%] xs:right-[12%] sm:right-[20%] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-5 md:p-6 shadow-xl border border-[#FF7A00]/20 hover:scale-105 transition-transform duration-300 w-[90px] xs:w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                <div className="text-center">
                  {/* <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight"> */}
                  <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight">
                    {formatNumber(counts[1], stats.items[1].number)}
                  </div>
                  <div className="text-[9px] xs:text-[10px] sm:text-base md:text-lg font-semibold text-black min-h-[24px] xs:min-h-[28px] sm:min-h-[40px] md:min-h-[48px] flex items-center justify-center leading-tight">
                    {stats.items[1].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 3 - Bottom Left (South America/Africa) */}
            <div className="absolute bottom-[12%] left-[18%] xs:left-[22%] sm:left-[30%] animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-5 md:p-6 shadow-xl border border-[#FF7A00]/20 hover:scale-105 transition-transform duration-300 w-[90px] xs:w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                <div className="text-center">
                  {/* <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight"> */}
                  <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight">
                    {formatNumber(counts[2], stats.items[2].number)}
                  </div>
                  <div className="text-[9px] xs:text-[10px] sm:text-base md:text-lg font-semibold text-black min-h-[24px] xs:min-h-[28px] sm:min-h-[40px] md:min-h-[48px] flex items-center justify-center leading-tight">
                    {stats.items[2].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Card 4 - Middle Right (Asia) */}
            {stats.items[3] && (
              <div className="absolute top-[42%] right-[5%] xs:right-[7%] sm:right-[12%] animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-5 md:p-6 shadow-xl border border-[#FF7A00]/20 hover:scale-105 transition-transform duration-300 w-[90px] xs:w-[110px] sm:w-[160px] md:w-[180px] lg:w-[200px]">
                  <div className="text-center">
                    {/* <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight"> */}
                    <div className="text-lg xs:text-xl sm:text-4xl md:text-5xl font-bold text-[#FF7A00] mb-0.5 xs:mb-1 sm:mb-2 min-h-[28px] xs:min-h-[32px] sm:min-h-[50px] md:min-h-[60px] flex items-center justify-center leading-tight">
                      {formatNumber(counts[3], stats.items[3].number)}
                    </div>
                    <div className="text-[9px] xs:text-[10px] sm:text-base md:text-lg font-semibold text-black min-h-[24px] xs:min-h-[28px] sm:min-h-[40px] md:min-h-[48px] flex items-center justify-center leading-tight">
                      {stats.items[3].label}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsOnMap;
