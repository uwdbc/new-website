import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, ...props }) => {
  return (
    <Link
      className="border-gold border-solid border-2 py-3 w-64 font-medium text-center"
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
