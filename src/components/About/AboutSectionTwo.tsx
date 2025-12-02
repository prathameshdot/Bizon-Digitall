import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px] space-y-6">
              <div className="bg-white dark:bg-gray-dark rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(255,122,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-[#FF7A00]/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Bug free code
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-dark rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(255,122,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-[#FF7A00]/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Premier support
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-dark rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_50px_rgba(255,122,0,0.2)] transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-[#FF7A00]/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF7A00]/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Next.js
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                      consectetur adipiscing elit setim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
