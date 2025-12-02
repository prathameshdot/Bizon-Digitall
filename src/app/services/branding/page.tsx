import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity & Design - Bizon Digital",
  description: "Create powerful brand identities that resonate with your audience. Strategic branding services from logo design to complete brand systems.",
};

export default function BrandingPage() {
  const serviceData = servicesData.services.find(s => s.id === "branding");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
