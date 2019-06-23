export const fruitListReducer = (state = [], action) => {
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

export const showAllFruitsReducer = (state = true, action) => {
  switch (action.type) {
    case "toggleFruitsVisibility":
      return !state;
    default:
      return state;
  }
};
