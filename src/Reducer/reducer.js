export const fruitListReducer = (state = [], action) => {
  debugger;
  switch (action.type) {
    case "addFruit":
      return [...state, action.payload];

    case "updateFruit": {
      let updatedFruit = action.payload;
      let updatedList = state.map(fruit => {
        if (fruit.fruitName === updatedFruit.fruitName) {
          return updatedFruit;
        }
        return fruit;
      });
      return updatedList;
    }
    default:
      return state;
  }
};

export const fruitVisibilityReducer = (state = true, action) => {
  switch (action.type) {
    case "toggleVisibility": {
      return !state;
    }
    default:
      return state;
  }
};
