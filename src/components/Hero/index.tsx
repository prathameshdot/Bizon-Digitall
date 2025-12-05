"use client";

import Link from "next/link";
import Image from "next/image";

type HeroData = {
  title?: string;
  tagline?: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  backgroundImage?: string;
  ctaPrimary?: { text: string; action?: string; link?: string };
  ctaSecondary?: { text: string; link?: string };
};

const Hero = ({ data }: { data?: HeroData }) => {
  const title = data?.title || "Driving Results with Innovation and Strategy";
  const tagline = data?.tagline || "Transform Your Online Presence with Expert Digital Marketing Services";
  const subtitle = data?.subtitle || "Take your business to next level";
  const heroImage = data?.heroImage || "/images/hero/Group%209213.png";

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-8 pt-24 sm:pb-10 sm:pt-28 md:pb-12 md:pt-32 lg:pb-16 lg:pt-36 xl:pb-20 xl:pt-40"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[600px] text-center lg:mb-0 lg:text-left">
                <p className="mb-3 text-xs font-normal leading-relaxed text-black xs:text-sm sm:text-base md:text-base lg:text-sm xl:text-base 2xl:text-lg">
                  {tagline}
                </p>
                <h1 className="mb-5 text-[1.75rem] font-extrabold leading-tight text-black xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-6xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {title}
                </h1>
                <p className="mb-2 text-base font-semibold text-black sm:text-lg md:text-lg lg:text-base xl:text-lg">
                  {subtitle}
                </p>
                <p className="mb-8 text-sm font-normal text-black sm:text-base md:text-base lg:text-sm xl:text-base">
                  {data?.description || 'with the Proven Digital Solutions'}
                </p>
                <div className="flex flex-col items-center space-y-4 lg:items-start">
                  {data?.ctaPrimary ? (
                    <button
                      onClick={() => {
                        if (data?.ctaPrimary?.action === 'openGetQuote') {
                          window.dispatchEvent(new CustomEvent('openGetQuote'));
                        } else if (data?.ctaPrimary?.link) {
                          window.location.href = data?.ctaPrimary.link;
                        }
                      }}
                      className="inline-flex items-center rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#FF7A00]/90 sm:px-8 sm:py-3.5 sm:text-base"
                    >
                      {data?.ctaPrimary.text}
                    </button>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#FF7A00]/90 sm:px-8 sm:py-3.5 sm:text-base"
                    >
                      Get Started
                    </Link>
                  )}

                  {data?.ctaSecondary && (
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black sm:h-12 sm:w-12">
                        <svg
                          className="h-4 w-4 text-black sm:h-5 sm:w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-[10px] font-semibold tracking-wide text-black sm:text-[11px]">
                          WATCH HOW CAN WE HELP
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content - Image with Decorations */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[600px] lg:mr-0">
                <div className="relative flex items-center justify-center py-4 sm:py-6 md:py-8">
                  {/* Complete hero image with all decorations */}
                  <div className="relative z-10 h-[300px] w-full max-w-[420px] sm:h-[360px] sm:max-w-[520px] md:h-[460px] md:max-w-[600px] lg:h-[520px] lg:max-w-[700px]">
                    <Image
                      src={data?.heroImage || '/images/hero/Group 9213.png'}
                      alt="Digital Marketing Expert"
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
    </>
  );
};

export default Hero;
