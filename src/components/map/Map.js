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
    zoom: 14,
  };

  render() {
    return (
      <div className="row">
        <div style={{height: "80vh", width: "100%"}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={{styles: mapStyles}}
          >
            {this.props.cars &&
              this.props.cars.map((car) => {
                if (!car.Booked) {
                  return (
                    <MapPins
                      key={car.id}
                      lat={car.Lat}
                      lng={car.Long}
                      car={car}
                      showInfo={this.props.showInfo}
                    />
                  );
                }
              })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
