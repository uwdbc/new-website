import React from "react";
import Logo from "../../assets/dragon-warriors-logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 flex flex-col items-center p-3 text-gold-dark gap-5">
      <a
        href="#"
        className="cursor-pointer hover:opacity-70 transition duration-200"
      >
        <Logo width="100" />
      </a>

      {/* content */}
      <div>
        <span className="block md:inline md:after:content-['_|_']">
          © Copyright UWDBC 2023
        </span>
        <span className="block md:inline">Site by UWDBC Web Team</span>
      </div>
    </footer>
  );
};

export default Footer;
