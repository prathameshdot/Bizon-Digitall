import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | BizOn Digital",
  description: "Read our terms and conditions for using BizOn Digital's services and website.",
};

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Terms & Conditions
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Last Updated: December 17, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">1. Acceptance of Terms</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              By accessing and using BizOn Digital&apos;s services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">2. Services Description</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              BizOn Digital provides digital marketing services including but not limited to SEO, PPC advertising, social media marketing, web development, content marketing, and brand strategy. Service details and deliverables will be outlined in individual service agreements or proposals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">3. Client Responsibilities</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Clients must provide accurate information, timely feedback, and necessary access to accounts and platforms. Delays caused by client non-cooperation may affect project timelines and results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">4. Payment Terms</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Payment terms will be specified in individual service agreements. Late payments may result in service suspension. All fees are non-refundable unless otherwise stated in our Refund Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">5. Intellectual Property</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Upon full payment, clients own the final deliverables. BizOn Digital retains the right to showcase work in portfolios and marketing materials unless otherwise agreed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">6. Limitation of Liability</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              BizOn Digital will not be liable for any indirect, consequential, or punitive damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">7. Service Modifications</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify, suspend, or discontinue any service with reasonable notice. Changes to these terms will be communicated via email or website notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">8. Termination</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Either party may terminate services with 30 days written notice. Immediate termination may occur for breach of terms or non-payment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">9. Contact Information</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us at{" "}
              <a href="mailto:connect@bizondigital.com" className="text-[#FF7A00] hover:underline">
                connect@bizondigital.com
              </a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
