import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {firestoreConnect, firebaseConnect} from "react-redux-firebase";
import {compose} from "redux";
import Map from "../map/Map";
import MovieDetails from "../movies/MovieDetails";
import LocationDetails from "../locations/LocationDetails";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      lng: null,
      movie: "",
      movieLocation: "",
    };
    this.getLocation = this.getLocation.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getError = this.getError.bind(this);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(this.getPosition, this.getError);
  }

  getPosition(position) {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  getError(error) {
    if (error.PERMISSION_DENIED) {
      window.alert("Please give your browser location access.");
    } else if (error.POSITION_UNAVAILABLE) {
      window.alert("Location information is unavailable.");
    } else {
      window.alert("An unknown error occurred.");
    }
  }

  setMovie = (movie) => {
    this.setState({movie});
    this.getLocation();
  };

  setMovieLocation = (locations) => {
    this.setState({movieLocation: locations});
  };

  render() {
    const {auth, profile, locations, movies, poster} = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="LogoPopcorn">
        <div className="container grey lighten-2" style={{opacity: 0.9}}>
          <h2 className="center-align" style={topPad}>
            Now Showing
          </h2>
          <h5 className="center-align">
            Please choose a movie you would like to watch:
          </h5>
          <div className="row">
            <MovieDetails movies={movies} setMovie={this.setMovie} />
          </div>
        </div>

        <div className="container grey lighten-2" style={{opacity: 0.9}}>
          <h2 className="center-align" style={topPad}>
            Available Locations
          </h2>
          <div className="row container">
            <LocationDetails
              locations={locations}
              movie={this.state.movie}
              setMovieLocation={this.setMovieLocation}
            />
          </div>
        </div>
        {this.state.movieLocation !== "" ? (
          <div className="container grey lighten-2">
            <h2 className="center-align" style={topPad}>
              Directions
            </h2>
            <Map state={this.state} />
          </div>
        ) : null}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

const topPad = {
  paddingTop: 20,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    movies: state.firestore.ordered.Movies,
    locations: state.firestore.ordered.Locations,
    profile: state.firebase.profile,
    poster: state.firestore,
  };
};

export default compose(
  firestoreConnect(() => ["Movies"]),
  firestoreConnect(() => ["Locations"]),
  firestoreConnect(["Posters"]),
  connect(mapStateToProps)
)(Dashboard);
