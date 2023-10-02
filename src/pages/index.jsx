import React, { useEffect, useRef, useState } from "react";
import hero from "../assets/hero-bg.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingModal from "../components/LoadingModal";
import ButtonLink from "../components/ButtonLink";
import IconButtonLink from "../components/IconButtonLink";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinktree } from "../setup";
import FacebookVideoEmbed from "../components/FacebookVideoEmbed";

const images = [hero];
const socials = [
  { icon: faDiscord, href: "https://discord.gg/aQzCK9Gfez" },
  { icon: faLinktree, href: "https://linktr.ee/uwdbc" },
  { icon: faInstagram, href: "https://www.instagram.com/wloodragonwarriors/" },
];

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
    <>
      {/* hero section */}
      <section className="text-gold">
        {loading && <LoadingModal />}
        <img src={hero} className="hidden" onLoad={onImageLoad} />

        <div
          style={{
            backgroundImage: `url(${hero})`,
          }}
          className="h-screen bg-center bg-cover bg-fixed flex items-center"
          onLoad={onImageLoad}
        >
          <div className="flex justify-between items-center w-full sm:pl-24 lg:pl-48 text-center md:text-left">
            <div className="flex flex-col gap-12">
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold">
                University of Waterloo <br />
                Dragon Boat Club
              </h1>
              <div className="flex gap-4 flex-wrap justify-center md:justify-normal">
                <ButtonLink to="/join" className="min-w-[16rem] py-3">
                  Join Us
                </ButtonLink>
                <ButtonLink to="/contact" className="min-w-[16rem] py-3">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
            <div className="hidden md:flex flex-col text-2xl md:pr-4 gap-4">
              {socials.map((social, index) => (
                <IconButtonLink
                  href={social.href}
                  icon={social.icon}
                  key={"social-" + index}
                />
              ))}
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
      </section>

      {/* intro section */}
      <section ref={contentRef} className="py-16 bg-dark text-gold">
        <div>
          <h3 className="text-sm md:text-xl font-semibold text-center text-white pb-2">
            HELLO THERE,
          </h3>
          <h2 className="text-2xl md:text-6xl font-bold text-center">
            We Are UWDBC
          </h2>
        </div>
        <div className="flex justify-center items-center py-8">
          <hr className="w-3/5 opacity-20" />
        </div>
        <div className="flex flex-wrap justify-center w-3/5 m-auto">
          <div className="pb-8">
            {/* migrate to youtube embed once we start posting on youtube */}
            <FacebookVideoEmbed videoURL="https://www.facebook.com/UWDBC/videos/1088345524633090/" />
          </div>
          <p className="text-white text-center text-sm md:text-xl">
            UWDBC is a student-run dragon boat club at the University of
            Waterloo. In the fall and winter we train together in preparation
            for racing season in the summer, where we consistently compete as
            one of the top university programs in Canada. Along the way, we aim
            to promote and inspire our members to lead a healthy, active
            lifestyle.
          </p>
        </div>
      </section>

      {/* history section - past regattas */}
    </>
  );
};

export default index;
