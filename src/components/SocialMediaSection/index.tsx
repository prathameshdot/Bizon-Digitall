"use client";

import Image from "next/image";

const SocialMediaSection = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 pb-16 sm:pb-20 md:pb-24 lg:pb-28 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <Image
          src="/images/hero/Group 9257.png"
          alt="Background"
          fill
          className="object-contain"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-16 sm:gap-20 md:gap-24 lg:gap-28 py-8">
            {/* Row 1: Facebook, LinkedIn, Twitter */}
            <div className="flex items-center justify-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 xl:gap-48">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform">
                <Image
                  src="/images/hero/Facebook.png"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform">
                <Image
                  src="/images/hero/LinkedIn.png"
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform">
                <Image
                  src="/images/hero/Twitter.png"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Row 2: Instagram, Messenger */}
            <div className="flex items-center justify-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 xl:gap-48">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform">
                <Image
                  src="/images/hero/Instagram.png"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative hover:scale-110 transition-transform">
                <Image
                  src="/images/hero/Messenger.png"
                  alt="Messenger"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Watch Video Button - Bottom Right */}
            <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
                <Image
                  src="/images/hero/watch video.png"
                  alt="Watch Video"
                  fill
                  className="object-contain cursor-pointer hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
