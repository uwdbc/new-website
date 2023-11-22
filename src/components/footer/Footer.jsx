import React from "react";
import Logo from "../../assets/dragon-warriors-logo";
import IconButtonLink from "../IconButtonLink";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinktree } from "../../setup";

const socials = [
  { icon: faDiscord, href: "https://discord.gg/aQzCK9Gfez" },
  { icon: faLinktree, href: "https://linktr.ee/uwdbc" },
  { icon: faInstagram, href: "https://www.instagram.com/wloodragonwarriors/" },
];

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col items-center p-3 py-12 text-gold-dark gap-5">
      <a
        href="#"
        className="cursor-pointer hover:opacity-70 transition duration-200"
      >
        <Logo width="100" />
      </a>

      {/* socials */}
      <div className="flex flex-row text-2xl gap-4">
        {socials.map((social, index) => (
          <IconButtonLink
            href={social.href}
            icon={social.icon}
            key={"social-" + index}
          />
        ))}
      </div>

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
