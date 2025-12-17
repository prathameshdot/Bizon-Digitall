  "use client";
  import React, { useState, useEffect } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import CTA from "@/components/CTA";

  interface ServiceData {
    id: string;
    name: string;
    slug: string;
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    mainContent: {
      title: string;
      paragraphs: string[];
    };
    keyOfferings: {
      title: string;
      subtitle: string;
      questions: string[];
    };
    serviceAreas: {
      title: string;
      items: Array<{ title: string; description: string }>;
    };
    caseStudy: {
      title: string;
      challenge: string;
      solution: string[];
      results: string[];
    };
  }

  interface ServicePageTemplateProps {
    serviceData: ServiceData;
  }

  const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ serviceData }) => {
    return (
      <>
        {/* Hero Section - Clean & Professional */}
        <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-24 lg:pt-28">

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-block">
                  <span className="px-3 py-1.5 bg-[#FF7A00] text-white text-xs font-semibold uppercase tracking-wider rounded-full">
                    {serviceData.hero.title}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  {serviceData.hero.subtitle}
                </h1>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {serviceData.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#e66d00] text-white text-sm font-semibold rounded-lg hover:from-[#e66d00] hover:to-[#FF7A00] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2"
                    aria-label="Get started with our services"
                  >
                    Get Started
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="#case-study"
                    className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-[#FF7A00] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:ring-offset-2"
                    aria-label="View our case study"
                  >
                    View Case Study
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-[#FF7A00]/30">
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF7A00] mb-1">2,500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF7A00] mb-1">98%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF7A00] mb-1">10+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years</div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="relative w-full h-full max-w-[600px] py-8 sm:py-12 lg:py-16">
                  <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
                    <Image
                      src={`/images/brands/${serviceData.id === 'web-development' ? '01' : serviceData.id === 'seo' ? '02' : serviceData.id === 'paid-ads' ? '03' : serviceData.id === 'social-media' ? '04' : serviceData.id === 'ecommerce' ? '05' : serviceData.id === 'branding' ? '06' : '01'}.png`}
                      alt={`${serviceData.name} service - Professional digital marketing solutions`}
                      fill
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 50vw, 600px"
                      className="object-contain"
                      priority
                      quality={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="relative py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
                  {serviceData.mainContent.title}
                </h2>
                <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full" aria-hidden="true"></div>
              </header>

              <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
                {serviceData.mainContent.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="relative py-8 sm:py-12 bg-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center mb-8 sm:mb-10">
              <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">How We Work</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-3 mb-3">Our Process</h2>
              <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full" aria-hidden="true"></div>
            </header>

            <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
              {[
                { step: "01", title: "Discovery", desc: "We analyze your business, audience, and goals" },
                { step: "02", title: "Strategy", desc: "We create a customized plan for success" },
                { step: "03", title: "Execution", desc: "We implement with precision and expertise" },
                { step: "04", title: "Optimization", desc: "We continuously improve and refine" }
              ].map((item, index) => (
                <article key={index} className="relative group">
                  <div className="relative bg-white rounded-xl p-4 sm:p-5 md:p-6 border-2 border-gray-100 hover:border-[#FF7A00] transition-colors duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#FF7A00] rounded-full flex items-center justify-center" aria-hidden="true">
                          <span className="text-base sm:text-lg md:text-xl font-bold text-white">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2">{item.title}</h3>
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 transform -translate-x-1/2 z-10" aria-hidden="true">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#FF7A00] rotate-45"></div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Key Questions Section */}
        <section className="relative py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <header className="text-center mb-6 sm:mb-8">
                <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">Strategic Approach</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-3 mb-3">
                  {serviceData.keyOfferings.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-3xl mx-auto mt-4">
                  {serviceData.keyOfferings.subtitle}
                </p>
              </header>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {serviceData.keyOfferings.questions.map((question, index) => (
                  <li
                    key={index}
                    className="relative"
                  >
                    <div className="relative bg-white rounded-xl p-4 sm:p-5 border-2 border-gray-100 hover:border-[#FF7A00] transition-colors duration-300 h-full">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-[#FF7A00] rounded-full mr-3 mt-1.5" aria-hidden="true"></div>
                        <p className="text-sm sm:text-base font-semibold text-gray-800 leading-relaxed">{question}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="relative py-8 sm:py-12 bg-black text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <header className="text-center mb-8 sm:mb-10">
              <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">What We Offer</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-3">
                {serviceData.serviceAreas.title}
              </h2>
              <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full mt-4" aria-hidden="true"></div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {serviceData.serviceAreas.items.map((item, index) => (
                <article
                  key={index}
                  className="relative"
                >
                  <div className="relative bg-white text-black rounded-xl p-4 sm:p-5 lg:p-6 border-2 border-gray-100 hover:border-[#FF7A00] transition-colors duration-300 h-full">
                    <div className="mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FF7A00] rounded-full flex items-center justify-center" aria-hidden="true">
                        <span className="text-white font-bold text-sm sm:text-base">{index + 1}</span>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section id="case-study" className="relative py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-8 sm:mb-10">
                <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">Success Story</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-3 mb-3">
                  {serviceData.caseStudy.title}
                </h2>
                <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full mt-4" aria-hidden="true"></div>
              </header>

              {/* Challenge */}
              <div className="mb-5 sm:mb-6">
                <div className="relative bg-white rounded-xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#FF7A00] transition-all duration-300">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1.5 bg-black text-white text-xs font-bold uppercase tracking-wider mb-2 rounded-lg">Challenge</div>
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-4">The Problem</h3>
                  </div>
                  <div className="border-l-4 border-[#FF7A00] pl-4">
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                      {serviceData.caseStudy.challenge}
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="mb-5 sm:mb-6">
                <div className="relative bg-[#FF7A00] rounded-xl p-5 sm:p-6 md:p-8 text-white border-2 border-[#FF7A00]">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1.5 bg-white text-black text-xs font-bold uppercase tracking-wider mb-2 rounded-lg">Solution</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Our Approach</h3>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 border-l-4 border-white pl-3 sm:pl-4">
                    {serviceData.caseStudy.solution.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 text-white mr-2 font-bold text-sm">{index + 1}.</span>
                        <span className="text-sm md:text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="relative bg-black text-white rounded-xl p-5 sm:p-6 md:p-8 border-2 border-gray-800">
                <div className="mb-6 sm:mb-8 text-center">
                  <div className="inline-block px-4 py-1.5 bg-[#FF7A00] text-white font-semibold text-xs uppercase tracking-wider mb-3 rounded-lg">The Impact</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Measurable Results</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {serviceData.caseStudy.results.map((result, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-[#FF7A00] hover:bg-white/20 transition-colors duration-300 h-full">
                        <div className="flex items-start">
                          <span className="flex-shrink-0 bg-[#FF7A00] w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold mr-3" aria-hidden="true">{index + 1}</span>
                          <p className="text-sm md:text-base font-semibold leading-relaxed">{result}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="relative py-8 sm:py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-8 sm:mb-10">
                <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">FAQ</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-3 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full mt-4" aria-hidden="true"></div>
              </header>

              <div className="space-y-2 sm:space-y-3">
                {[
                  {
                    q: `How long does a typical ${serviceData.name.toLowerCase()} project take?`,
                    a: "Project timelines vary based on scope and complexity. A standard project typically takes 4-8 weeks from discovery to launch. We provide detailed timelines during our initial consultation."
                  },
                  {
                    q: "What is included in your pricing?",
                    a: "Our pricing includes strategy development, implementation, testing, launch support, and training. We offer flexible packages and custom solutions based on your specific needs and goals."
                  },
                  {
                    q: "Do you provide ongoing support after project completion?",
                    a: "Yes! We offer comprehensive support and maintenance packages to ensure your continued success. This includes technical support, updates, optimization, and strategic consulting."
                  },
                  {
                    q: "How do you measure success?",
                    a: "We establish clear KPIs at the project start, including traffic growth, conversion rates, ROI, and other metrics aligned with your business goals. You'll receive regular reports tracking these metrics."
                  },
                  {
                    q: "Can you work with our existing team?",
                    a: "Absolutely! We collaborate seamlessly with your internal team, marketing agencies, and other partners to ensure project success and knowledge transfer."
                  },
                  {
                    q: "What makes your approach different?",
                    a: "We combine data-driven strategies with creative execution, focusing on measurable results. Our team stays updated with the latest trends and technologies to deliver cutting-edge solutions."
                  }
                ].map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[#FF7A00] transition-colors duration-300 overflow-hidden"
                  >
                    <summary className="flex justify-between items-center cursor-pointer p-4 sm:p-5 font-semibold text-sm sm:text-base text-black list-none">
                      <span className="pr-4">{faq.q}</span>
                      <svg className="w-5 h-5 text-[#FF7A00] group-open:rotate-180 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-8 sm:py-12 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <header className="text-center mb-8 sm:mb-10">
                <span className="text-[#FF7A00] font-semibold text-xs uppercase tracking-wider">Testimonials</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 mb-3">What Our Clients Say</h2>
                <div className="w-20 h-1 bg-[#FF7A00] mx-auto rounded-full mt-4" aria-hidden="true"></div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "CEO, TechCorp",
                    text: "Outstanding results! Our online presence has transformed completely. The team's expertise and dedication are unmatched."
                  },
                  {
                    name: "Michael Chen",
                    role: "Marketing Director",
                    text: "Professional, efficient, and results-driven. They delivered exactly what we needed and exceeded our expectations."
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Founder, StartupX",
                    text: "Best decision we made for our business. The ROI has been incredible and the support is exceptional."
                  }
                ].map((testimonial, index) => (
                  <article key={index} className="relative">
                    <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 text-[#FF7A00] text-4xl sm:text-6xl font-serif opacity-20 leading-none pointer-events-none" aria-hidden="true">&ldquo;</div>
                    
                    <div className="relative bg-white/10 rounded-xl p-4 sm:p-5 lg:p-6 border-l-4 border-[#FF7A00] hover:bg-white/20 transition-colors duration-300 h-full flex flex-col">
                      <div className="relative z-10">
                        <div className="flex items-center mb-3" role="img" aria-label="5 star rating">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-[#FF7A00] fill-current mr-1" viewBox="0 0 20 20" aria-hidden="true">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                        <p className="text-white/90 leading-relaxed mb-4 text-sm italic flex-grow">{testimonial.text}</p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#FF7A00] rounded-lg flex items-center justify-center mr-3" aria-hidden="true">
                            <span className="text-white font-bold text-sm sm:text-base">{testimonial.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm">{testimonial.name}</div>
                            <div className="text-xs text-white/70">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section from Home */}
        <CTA />

        {/* Remove webkit details marker */}
        <style jsx global>{`
          details summary::-webkit-details-marker {
            display: none;
          }
        `}</style>
      </>
    );
  };

  export default ServicePageTemplate;
