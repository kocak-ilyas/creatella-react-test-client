import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomNumbers, getProducts } from "./redux/actions";
import "./App.css";
import Products from "./components/Products";
import SortNav from "./components/SortNav";
import Advertisements from "./components/Advertisements";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(getProducts(products));
    dispatch(createRandomNumbers());
  }, [dispatch, products.sortBy]);

  return (
    <div className="App">
      <Advertisements />
      <hr />
      <SortNav />
      <Products />
    </div>
  );
}

export default App;
