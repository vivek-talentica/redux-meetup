import { fruitListReducer, fruitVisibilityReducer } from "./reducer";
import { combineReducers } from "redux";

export default combineReducers({
  fruitList: fruitListReducer,
  showAllFruits: fruitVisibilityReducer,
});
