import aboutData from "@/data/aboutPageData.json";

const ContactDetails = () => {
  const { contact } = aboutData;
  const { details } = contact;
  
  return (
    <section className="relative bg-[#FF7A00] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Title */}
          <div className="md:col-span-1">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              {details.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white">
              {details.subtitle}
            </p>
          </div>

          {/* Middle Column - Telephone & WhatsApp */}
          <div className="md:col-span-1 space-y-6 md:space-y-8">
            {/* Telephone */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">
                {details.phone.label}
              </h3>
              <p className="text-base sm:text-lg text-white">
                {details.phone.value}
              </p>
            </div>

            {/* WhatsApp */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">
                {details.whatsapp.label}
              </h3>
              <p className="text-base sm:text-lg text-white">
                {details.whatsapp.value}
              </p>
            </div>
          </div>

          {/* Right Column - Office & Email */}
          <div className="md:col-span-1 space-y-6 md:space-y-8">
            {/* Office */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">
                {details.office.label}
              </h3>
              <p className="text-base sm:text-lg text-white">
                {details.office.value}
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-3">
                {details.email.label}
              </h3>
              <p className="text-base sm:text-lg text-white">
                {details.email.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
