import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | BizOn Digital",
  description: "Understand our refund and cancellation policy for digital marketing services.",
};

export default function RefundPage() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Refund Policy
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Last Updated: December 17, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">1. Service-Based Refunds</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Due to the nature of digital marketing services, most fees are non-refundable once work has commenced. This includes SEO campaigns, PPC management, social media marketing, and content creation where strategies have been developed and implemented.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">2. Setup Fee Refunds</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Setup fees and onboarding costs are non-refundable after initial project kickoff. However, if services have not been initiated within 7 days of payment, clients may request a partial refund (50% of setup fee).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">3. Monthly Retainer Refunds</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Monthly retainer fees are billed in advance and are non-refundable. Clients may cancel with 30 days notice, and services will continue until the end of the paid period. No prorated refunds for partial months.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">4. Ad Spend and Media Budgets</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Advertising budgets paid to platforms (Google Ads, Facebook Ads, etc.) are non-refundable and separate from our management fees. Unused ad credits may remain in your account for future campaigns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">5. Project-Based Work</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              For fixed-price projects (website development, branding packages), refunds are evaluated on a case-by-case basis. If less than 25% of deliverables are completed, a partial refund (up to 50%) may be issued at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">6. Satisfaction Guarantee</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We're committed to client satisfaction. If you're unhappy with our services within the first 14 days, we'll work with you to address concerns through revisions, strategy adjustments, or alternative solutions before considering refund requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">7. Refund Request Process</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              To request a refund, email{" "}
              <a href="mailto:connect@bizondigital.com" className="text-[#FF7A00] hover:underline">
                connect@bizondigital.com
              </a>{" "}
              with your invoice number, service details, and reason for the request. Approved refunds are processed within 10-15 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">8. Cancellation Policy</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Clients may cancel services with 30 days written notice. Early cancellation does not entitle refunds for current or future months. All outstanding invoices must be paid before cancellation is finalized.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">9. Non-Delivery of Services</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              If BizOn Digital fails to deliver agreed-upon services without valid reason, clients are entitled to a full refund. This excludes delays caused by client non-cooperation or third-party dependencies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">10. Questions About Refunds</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              For refund policy clarifications, contact our support team at{" "}
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
