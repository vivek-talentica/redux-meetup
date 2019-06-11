import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./reducers";
import { Provider } from "react-redux";
const logMyAction = action => console.log("In Logger", JSON.stringify(action));
const sendToGoogleAnalytics = action =>
  console.log("In analytics", JSON.stringify(action));
// const validateAction = action =>
//   console.log("In validate", JSON.stringify(action));

// let orignalDispatch = store.dispatch;
// store.dispatch = action => {
//   // These functions are middleware
//   logMyAction(action);
//   orignalDispatch(action);
// };

// let dispatch2 = store.dispatch;
// store.dispatch = action => {
//   sendToGoogleAnalytics(action);
//   dispatch2(action);
// };

// let dispatch3 = store.dispatch;
// store.dispatch = action => {
//   validateAction(action);
//   dispatch3(action);
// };

// const loggerMiddleware = store => updatedDispatch => action => {
//   logMyAction(action);
//   return updatedDispatch(action);
// };

// const analyticsMiddleware = store => updatedDispatch => action => {
//   sendToGoogleAnalytics(action);
//   return updatedDispatch(action);
// };

// const applyMiddleware = (store, middlewares) => {
//   middlewares.forEach(middleware => {
//     const next = store.dispatch;
//     store.dispatch = middleware(store)(next);
//   });
// };

// applyMiddleware(store, [loggerMiddleware, analyticsMiddleware]);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
