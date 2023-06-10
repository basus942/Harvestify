import { useState, useRef } from "react";
import { m, LazyMotion, useInView, domAnimation } from "framer-motion";
import { cartContext } from "@/context/Context";
import Filter from "../filter";
import CardComp from "@/components/Products/Card";

const Products = () => {
  const [filter, setFilter] = useState("Fruit");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { state } = cartContext();
  const upLift = (e) => {
    setFilter(e);
  };

  const { productList } = state;

  return (
    <LazyMotion features={domAnimation} ref={ref}>
      <m.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            y: "10vh",
          },
          visible: {
            opacity: 1,

            y: 0,

            transition: {
              delay: 0.3,
            },
          },
        }}
        className="font-bold text-white flex items-center justify-center mt-[3rem] pb-4 text-3xl "
      >
        Products
      </m.div>

      <m.h3
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            y: "10vh",
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="flex items-center justify-center pb-10 mx-4 font-medium text-grey "
      >
        Experience the vibrant flavors and exceptional quality of farm-fresh
        fruits at Harvestify.
      </m.h3>
      <div className="flex items-center justify-center">
        <Filter child={upLift} />
      </div>
      <div
        className="flex items-center justify-center  flex-wrap mb-10"
        ref={ref}
      >
        {productList &&
          productList
            .filter((item) => (filter === "All" ? true : item.type === filter))
            .map((item, i) => (
              <div className="p-2" id={item.id}>
                <m.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "-10vh",
                      y: "-10vh",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,

                      transition: {
                        type: "spring",

                        delay: 0.3 * i,
                        duration: 0.3,
                      },
                    },
                  }}
                >
                  <CardComp
                    title={item.title}
                    image={item.image}
                    price={item.price}
                  />
                </m.div>
              </div>
            ))}
      </div>
    </LazyMotion>
  );
};

export default Products;
