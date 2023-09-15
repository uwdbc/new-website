import { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      className="text-lg font-medium hover:text-gold transition duration-200 block"
    >
      {children}
    </Link>
  );
};

export default NavLink;
