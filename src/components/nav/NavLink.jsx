import { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-lg font-medium hover:opacity-70 transition-all duration-200 block"
    >
      {children}
    </Link>
  );
};

export default NavLink;
