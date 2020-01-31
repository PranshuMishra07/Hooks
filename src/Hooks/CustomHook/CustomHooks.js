import React, { useState, useEffect, useCallback } from "react";

const Example4 = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => setcounter(counter + 1);
  useEffect(() => {
    document.title = `you clicked ${counter} times`;
  }, [counter]);

  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={increment}>Click here </button>
    </div>
  );
};

// // achieving the same things using custom hooks

// const useDocumentTitle = title => {
//   useEffect(() => {
//     document.title = title;
//   }, [title]);
// };

// const Example4 = () => {
//   const [counter, setcounter] = useState(0);
//   const increment = () => setcounter(counter + 1);
//   const title = `You clicked ${counter} times`;
//   useDocumentTitle(title);
//   return (
//     <div>
//       <h3>{counter}</h3>
//       <button onClick={increment}>Click here </button>
//     </div>
//   );
// };

// const useArray = initial => {
//   const [value, setvalue] = useState(initial);
//   return {
//     value,
//     setvalue,
//     add: useCallback(a => setvalue(v => [...v, a])),
//     clear: useCallback(() => setvalue(() => [])),
//     delete: useCallback(id =>
//       setvalue(arr => arr.filter(v => v && v.id !== id))
//     ),
//     removeindex: useCallback(index =>
//       setvalue(v => {
//         v.splice(index, 1);
//         return v;
//       })
//     )
//   };
// };

// export const Todo = () => {
//   const todos = useArray(["pranshu", "shubhang", "varun", "kapil", "saket"]);
//   return (
//     <div>
//       <h3>To do operation</h3>
//       <button onClick={todos.add(Math.random())} Add>
//         {" "}
//       </button>
//       <ul>
//         {todos.value.map((todo, i) => (
//           <li key={i}>
//             {todo}
//             <button onClick={() => todos.removeindex(i)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={todos.clear}>Clear</button>
//     </div>
//   );
// };

export default Example4;
