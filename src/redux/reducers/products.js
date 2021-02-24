import * as actionTypes from "../constants/actionTypes";
// import * as initialState from "./initialState";

export const productsReducer = (state = [], action) => {
  // export const productsReducer = (state = initialState.productsState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
