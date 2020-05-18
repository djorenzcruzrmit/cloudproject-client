import React, {Component} from "react";
import GoogleMapReact from "google-map-react";
import mapStyles from "./MapStyle";
import MapPins from "./MapPins";

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: -37.808563,
      lng: 144.963339,
    },
    startLocation: {
      lat: null,
      lng: null,
    },
    endLocation: {
      lat: null,
      lng: null,
    },
    zoom: 11,
  };

  render() {
    const {state, startLocation, endLocation, center} = this.props;

    // checks for valie user lattitude and movie location latitude
    if (state.lat != null && state.movieLocation.Location.latitude != null) {
      // assign start location as user's location
      startLocation.lat = state.lat;
      startLocation.lng = state.lng;
      // assigns end location as cinema's location
      endLocation.lat = state.movieLocation.Location.latitude;
      endLocation.lng = state.movieLocation.Location.longitude;
      // getting the middle of the map for rendering
      center.lat = (state.lat + state.movieLocation.Location.latitude) / 2;
      center.lng = (state.lng + state.movieLocation.Location.longitude) / 2;
    }

    // function to render polyline and show trip information
    function apiIsLoaded(map, maps, user, cinema) {
      if (map) {
        const directionsService = new maps.DirectionsService();
        directionsService.route(
          {
            origin: user,
            destination: cinema,
            travelMode: "DRIVING",
          },
          (response, status) => {
            // draws polyline
            const polyLine = new maps.Polyline({
              path: response.routes[0].overview_path,
              geodesic: true,
              strokeColor: "#369fca",
              strokeOpacity: 1.0,
              strokeWeight: 5,
            });
            polyLine.setMap(map);

            if (status === "OK") {
              // shows user the time and distance to cinema
              var travelTime = response.routes[0].legs[0].duration.text;
              var distance = response.routes[0].legs[0].distance.text;
              window.alert(
                "Coud Movie Finder:\nDistance from your location to the chosen cinema is " +
                  distance +
                  "s\nThis will approximately take " +
                  travelTime +
                  " by car"
              );
            } else {
              window.alert("Directions request failed due to " + status);
            }
          }
        );
      }
    }

    // returns map, pins and polyline to render on screen
    return (
      <div className="row">
        <div style={{height: "60vh", width: "100%"}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
            defaultCenter={center}
            defaultZoom={this.props.zoom}
            options={{styles: mapStyles}}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({map, maps}) =>
              apiIsLoaded(map, maps, startLocation, endLocation)
            }
          >
            <MapPins
              lat={this.props.state.lat}
              lng={this.props.state.lng}
              icon={"pin"}
            />
            <MapPins
              lat={endLocation.lat}
              lng={endLocation.lng}
              icon={"movie"}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
