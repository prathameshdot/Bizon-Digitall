"use client";
import { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import ThankYouModal from "@/components/ThankYouModal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending contact form:', formData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Contact Form Submission'
        }),
      });

      const result = await response.json();
      console.log('Contact API response:', result);
      console.log('Response status:', response.status);

      if (response.ok) {
        setModalMessage("Thank you! Your message has been sent successfully. We'll get back to you within 24 hours. Please check your email (including spam folder) for confirmation.");
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorMsg = result.error || result.details || "Something went wrong. Please try again.";
        console.error('API Error:', errorMsg);
        alert(`Error: ${errorMsg}`);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      alert(`Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-2xl bg-white px-8 py-11 shadow-[0_15px_50px_rgba(0,0,0,0.15)] dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] border border-gray-100 dark:border-gray-800"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2C303B] px-6 py-4 text-base text-body-color dark:text-body-color-dark outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2C303B] px-6 py-4 text-base text-body-color dark:text-body-color-dark outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#2C303B] px-6 py-4 text-base text-body-color dark:text-body-color-dark outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-[#FF7A00]/20 transition-all duration-300 shadow-sm"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-xl bg-[#FF7A00] px-9 py-4 text-base font-medium text-white shadow-lg hover:shadow-xl duration-300 hover:bg-[#e66d00] disabled:bg-gray-400 transition-all"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Ticket'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Thank You!"
        message={modalMessage}
      />
    </section>
  );
};

export default Contact;
