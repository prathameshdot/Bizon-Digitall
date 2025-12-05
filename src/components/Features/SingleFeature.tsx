import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp group" data-wow-delay=".15s">
        <div className="bg-white dark:bg-gray-dark rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(255,122,0,0.25)] transition-all duration-300 h-full border border-gray-100 dark:border-gray-800 hover:border-[#FF7A00]/30">
          <div className="bg-[#FF7A00]/10 text-[#FF7A00] mb-8 flex h-16 w-16 items-center justify-center rounded-xl group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-300 shadow-md">
            {typeof icon === 'string' ? (
              <div className="relative h-8 w-8">
                <Image src={icon} alt={title} fill className="object-contain" />
              </div>
            ) : (
              icon
            )}
          </div>
          <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white group-hover:text-[#FF7A00] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-body-color text-base leading-relaxed font-medium">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
