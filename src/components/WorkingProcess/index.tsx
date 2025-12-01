"use client";

import { useState } from "react";

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough market research and competitive analysis to develop a customized digital marketing strategy that aligns with your business objectives and targets your ideal audience effectively.",
  },
  {
    id: 3,
    number: "03",
    title: "Implementation",
    description:
      "Our team executes the approved strategy across all chosen channels, ensuring consistent brand messaging and optimal performance through careful monitoring and adjustments.",
  },
  {
    id: 4,
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously track campaign performance, analyze data, and make data-driven optimizations to improve results and maximize your return on investment.",
  },
  {
    id: 5,
    number: "05",
    title: "Reporting and Communication",
    description:
      "Regular detailed reports keep you informed about campaign progress, results, and insights. We maintain open communication to ensure transparency and alignment with your goals.",
  },
  {
    id: 6,
    number: "06",
    title: "Continual Improvement",
    description:
      "We believe in ongoing optimization. Based on performance data and market trends, we continuously refine strategies to drive better results and stay ahead of the competition.",
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="bg-[#FF7A00] text-black font-bold text-sm sm:text-base px-4 py-2 rounded-lg whitespace-nowrap">
              Our Working Process
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
              Step-by-Step Guide to Achieving Your Business Goals
            </h2>
          </div>

          {/* Accordion */}
          <div className="space-y-4 sm:space-y-5">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`rounded-3xl sm:rounded-[40px] border-2 border-black overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#FFB380] shadow-[0_8px_0_0_rgba(0,0,0,1)]"
                    : "bg-gray-100 shadow-[0_8px_0_0_rgba(0,0,0,1)]"
                }`}
              >
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                      {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                      {step.title}
                    </h3>
                  </div>
                  
                  {/* Plus/Minus Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black bg-white flex items-center justify-center">
                    {openIndex === index ? (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Expandable Content */}
                {openIndex === index && (
                  <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
                    {/* Separator Line */}
                    <div className="border-t border-black mb-4 sm:mb-5"></div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
