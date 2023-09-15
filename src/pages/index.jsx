import React from "react";
import hero from "../assets/hero-bg.jpg";
import ButtonLink from "../components/ButtonLink";

const index = () => {
  return (
    <div className="text-gold">
      {/* hero section */}
      <div
        style={{
          backgroundImage: `url(${hero})`,
          backgroundColor: "rgb(231, 231, 231)",
          backgroundBlendMode: "multiply",
        }}
        className="h-screen bg-center bg-cover bg-fixed"
      >
        <div className="bg-black opacity-60 h-full w-full absolute top-0 left-0 z-0" />
        {/* hero content */}
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default index;
