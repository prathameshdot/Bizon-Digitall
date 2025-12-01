"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ClientReviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      companyName: "TechCorp Solutions",
      clientName: "John Anderson",
      rating: 5,
      review: "Outstanding digital marketing services! They transformed our online presence and significantly increased our customer engagement. Highly professional team.",
      photo: "/images/testimonials/auth-01.png",
      bgColor: "bg-black"
    },
    {
      id: 2,
      companyName: "Green Earth Industries",
      clientName: "Sarah Mitchell",
      rating: 5,
      review: "The SEO strategies implemented by this team brought remarkable results. Our website traffic doubled within three months. Truly exceptional work!",
      photo: "/images/testimonials/auth-02.png",
      bgColor: "bg-[#FF7A00]"
    },
    {
      id: 3,
      companyName: "Digital Innovations Ltd",
      clientName: "Michael Chen",
      rating: 4,
      review: "Professional and results-driven approach to social media marketing. They understood our brand perfectly and delivered exactly what we needed.",
      photo: "/images/testimonials/auth-03.png",
      bgColor: "bg-gray-300"
    },
    {
      id: 4,
      companyName: "Bright Future Co",
      clientName: "Emily Rodriguez",
      rating: 5,
      review: "Excellent content marketing strategies! Our engagement rates have never been better. The team is creative, responsive, and highly skilled.",
      photo: "/images/testimonials/auth-01.png",
      bgColor: "bg-black"
    },
    {
      id: 5,
      companyName: "Summit Technologies",
      clientName: "David Thompson",
      rating: 5,
      review: "Their PPC campaigns delivered incredible ROI. Very impressed with their data-driven approach and constant optimization. Highly recommend!",
      photo: "/images/testimonials/auth-02.png",
      bgColor: "bg-[#FF7A00]"
    },
    {
      id: 6,
      companyName: "Creative Minds Agency",
      clientName: "Lisa Wang",
      rating: 4,
      review: "Great experience working with this team. They're knowledgeable, professional, and always deliver on time. Our brand visibility has improved tremendously.",
      photo: "/images/testimonials/auth-03.png",
      bgColor: "bg-gray-300"
    }
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Get the width of one set of reviews
      const reviewWidth = scrollContainer.scrollWidth / 3;
      
      // Reset position when we've scrolled through one full set
      if (scrollPosition >= reviewWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className="mb-8 sm:mb-10 md:mb-12 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-[#FF7A00] text-center px-2"
          style={{ fontFamily: 'var(--font-syne), sans-serif' }}
        >
          What Our Clients Say
        </h2>

        {/* Scrolling Reviews Container */}
        <div className="relative pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-4">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] xl:w-[460px] relative"
              >
                {/* Client Photo Circle - positioned at top right corner of the card */}
                <div className="absolute -top-10 -right-3 sm:-top-12 sm:-right-4 md:-top-14 md:-right-4 lg:-top-16 lg:-right-5 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200 z-30">
                  <Image
                    src={review.photo}
                    alt={review.clientName}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className={`relative ${review.bgColor} rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-lg h-full min-h-[260px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]`}>
                  {/* Top Right Corner Cutout - perfectly aligned with circle */}
                  <div className="absolute top-0 right-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 overflow-hidden rounded-tr-3xl">
                    {/* Cutout effect using SVG - white to hide card corner */}
                    <svg
                      className="absolute top-0 right-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 0 L 100 0 L 100 100 Q 0 100 0 0 Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="pt-2 pr-12 sm:pr-14 md:pr-16 lg:pr-20 relative z-10">
                    {/* Company Name */}
                    <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 leading-tight break-words ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {review.companyName}
                    </h3>

                    {/* Client Name */}
                    <p className={`text-sm sm:text-base md:text-base font-medium mb-3 ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                      {review.clientName}
                    </p>

                    {/* Star Rating */}
                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className={`text-sm sm:text-base leading-relaxed break-words ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-700' : 'text-gray-200'
                    }`}>
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
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

export default ClientReviews;
