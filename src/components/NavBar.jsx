import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import Logo from "../assets/dragon-warriors-logo";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateVisibility = () => {
      setHidden(window.scrollY > lastScrollY);
      if (window.scrollY > lastScrollY) setOpen(false);
      setTransparent(window.scrollY == 0);
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateVisibility); // add event listener
    return () => {
      window.removeEventListener("scroll", updateVisibility); // clean up
    };
  }, [hidden, transparent]);

  return (
    <nav
      className={
        "bg-black text-gold fixed top-0 left-0 w-screen py-4 px-10 flex items-center justify-between transition-all z-10 " +
        (transparent && !open ? "bg-transparent" : "")
      }
      style={{
        transform: hidden ? "translateY(-100%)" : "",
      }}
    >
      <NavLink to="/">
        <Logo width={66.57} height={60} />
      </NavLink>
      <div
        className={
          "gap-6 md:flex " +
          (open
            ? "flex flex-col absolute top-0 left-0 w-full h-screen bg-black items-center"
            : "hidden")
        }
        style={{
          top: "100%",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
      </div>
      <button className="text-xl md:hidden" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faXmark : faBars} />
      </button>
    </nav>
  );
};

export default NavBar;
