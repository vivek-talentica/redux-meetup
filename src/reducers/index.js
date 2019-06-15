import { createStore, combineReducers } from "redux";
// import { logger } from "./../middlewares";
import { composeWithDevTools } from "redux-devtools-extension";

const fruitList = (state = [], action) => {
  switch (action.type) {
    case "addFruit": {
      return [...state, action.payload];
    }
    case "updateFruit": {
      const updatedFruit = action.payload;
      const updatedFruitList = state.map(fruit => {
        if (fruit.fruitName === updatedFruit.fruitName) {
          return updatedFruit;
        }
        return fruit;
      });
      return updatedFruitList;
    }
    default: {
      return state;
    }
  }
};

const showAllFruits = (state = true, action) => {
  switch (action.type) {
    case "toggleFruitsVisibility":
      return !state;
    default:
      return state;
  }
};
const composeEnhancer = composeWithDevTools({ trace: true });
export default createStore(
  combineReducers({ fruitList, showAllFruits }),
  composeEnhancer()
);
