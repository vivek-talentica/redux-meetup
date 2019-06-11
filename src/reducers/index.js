import { createStore, combineReducers } from "redux";
// import { logger } from "./../middlewares";

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

export default createStore(combineReducers({ fruitList, showAllFruits }));
