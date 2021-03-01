import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
const url = "http://localhost:3000/products?";

export const getProducts = (products) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  console.log("action", products);
  axios
    .get(
      `${url}${products.sortBy}_page=${products.getPage}&_limit=${products.pageLimit}`
    )
    .then((response) =>
      /* eslint-disable */
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};

export const getSortedProducts = (sortBy) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SORTED_PRODUCTS, payload: sortBy });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRandomNumbers = () => (dispatch) => {
  try {
    const array = [];
    while (array.length < 40) {
      const element = Math.floor(Math.random() * 1000);
      const result = array.find((item) => item === element);
      if (!result) {
        array.push(element);
      }
    }
    dispatch({ type: actionTypes.CREATE_RANDOM_NUMBERS, payload: array });
  } catch (error) {
    console.log(error.message);
  }
};
export const getEndOfPage = () => (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_END_OF_PAGE });
  } catch (error) {
    console.log(error.message);
  }
};
