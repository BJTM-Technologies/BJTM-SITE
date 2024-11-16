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
      <Breadcrumb pageName="Contact Page" description="Get in touch with us" />
      <div className="container">
        <p className="">
          <a href="mailto:support@bjtmtechnologies.com">
            Click to send us a mail directly
          </a>
        </p>
        <p>
          <a aria-label="Chat on WhatsApp" href="https://wa.me/1XXXXXXXXXX">
            <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" />
          </a>
        </p>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
