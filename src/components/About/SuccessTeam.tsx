import Image from "next/image";
import aboutData from "@/data/aboutPageData.json";

const SuccessTeam = () => {
  const { team } = aboutData;
  const teamMembers = team.members;

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FF7A00] text-center mb-12 sm:mb-16 md:mb-20">
            {team.title}
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Team Member Photo */}
                <div className="relative w-full max-w-[140px] sm:max-w-none aspect-[3/4] mb-3 sm:mb-4 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Team Member Name */}
                <h3 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-black text-center">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessTeam;
