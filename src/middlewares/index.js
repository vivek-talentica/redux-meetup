export const logger = ({ dispatch, getState }) => next => action => {
  console.log(JSON.stringify(action));
  return next(action);
};
