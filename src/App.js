import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  createRandomNumbers,
  getProducts,
  pushScrolledPage,
} from "./redux/actions";
import SortNav from "./components/SortNav";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Advertisements from "./components/Advertisements";
let maxScrolled = 0;

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  window.addEventListener("scroll", () => {
    let scrolledArea = Math.ceil(window.scrollY / 700);
    if (maxScrolled < scrolledArea) {
      maxScrolled = scrolledArea;
      dispatch(pushScrolledPage(maxScrolled));
    }
  });
  useEffect(() => {
    dispatch(getProducts(products.sortBy));
    dispatch(createRandomNumbers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addProducts(maxScrolled, products));
  }, [dispatch, maxScrolled]);

  return (
    <div className="App">
      <SortNav />
      <Products />
      <Footer />
      {/* <Advertisements /> */}
    </div>
  );
}

export default App;
