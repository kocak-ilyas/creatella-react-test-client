import { combineReducers } from "redux";
import { productsReducer } from "./products";
import { sortByReducer } from "./sortBy";

const rootReducers = combineReducers({
  productsReducer,
  sortByReducer,
});
export default rootReducers;
