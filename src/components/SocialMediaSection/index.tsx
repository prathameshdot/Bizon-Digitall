"use client";

import Image from "next/image";

const SocialMediaSection = () => {
  return (
    <section className="relative pt-6 pb-0 sm:pt-8 sm:pb-0 md:pt-10 md:pb-0 lg:pt-12 lg:pb-0 overflow-hidden bg-white">
      {/* Background Image - smaller, centered and subtle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0 w-full max-w-[1100px] h-[180px] sm:h-[220px] md:h-[280px] opacity-30 pointer-events-none">
        <Image
          src="/images/hero/Group 9257.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 pt-6 pb-0">
            {/* Icons Row (smaller, animated) */}
            <div className="flex items-center justify-center gap-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform transition-transform hover:scale-110 animate-bounce" style={{animationDuration: '1.8s', animationIterationCount: 'infinite'}}>
                <Image src="/images/hero/Facebook.png" alt="Facebook" fill className="object-contain" />
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform transition-transform hover:scale-110 animate-bounce" style={{animationDuration: '1.9s', animationIterationCount: 'infinite', animationDelay: '0.15s'}}>
                <Image src="/images/hero/LinkedIn.png" alt="LinkedIn" fill className="object-contain" />
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform transition-transform hover:scale-110 animate-bounce" style={{animationDuration: '2s', animationIterationCount: 'infinite', animationDelay: '0.3s'}}>
                <Image src="/images/hero/Twitter.png" alt="Twitter" fill className="object-contain" />
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform transition-transform hover:scale-110 animate-bounce" style={{animationDuration: '2.1s', animationIterationCount: 'infinite', animationDelay: '0.45s'}}>
                <Image src="/images/hero/Instagram.png" alt="Instagram" fill className="object-contain" />
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative transform transition-transform hover:scale-110 animate-bounce" style={{animationDuration: '2.2s', animationIterationCount: 'infinite', animationDelay: '0.6s'}}>
                <Image src="/images/hero/Messenger.png" alt="Messenger" fill className="object-contain" />
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-2">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">Connect & Collaborate</p>
            </div>

            {/* Watch Video Button - centered below icons, rotating around center */}
            <div className="mt-4 flex justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 relative">
                <div className="w-full h-full transform transition-transform hover:scale-110 animate-spin" style={{ animationDuration: '3s', willChange: 'transform' }}>
                  <Image
                    src="/images/hero/watch video.png"
                    alt="Watch Video"
                    fill
                    className="object-contain cursor-pointer"
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

export default SocialMediaSection;
