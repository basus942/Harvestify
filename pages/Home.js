import React from "react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";

import { useProtectedRoute } from "@/context/ProtectedRoute";

import dynamic from "next/dynamic";
import Head from "next/head";

const About = dynamic(() => import("../components/Sections/About"));
const Products = dynamic(() => import("@/components/Products/Products"));
const Contactus = dynamic(() => import("../components/Sections/Contactus"));
const HomePage = () => {
  const User = useProtectedRoute();

  return (
    <LazyMotion features={domAnimation}>
      <Head>
        <title>Home Page</title>
      </Head>

      <Image
        className="mx-auto w-auto mt-[2rem] h-auto"
        width={700}
        height={500}
        quality={80}
        priority={true}
        alt="banner"
        src="/6477332.jpg"
      ></Image>

      <Products />
      <About />
      {/* <Contactus /> */}
    </LazyMotion>
  );
};

export default HomePage;
