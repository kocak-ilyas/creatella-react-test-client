import React from "react";
import { useDispatch } from "react-redux";
import { sortByAction } from "../redux/actions";

const SortNav = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="tags">
        <button
          className=""
          onClick={() => {
            dispatch(sortByAction("?_sort=size"));
          }}
        >
          Sort By Size
        </button>
      </div>{" "}
    </div>
  );
};

export default SortNav;
