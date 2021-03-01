import React from "react";
import { getEndOfPage } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const reachedEndOfProducts = useSelector(
    (state) => state.productsReducer.reachedEndOfProducts
  );

  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (!reachedEndOfProducts && Math.ceil(scrolled) === scrollable) {
      dispatch(getEndOfPage());
    }
  });
  return (
    <div>
      {reachedEndOfProducts ? (
        <p className="text-center text-light bg-dark">~ end of catalogue ~</p>
      ) : null}
    </div>
  );
};

export default Footer;
