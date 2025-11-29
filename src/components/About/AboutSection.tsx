const AboutSection = () => {
  const cards = [
    {
      number: "01",
      title: "CUTTING-EDGE INSIGHTS",
      description: "Gain firsthand knowledge from top AI experts and pioneers shaping the industry."
    },
    {
      number: "02",
      title: "HANDS-ON LEARNING",
      description: "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills."
    },
    {
      number: "03",
      title: "EXCLUSIVE NETWORKING",
      description: "Connect with AI leaders, investors, startups, and fellow professionals at curated networking events."
    },
    {
      number: "04",
      title: "INNOVATION SHOWCASE",
      description: "Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future."
    }
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Top Section - About Us Title and Description */}
          <div className="mb-12 flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            {/* Left Side - About Us Title */}
            <div>
              <h2 className="whitespace-nowrap text-6xl font-bold text-[#FF7A00] md:text-7xl lg:text-8xl" style={{ fontFamily: 'var(--font-syne), sans-serif' }}>
                ABOUT US
              </h2>
            </div>

            {/* Right Side - Description */}
            <div className="lg:text-right">
              <p className="text-sm leading-relaxed text-[#FF7A00] md:text-base">
                Discover why Next-Gen AI Summit is the must-attend event
              </p>
              <p className="text-sm leading-relaxed text-[#FF7A00] md:text-base">
                for AI professionals, innovators, and industry leaders.
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
