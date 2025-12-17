"use client";

import { useState } from "react";
import ThankYouModal from "@/components/ThankYouModal";

const EmailSubscribe = ({ data }: { data?: { title?: string; subtitle?: string; placeholder?: string; buttonText?: string } }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const stripHtml = (s?: string) => (s ? s.replace(/<[^>]*>/g, '') : '');
  const safeTitle = stripHtml(data?.title) || 'Have an Awsome Project Idea?';
  const safeSubtitle = stripHtml(data?.subtitle) || "Let's Discuss";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Subscribing email:', email);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      console.log('Subscribe API response:', result);

      if (response.ok) {
        setShowModal(true);
        setEmail("");
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      alert("Failed to subscribe. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10">
            {safeTitle} {" "}
            <span className="text-[#FF7A00]">{safeSubtitle}</span>
          </h2>

          {/* Email Input Form */}
          <form onSubmit={handleSubmit} className="mb-8 sm:mb-10 px-2">
            <div className="relative max-w-3xl mx-auto">
              <div className="flex items-center bg-white rounded-full border-2 border-gray-300 p-1.5 sm:p-2 md:p-3 shadow-md">
                {/* Email Icon */}
                <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FF7A00] rounded-full flex items-center justify-center ml-0.5 sm:ml-1 md:ml-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Input Field */}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={data?.placeholder || 'Enter Email Address'}
                  required
                  className="flex-1 min-w-0 px-2 sm:px-4 md:px-6 py-2 text-xs sm:text-sm md:text-base text-gray-900 placeholder-gray-500 bg-transparent focus:outline-none"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-shrink-0 bg-[#FF7A00] hover:bg-[#E66D00] disabled:bg-gray-400 text-white font-semibold px-3 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 rounded-full transition-colors duration-300 text-xs sm:text-sm md:text-base"
                >
                    {isSubmitting ? 'Sending...' : (data?.buttonText || 'Send')}
                </button>
              </div>
            </div>
          </form>

          {/* Features/Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 text-sm sm:text-base">
            {/* 4.9/5 Average Ratings */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold text-gray-900">4.9/5 Average Ratings</span>
            </div>

            {/* 25+ Winning Awards */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-gray-900">25+ Winning Awards</span>
            </div>

            {/* Certified Product Designer */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-gray-900">Certified Product Designer</span>
            </div>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Thank You for Subscribing!"
        message="Check your email for confirmation. We'll connect with you soon!"
      />
    </section>
  );
};

export default EmailSubscribe;
