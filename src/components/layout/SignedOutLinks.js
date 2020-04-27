import React from "react";
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li className="nav-links">
        <NavLink to="/" style={indexColor}>
          Home
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/signup" style={indexColor}>
          Join Now
        </NavLink>
      </li>
      <li className="nav-links">
        <NavLink to="/signin" style={indexColor}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

const indexColor = {
  color: "white",
  fontWeight: "bolder",
};

export default SignedOutLinks;
