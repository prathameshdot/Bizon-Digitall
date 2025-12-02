import ServicePageTemplate from "@/components/Services/ServicePageTemplate";
import servicesData from "@/data/servicesData.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paid Advertising Services - Bizon Digital",
  description: "High-performance paid advertising campaigns across Google Ads, Facebook, Instagram & more. Maximize ROI with data-driven strategies.",
};

export default function PaidAdsPage() {
  const serviceData = servicesData.services.find(s => s.id === "paid-ads");
  
  return <ServicePageTemplate serviceData={serviceData} />;
}
