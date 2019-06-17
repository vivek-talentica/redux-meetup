import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Reducer } from "./Reducer/reducer";

export const store = createStore(Reducer);
console.log(store);

ReactDOM.render(<App />, document.getElementById("root"));

// import { fruitListReducer, fruitVisibilityReducer } from "./Reducer/reducer";
// let Reducer = (state = {}, action) => {
//   return {
//     fruitList: fruitListReducer(state.fruitList, action),
//     fruitVisibility: fruitVisibilityReducer(state.fruitVisibility, action),
//   };
// };
