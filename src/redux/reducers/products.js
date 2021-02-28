import * as actionTypes from "../constants/actionTypes";
import * as initialState from "./initialState";

export const productsReducer = (state = initialState.productsState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true, message: "" };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, productsTable: action.payload, isLoading: false };
    case actionTypes.FETCH_PRODUCTS_ERROR:
      return { ...state, message: action.payload, isLoading: false };
    default:
      return state;
  }
};

// export const productsReducer = (state = [], action) => {
//   switch (action.type) {
//     case actionTypes.FETCH_PRODUCTS:
//       return action.payload;
//     default:
//       return state;
//   }
// };
