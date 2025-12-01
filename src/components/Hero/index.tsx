import Link from "next/link";
import Image from "next/image";

const Hero = () => {
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
                  Transform Your Online Presence with Expert Digital Marketing Services
                </p>
                <h1 className="mb-5 text-[1.75rem] font-extrabold leading-tight text-black xs:text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-6xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <span className="text-[#FF7A00]">Driving Results</span>
                  <br />
                  <span className="text-[#FF7A00]">with </span>
                  <span className="text-black">Innovation</span>
                  <br />
                  <span className="text-black">and Strategy</span>
                </h1>
                <p className="mb-2 text-base font-semibold text-black sm:text-lg md:text-lg lg:text-base xl:text-lg">
                  Take your business to next level
                </p>
                <p className="mb-8 text-sm font-normal text-black sm:text-base md:text-base lg:text-sm xl:text-base">
                  with the Proven Digital Solutions
                </p>
                <div className="flex flex-col items-center space-y-4 lg:items-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full bg-[#FF7A00] px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-[#FF7A00]/90 sm:px-8 sm:py-3.5 sm:text-base"
                  >
                    Get Started
                    <svg
                      className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
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
                </div>
              </div>
            </div>

            {/* Right Content - Image with Decorations */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[600px] lg:mr-0">
                <div className="relative flex items-center justify-center py-4 sm:py-6 md:py-8">
                  {/* Complete hero image with all decorations */}
                  <div className="relative z-10 h-[300px] w-full max-w-[350px] sm:h-[380px] sm:max-w-[450px] md:h-[480px] md:max-w-[550px] lg:h-[580px] lg:max-w-[650px]">
                    <Image
                      src="/images/hero/Group%209213.png"
                      alt="Digital Marketing Expert"
                      fill
                      className="object-contain"
                      priority
                    />
                    
                    {/* Rotating orbit container - circles move in circular path */}
                    <div className="absolute left-[15%] top-[18%] h-[140px] w-[140px] animate-orbit sm:left-[17%] sm:top-[20%] sm:h-[170px] sm:w-[170px] md:left-[19%] md:top-[22%] md:h-[200px] md:w-[200px] lg:left-[20%] lg:top-[24%] lg:h-[230px] lg:w-[230px]">
                      {/* Circle 1 - Instagram */}
                      <div className="absolute left-1/2 top-0 h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-black/40 sm:h-[65px] sm:w-[65px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px] flex items-center justify-center">
                        <Image
                          src="/images/hero/Instagram.png"
                          alt="Instagram"
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Second orbit container - LinkedIn */}
                    <div className="absolute left-[15%] top-[18%] h-[140px] w-[140px] animate-orbit sm:left-[17%] sm:top-[20%] sm:h-[170px] sm:w-[170px] md:left-[19%] md:top-[22%] md:h-[200px] md:w-[200px] lg:left-[20%] lg:top-[24%] lg:h-[230px] lg:w-[230px]" style={{ animationDelay: '-3.33s' }}>
                      {/* Circle 2 - LinkedIn */}
                      <div className="absolute left-1/2 top-0 h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-black/40 sm:h-[65px] sm:w-[65px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px] flex items-center justify-center">
                        <Image
                          src="/images/hero/LinkedIn.png"
                          alt="LinkedIn"
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Third orbit container - Facebook */}
                    <div className="absolute left-[15%] top-[18%] h-[140px] w-[140px] animate-orbit sm:left-[17%] sm:top-[20%] sm:h-[170px] sm:w-[170px] md:left-[19%] md:top-[22%] md:h-[200px] md:w-[200px] lg:left-[20%] lg:top-[24%] lg:h-[230px] lg:w-[230px]" style={{ animationDelay: '-6.66s' }}>
                      {/* Circle 3 - Facebook */}
                      <div className="absolute left-1/2 top-0 h-[55px] w-[55px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-black/40 sm:h-[65px] sm:w-[65px] md:h-[75px] md:w-[75px] lg:h-[85px] lg:w-[85px] flex items-center justify-center">
                        <Image
                          src="/images/hero/Facebook.png"
                          alt="Facebook"
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </div>
                    </div>
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
