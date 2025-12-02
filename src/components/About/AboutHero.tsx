import Image from "next/image";
import aboutData from "@/data/aboutPageData.json";

const AboutHero = () => {
  const { hero } = aboutData;
  
  return (
    <section className="relative bg-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* About Us Title */}
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h1 
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black"
              style={{ fontFamily: 'var(--font-syne), sans-serif' }}
            >
              {hero.title}
            </h1>
            {/* Underline */}
            <div className="mt-4 sm:mt-6 mx-auto">
              <div className="h-1 w-32 sm:w-48 md:w-64 bg-gray-300 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Container for Orange Box and Image */}
          <div className="relative w-full mb-20 xs:mb-24 sm:mb-28 md:mb-32 lg:mb-36 xl:mb-40">
            {/* Orange Speech Bubble with asymmetric shape - taller on left, shorter on right */}
            <div className="relative z-0 bg-[#FF7A00] rounded-3xl sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] shadow-2xl overflow-visible">
              {/* Custom shape using clip-path for asymmetric height */}
              <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20" style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
                paddingBottom: 'clamp(8rem, 15vw, 12rem)'
              }}>
                <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
                  {hero.description}
                </p>
              </div>
            </div>

            {/* Team Image - In front of orange box, overlapping from bottom at 80% visibility of orange box */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[80%] w-[90%] sm:w-[85%] md:w-[85%] lg:w-[85%] max-w-5xl z-20">
              <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[440px] lg:h-[500px] xl:h-[560px] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[40px] overflow-hidden shadow-lg">
                <Image
                  src={hero.image}
                  alt="Bizon Digital Team"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
