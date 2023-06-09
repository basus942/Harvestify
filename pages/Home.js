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
    <LazyMotion features={domAnimation}>
      <div className="p-4 bg-[rgb(3,130,66)]">
        <Image
          className="mx-auto w-auto h-auto"
          width={700}
          height={500}
          quality={80}
          priority={true}
          alt="banner"
          src="/6477332.jpg"
        ></Image>
      </div>

      <div className="font-bold text-white flex items-center justify-center pt-28 pb-4 text-3xl ">
        Products
      </div>

      <h3 className="flex items-center justify-center pb-10 mx-4 font-medium text-grey ">
        Experience the vibrant flavors and exceptional quality of farm-fresh
        fruits at Harvestify.
      </h3>

      <Products />
      <About />
      {/* <Contactus /> */}
    </LazyMotion>
  );
};

export default HomePage;
