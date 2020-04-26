import React from "react";

const MapPins = ({car, showInfo}) => {
  return (
    <div>
      <button
        onClick={() => {
          showInfo(car);
        }}
        className="material-icons waves-effect waves-teal btn-flat btn-tiny icon-white"
      >
        directions_car
      </button>
    </div>
  );
};

export default MapPins;
