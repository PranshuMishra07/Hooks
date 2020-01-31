import React, { Component } from "react";
import { MovieProvider } from "./Hooks/UseContextDemo/MovieContext";
import Nav from "./Hooks/UseContextDemo/Nav";
import MovieList from "./Hooks/UseContextDemo/MovieList";
import AddMovie from "./Hooks/UseContextDemo/AddMovie";
import Example1 from "./Hooks/UseStateDemo/UsingClassComp";
import Example2 from "./Hooks/UseStateDemo/UseHooks";
import Example3 from "./Hooks/UseEffectDemo/UseEffect";
import Counter from "./Hooks/UseReducers/Counter";
import CounterUseCallBack from "./Hooks/UseCallBack/UseCallBackDemo";
import Example4 from "./Hooks/CustomHook/CustomHooks";

const App = () => {
  return (
    <div>
      <Example1 />
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Counter /> */}
      {/* <CounterUseCallBack /> */}
    </div>
  );
};
// const App = () => {
//   return (
//     <MovieProvider>
//       {/*we need to wrapper all the component which need to be get the data from context api */}
//       <div>
//         <Nav />
//         {/* Problem arises here as we have no mean to access no of movie in nav ,one solution we can think
//        of is the lisfting state up ,but that requires lot of rearrangemnts of code*/}
//         <MovieList />
//         <AddMovie />
//       </div>
//     </MovieProvider>
//   );
// };
export default App;
