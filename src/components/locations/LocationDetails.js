import React, {Component} from "react";

export default function LocationDetails({locations, movie, setMovieLocation}) {
  if (movie === "") {
    return (
      <div className="center-align">
        <h5>No movie selected</h5>
      </div>
    );
  } else
    return (
      <div className="row">
        {locations &&
          locations.map((location) => {
            const cinema =
              location.id === "Watergardens" ? "HOYTS" : "Village Cinemas";
            const poster =
              cinema == "HOYTS"
                ? "https://cloud-project2020.s3.amazonaws.com/Cinemas/Hoyts.jpg"
                : "https://cloud-project2020.s3.amazonaws.com/Cinemas/VillageCinemas.jpg";
            if (location[movie.Title]) {
              return (
                <div className="col s4">
                  <button
                    className="container card red"
                    style={{opacity: 1}}
                    onClick={() => setMovieLocation(location)}
                  >
                    <img
                      src={poster}
                      style={{height: 50, width: 70, paddingTop: 10}}
                    />
                    <div>{cinema}</div>
                    <div>{location.id}</div>
                  </button>
                </div>
              );
            } else return;
          })}
      </div>
    );
}
