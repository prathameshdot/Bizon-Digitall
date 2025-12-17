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
    question: "What digital marketing services does BizOn Digital offer?",
    answer:
      "We provide comprehensive digital marketing solutions including SEO & Local SEO, Google Ads & PPC Management, Social Media Marketing, Website Development, E-commerce Solutions, Email Marketing, Content Marketing, and Brand Strategy. Our services are tailored to drive measurable ROI and business growth.",
  },
  {
    id: 2,
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO is a long-term strategy. Typically, you'll start seeing initial improvements in 3-4 months, with significant results in 6-12 months. However, timelines vary based on competition, industry, and current website status. Our transparent reporting keeps you informed of progress every step of the way.",
  },
  {
    id: 3,
    question: "Do you offer custom pricing packages?",
    answer:
      "Yes! We understand every business has unique needs and budgets. After a free consultation and audit, we create customized digital marketing packages that align with your goals, whether you're a startup or an enterprise. Contact us for a personalized quote.",
  },
  {
    id: 4,
    question: "Can I cancel my service contract anytime?",
    answer:
      "We offer flexible contracts with no long-term lock-ins. You can cancel with 30 days' notice. However, we're confident in our results—most clients choose to expand their services with us rather than cancel. We focus on building long-term partnerships based on trust and performance.",
  },
  {
    id: 5,
    question: "How do you measure ROI and campaign success?",
    answer:
      "We track comprehensive metrics including organic traffic, keyword rankings, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), lead quality, and revenue attribution. You'll receive detailed monthly reports with clear insights and recommendations for continuous improvement.",
  },
  {
    id: 6,
    question: "Do you provide 24/7 support for campaigns?",
    answer:
      "Yes! All our clients receive dedicated account management with 24/7 campaign monitoring. We proactively optimize your campaigns, respond to urgent requests promptly, and provide regular strategy calls to ensure your marketing investment delivers maximum results.",
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our digital marketing services, pricing, timelines, and support.
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
                      <p className="text-sm sm:text-base md:text-base text-gray-700 leading-relaxed whitespace-pre-line">
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
