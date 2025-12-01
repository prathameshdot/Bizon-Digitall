"use client";

import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: "SOCIAL MEDIA\nMARKETING",
      subtitle: "Service 01",
      description: "Build your brand presence and engage with your audience across all major social media platforms. We create compelling content strategies that drive engagement, increase followers, and convert social interactions into business results.",
      bgColor: "bg-black"
    },
    {
      title: "SEARCH ENGINE\nOPTIMIZATION",
      subtitle: "Service 02",
      description: "Improve your website's visibility and organic search rankings with our comprehensive SEO strategies. From keyword research to technical optimization, we ensure your business appears at the top of search results when it matters most.",
      bgColor: "bg-[#FF7A00]"
    },
    {
      title: "CONTENT\nMARKETING",
      subtitle: "Service 03",
      description: "Create valuable, relevant content that attracts and retains your target audience. Our content marketing strategies include blog posts, videos, infographics, and more to establish your brand as an industry authority.",
      bgColor: "bg-gray-300"
    },
    {
      title: "PAY-PER-CLICK\nADVERTISING",
      subtitle: "Service 04",
      description: "Maximize your ROI with targeted PPC campaigns across Google Ads, social media platforms, and display networks. We create data-driven campaigns that reach your ideal customers at the right time with the right message.",
      bgColor: "bg-black"
    },
    {
      title: "EMAIL\nMARKETING",
      subtitle: "Service 05",
      description: "Connect directly with your customers through personalized email campaigns. From automated workflows to newsletter designs, we help you nurture leads, retain customers, and drive conversions through strategic email marketing.",
      bgColor: "bg-[#FF7A00]"
    },
    {
      title: "WEB DESIGN &\nDEVELOPMENT",
      subtitle: "Service 06",
      description: "Create a stunning, user-friendly website that converts visitors into customers. Our team designs and develops responsive websites optimized for performance, SEO, and user experience across all devices.",
      bgColor: "bg-gray-300"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollStart = rect.top;
      const scrollEnd = rect.bottom - viewportHeight;
      
      if (scrollStart <= 0 && scrollEnd >= 0) {
        // We're in the section
        const scrollProgress = Math.abs(scrollStart) / (sectionHeight - viewportHeight);
        const newIndex = Math.min(
          Math.floor(scrollProgress * services.length),
          services.length - 1
        );
        setActiveIndex(Math.max(0, newIndex));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  // Calculate dynamic top offset based on active index
  const getStickyTop = () => {
    if (!isMobile) return '0';
    
    // Gradually move up as we scroll through cards
    // Start at 0, move to -20vh for middle cards, -40vh for last cards
    const progress = activeIndex / (services.length - 1);
    const maxOffset = 40; // Maximum offset in vh
    const offset = progress * maxOffset;
    
    return `-${offset}vh`;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-8 md:py-12 lg:py-16"
      style={{ minHeight: `${services.length * 100}vh` }}
    >
      <div 
        className="sticky flex items-center py-8 xs:py-10 sm:py-12 md:py-16 transition-all duration-700 ease-out"
        style={{
          top: getStickyTop(),
          minHeight: isMobile ? '100vh' : 'auto',
          height: isMobile ? 'auto' : '100vh'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 
            className="mb-6 xs:mb-8 sm:mb-10 md:mb-12 text-2xl font-bold text-[#FF7A00] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            How Can We Help You?
          </h2>

          {/* Cards Stack - One by One on Scroll */}
          <div className="relative w-full mx-auto" style={{
            height: isMobile ? 'auto' : '450px',
            minHeight: isMobile ? '500px' : 'auto'
          }}>
            <div className="relative w-full h-full">
              {services.map((service, index) => {
                const shouldShow = index <= activeIndex;
                const cardVisibleWidth = 120; // Desktop: horizontal offset
                const cardVisibleHeight = 100; // Mobile: vertical offset
                
                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-out ${
                      !shouldShow ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
                    }`}
                    style={{
                      top: isMobile ? `${index * cardVisibleHeight}px` : '0',
                      left: isMobile ? '0' : `${index * cardVisibleWidth}px`,
                      width: isMobile ? '100%' : 'calc(100% - 720px)',
                      maxWidth: isMobile ? '100%' : '550px',
                      minWidth: isMobile ? '100%' : '400px',
                      height: isMobile ? '420px' : '100%',
                      transform: shouldShow 
                        ? 'scale(1)' 
                        : (isMobile ? 'translateY(-50px) scale(0.95)' : 'translateX(50px) scale(0.95)'),
                      zIndex: index + 1,
                      display: shouldShow ? 'block' : 'none'
                    }}
                  >
                    <div 
                      className={`relative h-full w-full rounded-2xl xs:rounded-3xl sm:rounded-[2rem] md:rounded-[2.5rem] ${service.bgColor} overflow-hidden shadow-2xl`}
                    >
                      {/* Gradient overlay for cards not yet active */}
                      {index > activeIndex && (
                        <div 
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background: isMobile
                              ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 85%, transparent 100%)'
                              : 'linear-gradient(to left, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 85%, transparent 100%)',
                            zIndex: 10
                          }}
                        />
                      )}

                      {/* Title for Previous Cards - Horizontal on mobile (top left), Vertical on desktop (left side) */}
                      {index !== activeIndex && (
                        <div className="absolute left-4 xs:left-5 sm:left-6 md:left-8 top-3 xs:top-4 md:top-auto md:bottom-[90px] lg:bottom-[110px] flex flex-row md:flex-row gap-1.5 xs:gap-2 md:gap-3 items-center md:items-end justify-start z-20">
                          {service.title.split('\n').map((line, lineIndex) => (
                            <h3 
                              key={lineIndex}
                              className={`text-xs xs:text-sm md:text-base lg:text-lg font-bold whitespace-nowrap ${
                                service.bgColor === 'bg-gray-300' ? 'text-black' : 'text-white'
                              }`}
                              style={{
                                writingMode: isMobile ? 'horizontal-tb' : 'vertical-rl',
                                transform: isMobile ? 'none' : 'rotate(180deg)',
                                letterSpacing: isMobile ? '0.05em' : '0.15em'
                              }}
                            >
                              {line}
                            </h3>
                          ))}
                        </div>
                      )}

                      {/* Content for Active Card */}
                      {index === activeIndex && (
                        <div className="absolute left-4 xs:left-5 sm:left-6 md:left-10 lg:left-12 right-4 xs:right-5 sm:right-6 md:right-10 lg:right-12 top-4 xs:top-5 sm:top-6 md:top-12 lg:top-16 z-20">
                          <h3 
                            className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 md:mb-5 lg:mb-6 leading-tight ${
                              service.bgColor === 'bg-gray-300' ? 'text-black' : 'text-white'
                            }`}
                          >
                            {service.title.replace('\n', ' ')}
                          </h3>
                          <p 
                            className={`text-xs xs:text-sm sm:text-base md:text-base lg:text-lg leading-relaxed ${
                              service.bgColor === 'bg-gray-300' ? 'text-gray-700' : 'text-gray-300'
                            }`}
                          >
                            {service.description}
                          </p>
                        </div>
                      )}

                      {/* Arrow Circle - Top Right for mobile, Bottom Left for desktop (for all cards, clickable) - All White */}
                      <button 
                        onClick={() => setActiveIndex(index)}
                        className="absolute top-4 xs:top-5 sm:top-6 right-4 xs:right-5 sm:right-6 md:top-auto md:bottom-6 lg:bottom-8 md:left-8 lg:left-10 md:right-auto z-30 cursor-pointer transition-transform hover:scale-110 active:scale-95"
                        aria-label={`View ${service.title.replace('\n', ' ')}`}
                      >
                        <div 
                          className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-13 md:w-13 lg:h-14 lg:w-14 rounded-full bg-white flex items-center justify-center shadow-lg"
                        >
                          <svg 
                            className="h-4 w-4 xs:h-5 xs:w-5 md:h-5 md:w-5 lg:h-6 lg:w-6 text-black" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-6 xs:mt-8 sm:mt-10 md:mt-12 flex items-center justify-center gap-1.5 xs:gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to service ${index + 1}`}
                className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-75 ${
                  index === activeIndex 
                    ? 'w-6 xs:w-8 bg-[#FF7A00]' 
                    : 'w-1.5 xs:w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
