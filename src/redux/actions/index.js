import * as actionTypes from "../constants/actionTypes";
import axios from "axios";

export const getProducts = (sortBy) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  axios
    .get(`http://localhost:3000/products?${sortBy}_page=1&_limit=$20`)
    .then((response) =>
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};
export const addProducts = (maxScrolled, products) => (dispatch) => {
  if (maxScrolled > 0 && maxScrolled < 25) {
    axios
      .get(
        `http://localhost:3000/products?${products.sortBy}_page=${
          maxScrolled + 1
        }&_limit=20`
      )
      .then((response) =>
        // eslint-disable-next-line no-unused-expressions
        dispatch({
          type: actionTypes.ADD_PRODUCTS,
          payload: response.data,
        })
      )
      .catch((error) => console.log(error));
  }
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
      // eslint-disable-next-line no-unused-expressions
      !result ? array.push(element) : null;
    }
    dispatch({ type: actionTypes.CREATE_RANDOM_NUMBERS, payload: array });
  } catch (error) {
    console.log(error.message);
  }
};

export const pushScrolledPage = (maxScrolled) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.PUSH_SCROLLED_PAGE, payload: maxScrolled });
  } catch (error) {
    console.log(error.message);
  }
};
