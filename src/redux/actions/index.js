import * as actionTypes from "../constants/actionTypes";
import axios from "axios";
const url = "http://localhost:3000/products?";
// const url = "http://localhost:3000/products";

export const getProducts = (products) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  axios
    .get(
      `${url}${products.sortBy}_page=${products.getPage}&_limit=${products.pageLimit}`
      // url
    )
    .then((response) =>
      dispatch({
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      })
    )
    .catch((error) => console.log(error));
};
export const addProducts = (products) => (dispatch) => {
  console.log("addActions", products);
  // axios
  //   .get(
  //     `${url}${products.sortBy}_page=${products.getPage}&_limit=${products.pageLimit}`
  //   )
  //   .then((response) =>
  //     /* eslint-disable */
  //     dispatch({
  //       type: actionTypes.ADD_PRODUCTS,
  //       payload: response.data,
  //     })
  //   )
  //   .catch((error) => console.log(error));
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

export const pushScrolledPage = (scrollY) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.PUSH_SCROLLED_PAGE, payload: scrollY });
  } catch (error) {
    console.log(error.message);
  }
};
