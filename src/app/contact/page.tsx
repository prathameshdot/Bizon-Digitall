
import GetInTouch from "@/components/About/GetInTouch";
import ContactDetails from "@/components/About/ContactDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-28 bg-white">
        <GetInTouch />
      </div>
      <ContactDetails />
    </>
  );
};

export default ContactPage;
