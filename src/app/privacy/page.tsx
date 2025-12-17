import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BizOn Digital",
  description: "Learn how BizOn Digital collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Last Updated: December 17, 2025
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">1. Information We Collect</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We collect information you provide directly, including name, email, phone number, company details, and project requirements. We also collect technical data like IP addresses, browser type, and usage analytics through cookies and similar technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">2. How We Use Your Information</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Your information helps us provide and improve our digital marketing services, communicate about projects, send marketing updates (with your consent), analyze website performance, and comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">3. Data Sharing and Disclosure</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share data with trusted service providers (hosting, analytics, payment processors) who assist in delivering our services, and when required by law or to protect our rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">4. Cookies and Tracking</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We use cookies to enhance user experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">5. Data Security</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">6. Your Rights and Choices</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              You have the right to access, correct, or delete your personal data. You can unsubscribe from marketing emails anytime. For GDPR or CCPA requests, contact us at connect@bizondigital.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">7. Third-Party Links</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Our website may contain links to external sites. We are not responsible for the privacy practices of third-party websites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">8. Children's Privacy</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              Our services are not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have collected such data, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">9. Policy Updates</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">10. Contact Us</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              For privacy-related questions or concerns, email us at{" "}
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
