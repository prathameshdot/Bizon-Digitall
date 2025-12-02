"use client";

import { useState } from "react";
import aboutData from "@/data/aboutPageData.json";

const GetInTouch = () => {
  const { contact } = aboutData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    subject: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="max-w-2xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#FF7A00] mb-4">
              {contact.formTitle}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              {contact.formSubtitle}
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-base sm:text-lg text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Company Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Company Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-base sm:text-lg text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-base sm:text-lg text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Title/Position */}
            <div>
              <input
                type="text"
                name="position"
                placeholder="Title/Position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-base sm:text-lg text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-0 py-3 text-base sm:text-lg text-gray-900 placeholder-gray-500 border-0 border-b-2 border-gray-300 focus:border-[#FF7A00] focus:outline-none focus:ring-0 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-[#FF7A00] hover:bg-[#E66D00] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Connect with us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
