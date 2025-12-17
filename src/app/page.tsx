import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutSection from "@/components/About/AboutSection";
import ServicesSection from "@/components/Services/ServicesSection";
import ClientReviews from "@/components/ClientReviews";
import MarketingScroll from "@/components/MarketingScroll";
import SocialMediaSection from "@/components/SocialMediaSection";
import CountryReachout from "@/components/CountryReachout";
import DigitalMarketingServices from "@/components/DigitalMarketingServices";
import Leadership from "@/components/Leadership";
import CTA from "@/components/CTA";
import WorkingProcess from "@/components/WorkingProcess";
import EmailSubscribe from "@/components/EmailSubscribe";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import homePageData from '@/data/homePageData.json';
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bizondigital.com'),
  title: "BizOn Digital - The Best Digital Marketing Agency",
  description: "BizOn Digital is a leading digital marketing agency offering SEO, social media marketing, paid advertising, web development, and branding services to help your business grow.",
  icons: {
    icon: '/images/logo/logo.png',
    apple: '/images/logo/logo.png',
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero data={homePageData.hero} />
      <Clients />
      <AboutSection />
      <ServicesSection data={homePageData.services} />
      <CTA />
      <MarketingScroll />
      <SocialMediaSection />
      <CountryReachout />
      <DigitalMarketingServices />
      <Leadership />
      <ClientReviews />
      <WorkingProcess />
      <EmailSubscribe data={homePageData.newsletter} />
      <CTABanner data={homePageData.ctaBanner} />
      <FAQ />
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
