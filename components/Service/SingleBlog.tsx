import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ service }: { service: Service }) => {
  const { title, image, paragraph } = service;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark mb-4"
        data-wow-delay=".1s"
      >
        <Link
          href="/service-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill className="object-cover" />
        </Link>
        <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8 flex flex-col justify-between h-56"> {/* Fixed height */}
          <h3>
            <Link
              href="/service-details"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
