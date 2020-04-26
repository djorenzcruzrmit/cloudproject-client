import React from "react";
import {NavLink} from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/" style={indexColor}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" style={indexColor}>
          Join Now
        </NavLink>
      </li>
      <li>
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
