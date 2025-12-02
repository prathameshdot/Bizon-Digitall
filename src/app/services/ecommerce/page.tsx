import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Solutions - Bizon Digital",
  description: "Complete e-commerce solutions to launch and scale successful online stores. From setup to optimization, turn browsers into buyers.",
};

export default function EcommercePage() {
  const serviceData = servicesData.services.find(s => s.id === "ecommerce");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
