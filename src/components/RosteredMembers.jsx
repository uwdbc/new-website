import React, { useState, useEffect } from 'react';
import rosteredMembers from '../assets/rostered-members.json';

const RosteredMembers = () => {

    return ( 
        <div className="row row-padding">
          <div className="column">
            <p className="text-3xl text-center text-white pb-8">
              Womens
            </p>
            <ul className="text-center text-white pb-8">
                {rosteredMembers.women.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="column">
            <p className="text-3xl text-center text-white pb-8">
              Mens
            </p>
            <ul className="text-center text-white pb-8">
                {rosteredMembers.men.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
    );
}

export default RosteredMembers;