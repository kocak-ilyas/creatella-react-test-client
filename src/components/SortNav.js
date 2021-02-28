import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByPrice,
  getProductsBySize,
  getProductsById,
  sortByAction,
} from "../redux/actions";

const SortNav = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.sortByReducer);
  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={
            sortBy === "sortByPrice" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getProductsByPrice());
            dispatch(sortByAction("sortByPrice"));
          }}
        >
          Sort By Price
        </button>
        <button
          type="button"
          className={
            sortBy === "sortBySize" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getProductsBySize());
            dispatch(sortByAction("sortBySize"));
          }}
        >
          Sort By Size
        </button>
        <button
          type="button"
          className={
            sortBy === "sortById" ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getProductsById());
            dispatch(sortByAction("sortById"));
          }}
        >
          Sort By ID
        </button>
      </div>
    </div>
  );
};

export default SortNav;
