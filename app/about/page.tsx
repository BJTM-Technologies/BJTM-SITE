import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Software Development and SaaS Solutions",
  description: "About Page for Software Development and SaaS Solutions",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        // description="Get to know more about us"
        description="BJTM Technologies is a cutting edge software delivery services company specializing in ready-made products. We provide business with off-the-shelf software solutions that can be rapidly deployed and customized to meet specific needs, enabling oir clients to accelerate their digital transformation journey."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
    </>
  );
};

export default AboutPage;
