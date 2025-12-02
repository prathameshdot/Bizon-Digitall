import aboutData from "@/data/aboutPageData.json";

const MissionCommitment = () => {
  const { mission, commitment } = aboutData;
  const missionItems = mission.items;
  const commitmentItems = commitment.items;

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="w-full">
          {/* Our Mission Section */}
          <div className="mb-12 sm:mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-[#FF7A00]">{mission.title}</span>
            </h2>
            {/* Underline */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="h-1 w-32 sm:w-48 md:w-64 bg-gray-300 rounded-full mx-auto md:mx-0"></div>
            </div>

            {/* Mission Items */}
            <div className="space-y-6 sm:space-y-8 text-left">
              {missionItems.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Commitment Section */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-[#FF7A00]">{commitment.title}</span>
            </h2>
            {/* Underline */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="h-1 w-32 sm:w-48 md:w-64 bg-gray-300 rounded-full mx-auto md:mx-0"></div>
            </div>

            {/* Commitment Items */}
            <div className="space-y-6 sm:space-y-8 text-left">
              {commitmentItems.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">
                      {item.title}
                    </h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionCommitment;
