import React from "react";
import Image from "next/image";

import Addproduct from "@/components/Products/Addproducts";
import Products from "@/components/Products/Products";
import Contactus from "@/components/Contactus";

const HomePage = () => {
  return (
    <>
      <div className="p-10 bg-[rgb(3,130,66)]">
        <Image
          className="mx-auto"
          width={1000}
          height={1000}
          alt="banner"
          src="/6477332.jpg"
        ></Image>
      </div>

      <div className="font-bold text-white flex items-center justify-center pt-10 pb-3 text-2xl ">
        Products
      </div>
      <h3 className="flex items-center justify-center pb-10 font-medium text-grey ">
        Experience the vibrant flavors and exceptional quality of farm-fresh
        fruits at Harvestify.
      </h3>
      <Products />
      <Contactus />
      <div className="grid mt-10 place-items-center"></div>
    </>
  );
};

export default HomePage;
