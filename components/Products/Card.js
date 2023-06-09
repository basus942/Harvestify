import { cartContext } from "@/context/Context";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { m, LazyMotion, domAnimation } from "framer-motion";

const CardComp = ({ title, image, price }) => {
  const [alert, setAlert] = useState(false);

  const { dispatch } = cartContext();
  const add2cartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: Math.random(),
        title: title,
        image: image,
        price: price,
      },
    });
    setAlert(true);
  };
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [alert]);
  return (
    <>
      {alert && (
        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{title} Added to Cart!</span>
          </div>
        </div>
      )}
      <Card className="w-64 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-black via-green-900 to-green-800">
        <LazyMotion features={domAnimation}>
          <m.div whileHover={{ y: -30 }}>
            <CardHeader shadow={false} floated={false} className="h-30">
              <Image
                src={image}
                width={300}
                height={300}
                quality={70}
                className="w-fit  "
              />
            </CardHeader>
          </m.div>
        </LazyMotion>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography className="font-bold text-xl text-white">
              {title}
            </Typography>
            <Typography
              color="red"
              className="font-bold text-xl drop-shadow-2xl"
            >
              Rs {price}
            </Typography>
          </div>
          {/* <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            With plenty of talk and listen time, voice-activated Siri access,
            and an available wireless charging case.
          </Typography> */}
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            className="bg-green-700"
            fullWidth={true}
            onClick={add2cartHandler}
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComp;
