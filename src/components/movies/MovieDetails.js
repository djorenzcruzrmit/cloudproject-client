import React, {Component} from "react";

export default function MovieDetails({movies, setMovie}) {
  return (
    <div className="col s8 offset-s2">
      {movies &&
        movies.map((movie) => {
          return (
            <button
              className="container card red"
              style={{opacity: 1}}
              onClick={() => setMovie(movie)}
            >
              <div>{movie.Title}</div>
              <div>Rated: {movie.Classification}</div>
              <div>Genre: {movie.Genre}</div>
              <div>Running Time: {movie.RunningTime}</div>
            </button>
          );
        })}
    </div>
  );
}
