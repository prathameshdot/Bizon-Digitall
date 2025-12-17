"use client";

import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 bg-white overflow-hidden">
      {/* Checkered Pattern Background with borders and spacing */}
      {/* Responsive background patterns: smaller pattern for mobile, denser for sm+ */}
      <div className="absolute inset-0 block sm:hidden" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="checkerboard-sm" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="36" height="36" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
              <rect x="0" y="44" width="36" height="36" fill="#FFB380" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
              <rect x="44" y="0" width="36" height="36" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
              <rect x="44" y="44" width="36" height="36" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
              <rect x="88" y="0" width="36" height="36" fill="#FFB380" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
              <rect x="88" y="44" width="36" height="36" fill="white" stroke="#d1d5db" strokeWidth="1" rx="6" ry="6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#checkerboard-sm)" />
        </svg>
      </div>

      <div className="absolute inset-0 hidden sm:block" aria-hidden>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="checkerboard" x="0" y="0" width="220" height="120" patternUnits="userSpaceOnUse">
              {/* First column - two boxes with rounded corners */}
              <rect x="0" y="0" width="50" height="50" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
              <rect x="0" y="60" width="50" height="50" fill="#FFB380" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
              
              {/* Middle column - blank boxes (only borders) */}
              <rect x="55" y="0" width="50" height="50" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
              <rect x="55" y="60" width="50" height="50" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
              
              {/* Third column - two boxes (offset pattern) with rounded corners */}
              <rect x="110" y="0" width="50" height="50" fill="#FFB380" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
              <rect x="110" y="60" width="50" height="50" fill="white" stroke="#d1d5db" strokeWidth="1" rx="8" ry="8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#checkerboard)" />
        </svg>
      </div>
      {/* White bottom bar inside CTA so the bottom spacing is fully white */}
      <div className="absolute left-0 right-0 bottom-0 h-6 sm:h-8 md:h-10 bg-white" aria-hidden />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Single white box containing both content and image with black border */}
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-xl border-2 border-black">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
                  Let&apos;s make things happen
                </h2>
                <p className="text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent('openGetQuote'))}
                  className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get your free proposal
                </button>
              </div>

              {/* Right Illustration */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] aspect-square">
                  <Image
                    src="/images/about/Illustration.png"
                    alt="Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
