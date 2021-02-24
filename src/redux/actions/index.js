import * as actionTypes from "../constants/actionTypes";
import * as api from "../../api";
// import { useSelector } from "react-redux";

export const getProducts = () => async (dispatch) => {
  try {
    const url = `http://localhost:3000/products`;
    // const url = useSelector((state) => `http://localhost:3000/products${state.sortByReducer}`);

    const { data } = await api.fetchProducts(url);
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: data });
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
