import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/dashboard" style={indexColor}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <a onClick={props.signOut} style={indexColor}>
          Log Out
        </a>
      </li>
    </ul>
  );
};

const indexColor = {
  color: "white",
  fontWeight: "bolder",
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
