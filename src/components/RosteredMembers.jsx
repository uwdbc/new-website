import React from "react";
import rosteredMembers from "../team/rostered-members.json";

const RosteredMembers = () => {
  return (
    <div className="grid grid-cols-2 px-6 md:px-16">
      <div>
        <h3 className="text-3xl text-center text-white pb-8">Womens</h3>
        <ul className="text-center text-white pb-8">
          {rosteredMembers.women.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-3xl text-center text-white pb-8">Mens</h3>
        <ul className="text-center text-white pb-8">
          {rosteredMembers.men.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RosteredMembers;
