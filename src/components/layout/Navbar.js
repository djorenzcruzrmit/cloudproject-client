import React from "react";
import {connect} from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <div>
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <a href="/" className="brand-logo" style={navStyle}>
            FINDMOVIES
          </a>
          <a href="#" className="sidenav-trigger right" style={navStyle}>
            <i className="material-icons"></i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>{links}</li>
          </ul>
        </div>
        <div>
          <ul className="tabs hide-on-large-only">
            <li
              className="tab show-on-medium hide-on-small-only"
              style={{paddingRight: "33%"}}
            >
              {links}
            </li>
            <li
              className="tab show-on-small hide-on-med-and-up"
              style={{paddingRight: "20%"}}
            >
              {links}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const navStyle = {
  color: "white",
  fontWeight: "bolder",
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
