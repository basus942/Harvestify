import React from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { useProtectedRoute } from "@/context/ProtectedRoute";

import dynamic from "next/dynamic";

const About = dynamic(() => import("../components/Sections/About"));
const Products = dynamic(() => import("@/components/Products/Products"));
const Contactus = dynamic(() => import("../components/Sections/Contactus"));
const HomePage = () => {
  const User = useProtectedRoute();

  return (
    <>
      <div className="p-16 bg-[rgb(3,130,66)]">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.6,
              },
              visible: {
                scale: 1,
                opacity: 1,
                rotate: 360 * 2,
                transition: {
                  type: "spring",
                  delay: 0.2,
                  duration: 2,
                },
              },
            }}
          >
            <Image
              className="mx-auto w-auto h-auto"
              width={1000}
              height={1000}
              quality={80}
              priority={true}
              alt="banner"
              src="/6477332.jpg"
            ></Image>
          </m.div>
        </LazyMotion>
      </div>

      <div className="font-bold text-white flex items-center justify-center pt-28 pb-10 text-3xl ">
        Products
      </div>

      <h3 className="flex items-center justify-center pb-20 font-medium text-grey ">
        Experience the vibrant flavors and exceptional quality of farm-fresh
        fruits at Harvestify.
      </h3>

      <Products />
      <About />
      <Contactus />
    </>
  );
};

export default HomePage;
