import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import Map from "../map/Map";

class Dashboard extends Component {
  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="LogoPopcorn">
        <div className="container" style={{paddingTop: 40}}>
          <h2 className="">Dashboard</h2>
          <h6>Please search a movie below:</h6>

          <br></br>
          <Map />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  firestoreConnect(() => ["Users"]),
  connect(mapStateToProps)
)(Dashboard);
