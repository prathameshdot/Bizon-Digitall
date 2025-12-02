import AboutHero from "@/components/About/AboutHero";
import StatsOnMap from "@/components/About/StatsOnMap";
import MissionCommitment from "@/components/About/MissionCommitment";
import SuccessTeam from "@/components/About/SuccessTeam";
import GetInTouch from "@/components/About/GetInTouch";
import ContactDetails from "@/components/About/ContactDetails";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Bizon Digital | Leading Digital Marketing Agency",
  description: "Discover Bizon Digital's 360-degree digital marketing solutions. With 10+ years of expertise and 2,500+ satisfied clients, we deliver measurable results.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <StatsOnMap />
      <MissionCommitment />
      <SuccessTeam />
      <GetInTouch />
      <ContactDetails />
    </>
  );
};

export default AboutPage;
