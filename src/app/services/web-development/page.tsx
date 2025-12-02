import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services - Bizon Digital",
  description: "Professional web development services that create powerful, responsive websites. Custom solutions that drive conversions and business growth.",
};

export default function WebDevelopmentPage() {
  const serviceData = servicesData.services.find(s => s.id === "web-development");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
