"use client";

import { useEffect, useRef, useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "SOCIAL MEDIA MARKETING",
      subtitle: "Service 01",
      description: "Build your brand presence and engage with your audience across all major social media platforms. We create compelling content strategies that drive engagement, increase followers, and convert social interactions into business results.",
      bgColor: "bg-black"
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      subtitle: "Service 02",
      description: "Improve your website's visibility and organic search rankings with our comprehensive SEO strategies. From keyword research to technical optimization, we ensure your business appears at the top of search results when it matters most.",
      bgColor: "bg-[#FF7A00]"
    },
    {
      title: "CONTENT MARKETING",
      subtitle: "Service 03",
      description: "Create valuable, relevant content that attracts and retains your target audience. Our content marketing strategies include blog posts, videos, infographics, and more to establish your brand as an industry authority.",
      bgColor: "bg-gray-300"
    },
    {
      title: "PAY-PER-CLICK ADVERTISING",
      subtitle: "Service 04",
      description: "Maximize your ROI with targeted PPC campaigns across Google Ads, social media platforms, and display networks. We create data-driven campaigns that reach your ideal customers at the right time with the right message.",
      bgColor: "bg-black"
    },
    {
      title: "EMAIL MARKETING",
      subtitle: "Service 05",
      description: "Connect directly with your customers through personalized email campaigns. From automated workflows to newsletter designs, we help you nurture leads, retain customers, and drive conversions through strategic email marketing.",
      bgColor: "bg-[#FF7A00]"
    },
    {
      title: "WEB DESIGN & DEVELOPMENT",
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

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 md:py-20 lg:py-28"
      style={{ minHeight: `${services.length * 100}vh` }}
    >
      <div className="sticky top-0 min-h-screen flex items-center py-16">
        <div className="container">
          {/* Title */}
          <h2 
            className="mb-12 text-5xl font-bold text-[#FF7A00] md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'var(--font-syne), sans-serif' }}
          >
            How Can We Help You?
          </h2>

          {/* Cards Stack - One by One on Scroll */}
          <div className="relative h-[350px] md:h-[400px] flex items-center">
            {services.map((service, index) => {
              // Only show cards up to and including the active index
              const shouldShow = index <= activeIndex;
              // Calculate horizontal offset - each new card shows more of the previous
              const cardVisibleWidth = 150; // How much of each previous card remains visible
              const leftPosition = index * cardVisibleWidth;
              
              return (
                <div
                  key={index}
                  className={`absolute top-0 h-full w-full max-w-[600px] transition-all duration-700 ease-out ${
                    !shouldShow ? 'pointer-events-none' : ''
                  }`}
                  style={{
                    left: `${leftPosition}px`,
                    opacity: shouldShow ? 1 : 0,
                    transform: shouldShow ? 'translateX(0)' : 'translateX(100%)',
                    zIndex: index + 1,
                  }}
                >
                  <div 
                    className={`relative h-full w-full rounded-[2.5rem] ${service.bgColor} overflow-hidden shadow-2xl`}
                  >
                    {/* Gradient overlay from right (dark) to left (faint) for cards BELOW the active card */}
                    {index > activeIndex && (
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to left, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.5) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.05) 85%, transparent 100%)',
                          zIndex: 10
                        }}
                      />
                    )}

                    {/* Vertical Title on Left Side - Only show for previous cards (not active) */}
                    {index !== activeIndex && (
                      <div className="absolute left-6 md:left-8 top-0 bottom-20 flex items-center justify-center z-20">
                        <h3 
                          className={`text-sm md:text-base font-bold whitespace-nowrap ${
                            service.bgColor === 'bg-gray-300' ? 'text-black' : 'text-white'
                          }`}
                          style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            letterSpacing: '0.1em'
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    )}

                    {/* Content for Active Card */}
                    {index === activeIndex && (
                      <div className="absolute left-8 md:left-12 right-8 md:right-12 top-12 md:top-16 z-20">
                        <h3 
                          className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${
                            service.bgColor === 'bg-gray-300' ? 'text-black' : 'text-white'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p 
                          className={`text-sm md:text-base leading-relaxed text-justify ${
                            service.bgColor === 'bg-gray-300' ? 'text-gray-700' : 'text-gray-300'
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>
                    )}

                    {/* Arrow Circle - Bottom Left (for all cards, clickable) */}
                    <button 
                      onClick={() => setActiveIndex(index)}
                      className="absolute bottom-8 left-8 md:left-10 z-30 cursor-pointer transition-transform hover:scale-110"
                    >
                      <div 
                        className={`h-12 w-12 md:h-14 md:w-14 rounded-full ${
                          service.bgColor === 'bg-[#FF7A00]' ? 'bg-white' : service.bgColor === 'bg-gray-300' ? 'bg-white' : 'bg-gray-600'
                        } flex items-center justify-center shadow-lg`}
                      >
                        <svg 
                          className="h-5 w-5 md:h-6 md:w-6 text-black" 
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

          {/* Progress Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {services.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#FF7A00]' 
                    : 'w-2 bg-gray-300'
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
