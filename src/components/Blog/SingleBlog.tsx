import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(255,122,0,0.25)] duration-300 border border-gray-100 dark:border-gray-800 hover:border-[#FF7A00]/30 h-full flex flex-col">
        <Link
          href="/blog-details"
          className="relative block aspect-[16/10] w-full overflow-hidden"
        >
          <span className="bg-[#FF7A00] absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize shadow-lg">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        <div className="p-6 sm:p-8 flex flex-col flex-grow">
          <h3 className="flex-grow">
            <Link
              href="/blog-details"
              className="hover:text-[#FF7A00] dark:hover:text-[#FF7A00] mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white transition-colors duration-300"
            >
              {title}
            </Link>
          </h3>
          <p className="text-body-color mb-6 pb-6 text-base font-medium border-b border-gray-200 dark:border-gray-700">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-gray-200 dark:border-gray-700 pr-5">
              <div className="mr-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#FF7A00]/20">
                  <Image src={author.image} alt="author" fill className="object-cover" />
                </div>
              </div>
              <div className="w-full">
                <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-body-color text-xs">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
                Date
              </h4>
              <p className="text-body-color text-xs">{publishDate}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
