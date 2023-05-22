import React from "react";

const About = () => {
  return (
    <>
      <div className="flex justify-between p-6">
        <div className="container mx-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-11  text-white">
            About Harvestify
          </h2>
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
        <img
          src="https://media.istockphoto.com/id/1171590298/photo/farmers-working-in-rice-field.jpg?s=612x612&w=0&k=20&c=P8SO6BrTWfHkDF68TTaSYpXoEOdSG3AW-48Vks2gYvI="
          className="mx-8"
        />
      </div>
    </>
  );
};

export default About;
