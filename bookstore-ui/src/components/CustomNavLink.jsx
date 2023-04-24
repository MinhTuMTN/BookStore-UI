import React from "react";
import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none", color: "black" }}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
