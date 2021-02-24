import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions";
import "./App.css";
import Products from "./components/Products";
import SortNav from "./components/SortNav";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <SortNav />
      <Products />
    </div>
  );
}

export default App;
