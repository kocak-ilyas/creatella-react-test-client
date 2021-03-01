import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSortedProducts } from "../redux/actions";

const SortNav = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.productsReducer.sortBy);
  const sortElements = {
    sortByPrice: "_sort=price&",
    sortBySize: "_sort=size&",
    sortById: "_sort=id&",
  };

  return (
    <div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={
            sortBy === "_sort=price&"
              ? "btn btn-primary"
              : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getSortedProducts(sortElements.sortByPrice));
          }}
        >
          Sort By Price
        </button>
        <button
          type="button"
          className={
            sortBy === "_sort=size&"
              ? "btn btn-primary"
              : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getSortedProducts(sortElements.sortBySize));
          }}
        >
          Sort By Size
        </button>
        <button
          type="button"
          className={
            sortBy === "_sort=id&"
              ? "btn btn-primary"
              : "btn btn-secondary"
          }
          onClick={() => {
            dispatch(getSortedProducts(sortElements.sortById));
          }}
        >
          Sort By ID
        </button>
      </div>
    </div>
  );
};

export default SortNav;
