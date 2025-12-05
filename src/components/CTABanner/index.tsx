"use client";

import Link from "next/link";
import Image from "next/image";

const CTABanner = ({ data }: { data?: { title?: string; description?: string; buttonText?: string; buttonAction?: string; buttonLink?: string } }) => {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-[#FF7A00] overflow-hidden">
      {/* Decorative Circles - Hidden on mobile */}
      <div className="hidden lg:block absolute right-[10%] xl:right-[15%] top-1/2 -translate-y-1/2 w-1/3 xl:w-1/4 aspect-square pointer-events-none">
        <Image
          src="/images/about/Group 9264.png"
          alt="Decorative circles"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Heading */}
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-black mb-4 sm:mb-6">
              {data?.title || "Would you like to Start a project with us ?"}
            </h2>

            {/* Description */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 lg:mb-0 leading-relaxed">
              {data?.description || "We're eager to help you achieve your digital marketing goals with customized solutions. Let's work together to elevate your brand and drive success. Get in touch today, and let's make it happen!"}
            </p>
          </div>

          {/* Right CTA Button */}
          <div className="lg:flex-shrink-0 lg:relative lg:z-20">
            {data?.buttonAction === 'openGetQuote' ? (
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openGetQuote'))}
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {data?.buttonText || 'Get Started'}
              </button>
            ) : (
              <Link
                href={data?.buttonLink || '/contact'}
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {data?.buttonText || 'Get Started'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
