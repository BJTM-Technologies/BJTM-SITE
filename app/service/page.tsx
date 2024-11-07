import SingleBlog from "@/components/Service/SingleBlog";
import blogData from "@/components/Service/serviceData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Page | Software Development and SaaS Solutions",
  description: "Service Page for Software Development and SaaS Solutions",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services"
        description="Know more about our services"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((service) => (
              <div
                key={service.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
