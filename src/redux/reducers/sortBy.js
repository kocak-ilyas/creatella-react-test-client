import * as actionTypes from "../constants/actionTypes";

export const sortByReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SORT_BY:
      return action.payload;
    default:
      return state;
  }
};
