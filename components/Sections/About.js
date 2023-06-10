import React, { useRef } from "react";
import Image from "next/image";
import { m, LazyMotion, useInView, domAnimation, easeIn } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div id="AboutUs" className="grid place-content-center pt-6" ref={ref}>
      <m.span
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
              ease: easeIn,
            },
          },
        }}
        className="text-4xl mt-8 font-bold flex justify-center items-center"
        ref={ref}
      >
        About Us
      </m.span>
      <div className="hero-content flex-col lg:flex-row">
        <LazyMotion features={domAnimation}>
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
                  delay: 0.755,
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              src="https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.jpg?s=612x612&w=0&k=20&c=BLtIrrBprkZlIHNfSYIhkm3aebVUjqxsS-Yoqa1ss08="
              className=" rounded-3xl "
              width={1200}
              height={1200}
              quality={70}
              alt="banner"
            />
          </m.div>
        </LazyMotion>
        <div className="px-6">
          <LazyMotion features={domAnimation}>
            <m.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -100,
                },
                visible: {
                  opacity: 1,
                  x: 0,

                  transition: {
                    delay: 0.2,
                    duration: 1,
                  },
                },
              }}
            >
              <p className="text-sm mb-4">
                Welcome to Harvestify, your one-stop destination for fresh and
                healthy fruits and vegetables. We believe that good nutrition is
                the foundation for a healthy and fulfilling life, and that's why
                we are committed to providing you with the highest quality
                produce.
              </p>
              <p className="text-sm mb-4">
                At Harvestify, we work directly with local farmers and suppliers
                who share our passion for sustainable and organic farming
                practices. This allows us to bring you a wide variety of
                seasonal fruits and vegetables, free from harmful pesticides and
                chemicals.
              </p>
              <p className="text-sm mb-4">
                Our team is dedicated to ensuring that your online shopping
                experience is convenient and reliable. From hand-picking each
                item to carefully packaging your order, we strive to deliver
                freshness right to your doorstep. We take pride in our
                exceptional customer service and prompt delivery to ensure your
                satisfaction.
              </p>
              <p className="text-sm">
                Thank you for choosing Harvestify as your trusted source for
                farm-fresh produce. Join us in embracing a healthier lifestyle
                and experience the difference of truly delicious fruits and
                vegetables.
              </p>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default About;
