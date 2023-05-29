import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.jpg?s=612x612&w=0&k=20&c=BLtIrrBprkZlIHNfSYIhkm3aebVUjqxsS-Yoqa1ss08="
          className="max-w-xl rounded-3xl animate-bounce "
          alt="banner"
        />
        <div className="p-9">
          <h1 className="text-5xl m-8 font-bold">About Harvestify</h1>
          <p className="text-lg mb-8">
            Welcome to Harvestify, your one-stop destination for fresh and
            healthy fruits and vegetables. We believe that good nutrition is the
            foundation for a healthy and fulfilling life, and that's why we are
            committed to providing you with the highest quality produce.
          </p>
          <p className="text-lg mb-8">
            At Harvestify, we work directly with local farmers and suppliers who
            share our passion for sustainable and organic farming practices.
            This allows us to bring you a wide variety of seasonal fruits and
            vegetables, free from harmful pesticides and chemicals.
          </p>
          <p className="text-lg mb-8">
            Our team is dedicated to ensuring that your online shopping
            experience is convenient and reliable. From hand-picking each item
            to carefully packaging your order, we strive to deliver freshness
            right to your doorstep. We take pride in our exceptional customer
            service and prompt delivery to ensure your satisfaction.
          </p>
          <p className="text-lg">
            Thank you for choosing Harvestify as your trusted source for
            farm-fresh produce. Join us in embracing a healthier lifestyle and
            experience the difference of truly delicious fruits and vegetables.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
