import React from "react";
import { useDispatch } from "react-redux";
import { pushScrolledPage } from "../redux/actions";
import Advertisements from "./Advertisements";
import Footer from "./Footer";
import Products from "./Products";
var maxScrolled = 0;

const ScrollingPage = () => {
  const dispatch = useDispatch();
  window.addEventListener("scroll", () => {
    let scrolledPage = Math.ceil(window.scrollY / 1150);
    if (maxScrolled < scrolledPage) {
      maxScrolled = scrolledPage;
      dispatch(pushScrolledPage(maxScrolled));
    }
  });
  return (
    <div>
      <h3>Scrooling</h3>
      <Advertisements />
      <Products />
      <Footer />
    </div>
  );
};
export default ScrollingPage;
