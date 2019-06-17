let defaultState = { fruitList: [], fruitVisibility: true };

export const Reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "addFruit":
      return { ...state, fruitList: [...state.fruitList, action.payload] };

    case "updateFruit": {
      let updatedFruit = action.payload;
      let updatedList = state.fruitList.map(fruit => {
        if (fruit.fruitName === updatedFruit.fruitName) {
          return updatedFruit;
        }
        return fruit;
      });
      return { ...state, fruitList: updatedList };
    }

    case "toggleVisibility": {
      return { ...state, fruitVisibility: !state.fruitVisibility };
    }
    default:
      return state;
  }
};

// export const Reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "addFruit":
//       return { ...state, fruitList: [...state.fruitList, action.payload] };

//     case "updateFruit": {
//       let updatedFruit = action.payload;
//       let updatedList = state.fruitList.map(fruit => {
//         if (fruit.fruitName === updatedFruit.fruitName) {
//           return updatedFruit;
//         }
//         return fruit;
//       });
//       return { ...state, fruitList: updatedList };
//     }

//     case "toggleVisibility": {
//       return { ...state, fruitVisibility: !state.fruitVisibility };
//     }
//     default:
//       return state;
//   }
// };

// export const Reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case "addFruit":
//       return { ...state, fruitList: [...state.fruitList, action.payload] };

//     case "updateFruit": {
//       let updatedFruit = action.payload;
//       let updatedList = state.fruitList.map(fruit => {
//         if (fruit.fruitName === updatedFruit.fruitName) {
//           return updatedFruit;
//         }
//         return fruit;
//       });
//       return { ...state, fruitList: updatedList };
//     }

//     case "toggleVisibility": {
//       return { ...state, fruitVisibility: !state.fruitVisibility };
//     }

//     default:
//       return state;
//   }
// };

// export const fruitListReducer = (state = [], action) => {
//   switch (action.type) {
//     case "addFruit":
//       return [...state, action.payload];

//     case "updateFruit": {
//       let updatedFruit = action.payload;
//       let updatedList = state.map(fruit => {
//         if (fruit.fruitName === updatedFruit.fruitName) {
//           return updatedFruit;
//         }
//         return fruit;
//       });
//       return updatedList;
//     }
//     default:
//       return state;
//   }
// };

// export const fruitVisibilityReducer = (state = true, action) => {
//   switch (action.type) {
//     case "toggleVisibility": {
//       return !state;
//     }
//     default:
//       return state;
//   }
// };
