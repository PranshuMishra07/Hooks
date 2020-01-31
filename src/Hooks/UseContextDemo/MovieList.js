import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = props => {
  const [movie, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movie.map(movie => {
        return <Movie key={movie.id} name={movie.name} price={movie.price} />;
      })}
    </div>
  );
};

export default MovieList;
