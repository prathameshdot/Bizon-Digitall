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
      description: "Your success is our priority. We work closely with you to understand your unique needs and deliver customized solutions with transparent communication."
      //  description: "Your success is our priority. We work closely with you to understand your unique needs and deliver customized solutions with transparent communication."
    }
  ];

  return (
    <section id="about" className="bg-white pt-24 py-8 md:py-12 lg:py-16 scroll-mt-24">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Side - About Us Title */}
            <div>
              <h2 className="whitespace-nowrap text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                <span className="text-[#FF7A00] mr-2">ABOUT</span>
                <span className="text-black">US</span>
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="w-full lg:w-1/2">
              <p className="mx-auto lg:mx-0 text-base leading-relaxed text-black xs:text-base md:text-lg lg:text-xl 2xl:text-2xl text-center lg:text-left max-w-2xl">
                Bizon Digital is a leading digital marketing agency dedicated to transforming businesses through innovative strategies and data-driven solutions that deliver measurable results and accelerate growth in the digital landscape.
              </p>
            </div>
          </div>

          {/* Cards Grid - Centered */}
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`group relative flex h-[200px] flex-col justify-between rounded-3xl bg-black p-6 pb-0 transition-all duration-300 transform will-change-transform hover:scale-[1.02] ${
                    index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'
                  }`}
                  style={{
                    // Outer soft shadow for better separation from the background/CTA
                    boxShadow: '0 16px 40px -12px rgba(0,0,0,0.6)'
                  }}
                >
                  {/* Title - Takes more space */}
                  <div className="min-h-[60px] flex items-start">
                    <h3 className="text-xs font-semibold tracking-wide text-white leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]">
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
