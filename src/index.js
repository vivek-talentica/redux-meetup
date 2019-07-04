import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import combinedReducer from "./Reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(combinedReducer, composeWithDevTools());

if (module.hot) {
  module.hot.accept("./Reducer/index", () => {
    const nextRootReducer = require("./Reducer/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
