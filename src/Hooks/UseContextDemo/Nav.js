import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movie, setMovie] = useContext(MovieContext);
  return (
    <div>
      <h4> Pranshu </h4>
      <p>List of Movie :{movie.length}</p>
    </div>
  );
};

export default Nav;
