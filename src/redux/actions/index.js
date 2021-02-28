import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
    // dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsByPrice = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsByPrice();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
    // dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsBySize = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsBySize();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
    // dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getProductsById = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProductsById();
    dispatch({ type: actionTypes.FETCH_PRODUCTS_SUCCESS, payload: data });
    // dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const sortByAction = (data) => (dispatch) => {
  try {
    dispatch({ type: actionTypes.SORT_BY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
