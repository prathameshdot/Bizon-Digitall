"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import ThankYouModal from "@/components/ThankYouModal";

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending help desk form:', formData);
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
          isHelpDesk: true
        }),
      });

      const result = await response.json();
      console.log('Help desk API response:', result);

      if (response.ok) {
        setShowModal(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorMsg = result.error || result.details || "Something went wrong. Please try again.";
        console.error('API Error:', errorMsg);
        setShowModal(true);
      }
    } catch (error) {
      console.error('Help desk form error:', error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Help Desk & Support Center
        </h1>
        <p className="text-base text-gray-600 mb-12">
          Get the help you need for our digital marketing services
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick Contact */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Quick Contact</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black mb-2">Email Support</h3>
                <a href="mailto:connect@bizondigital.com" className="text-[#FF7A00] hover:underline">
                  connect@bizondigital.com
                </a>
                <p className="text-sm text-gray-600 mt-1">Response within 24 hours</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Phone Support</h3>
                <a href="tel:+15164405037" className="text-[#FF7A00] hover:underline">
                  +1 (516) 440-5037
                </a>
                <p className="text-sm text-gray-600 mt-1">Mon-Fri, 9AM-6PM EST</p>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600">Available on website during business hours</p>
              </div>
            </div>
          </div>

          {/* Support Topics */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Common Support Topics</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#FF7A00] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-700">Account setup and login issues</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#FF7A00] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-700">Campaign performance questions</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#FF7A00] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-700">Billing and invoice inquiries</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#FF7A00] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-700">Service modifications and upgrades</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#FF7A00] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-base text-gray-700">Technical support and troubleshooting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Help Resources */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Self-Service Resources</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link
              href="/faq"
              className="bg-white border-2 border-gray-200 hover:border-[#FF7A00] p-6 rounded-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">FAQ</h3>
              <p className="text-sm text-gray-600">Find answers to common questions</p>
            </Link>

            <Link
              href="/blog"
              className="bg-white border-2 border-gray-200 hover:border-[#FF7A00] p-6 rounded-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Knowledge Base</h3>
              <p className="text-sm text-gray-600">Browse guides and tutorials</p>
            </Link>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openGetQuote'))}
              className="bg-white border-2 border-gray-200 hover:border-[#FF7A00] p-6 rounded-lg transition-all duration-300 text-left"
            >
              <div className="w-12 h-12 bg-[#FF7A00] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Get Quote</h3>
              <p className="text-sm text-gray-600">Request service pricing</p>
            </button>
          </div>
        </div>

        {/* Help Desk Form */}
        <div className="mb-12 bg-gray-50 p-8 rounded-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Submit a Support Ticket</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent"
                placeholder="Brief description of your issue"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:border-transparent resize-none"
                placeholder="Please provide details about your issue..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e66d00] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Support Ticket'}
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-r from-[#FF7A00] to-[#e66d00] p-8 rounded-2xl text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-base mb-6 opacity-90">
            Our dedicated support team is here to help you succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@bizondigital.com"
              className="inline-block bg-white text-[#FF7A00] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:+15164405037"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Support Ticket Submitted!"
        message="Thank you for contacting our support team. We'll get back to you within 24 hours. Please check your email for confirmation."
      />
    </div>
  );
}
