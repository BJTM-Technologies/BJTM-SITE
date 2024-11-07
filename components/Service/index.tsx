import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import serviceData from "./serviceData";

// Function to get a random subset of an array
const getRandomServices = (services, count) => {
  const shuffled = services.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Blog = () => {
  const randomServices = getRandomServices(serviceData, 3); // Get 3 random services

  return (
    <section
      id="service"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Few Of Our Services"
          paragraph="At BJTM Technologies, we offer a comprehensive range of services designed to empower businesses through technology."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {randomServices.map((service) => (
            <div key={service.id} className="w-full">
              <SingleBlog service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
