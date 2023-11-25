import React from "react";
import PhotoCards from "../components/PhotoCards";
import RosteredMembers from "../components/RosteredMembers";

const join = () => {
  return (
    <>
      <section className="bg-dark">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gold pt-32 pb-4">
          Executive Team
        </h1>
        <p className="text-center text-white pb-8">
          Meet the dedicated individuals who steer the club and ensure smooth
          paddling for our dragon boat racing community.
        </p>
        <PhotoCards directory="Executive Team" />
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gold pt-4 pb-4">
          Coaches/Trainers
        </h1>
        <p className="text-center text-white pb-8">
          The people who guide the team to success with expert training
          techniques and personalized coaching.
        </p>
        <PhotoCards directory="Trainers/Coaches" />
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gold pt-4 pb-4">
          Our Team
        </h1>
        <p className="text-center text-white pb-8">
          Experience the thrill of dragon boat racing and be part of our amazing
          community.
        </p>
        <RosteredMembers />
      </section>
    </>
  );
};

export default join;
