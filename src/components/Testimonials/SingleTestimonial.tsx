import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="rounded-2xl bg-white dark:bg-dark p-8 lg:p-6 xl:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(255,122,0,0.2)] duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
        <div className="mb-6 flex items-center space-x-1">{ratingIcons}</div>
        <p className="text-body-color mb-8 pb-8 text-base leading-relaxed dark:text-white flex-grow border-b border-gray-200 dark:border-gray-700">
          "{content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#FF7A00]/20">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="text-dark mb-1 text-lg font-semibold dark:text-white">
              {name}
            </h3>
            <p className="text-body-color text-sm">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
