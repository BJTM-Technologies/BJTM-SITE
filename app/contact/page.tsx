import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Software Development and SaaS Solutions",
  description: "Contact Page for Software Development and SaaS Solutions",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
