//Simple exmaple
import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={() => dispatch("increment")}>Increment </button>
      <button onClick={() => dispatch("decrement")}>Decrement </button>
      <button onClick={() => dispatch("reset")}>Reset </button>
    </div>
  );
}

export default Counter;

//using Reudx structure
//instead of using simple state and action here we are going to use bit complex state and action object
