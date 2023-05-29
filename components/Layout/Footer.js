import React from "react";
import Wave from "react-wavify";

export const Footer = () => {
  return (
    <div className="mt-20">
      <Wave
        fill="#038242"
        paused={false}
        options={{
          height: 20,
          amplitude: 90,
          speed: 0.2,
          points: 6,
        }}
      />
      <footer className="footer footer-center  bg-[#038242]">
        <div className="">
          <p> © 2023 Harvestify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
