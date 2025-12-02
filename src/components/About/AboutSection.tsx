const AboutSection = () => {
  const cards = [
    {
      number: "01",
      title: "STRATEGIC EXPERTISE",
      description: "We bring years of experience in crafting data-driven digital marketing strategies that align with your business goals and drive sustainable growth."
    },
    {
      number: "02",
      title: "PROVEN RESULTS",
      description: "Our track record speaks for itself with successful campaigns that have helped businesses increase their online presence, engagement, and conversions."
    },
    {
      number: "03",
      title: "INNOVATIVE APPROACH",
      description: "We stay ahead of industry trends and leverage cutting-edge tools and technologies to deliver creative solutions that make your brand stand out."
    },
    {
      number: "04",
      title: "CLIENT-FOCUSED SERVICE",
      //description: "Your success is our priority. We work closely with you to understand your unique needs and deliver customized solutions with transparent communication."
       description: "Your success is our priority. We work closely with you to understand your unique needs and deliver customized solutions with transparent communication."
    }
  ];

  return (
    <section id="about" className="bg-white py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Side - About Us Title */}
            <div>
              <h2 className="whitespace-nowrap text-4xl font-bold text-[#FF7A00] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                ABOUT US
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="lg:text-right">
              <p className="text-xs leading-relaxed text-[#FF7A00] xs:text-sm md:text-base lg:text-lg 2xl:text-xl">
                Bizon Digital is a leading digital marketing agency dedicated to transforming
              </p>
              <p className="text-sm leading-relaxed text-[#FF7A00] md:text-base">
                businesses through innovative strategies and data-driven solutions that deliver
              </p>
              <p className="text-sm leading-relaxed text-[#FF7A00] md:text-base">
                measurable results and accelerate growth in the digital landscape.
              </p>
            </div>
          </div>

          {/* Cards Grid - Centered */}
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`group flex h-[200px] flex-col justify-between rounded-3xl bg-black p-6 pb-0 transition-all duration-300 hover:scale-[1.02] ${
                    index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
                  }`}
                  style={{
                    boxShadow: 'inset 0 10px 20px -10px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {/* Title - Takes more space */}
                  <div className="min-h-[60px] flex items-start">
                    <h3 className="text-xs font-semibold tracking-wide text-white leading-relaxed">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Section - Number and Description */}
                  <div className="flex items-end justify-between gap-6">
                    {/* Number with gradient - positioned on left */}
                    <div className="flex-shrink-0">
                      <span 
                        className="block text-8xl font-bold leading-[1] md:text-[100px]"
                        style={{
                          background: 'linear-gradient(180deg, #FF7A00 0%, rgba(255, 122, 0, 0) 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {card.number}
                      </span>
                    </div>

                    {/* Description - positioned on right */}
                    <p className="flex-1 pb-1 text-xs leading-relaxed text-gray-300 text-justify">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
