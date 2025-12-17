import FAQ from "@/components/FAQ";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | BizOn Digital",
  description: "Find answers to common questions about BizOn Digital's services, pricing, and support.",
};

export default function FAQPage() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-12">
        <div className="text-center mb-12">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our digital marketing services, processes, and support. Can't find what you're looking for? Contact our team.
          </p> */}
        </div>
      </div>

      <FAQ />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-16">
        <div className="bg-gray-50 p-8 rounded-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Still Have Questions?
          </h2>
          <p className="text-base text-gray-600 mb-6">
            Our team is here to help you understand how we can grow your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#FF7A00] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e66d00] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/help"
              className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Visit Help Desk
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
