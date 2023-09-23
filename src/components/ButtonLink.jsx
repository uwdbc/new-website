import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, className, to, href, ...props }) => {
  return (
    <>
      {to ? (
        <Link
          className={
            "border-gold border-solid border-2 font-medium text-center " +
            className
          }
          to={to}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className={
            "border-gold border-solid border-2 font-medium text-center " +
            className
          }
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ButtonLink;
