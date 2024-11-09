import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionThree = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex justify-center items-center">
          <SectionTitle
            title="Our Team"
            paragraph="Our team consists of experienced developers, designers, and industry experts dedicated to creating high-quality software solutions. We combine technical expertise with a deep understanding of client needs to deliver tailored solutions."
            mb="44px"
          />
    
        </div>
      </div>{" "}
    </section>
  );
};

export default AboutSectionThree;
