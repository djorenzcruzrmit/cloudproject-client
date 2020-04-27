import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import Map from "../map/Map";
import MapPins from "../map/MapPins";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.getPosition);
  }

  getPosition(position) {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  render() {
    const {auth} = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    console.log(this.state);
    return (
      <div className="LogoPopcorn">
        <div className="container" style={{paddingTop: 40}}>
          <h2 className="">Dashboard</h2>

          <button onClick={this.getLocation}>Get Current Location</button>
          <h6>Please search a movie below:</h6>
          <br></br>
          <Map state={this.state} />
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
