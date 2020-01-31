//This hook is useful when you have a component with a child frequently re-rendering, and you pass a callback to it:

// import React, { useState, useCallback } from "react";

// const functionsCounter = new Set();

// const CounterUseCallBack = () => {
//   const [count, setCount] = useState(0);
//   const [otherCounter, setOtherCounter] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   const incrementOtherCounter = () => {
//     setOtherCounter(otherCounter + 1);
//   };

//   functionsCounter.add(increment);
//   functionsCounter.add(decrement);
//   functionsCounter.add(incrementOtherCounter);

//   alert(functionsCounter.size);

//   return (
//     <>
//       Count: {count}
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
//     </>
//   );
// };

//Problem here is
//What should happen instead it’s that if you increment one counter, all functions related to that counter should be re-instantiated.
//If another state value is unchanged, it should not be touched

//Now, in most cases this is not a huge problem unless you are passing lots of different functions, all changing unrelated bits of data, that are proven to be a big cost for your app performance

// const { useState, useCallback } = React

import React, { useState, useCallback } from "react";
const functionsCounter = new Set();

const CounterUseCallBack = () => {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  /*
  const increment = (() => {
    setCount(count + 1)
  })
  const decrement = (() => {
    setCount(count - 1)
  })
  const incrementOtherCounter = (() => {
    setOtherCounter(otherCounter + 1)
  })
  */

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);

  alert(functionsCounter.size);

  return (
    <>
      Count: {count}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </>
  );
};

export default CounterUseCallBack;
