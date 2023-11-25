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
import AboutImage from "../assets/about-pic.jpg";

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
      <section ref={contentRef} className="bg-dark text-gold">
        <div className="py-8 md:py-16">
          <h3 className="text-sm md:text-xl font-semibold text-center text-white pb-2">
            HELLO THERE,
          </h3>
          <h2 className="text-2xl md:text-6xl font-bold text-center">
            We Are UWDBC
          </h2>
        </div>
        <div className="flex flex-wrap justify-center px-4 md:px-48">
          <div className="w-4/5 max-w-[720px] pb-8">
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

      {/* about dragon boat */}

      <section className="bg-dark text-white">
        <h2 className="py-8 md:py-16 text-3xl md:text-6xl font-bold text-center text-gold">
          About UWDBC
        </h2>
        <div className="px-4 md:px-48">
          <div className="lg:grid lg:grid-cols-1-to-2">
            <div className="flex flex-col gap-6 pr-4 justify-center">
              <div>
                <h3 className="text-2xl md:text-4xl text-white font-semibold py-3">
                  What is Dragon Boat?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque sunt quaerat, nesciunt consectetur assumenda numquam
                  praesentium doloribus dolorem molestias illo ut cum incidunt
                  alias, repudiandae dignissimos. Commodi itaque laboriosam
                  dolorum.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl text-white font-semibold py-3">
                  Our Club's Journey
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente non sunt impedit minus voluptate dolor. Porro facere,
                  aliquid quia maxime perferendis ab magnam praesentium soluta
                  iure unde id, iste inventore.
                </p>
              </div>
            </div>
            <div
              className="hidden lg:block w-full h-full min-h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutImage})` }}
            ></div>
          </div>
        </div>
      </section>

      {/* history section - past regattas */}
    </>
  );
};

export default index;
