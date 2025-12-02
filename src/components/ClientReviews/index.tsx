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
      <div className="flex gap-0.5 xs:gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 ${
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
    <section className="relative bg-white py-6 xs:py-8 sm:py-10 md:py-14 lg:py-16 overflow-hidden">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className="mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF7A00] text-center px-2"
          style={{ fontFamily: 'var(--font-syne), sans-serif' }}
        >
          What Our Clients Say
        </h2>

        {/* Scrolling Reviews Container */}
        <div className="relative pt-2 xs:pt-3 pb-2 xs:pb-3">
          <div
            ref={scrollRef}
            className="flex gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-hidden py-4 xs:py-5 sm:py-6 md:py-7 lg:py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[260px] xs:w-[280px] sm:w-[300px] md:w-[340px] lg:w-[380px] xl:w-[400px] relative"
              >
                {/* Client Photo Circle - center positioned at corner point */}
                <div className="absolute -top-5 xs:-top-6 sm:-top-7 md:-top-8 right-0 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 xs:border-3 sm:border-4 border-white shadow-xl overflow-hidden bg-gray-200 z-30 transform translate-x-1/2">
                  <Image
                    src={review.photo}
                    alt={review.clientName}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className={`relative ${review.bgColor} rounded-xl xs:rounded-2xl sm:rounded-2xl md:rounded-3xl p-2.5 xs:p-3 sm:p-4 md:p-5 shadow-lg h-full min-h-[130px] xs:min-h-[140px] sm:min-h-[150px] md:min-h-[160px]`}>
                  {/* Top Right Corner Cutout - larger radius for more visible curve */}
                  <div className="absolute top-0 right-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden rounded-tr-xl xs:rounded-tr-2xl sm:rounded-tr-2xl md:rounded-tr-3xl">
                    {/* Cutout effect using SVG with larger curve - white to hide card corner */}
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
                  <div className="pt-0.5 xs:pt-1 pr-6 xs:pr-7 sm:pr-8 md:pr-10 lg:pr-12 relative z-10">
                    {/* Company Name */}
                    <h3 className={`text-xs xs:text-sm sm:text-base md:text-lg font-bold mb-1 xs:mb-1.5 leading-tight break-words ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-900' : 'text-white'
                    }`}>
                      {review.companyName}
                    </h3>

                    {/* Client Name */}
                    <p className={`text-[10px] xs:text-xs sm:text-sm font-medium mb-1.5 xs:mb-2 ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                      {review.clientName}
                    </p>

                    {/* Star Rating */}
                    <div className="mb-1.5 xs:mb-2">
                      {renderStars(review.rating)}
                    </div>

                    {/* Review Text */}
                    <p className={`text-[10px] xs:text-xs sm:text-sm leading-relaxed break-words ${
                      review.bgColor === 'bg-gray-300' ? 'text-gray-700' : 'text-gray-200'
                    }`}>
                      {review.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

export default ClientReviews;
