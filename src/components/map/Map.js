import React, {Component} from "react";
import GoogleMapReact, {Polyline} from "google-map-react";
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
    if (this.props.state.lat != null) {
      this.props.startLocation.lat = this.props.state.lat;
      this.props.startLocation.lng = this.props.state.lng;
    }

    if (this.props.state.movieLocation.Location.latitude != null) {
      this.props.endLocation.lat = this.props.state.movieLocation.Location.latitude;
      this.props.endLocation.lng = this.props.state.movieLocation.Location.longitude;
      this.props.center.lat =
        (this.props.state.lat +
          this.props.state.movieLocation.Location.latitude) /
        2;
      this.props.center.lng =
        (this.props.state.lng +
          this.props.state.movieLocation.Location.longitude) /
        2;
    }

    console.log(this.props.state);

    return (
      <div className="row">
        <div style={{height: "60vh", width: "100%"}}>
          {this.props.state.lat != null ? (
            <GoogleMapReact
              bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              options={{styles: mapStyles}}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({map, maps}) =>
                apiIsLoaded(
                  map,
                  maps,
                  this.props.startLocation,
                  this.props.endLocation
                )
              }
            >
              <MapPins lat={this.props.state.lat} lng={this.props.state.lng} />
              <MapPins
                lat={this.props.endLocation.lat}
                lng={this.props.endLocation.lng}
                icon={"movie"}
              />
            </GoogleMapReact>
          ) : null}
        </div>
      </div>
    );
  }
}

const apiIsLoaded = (map, maps, start, end) => {
  if (map) {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    console.log("start", start);
    console.log("end", end);

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: "DRIVING",
      },
      (response, status) => {
        const polyLine = new maps.Polyline({
          path: response.routes[0].overview_path,
          geodesic: true,
          strokeColor: "#00a1e1",
          strokeOpacity: 1.0,
          strokeWeight: 4,
        });
        polyLine.setMap(map);
        console.log(response.routes[0].overview_path);

        if (status === "OK") {
          directionsDisplay.setDirections(response);
          console.log(response.routes);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }
};
