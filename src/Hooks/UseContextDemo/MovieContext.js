import React, { useState, createContext } from "react";

export const MovieContext = createContext(); //creating context

export const MovieProvider = props => {
  // data which need to be shared
  const [movies, setMovies] = useState([
    {
      name: "Game of Thrones",
      price: 10,
      id: 2313
    },
    {
      name: "Breaking Bad",
      price: 9,
      id: 2312
    },
    {
      name: "Narcos",
      price: 8,
      id: 2311
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {/* we need to use  context here*/}
      {props.children}
    </MovieContext.Provider>
  );
};
