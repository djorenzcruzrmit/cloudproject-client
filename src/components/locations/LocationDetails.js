import React, {Component} from "react";

export default function LocationDetails({locations, movie, setMovieLocation}) {
  return (
    <div>
      {locations &&
        locations.map((locations) => {
          if (locations.hasOwnProperty(movie.Title)) {
            return (
              <button
                className="container card red"
                style={{opacity: 1}}
                onClick={() => setMovieLocation(locations)}
              >
                <div>{locations.id}</div>
                <div>
                  {locations.Location.latitude} {locations.Location.longitude}
                </div>
              </button>
            );
          } else return;
        })}
    </div>
  );
}
