"use client";
import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../motion/variants";

const SingleBlog = ({ service }: { service: Service }) => {
  const { title, image, paragraph } = service;
  return (
    <>
      <div
        className="wow fadeInUp group relative mb-4 overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
        data-wow-delay=".1s"
      >
        <div
          // href="/service-details"
          className="relative block aspect-[37/22] w-full"
        >
          <Image src={image} alt="image" fill className="object-cover" />
        </div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex h-56 flex-col justify-between p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8"
        >
          {" "}
          {/* Fixed height */}
          <h3>
            <div
              // href="/service-details"
              className="mb-4 block text-xl font-bold text-black dark:text-white sm:text-2xl"
              // className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </div>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SingleBlog;
