"use client";

import Image from "next/image";
import Link from "next/link";

interface Leader {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

const leadersData: Leader[] = [
  {
    id: 1,
    name: "Harsh Shah",
    title: "Entrepreneur | India's Leading Internet Marketer",
    description: "Harsh's extraordinary digital marketing skills have generated millions of dollars in sales!",
    image: "/images/about/Group 9257 (1).png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    id: 2,
    name: "Akshat Dani",
    title: "Entrepreneur | Expert in Visual communication",
    description: "Akshat Dani stands as a beacon in the realm of visual communication.",
    image: "/images/about/Group 9258.png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    id: 3,
    name: "Aarzoo Shah",
    title: "Entrepreneur | Author | Coach | TEDx Speaker",
    description: "As an entrepreneur, writer and coach, Aarzoo shah is a force for transformative change.",
    image: "/images/about/Group 9259.png",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
];

const Leadership = () => {
  return (
    <section className="relative py-8 sm:py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-2">
            Meet our leadership
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="max-w-7xl mx-auto space-y-0">
          {leadersData.map((leader, index) => (
            <div
              key={leader.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-2 md:gap-3`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                <div className="relative w-full max-w-[180px] md:max-w-[200px] lg:max-w-[220px] aspect-[3/4]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full md:w-2/3 lg:w-3/4 ${index % 2 === 0 ? "md:pl-2" : "md:pr-2"}`}>
                <div className="space-y-1">
                  {/* Name */}
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-black text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.name}
                  </h3>

                  {/* Title */}
                  <p className={`text-sm sm:text-base font-semibold text-[#FF7A00] text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.title}
                  </p>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm md:text-base text-[#FF7A00] leading-relaxed text-center ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    {leader.description}
                  </p>
                  
                  {/* Social Icons */}
                  <div className={`flex gap-3 pt-1 ${index % 2 === 0 ? "justify-center md:justify-start" : "justify-center md:justify-end"}`}>
                    {leader.linkedin && (
                      <Link
                        href={leader.linkedin}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </Link>
                    )}
                    {leader.instagram && (
                      <Link
                        href={leader.instagram}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </Link>
                    )}
                    {leader.facebook && (
                      <Link
                        href={leader.facebook}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
