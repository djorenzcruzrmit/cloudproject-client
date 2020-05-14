import React, {Component} from "react";

export default function MovieDetails({movies, setMovie}) {
  return (
    <div className="row">
      {movies &&
        movies.map((movie) => {
          // getting posters from S3 bucket
          const moviePoster =
            "https://cloud-project2020.s3.amazonaws.com/Posters/" +
            movie.Title +
            ".jpg";
          return (
            <div className="col s5 offset-s1">
              <button
                className="container card red"
                style={{opacity: 1}}
                onClick={() => setMovie(movie)}
              >
                <img
                  src={moviePoster}
                  style={{height: 220, width: 150, paddingTop: 20}}
                />
                <div>{movie.Title}</div>
                <div>Rated: {movie.Classification}</div>
                <div>Genre: {movie.Genre}</div>
                <div>Running Time: {movie.RunningTime}</div>
              </button>
            </div>
          );
        })}
    </div>
  );
}
