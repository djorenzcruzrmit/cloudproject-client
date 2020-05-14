import React from "react";

const MapPins = ({lat, long, icon}) => {
  if (icon === "movie") {
    return (
      <div>
        <i className="material-icons icon-white">movie</i>
      </div>
    );
  } else
    return (
      <div>
        <i className="material-icons icon-white">location_on</i>
      </div>
    );
};

export default MapPins;
