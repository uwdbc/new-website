import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, className, to, href, ...props }) => {
  return (
    <>
      {to ? (
        <Link
          className={
            className +
            " border-gold border-solid border-2 py-3 font-medium text-center inline-block"
          }
          {...props}
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className={
            className +
            " border-gold border-solid border-2 py-3 font-medium text-center inline-block"
          }
        >
          {children}
        </a>
      )}
    </>
  );
};

export default ButtonLink;
