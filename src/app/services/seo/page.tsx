import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services - Bizon Digital",
  description: "Strategic SEO services that rank higher, attract organic traffic, and convert visitors into customers. Data-driven approach for sustainable growth.",
};

export default function SEOPage() {
  const serviceData = servicesData.services.find(s => s.id === "seo");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
