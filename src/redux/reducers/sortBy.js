import * as actionTypes from "../constants/actionTypes";

export const sortByReducer = (state = "random", action) => {
  switch (action.type) {
    case actionTypes.SORT_BY_BUTTON:
      return action.payload;
    default:
      return state;
  }
};
