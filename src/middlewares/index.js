export const thunkMiddleware = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  return next(action);
};

const action = dispatch => {
  fetch("Api").then(data => {
    dispatch({
      type: "recievedData",
      payload: data,
    });
  });
};

store.dispatch(action);
