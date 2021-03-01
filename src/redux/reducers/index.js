import { combineReducers } from "redux";
import { productsReducer } from "./products";

const rootReducers = combineReducers({
  productsReducer,
});
export default rootReducers;
