"use client";

import { useState } from "react";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you release new mockups often?",
    answer:
      "Yes, new mockups are released every month.\n\nThe goal of Superdope is to release high-end mockups constantly so you can never run out of mockup ideas to showcase your app or your designs.",
  },
  {
    id: 2,
    question: "Is Superdope free?",
    answer:
      "We offer both free and premium options. Free users get access to a limited collection of mockups, while premium subscribers enjoy unlimited access to our entire library with regular updates and exclusive content.",
  },
  {
    id: 3,
    question: "Can I use Superdope for commercial use?",
    answer:
      "Yes, all our premium mockups come with a commercial license. You can use them for client projects, presentations, and any commercial purposes without additional fees.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your current billing period.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      {/* Decorative Circle Pattern - Top Right */}
      <div className="absolute top-0 right-0 w-1/4 sm:w-1/5 md:w-1/6 aspect-square opacity-30 pointer-events-none">
        <Image
          src="/images/about/chart.png"
          alt="Decorative pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Decorative Circle Pattern - Bottom Left (Rotated) */}
      <div className="absolute bottom-0 left-0 w-1/4 sm:w-1/5 md:w-1/6 aspect-square opacity-30 pointer-events-none rotate-180">
        <Image
          src="/images/about/chart.png"
          alt="Decorative pattern"
          fill
          className="object-contain"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#FF7A00] max-w-2xl mx-auto">
              Find questions and answers related to the design system, purchase, updates, and support.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-gray-100 rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-gray-200 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    {/* Icon */}
                    <div className="flex-shrink-0">
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
                            d="M6 18L18 6M6 6l12 12"
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

                    {/* Question */}
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black pr-4">
                      {faq.question}
                    </h3>
                  </div>
                </button>

                {/* Answer - Expandable */}
                {openIndex === index && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="pl-9 sm:pl-10">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
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

export default FAQ;
