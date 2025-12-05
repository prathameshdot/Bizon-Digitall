"use client";

import Image from "next/image";
import { useEffect, useRef, useLayoutEffect, useState } from "react";

const MarketingScroll = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [shadowLeftPx, setShadowLeftPx] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let animationFrameId1: number;
    let animationFrameId2: number;
    let position1 = 0;
    let position2 = 0;
    const scrollSpeed = 0.5; // Pixels per frame - slower speed

    // Duplicate container HTML for seamless looping, ensure exactly one space between repeats
    const container1 = scrollContainer1 as HTMLElement;
    const container2 = scrollContainer2 as HTMLElement;

    // Normalize trailing whitespace so each repetition has a single space separator
    let original1 = container1.innerHTML.replace(/\s+$/g, " ");
    let original2 = container2.innerHTML.replace(/\s+$/g, " ");

    container1.innerHTML = original1 + original1;
    container2.innerHTML = original2 + original2;

    const width1 = container1.scrollWidth / 2; // original width
    const width2 = container2.scrollWidth / 2; // original width

    // Line 1: move leftwards seamlessly
    const animate1 = () => {
      position1 += scrollSpeed;
      if (position1 >= width1) position1 = 0;
      scrollContainer1.style.transform = `translateX(-${position1}px)`;
      animationFrameId1 = requestAnimationFrame(animate1);
    };

    // Line 2: move rightwards seamlessly by translating from -width -> 0
    const animate2 = () => {
      position2 += scrollSpeed;
      if (position2 >= width2) position2 = 0;
      const x = -width2 + position2; // starts at -width2, goes to 0
      scrollContainer2.style.transform = `translateX(${x}px)`;
      animationFrameId2 = requestAnimationFrame(animate2);
    };

    animationFrameId1 = requestAnimationFrame(animate1);
    animationFrameId2 = requestAnimationFrame(animate2);

    return () => {
      if (animationFrameId1) cancelAnimationFrame(animationFrameId1);
      if (animationFrameId2) cancelAnimationFrame(animationFrameId2);
    };
  }, []);

  // Position the shadow so it sits further left under the orange box's curve
  useLayoutEffect(() => {
    const compute = () => {
      const orangeEl = orangeRef.current;
      const shadowEl = shadowRef.current;
      const container = orangeEl?.parentElement?.parentElement?.parentElement as HTMLElement | null;
      if (!orangeEl || !shadowEl || !container) return;

      const orangeRect = orangeEl.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const shadowWidth = shadowEl.offsetWidth || 200;

      // Position shadow so most of it sits underneath the orange box: move left under the curve
      const desiredLeft = orangeRect.right - (shadowWidth * 0.85) - containerRect.left;
      setShadowLeftPx(Math.max(0, Math.round(desiredLeft)));
    };

    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  const text1Html = `“Beautiful work begins with <span class="text-[#FF7A00]">passion</span> and thoughtful strategy — craft with care, deliver with impact.” `;
  const text2Html = `“We turn ideas into growth: <span class=\"text-[#FF7A00]\">creativity</span>, data, and execution aligned for results.” `;

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="w-full">
        <div className="relative bg-white overflow-hidden h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] flex items-center">
          
          {/* Left Side - Orange Curved Rectangle with Image (No Background Circle) */}
          <div ref={orangeRef} className="absolute left-0 top-0 bottom-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] z-20">
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
          {/* Soft shadow/fade outside (to the right) of the orange box */}
          {/* Soft shadow/fade outside (to the right) of the orange box - positioned by JS */}
          {/**
           * Shadow effect temporarily commented out per request.
           * To re-enable: uncomment the <div> below. The shadow is positioned
           * dynamically using measurements (see useLayoutEffect above) and
           * uses `shadowRef` and `shadowLeftPx` to set its `left` inline style.
           */}
          {false && (
            <div ref={shadowRef} className="absolute top-0 bottom-0 w-56 pointer-events-none z-10 rounded-r-full" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.22), rgba(0,0,0,0))', left: shadowLeftPx !== null ? `${shadowLeftPx}px` : undefined }} />
          )}

          {/* Right Side - Scrolling Text Lines - extends behind orange curve */}
          <div className="absolute left-0 right-0 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 h-full">
            
            {/* First Scrolling Line - Left to Right */}
            <div className="relative overflow-hidden w-full">
                <div
                  ref={scrollRef1}
                  className="inline-flex whitespace-nowrap will-change-transform"
                >
                  {[...Array(10)].map((_, index) => (
                    <span
                      key={index}
                      className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-black whitespace-nowrap tracking-wide inline-block"
                      style={{ fontFamily: 'Playfair Display, Georgia, serif', lineHeight: 1 }}
                      dangerouslySetInnerHTML={{ __html: text1Html }}
                    />
                  ))}
                </div>
            </div>

            {/* Second Scrolling Line - Right to Left */}
            <div className="relative overflow-hidden w-full">
              <div
                ref={scrollRef2}
                className="inline-flex whitespace-nowrap will-change-transform"
              >
                {[...Array(10)].map((_, index) => (
                  <span
                    key={index}
                    className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-black whitespace-nowrap tracking-wide inline-block"
                    style={{ fontFamily: 'Playfair Display, Georgia, serif', lineHeight: 1 }}
                    dangerouslySetInnerHTML={{ __html: text2Html }}
                  />
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
