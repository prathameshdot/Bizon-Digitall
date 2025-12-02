import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Marketing - Bizon Digital",
  description: "Build thriving communities and engage your audience with strategic social media marketing. Creative content that converts followers into customers.",
};

export default function SocialMediaPage() {
  const serviceData = servicesData.services.find(s => s.id === "social-media");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
