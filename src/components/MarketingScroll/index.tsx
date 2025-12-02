"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MarketingScroll = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let animationFrameId1: number;
    let animationFrameId2: number;
    let position1 = 0;
    let position2 = 0;
    const scrollSpeed = 0.5; // Pixels per frame - slower speed

    // Calculate the width of a single iteration of text
    const getSingleTextWidth = (container: HTMLElement) => {
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.whiteSpace = 'nowrap';
      tempDiv.innerHTML = container.children[0]?.innerHTML || '';
      document.body.appendChild(tempDiv);
      const width = tempDiv.offsetWidth;
      document.body.removeChild(tempDiv);
      return width;
    };

    const textWidth1 = getSingleTextWidth(scrollContainer1);
    const textWidth2 = getSingleTextWidth(scrollContainer2);

    // Scroll left to right
    const animate1 = () => {
      position1 += scrollSpeed;
      
      // Reset position seamlessly when one full text has scrolled
      if (position1 >= textWidth1) {
        position1 = position1 - textWidth1;
      }
      
      scrollContainer1.style.transform = `translateX(-${position1}px)`;
      animationFrameId1 = requestAnimationFrame(animate1);
    };

    // Scroll right to left (reverse direction)
    const animate2 = () => {
      position2 += scrollSpeed;
      
      // Reset position seamlessly when one full text has scrolled
      if (position2 >= textWidth2) {
        position2 = position2 - textWidth2;
      }
      
      scrollContainer2.style.transform = `translateX(-${position2}px)`;
      animationFrameId2 = requestAnimationFrame(animate2);
    };

    animationFrameId1 = requestAnimationFrame(animate1);
    animationFrameId2 = requestAnimationFrame(animate2);

    return () => {
      if (animationFrameId1) cancelAnimationFrame(animationFrameId1);
      if (animationFrameId2) cancelAnimationFrame(animationFrameId2);
    };
  }, []);

  const text1 = "Marketing Services • Digital Strategy • Brand Growth • Web Development • Creative Design • Business Solutions • Lead Generation • Market Research • Analytics & Reporting • ";
  const text2 = "SEO Optimization • Content Creation • Social Media Marketing • Email Campaigns • PPC Advertising • Influencer Marketing • Video Production • Graphic Design • Brand Identity • ";

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative bg-white overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] flex items-center">
          
          {/* Left Side - Orange Curved Rectangle with Image (No Background Circle) */}
          <div className="absolute left-0 top-0 bottom-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] z-10">
            <div className="relative h-full bg-[#FF7A00] rounded-r-full flex items-center justify-start pl-0 overflow-hidden">
              {/* Image without circle background, aligned to left */}
              <div className="w-full h-full flex items-center">
                <Image
                  src="/images/hero/photo1.png"
                  alt="Marketing Professional"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Text Lines - extends behind orange curve */}
          <div className="absolute left-0 right-0 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 h-full">
            
            {/* First Scrolling Line - Left to Right */}
            <div className="relative overflow-hidden w-full">
              <div
                ref={scrollRef1}
                className="inline-flex whitespace-nowrap will-change-transform"
              >
                {[...Array(15)].map((_, index) => (
                  <span
                    key={index}
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-black whitespace-nowrap tracking-wide inline-block"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {text1}
                  </span>
                ))}
              </div>
            </div>

            {/* Second Scrolling Line - Right to Left */}
            <div className="relative overflow-hidden w-full">
              <div
                ref={scrollRef2}
                className="inline-flex whitespace-nowrap will-change-transform"
              >
                {[...Array(15)].map((_, index) => (
                  <span
                    key={index}
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold text-black whitespace-nowrap tracking-wide inline-block"
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
                  >
                    {text2}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default MarketingScroll;
