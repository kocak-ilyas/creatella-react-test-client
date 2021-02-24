import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
