import React, { useRef } from "react";
import Image from "next/image";
import { m, LazyMotion, useInView, domAnimation } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const heading = "About Us";
  return (
    <div id="AboutUs" className="grid place-content-center " ref={ref}>
      <div className="hero-content flex-col lg:flex-row">
        <LazyMotion features={domAnimation}>
          <m.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,

                transition: {
                  delay: 1,
                  duration: 0.5,
                },
              },
            }}
          >
            <Image
              src="https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.jpg?s=612x612&w=0&k=20&c=BLtIrrBprkZlIHNfSYIhkm3aebVUjqxsS-Yoqa1ss08="
              className=" rounded-3xl "
              width={2000}
              height={2000}
              priority={false}
              loading="lazy"
              alt="banner"
            />
          </m.div>
        </LazyMotion>
        <div className="p-9">
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
              <span className="text-5xl m-8 font-bold flex" ref={ref}>
                About Us
              </span>

              <p className="text-lg mb-8">
                Welcome to Harvestify, your one-stop destination for fresh and
                healthy fruits and vegetables. We believe that good nutrition is
                the foundation for a healthy and fulfilling life, and that's why
                we are committed to providing you with the highest quality
                produce.
              </p>
              <p className="text-lg mb-8">
                At Harvestify, we work directly with local farmers and suppliers
                who share our passion for sustainable and organic farming
                practices. This allows us to bring you a wide variety of
                seasonal fruits and vegetables, free from harmful pesticides and
                chemicals.
              </p>
              <p className="text-lg mb-8">
                Our team is dedicated to ensuring that your online shopping
                experience is convenient and reliable. From hand-picking each
                item to carefully packaging your order, we strive to deliver
                freshness right to your doorstep. We take pride in our
                exceptional customer service and prompt delivery to ensure your
                satisfaction.
              </p>
              <p className="text-lg">
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
