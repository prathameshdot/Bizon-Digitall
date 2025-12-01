"use client";

import Image from "next/image";

const CountryReachout = () => {
  return (
    <section className="relative bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 overflow-hidden">
      {/* Orange curved background with rounded top corners */}
      <div className="w-full bg-[#FF7A00] rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px] xl:rounded-t-[120px] overflow-hidden">
        {/* Map Image - Full width, no spacing */}
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[480px] lg:h-[640px] xl:h-[720px] 2xl:h-[800px]">
          <Image
            src="/images/hero/Group 1.png"
            alt="Country Reachout Map"
            fill
            className="object-contain rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px] xl:rounded-t-[120px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CountryReachout;
