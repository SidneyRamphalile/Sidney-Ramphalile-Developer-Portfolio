import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  const handleNavLinkClick = () => {
    if (onClose) {
      onClose(); // Call onClose function to close the menu
    }
  };

  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
