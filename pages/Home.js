import React from "react";
import Image from "next/image";

import { useProtectedRoute } from "@/context/ProtectedRoute";

import dynamic from "next/dynamic";
const Products = dynamic(() => import("@/components/Products/Products"));
const Contactus = dynamic(() => import("@/components/Contactus"));
const HomePage = () => {
  const User = useProtectedRoute();
  console.log(User);
  return (
    <>
      <div className="p-10 bg-[rgb(3,130,66)]">
        <Image
          className="mx-auto"
          width={1000}
          height={1000}
          quality={80}
          priority={true}
          alt="banner"
          src="/6477332.jpg"
        ></Image>
      </div>

      <div className="font-bold text-white flex items-center justify-center pt-16 pb-10 text-2xl ">
        Products
      </div>
      <h3 className="flex items-center justify-center pb-10 font-medium text-grey ">
        Experience the vibrant flavors and exceptional quality of farm-fresh
        fruits at Harvestify.
      </h3>
      <Products />
      <Contactus />
    </>
  );
};

export default HomePage;
