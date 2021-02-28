import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsByPrice = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  try {
    const { data } = await api.fetchProductsByPrice();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsBySize = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  try {
    const { data } = await api.fetchProductsBySize();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsById = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PRODUCTS_START });
  try {
    const { data } = await api.fetchProductsById();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sortByAction = (data) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.SORT_BY_BUTTON, payload: data });
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
