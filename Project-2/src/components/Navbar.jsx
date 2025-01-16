import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleMenue = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container mx-auto px-4 text-white">
        <div className="flex items-center lg:justify-around justify-between">
          <div className="flex items-center gap-4">
            <img className="h-16 w-16" src={Logo} alt="logo" />
            <span className="text-4xl">Aurora</span>
          </div>
          <ul className="hidden lg:flex gap-4 ml-12">
            <li>Feature</li>
            <li>Workflow</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
          <div className="hidden lg:flex items-center gap-16">
            <a className="py-2 px-3 border-2 rounded-md" href="#">
              Sign In
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
              href="#"
            >
              Create an Account
            </a>
          </div>
          <div className="lg:hidden">
            {isDrawerOpen ? (
              <RxCross2 className="w-12 h-12" onClick={toggleMenue} />
            ) : (
              <BiMenu className="w-12 h-12" onClick={toggleMenue} />
            )}
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="w-full flex flex-col items-center my-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-white">
            <li>Feature</li>
            <li>Workflow</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
          <div className="flex gap-16 mt-4 text-white">
            <a className="py-2 px-3 border-2 rounded-md" href="#">
              Sign In
            </a>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
              href="#"
            >
              Create an Account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
