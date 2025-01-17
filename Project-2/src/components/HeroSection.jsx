import React from "react";
import Image1 from "../assets/img1.webp";
import Image2 from "../assets/img2.webp";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="text-4xl sm:text-6xl lg:text-7xl lg:tracking-wide tracking-tight text-center">
        Aurora build tools
        <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
          {" "}
          for developers
        </span>
      </div>
      <p className="mt-10 text-lg sm:text-xl lg:text-2xl text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality !
      </p>
      <div className="flex justify-center gap-12 pt-8">
        <a
          className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
          href="#"
        >
          Read More
        </a>
        <a className="py-2 px-3 border-2 rounded-md" href="#">
          Documentation
        </a>
      </div>
      <div className="flex gap-16 pt-12 lg:flex-row flex-col">
        <img className="rounded-xl border-2 border-orange-400" src={Image1} alt="" />
        <img className="rounded-xl border-2 border-orange-400" src={Image2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
