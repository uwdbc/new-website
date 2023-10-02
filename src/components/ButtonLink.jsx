import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ children, className, to, href, ...props }) => {
  function getLinkType() {
    const styles =
      "border-gold border-solid border-2 font-medium text-center " + className;
    return to ? (
      <Link className={styles} to={to}>
        {children}
      </Link>
    ) : (
      <a className={styles} href={href}>
        {children}
      </a>
    );
  }
  return <>{getLinkType()}</>;
};

export default ButtonLink;
