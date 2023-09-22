import React from "react";
import ButtonLink from "./ButtonLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconButtonLink = ({ children, icon, to, ...props }) => {
  return (
    <ButtonLink
      className="block rounded-full h-fit p-2 py-2 m-0 leading-[0]"
      {...props}
    >
      <FontAwesomeIcon icon={icon} className="aspect-square" />
    </ButtonLink>
  );
};

export default IconButtonLink;
