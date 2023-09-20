import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero-bg.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingModal from "../components/LoadingModal";
import ButtonLink from "../components/ButtonLink";

const images = [hero];

const index = () => {
  const contentRef = useRef();
  const imagesLoaded = useRef(0);
  const [loading, setLoading] = useState(true);

  function onImageLoad(e) {
    imagesLoaded.current++;
    if (imagesLoaded.current >= images.length) {
      setLoading(false);
    }
  }

  function onScrollButton(e) {
    e.preventDefault();

    contentRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="text-gold">
      {loading && <LoadingModal />}
      <img src={hero} className="hidden" onLoad={onImageLoad} />

      <div
        style={{
          backgroundImage: `url(${hero})`,
        }}
        className="h-screen bg-center bg-cover bg-fixed w-full flex items-center"
        onLoad={onImageLoad}
      >
        <div className="flex justify-center flex-col max-w-6xl w-fit sm:px-24 lg:px-48 text-center md:text-left gap-8 box-border">
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold">
            University of Waterloo <br />
            Dragon Boat Club
          </h1>
          <div className="flex gap-4 flex-wrap justify-center md:justify-normal">
            <ButtonLink to="/about" className="min-w-[16rem]">
              About Us
            </ButtonLink>
            <ButtonLink to="/contact" className="min-w-[16rem]">
              Contact Us
            </ButtonLink>
          </div>
        </div>
        <a
          className="inline-block text-xs border-0 border-gold border-r-2 h-20 text-white font-bold cursor-pointer pr-4 absolute bottom-0 right-10"
          onClick={onScrollButton}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-gold pr-3" />
          <span>SCROLL DOWN</span>
        </a>
      </div>
      <div ref={contentRef} className="h-screen"></div>
    </section>
  );
};

export default index;
