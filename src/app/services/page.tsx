import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bizon Digital",
  description: "Our comprehensive digital marketing services",
};

const ServicesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Comprehensive digital marketing solutions tailored to grow your business"
      />
      <Features />
    </>
  );
};

export default ServicesPage;
