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
    zoom: 15,
  };

  render() {
    if (this.props.state.lat != null) {
      this.props.center.lat = this.props.state.lat;
      this.props.center.lng = this.props.state.lng;
    }

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
              //onGoogleApiLoaded={({map, maps}) => apiIsLoaded(map, maps)}
            >
              <MapPins lat={this.props.state.lat} lng={this.props.state.lng} />
            </GoogleMapReact>
          ) : null}
        </div>
      </div>
    );
  }
}

const apiIsLoaded = (map, maps) => {
  if (map) {
    const directionsService = new maps.DirectionsService();
    const directionsDisplay = new maps.DirectionsRenderer();
    const polyLine = new maps.Polyline();
    directionsService.route(
      {
        origin: "-37.865032, 144.658564",
        destination: "-37.875119, 144.680511",
        travelMode: "DRIVING",
      },
      (response, status) => {
        console.log("response:" + response);
        console.log("status" + status);
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
