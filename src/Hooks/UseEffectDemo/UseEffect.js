import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useMemo
} from "react";
import Example2 from "../UseStateDemo/UseHooks";

const Example = () => {
  const [state, setState] = useState({ fname: "pranshu", lname: "mishra" });

  useEffect(() => {
    console.log("rendered");
  });

  return (
    <>
      <h4>Enter your first Name</h4>
      <input
        id="fname"
        type="text"
        name="fname"
        value={state.fname}
        onChange={setState}
      />
      <hr />
      <h4>Enter your last name </h4>
      <input type="text" name="lname" value={state.lname} onChange={setState} />
    </>
  );
};

//Component Did mount
// const Example = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You clicked ${count} times`);
//   }, []); // Pass an empty array to run only callback on mount only.

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

//Component did update (loose)

//By passing just the single argument into useEffect, it will run after every render.
//This is a loose equivalent because there's a slight difference here being componentDidUpdate will not run after the first render but this hooks version runs after every render.

// const Example = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`You clicked ${count} times`);
//   }); // No second argument, so run after every render.

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

//Component Did update (strict)
//The difference of this example with the example above is that the callback here would not run on initial render, strictly emulating the semantics of componentDidUpdate.
// This answer is by Tholle, all credit goes to him.

// const Example = () => {
//   const [count, setCount] = useState(0);

//   const firstUpdate = useRef(true);
//   useLayoutEffect(() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false;
//       return;
//     }

//     console.log("componentDidUpdate");
//   });

//   return (
//     <div>
//       <p>componentDidUpdate: {count} times</p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click Me
//       </button>
//     </div>
//   );
// };

//componentWillUnmount
//Return a callback in useEffect's callback argument and it will be called before unmounting.

// const Example = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Return a callback in useEffect and it will be called before unmounting.
//     return () => {
//       console.log("componentWillUnmount!");
//     };
//   }, []);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

//shouldComponentUpdate
//you can achieve this on the component level using React.PureComponent or React.memo. For preventing rerendering of the child components

// const Example = ({ a, b }) => {
//   // Only re-rendered if `a` changes:
//   const child1 = useMemo(() => <Child1 a={a} />, [a]);
//   // Only re-rendered if `b` changes:
//   const child2 = useMemo(() => <Child2 b={b} />, [b]);
//   return (
//     <>
//       {child1}
//       {child2}
//     </>
//   );
// };

// const Child1 = ({ a }) => {
//   return (
//     <div>
//       <h3>{a}</h3>
//     </div>
//   );
// };
// const Child2 = ({ b }) => {
//   return (
//     <div>
//       <h3>{b}</h3>
//     </div>
//   );
// };

//getDerivedStateFromProps
// const Example = ({ row }) => {
//   let [isScrollingDown, setIsScrollingDown] = useState(false);
//   let [prevRow, setPrevRow] = useState(null);

//   if (row !== prevRow) {
//     // Row changed since last render. Update isScrollingDown.
//     setIsScrollingDown(prevRow !== null && row > prevRow);
//     setPrevRow(row);
//   }

//   return `Scrolling down: ${isScrollingDown}`;
// };

//no hook equivalent yet
//componentDidCatch
export default Example;
