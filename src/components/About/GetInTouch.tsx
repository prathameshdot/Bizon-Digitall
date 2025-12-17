"use client";

import { useState } from "react";
import aboutData from "@/data/aboutPageData.json";
import ThankYouModal from "@/components/ThankYouModal";

const GetInTouch = () => {
  const { contact } = aboutData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    subject: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending GetInTouch form:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.position, // Using position as company
          message: formData.subject,
          subject: 'Get in Touch Form Submission'
        }),
      });

      const result = await response.json();
      console.log('GetInTouch API response:', result);

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", position: "", subject: "" });
      } else {
        const errorMsg = result.error || result.details || "Something went wrong. Please try again.";
        console.error('API Error:', errorMsg);
        setShowModal(true);
      }
    } catch (error) {
      console.error('GetInTouch form error:', error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                className="w-full bg-[#FF7A00] hover:bg-[#E66D00] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Connect with us'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Thank You!"
        message="Your message has been sent successfully. We'll get back to you within 24 hours. Please check your email for confirmation."
      />
    </section>
  );
};

export default GetInTouch;
