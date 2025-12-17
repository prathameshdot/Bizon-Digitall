"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const CountryReachout = () => {
  const [counts, setCounts] = useState({ clients: 0, years: 0, campaigns: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const targets = { clients: 2500, years: 10, campaigns: 1000 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        campaigns: Math.floor(targets.campaigns * progress),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="relative bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 overflow-hidden">

      {/* Orange curved background with rounded top corners */}
      <div className="w-full bg-[#FF7A00] rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[80px] lg:rounded-t-[100px] xl:rounded-t-[120px] overflow-hidden">
        <div className="px-4 py-4 md:py-6 lg:py-8">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10 text-white">
            <h3 className="text-sm font-semibold tracking-wider text-white">LOCATIONS</h3>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-black">Global strategy, local execution</h2>
            <p className="mt-3 text-base text-white">
              For our clients, we orchestrate the right mix of talent to build the perfect team. We put a strong focus on chemistry, relevant experience and proximity. For our employees, it doesn’t matter where you live — we have employees all over the world.
            </p>
          </div>

          <div className="relative mx-auto max-w-[1100px]">
            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[460px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero/Group 1.png"
                alt="Country Reachout Map"
                fill
                className="object-contain"
              />

              {/* Centered metrics overlay (single row, no box) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex flex-row items-center gap-12 text-center px-4">
                  <div style={{textShadow: '0 2px 6px rgba(255,255,255,0.85)'}} className="text-black">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">{counts.clients.toLocaleString()}</div>
                    <div className="text-xs sm:text-sm md:text-base">Satisfied Clients</div>
                  </div>

                  <div style={{textShadow: '0 2px 6px rgba(255,255,255,0.85)'}} className="text-black">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">{counts.years}</div>
                    <div className="text-xs sm:text-sm md:text-base">Years of Expertise</div>
                  </div>

                  <div style={{textShadow: '0 2px 6px rgba(255,255,255,0.85)'}} className="text-black">
                    <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">{counts.campaigns.toLocaleString()}+</div>
                    <div className="text-xs sm:text-sm md:text-base">Successful Campaigns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryReachout;
