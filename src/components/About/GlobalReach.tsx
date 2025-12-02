import Image from "next/image";
import aboutData from "@/data/aboutPageData.json";

const GlobalReach = () => {
  const { globalReach } = aboutData;
  
  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              <span className="text-black">{globalReach.title}</span>
              <br />
              <span className="text-[#FF7A00]">{globalReach.subtitle}</span>
            </h2>
            {/* Underline */}
            <div className="mt-4 sm:mt-6 mx-auto">
              <div className="h-1 w-32 sm:w-48 md:w-64 lg:w-80 bg-gray-300 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* World Map Image */}
          <div className="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
            <Image
              src={globalReach.image}
              alt="Global Reach Map"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
