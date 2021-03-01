import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProducts, pushScrolledPage } from "../redux/actions";
import Advertisements from "./Advertisements";
import Footer from "./Footer";
import Products from "./Products";
var maxScrolled = 0;

const ScrollingPage = () => {
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    let scrolledArea = Math.ceil(window.scrollY / 1150);
    if (maxScrolled < scrolledArea) {
      maxScrolled = scrolledArea;
      dispatch(pushScrolledPage(maxScrolled));
    }
  });

  const scrolledPage = useSelector(
    (state) => state.productsReducer.scrolledPage
  );

  // eslint-disable-next-line no-unused-expressions
  // scrolledPage === maxScrolled  ?  dispatch(addProducts(scrolledPage))  :  null
  return (
    <div>
      {/* <h3>Scrooling</h3> */}
      {/* <Advertisements /> */}
      <Products />
      <Footer />
    </div>
  );
};
export default ScrollingPage;
