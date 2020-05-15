import React, {useState} from "react";
import {connect} from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const {auth, profile} = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  const logoHeader = () => {
    return (
      <div className="container">
        <a href="/" className="brand-logo" style={navStyle}>
          CMFinder
        </a>
        <a
          href="#"
          className="sidenav-trigger right"
          style={navStyle}
          onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        >
          {!isMobileNavOpen ? (
            <i className="material-icons">menu</i>
          ) : (
            <i className="material-icons">close</i>
          )}
        </a>
        <ul className="right hide-on-med-and-down">
          <li>{links}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <nav className="nav-wrapper grey darken-4">
        {logoHeader()}
        <div>
          {isMobileNavOpen && (
            <div className="tabs hide-on-large-only full-length-bar">
              {logoHeader()}

              <p
                className="tab show-on-medium hide-on-small-only"
                style={{paddingTop: 30}}
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {links}
              </p>

              <p
                className="tab show-on-small hide-on-med-and-up"
                style={{paddingTop: 30}}
                onClick={() => setMobileNavOpen(!isMobileNavOpen)}
              >
                {links}
              </p>
            </div>
          )}
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
