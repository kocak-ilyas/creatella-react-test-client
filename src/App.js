import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomNumbers, getProducts } from "./redux/actions";
import SortNav from "./components/SortNav";
import ScrollingPage from "./components/ScrollingPage";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(getProducts(products));
    dispatch(createRandomNumbers());
  }, [dispatch, products.sortBy]);

  return (
    <div className="App">
      <SortNav />
      <ScrollingPage />
    </div>
  );
}

export default App;
