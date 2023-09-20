import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, className, ...props }) => {
  return (
    <Link
      className={
        "border-gold border-solid border-2 py-3 font-medium text-center inline-block " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
