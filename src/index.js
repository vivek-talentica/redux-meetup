import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { fruitListReducer, fruitVisibilityReducer } from "./Reducer/reducer";
import { combineReducers, createStore } from "redux";

const combinedReducer = combineReducers({
  fruitList: fruitListReducer,
  showAllFruits: fruitVisibilityReducer,
});
const store = createStore(combinedReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
